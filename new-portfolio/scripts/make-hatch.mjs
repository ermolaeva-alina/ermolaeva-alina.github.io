// Generate public/images/hatch.svg — the Figma "Pattern" texture redrawn as vector lines.
// Measured from the Figma texture (2048 × 1338 as placed): 45° lines along x + y = const,
// period 5.367px along x (3.795px apart), ~1px wide, rgb(192 192 192) at ~30%.
// Output is a 220 × 220 tile: 41 periods of 5.3659px fit exactly (Figma: 5.367px, 0.02% off),
// so it repeats seamlessly and the browser rasterizes it once.
//   node scripts/make-hatch.mjs [offset] [width] [alpha]
import { writeFile } from 'node:fs/promises';

const [c = 0.2, w = 1.2, a = 0.26] = process.argv.slice(2).map(Number);
const W = 220;
const H = 220;
const T = W / 41;
const r = (v) => +v.toFixed(3);

const segs = [];
for (let k = -1; c + k * T < W + H + T; k++) {
  const u = c + k * T; // line x + y = u, clipped by the box (overdraw is cut by the viewBox)
  segs.push(`M${r(u + 2)} -2L-2 ${r(u + 2)}`);
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><path d="${segs.join('')}" stroke="rgb(192,192,192)" stroke-opacity="${a}" stroke-width="${w}" fill="none"/></svg>\n`;
await writeFile('public/images/hatch.svg', svg);
console.log(`hatch.svg: ${segs.length} lines, ${(svg.length / 1024).toFixed(1)} KB (T=${T} c=${c} w=${w} a=${a})`);
