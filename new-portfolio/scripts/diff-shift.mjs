// Find the pixel shift between Figma and site inside regions of a diff block.
//   node scripts/diff-shift.mjs <block> x,y,w,h [x,y,w,h ...]
// Prints the error at 0 and the best (dx, dy) within ±3px — e.g. "best 0 -1" = site is 1px higher.
import { PNG } from 'pngjs'; import fs from 'node:fs';
const [,, block, ...regs] = process.argv;
const f = PNG.sync.read(fs.readFileSync(`.pixel-diff/${block}/figma.png`)), s = PNG.sync.read(fs.readFileSync(`.pixel-diff/${block}/site.png`));
const lum = (p, x, y) => { const i = (y * p.width + x) * 4; return p.data[i] * .3 + p.data[i + 1] * .59 + p.data[i + 2] * .11; };
for (const reg of regs) { const [x0, y0, w, h] = reg.split(',').map(Number); let best = [1e12], e0;
  for (let dx = -3; dx <= 3; dx++) for (let dy = -3; dy <= 3; dy++) { let e = 0; for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) e += Math.abs(lum(f, x, y) - lum(s, x + dx, y + dy)); if (!dx && !dy) e0 = e; if (e < best[0]) best = [e, dx, dy]; }
  console.log(reg, 'err0', (e0 / (w * h)).toFixed(2), 'best', best[1], best[2], (best[0] / (w * h)).toFixed(2)); }
