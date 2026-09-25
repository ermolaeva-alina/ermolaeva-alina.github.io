// Rebuild public/images/widgets/adapty-pixels.svg (Figma: pixel Adapty logo, 20 × 20 dots)
// from the Figma export: off dots become one pattern, and each lit dot's drop-shadow filter
// (spread 1, blur 4, white 12%) becomes a precomputed radial gradient, as in DotScreen.astro.
// 80 KB with 67 filters → a few KB, cheap to paint.
//   node scripts/make-pixels.mjs <figma-export.svg>
import { readFile, writeFile } from 'node:fs/promises';

const src = await readFile(process.argv[2] ?? 'public/images/widgets/adapty-pixels.svg', 'utf8');
const R = 1, P = 2.5, N = 20;
const circles = [...src.matchAll(/<circle cx="([\d.]+)" cy="([\d.]+)" r="1" fill="([^"]+)"( fill-opacity)?/g)]
  .map(([, x, y, fill, op]) => ({ c: Math.round((x - R) / P), r: Math.round((y - R) / P), lit: !op }));
const lit = circles.filter((d) => d.lit);
const seen = new Set(circles.map((d) => `${d.r}-${d.c}`));
const empty = [];
for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!seen.has(`${r}-${c}`)) empty.push([r, c]);

// Figma drop shadow (spread, blur) on a dot = disk of R + spread blurred by σ = blur / 2
function glow(spread, blur, alpha) {
  const disk = R + spread, sigma = blur / 2, extent = disk + 3 * sigma, M = 48;
  const value = (d) => {
    let sum = 0;
    for (let i = 0; i < M; i++) for (let j = 0; j < M; j++) {
      const x = -disk + ((i + 0.5) / M) * 2 * disk, y = -disk + ((j + 0.5) / M) * 2 * disk;
      if (x * x + y * y <= disk * disk) sum += Math.exp(-((d - x) ** 2 + y * y) / (2 * sigma * sigma));
    }
    return (sum * (2 * disk / M) ** 2) / (2 * Math.PI * sigma * sigma);
  };
  const stops = Array.from({ length: 9 }, (_, i) =>
    `<stop offset="${+(i / 8).toFixed(3)}" stop-color="#fff" stop-opacity="${+(alpha * value((i / 8) * extent)).toFixed(4)}"/>`);
  return { r: +extent.toFixed(2), stops: stops.join('') };
}
const g = glow(1, 4, 0.12);
const at = (n) => +(n * P + R).toFixed(2);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">` +
  `<defs><pattern id="o" width="${P}" height="${P}" patternUnits="userSpaceOnUse"><circle cx="${R}" cy="${R}" r="${R}" fill="#fff" fill-opacity=".1"/></pattern>` +
  `<radialGradient id="g">${g.stops}</radialGradient></defs>` +
  `<rect width="50" height="50" fill="url(#o)"/>` +
  empty.map(([r, c]) => `<rect x="${at(c) - R}" y="${at(r) - R}" width="2" height="2" fill="#020202"/>`).join('') +
  lit.map((d) => `<circle cx="${at(d.c)}" cy="${at(d.r)}" r="${g.r}" fill="url(#g)"/>`).join('') +
  lit.map((d) => `<circle cx="${at(d.c)}" cy="${at(d.r)}" r="${R}" fill="#fcfdfd"/>`).join('') +
  `</svg>\n`;
await writeFile('public/images/widgets/adapty-pixels.svg', svg);
console.log(`adapty-pixels.svg: ${lit.length} lit, ${empty.length} empty, ${(svg.length / 1024).toFixed(1)} KB`);
