// Zoom into a region of a pixel-diff block: Figma (top) vs site (bottom), scaled up.
//   node scripts/diff-zoom.mjs <block> <x> <y> <w> <h> [zoom=3]  -> .pixel-diff/<block>/zoom.png
import { PNG } from 'pngjs'; import fs from 'node:fs';
const [,, block, x, y, w, h, z = 3] = process.argv; const Z = +z;
const out = new PNG({ width: w * Z, height: h * Z * 2 + 4 });
['figma', 'site'].forEach((n, k) => { const p = PNG.sync.read(fs.readFileSync(`.pixel-diff/${block}/${n}.png`));
  for (let yy = 0; yy < h * Z; yy++) for (let xx = 0; xx < w * Z; xx++) { const i = ((+y + Math.floor(yy / Z)) * p.width + (+x + Math.floor(xx / Z))) * 4, j = ((yy + k * (h * Z + 4)) * out.width + xx) * 4; for (let c = 0; c < 4; c++) out.data[j + c] = p.data[i + c]; } });
fs.writeFileSync(`.pixel-diff/${block}/zoom.png`, PNG.sync.write(out));
