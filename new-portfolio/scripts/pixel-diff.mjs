// Pixel diff: Figma node export vs. the same block rendered in the browser.
//
//   node scripts/pixel-diff.mjs            -> all blocks in scripts/blocks.json
//   node scripts/pixel-diff.mjs top navbar -> only these blocks
//   --refresh                              -> re-download Figma references
//
// Needs the dev server running (npm run dev) and a Figma token in
// FIGMA_TOKEN or in the Claude desktop MCP config.
// Output: .pixel-diff/<block>/{figma,site,diff}.png and a summary table.
// Exit code 1 if any block is above its threshold (default 5%).

import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const FILE_KEY = 'S4ITLt1j77fs95s5DyGX1u';
const SITE = process.env.SITE_URL ?? 'http://localhost:4321';
const OUT = '.pixel-diff';
const DEFAULT_THRESHOLD = 5; // percent of pixels

const args = process.argv.slice(2);
const refresh = args.includes('--refresh');
const only = args.filter((a) => !a.startsWith('--'));

const config = JSON.parse(await readFile(new URL('./blocks.json', import.meta.url), 'utf8'));
const blocks = config.blocks.filter((b) => !only.length || only.includes(b.name));
if (!blocks.length) throw new Error(`No blocks match: ${only.join(', ')}`);

async function figmaToken() {
  if (process.env.FIGMA_TOKEN) return process.env.FIGMA_TOKEN;
  const cfg = await readFile(join(homedir(), 'Library/Application Support/Claude/claude_desktop_config.json'), 'utf8');
  const m = cfg.match(/"FIGMA_ACCESS_TOKEN"\s*:\s*"([^"]+)"/);
  if (!m) throw new Error('No Figma token: set FIGMA_TOKEN');
  return m[1];
}

const exists = (p) => access(p).then(() => true, () => false);

async function figmaApi(path) {
  const res = await fetch(`https://api.figma.com/v1/${path}`, { headers: { 'X-Figma-Token': await figmaToken() } });
  if (!res.ok) throw new Error(`Figma API ${res.status}: ${await res.text()}`);
  return res.json();
}

// The whole page frame, exported once. Blocks are cropped out of it so each
// reference includes what sits behind or on top of it (page background, navbar).
let pagePng;
async function pageReference() {
  if (pagePng) return pagePng;
  const path = join(OUT, `page-${config.pageNodeId.replace(':', '-')}.png`);
  if (refresh || !(await exists(path))) {
    const { images } = await figmaApi(`images/${FILE_KEY}?ids=${encodeURIComponent(config.pageNodeId)}&format=png&scale=1&use_absolute_bounds=true`);
    const url = Object.values(images)[0];
    if (!url) throw new Error(`Figma returned no image for ${config.pageNodeId}`);
    await mkdir(OUT, { recursive: true });
    await writeFile(path, Buffer.from(await (await fetch(url)).arrayBuffer()));
  }
  return (pagePng = PNG.sync.read(await readFile(path)));
}

// Node boxes: scripts/figma-boxes.json (written from the Desktop Bridge, see snippets.md),
// falling back to the REST API for ids that are missing there.
let boxes;
async function nodeBox(id) {
  if (!boxes) {
    const cachePath = new URL('./figma-boxes.json', import.meta.url);
    boxes = (await exists(cachePath)) ? JSON.parse(await readFile(cachePath, 'utf8')) : {};
    const ids = [config.pageNodeId, ...config.blocks.map((b) => b.nodeId)];
    const missing = ids.filter((i) => !boxes[i]);
    if (missing.length) {
      const { nodes } = await figmaApi(`files/${FILE_KEY}/nodes?ids=${encodeURIComponent(missing.join(','))}&depth=1`);
      for (const [k, v] of Object.entries(nodes)) boxes[k] = v.document.absoluteBoundingBox;
      await writeFile(cachePath, JSON.stringify(boxes, null, 2) + '\n');
    }
  }
  return boxes[id];
}

async function downloadReference(block, dir) {
  const page = await pageReference();
  const root = await nodeBox(config.pageNodeId);
  const box = await nodeBox(block.nodeId);
  const x = Math.round(box.x - root.x);
  const y = Math.round(box.y - root.y);
  const w = Math.round(box.width);
  const h = Math.round(box.height);
  const crop = new PNG({ width: w, height: h });
  PNG.bitblt(page, crop, x, y, w, h, 0, 0);
  const path = join(dir, 'figma.png');
  await writeFile(path, PNG.sync.write(crop));
  return path;
}

// Composite onto white so transparent areas compare equally on both sides
function flatten(png) {
  const { data } = png;
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3] / 255;
    data[i] = data[i] * a + 255 * (1 - a);
    data[i + 1] = data[i + 1] * a + 255 * (1 - a);
    data[i + 2] = data[i + 2] * a + 255 * (1 - a);
    data[i + 3] = 255;
  }
  return png;
}

// Place an image on a white canvas of the given size (top-left aligned)
function pad(png, width, height) {
  if (png.width === width && png.height === height) return png;
  const out = new PNG({ width, height });
  out.data.fill(255);
  PNG.bitblt(png, out, 0, 0, Math.min(png.width, width), Math.min(png.height, height), 0, 0);
  return out;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: config.viewport ?? 1920, height: 1080 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
const results = [];

for (const block of blocks) {
  const dir = join(OUT, block.name);
  await mkdir(dir, { recursive: true });
  const refPath = await downloadReference(block, dir);

  await page.goto(SITE + (block.path ?? '/'), { waitUntil: 'networkidle' });
  await page.addStyleTag({
    content: `*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}
      astro-dev-toolbar{display:none!important}
      ${block.css ?? ''}
      ${process.env.EXTRA_CSS ?? ''}`,
  });
  await page.evaluate(() => document.fonts.ready);
  const el = page.locator(block.selector).first();
  const shot = await el.screenshot();
  await writeFile(join(dir, 'site.png'), shot);

  const ref = flatten(PNG.sync.read(await readFile(refPath)));
  const site = flatten(PNG.sync.read(shot));
  const width = Math.max(ref.width, site.width);
  const height = Math.max(ref.height, site.height);
  const a = pad(ref, width, height);
  const b = pad(site, width, height);
  const diff = new PNG({ width, height });
  const bad = pixelmatch(a.data, b.data, diff.data, width, height, { threshold: 0.05, includeAA: false, alpha: 0.2 });
  await writeFile(join(dir, 'diff.png'), PNG.sync.write(diff));

  const percent = (bad / (width * height)) * 100;
  const limit = block.threshold ?? DEFAULT_THRESHOLD;
  results.push({
    block: block.name,
    figma: `${ref.width}×${ref.height}`,
    site: `${site.width}×${site.height}`,
    'diff %': percent.toFixed(2),
    limit: `${limit}%`,
    result: percent <= limit ? 'PASS' : 'FAIL',
  });
}

await browser.close();
console.table(results);
if (results.some((r) => r.result === 'FAIL')) process.exitCode = 1;
