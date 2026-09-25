// Export Figma nodes to files through the REST API.
//
//   node scripts/figma-export.mjs <nodeId>=<path>[@scale] ...
//   node scripts/figma-export.mjs "784:629806=public/images/widgets/pixels.svg" "553:617972=public/images/widgets/photos.png@3"
//
// The format comes from the file extension (png, jpg, svg, pdf); the default scale is 2.
// Export uses the node's own box (use_absolute_bounds), so the image lines up with the layer 1:1.
// Token: FIGMA_TOKEN, or FIGMA_ACCESS_TOKEN from the Claude desktop MCP config.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import { dirname, extname, join } from 'node:path';

const FILE_KEY = process.env.FIGMA_FILE_KEY ?? 'S4ITLt1j77fs95s5DyGX1u';

async function token() {
  if (process.env.FIGMA_TOKEN) return process.env.FIGMA_TOKEN;
  const cfg = await readFile(join(homedir(), 'Library/Application Support/Claude/claude_desktop_config.json'), 'utf8');
  const m = cfg.match(/"FIGMA_ACCESS_TOKEN"\s*:\s*"([^"]+)"/);
  if (!m) throw new Error('No Figma token: set FIGMA_TOKEN');
  return m[1];
}

const jobs = process.argv.slice(2).map((arg) => {
  const [id, rest] = arg.split('=');
  const [path, scale = '2'] = rest.split('@');
  return { id, path, scale: Number(scale), format: extname(path).slice(1).toLowerCase() };
});
if (!jobs.length) throw new Error('Usage: node scripts/figma-export.mjs <nodeId>=<path>[@scale] ...');

const headers = { 'X-Figma-Token': await token() };
const groups = Map.groupBy(jobs, (j) => `${j.format}@${j.scale}`);

for (const [, group] of groups) {
  const { format, scale } = group[0];
  const params = new URLSearchParams({
    ids: group.map((j) => j.id).join(','),
    format,
    scale: String(scale),
    use_absolute_bounds: 'true',
    svg_outline_text: 'true',
    svg_include_id: 'false',
  });
  let res;
  for (let attempt = 0; ; attempt++) {
    res = await fetch(`https://api.figma.com/v1/images/${FILE_KEY}?${params}`, { headers });
    if (res.status !== 429 || attempt === 4) break;
    const wait = Number(res.headers.get('retry-after')) || 15 * (attempt + 1);
    if (wait > 120) {
      throw new Error(`Figma API rate limit (${res.headers.get('x-figma-plan-tier')} plan): retry in ${(wait / 3600).toFixed(1)}h. Export through the Desktop Bridge instead (see snippets.md "bridge export").`);
    }
    console.log(`Rate limited, retrying in ${wait}s…`);
    await new Promise((r) => setTimeout(r, wait * 1000));
  }
  const body = await res.json();
  if (!res.ok || body.err) throw new Error(`Figma API ${res.status}: ${JSON.stringify(body)}`);
  for (const job of group) {
    const url = body.images[job.id];
    if (!url) { console.error(`✗ ${job.id}: no image returned`); process.exitCode = 1; continue; }
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    await mkdir(dirname(job.path), { recursive: true });
    await writeFile(job.path, buf);
    console.log(`✓ ${job.id} → ${job.path} (${(buf.length / 1024).toFixed(1)} KB)`);
  }
}
