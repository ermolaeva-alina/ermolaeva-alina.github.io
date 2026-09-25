// Write files exported through the Figma Desktop Bridge (figma_execute).
//
// The bridge snippet returns { files: [{ path, b64 }] }. Large results are saved by
// Claude Code to a tool-results .txt file instead of entering the conversation;
// pass that file here:
//
//   node scripts/save-bridge-export.mjs <tool-result.txt>

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const src = process.argv[2];
if (!src) throw new Error('Usage: node scripts/save-bridge-export.mjs <tool-result.txt>');

const raw = JSON.parse(await readFile(src, 'utf8'));
// Tool results may be wrapped: { result: { files } } or text blocks containing JSON
const unwrap = (v) => {
  if (Array.isArray(v)) return v.map((x) => (x && x.text ? JSON.parse(x.text) : x)).map(unwrap).find(Boolean);
  if (v && v.files) return v;
  if (v && v.result) return unwrap(v.result);
  return null;
};
const data = unwrap(raw);
if (!data) throw new Error('No { files } found in ' + src);

for (const { path, b64 } of data.files) {
  await mkdir(dirname(path), { recursive: true });
  const buf = Buffer.from(b64, 'base64');
  await writeFile(path, buf);
  console.log(`✓ ${path} (${(buf.length / 1024).toFixed(1)} KB)`);
}
