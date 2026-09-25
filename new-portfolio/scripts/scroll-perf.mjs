// Scroll paint cost: Chrome trace of a full-page scroll at DPR 2, with CSS variants
// that switch suspects off. Compare "total" (mostly RasterTask) between rows.
//   node scripts/scroll-perf.mjs   (dev server running)
import { chromium } from 'playwright';
import fs from 'node:fs';
const b = await chromium.launch();
const variants = {
  baseline: '',
  'png tile': '.cell--hatch,.contacts__texture{background:url(/images/hatch-tile.png) 0 0/220px 220px repeat!important}',
  'no navbar blur': '.navbar{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}',
  'no screens': '.screen{visibility:hidden!important}',
  'no photos/cards img': 'img{visibility:hidden!important}',
  'no box-shadows': '*{box-shadow:none!important}',
  'no hatch': '.cell--hatch,.contacts__texture{background:none!important}',
  'no tiles': '.tile{display:none!important}',
  'no text': '*{color:transparent!important;-webkit-text-stroke:0!important}',
  'no inline svgs': '.inline-svg{visibility:hidden!important}',
};
for (const [name, css] of Object.entries(variants)) {
  const ctx = await b.newContext({ viewport: { width: 1728, height: 1000 }, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4321/'); await p.addStyleTag({ content: css + 'astro-dev-toolbar{display:none!important}' });
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(800);
  const cdp = await ctx.newCDPSession(p);
  const events = [];
  cdp.on('Tracing.dataCollected', (e) => events.push(...e.value));
  const done = new Promise((r) => cdp.once('Tracing.tracingComplete', r));
  await cdp.send('Tracing.start', { categories: 'devtools.timeline,disabled-by-default-devtools.timeline', transferMode: 'ReportEvents' });
  await p.evaluate(() => new Promise((res) => { const max = document.documentElement.scrollHeight - innerHeight; let y = 0; const step = () => { y += 30; scrollTo(0, y); if (y < max) requestAnimationFrame(step); else res(); }; requestAnimationFrame(step); }));
  await cdp.send('Tracing.end'); await done;
  const sum = {}; for (const e of events) if (e.ph === 'X' && ['Paint', 'RasterTask', 'UpdateLayerTree', 'Layout', 'PrePaint', 'Layerize', 'RecalcStyles', 'UpdateLayer'].includes(e.name)) sum[e.name] = (sum[e.name] || 0) + e.dur / 1000;
  const total = Object.values(sum).reduce((a, b) => a + b, 0);
  console.log(name.padEnd(26), 'total', total.toFixed(0) + 'ms', Object.entries(sum).map(([k, v]) => k + ':' + v.toFixed(0)).join(' '));
  await ctx.close();
}
await b.close();
