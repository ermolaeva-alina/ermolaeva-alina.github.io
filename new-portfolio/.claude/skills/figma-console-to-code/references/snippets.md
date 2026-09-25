# figma_execute snippets (read-only)

Paste one snippet as the `code` argument of `figma_execute` and change the `ROOT` id. Use `timeout: 20000` for sections and `30000` for a whole page. All snippets only read the document.

## children: map a page or frame

```js
const ROOT = '553:660034';
const n = await figma.getNodeByIdAsync(ROOT);
return { name: n.name, size: [n.width, n.height], layout: n.layoutMode,
  kids: n.children.map(c => ({ id: c.id, name: c.name, type: c.type, h: Math.round(c.height), kids: 'children' in c ? c.children.length : 0 })) };
```

## compact tree: layout, sizing, visuals and text of one section

Output keys:
- `box` is [x, y, w, h] relative to the parent.
- `al` is direction|gap|padding T R B L|primary align|counter align.
- `sz` is horizontal+vertical sizing, where X=fixed, F=fill and H=hug.
- `abs` means absolute-positioned; `fx` means effects.
- `vars` are bound variable names; `comp` is the main component.
- `ts` is the text style; `runs` are mixed-style text segments.
- `more` means that many children were cut off by `MAX_DEPTH`. Re-run the snippet on that child.

```js
const ROOT = '553:617759', MAX_DEPTH = 6;
const r = v => Math.round(v * 100) / 100;
const S = { FIXED: 'X', FILL: 'F', HUG: 'H' };
const hex = c => '#' + [c.r, c.g, c.b].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
const paint = p => p.visible === false ? null : p.type === 'SOLID' ? hex(p.color) + (p.opacity < 1 ? '/' + r(p.opacity) : '') : p.type === 'IMAGE' ? 'IMG:' + p.scaleMode : p.type;
const styleName = async id => id && typeof id === 'string' ? (await figma.getStyleByIdAsync(id))?.name : undefined;
async function walk(n, d) {
  if (n.visible === false) return null;
  const o = { id: n.id, n: n.name, t: n.type };
  const pb = n.parent && n.parent.absoluteBoundingBox;
  if (n.absoluteBoundingBox) { const b = n.absoluteBoundingBox; o.box = [r(b.x - (pb ? pb.x : 0)), r(b.y - (pb ? pb.y : 0)), r(b.width), r(b.height)]; }
  if (n.layoutMode && n.layoutMode !== 'NONE') {
    o.al = [n.layoutMode[0], n.itemSpacing, [n.paddingTop, n.paddingRight, n.paddingBottom, n.paddingLeft].join(' '), n.primaryAxisAlignItems, n.counterAxisAlignItems].join('|');
    if (n.layoutWrap === 'WRAP') o.wrap = n.counterAxisSpacing;
  }
  if ('layoutSizingHorizontal' in n) o.sz = S[n.layoutSizingHorizontal] + S[n.layoutSizingVertical];
  if (n.layoutPositioning === 'ABSOLUTE') o.abs = true;
  if ('fills' in n && Array.isArray(n.fills)) { const f = n.fills.map(paint).filter(Boolean); if (f.length) o.fill = f; }
  if ('strokes' in n && n.strokes.length) o.stroke = n.strokes.map(paint).filter(Boolean).join(',') + ' ' + String(n.strokeWeight) + ' ' + n.strokeAlign;
  if (typeof n.cornerRadius === 'number' && n.cornerRadius) o.rad = n.cornerRadius; else if (n.cornerRadius === figma.mixed) o.rad = [n.topLeftRadius, n.topRightRadius, n.bottomRightRadius, n.bottomLeftRadius];
  if ('effects' in n && n.effects.length) o.fx = n.effects.filter(e => e.visible !== false).map(e => e.type + (e.offset ? ` ${r(e.offset.x)} ${r(e.offset.y)}` : '') + ` ${r(e.radius)}` + (e.spread ? ` ${r(e.spread)}` : '') + (e.color ? ' ' + hex(e.color) + '/' + r(e.color.a) : ''));
  if ('opacity' in n && n.opacity < 1) o.op = r(n.opacity);
  if (n.rotation) o.rot = r(n.rotation);
  if (n.clipsContent) o.clip = true;
  if (n.boundVariables && Object.keys(n.boundVariables).length) { o.vars = {}; for (const [k, v] of Object.entries(n.boundVariables)) { const a = Array.isArray(v) ? v[0] : v; if (a && a.id) o.vars[k] = (await figma.variables.getVariableByIdAsync(a.id))?.name; } }
  if (n.type === 'INSTANCE') { const m = await n.getMainComponentAsync(); o.comp = m && (m.parent && m.parent.type === 'COMPONENT_SET' ? m.parent.name + ' / ' + m.name : m.name); }
  if (n.type === 'TEXT') {
    o.txt = n.characters.length > 160 ? n.characters.slice(0, 160) + '…' : n.characters;
    o.ts = await styleName(n.textStyleId);
    const segs = n.getStyledTextSegments(['fontName', 'fontSize', 'fills', 'textStyleId', 'lineHeight', 'letterSpacing']);
    if (segs.length > 1 || !o.ts) o.runs = await Promise.all(segs.map(async s => [s.characters.slice(0, 40), s.fontName.family + ' ' + s.fontName.style, s.fontSize, 'lh ' + (s.lineHeight.unit === 'AUTO' ? 'auto' : s.lineHeight.value + s.lineHeight.unit[0]), 'ls ' + s.letterSpacing.value + s.letterSpacing.unit[0], s.fills.map(paint).join(','), await styleName(s.textStyleId)].filter(x => x !== undefined).join(' · ')));
    o.align = n.textAlignHorizontal; o.resize = n.textAutoResize;
  }
  if ('children' in n) {
    if (d >= MAX_DEPTH) o.more = n.children.length;
    else { const k = []; for (const c of n.children) { const w = await walk(c, d + 1); if (w) k.push(w); } if (k.length) o.kids = k; }
  }
  return o;
}
return await walk(await figma.getNodeByIdAsync(ROOT), 0);
```

If the output is huge, it is usually a repeated pattern (see *Patterns* below). Lower `MAX_DEPTH`, or run the snippet on sub-frames one at a time.

## palette scan: find raw values worth turning into tokens

Run this on the page frame. It returns values with usage counts, sorted from most to least used.

```js
const ROOT = '553:660034';
const r = v => Math.round(v * 100) / 100;
const hex = c => '#' + [c.r, c.g, c.b].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
const bump = (m, k) => { if (k !== undefined && k !== null && k !== '') m[k] = (m[k] || 0) + 1; };
const colors = {}, gradients = {}, effects = {}, radii = {}, gaps = {}, paddings = {}, fonts = {};
const nodes = (await figma.getNodeByIdAsync(ROOT)).findAll(n => n.visible !== false);
for (const n of nodes) {
  for (const key of ['fills', 'strokes']) if (key in n && Array.isArray(n[key])) for (const p of n[key]) {
    if (p.visible === false) continue;
    if (p.type === 'SOLID') bump(colors, hex(p.color) + (p.opacity < 1 ? '/' + r(p.opacity) : ''));
    else if (p.type.startsWith('GRADIENT')) bump(gradients, p.type + ' ' + p.gradientStops.map(s => hex(s.color) + '/' + r(s.color.a) + '@' + r(s.position)).join(' '));
  }
  if ('effects' in n) for (const e of n.effects) if (e.visible !== false) bump(effects, e.type + (e.offset ? ` ${r(e.offset.x)} ${r(e.offset.y)}` : '') + ` ${r(e.radius)}` + (e.spread ? ` ${r(e.spread)}` : '') + (e.color ? ' ' + hex(e.color) + '/' + r(e.color.a) : ''));
  if (typeof n.cornerRadius === 'number' && n.cornerRadius) bump(radii, r(n.cornerRadius));
  if (n.layoutMode && n.layoutMode !== 'NONE') { bump(gaps, n.itemSpacing); bump(paddings, [n.paddingTop, n.paddingRight, n.paddingBottom, n.paddingLeft].join(' ')); }
  if (n.type === 'TEXT') for (const s of n.getStyledTextSegments(['fontName', 'fontSize'])) bump(fonts, `${s.fontName.family} ${s.fontName.style} ${s.fontSize}`);
}
const top = (m, min = 1) => Object.entries(m).filter(([, c]) => c >= min).sort((a, b) => b[1] - a[1]).slice(0, 40);
return { scanned: nodes.length, colors: top(colors), gradients: top(gradients), effects: top(effects, 2), radii: top(radii), gaps: top(gaps), paddings: top(paddings, 2), fonts: top(fonts) };
```

## text styles

```js
const fmt = u => u.unit === 'AUTO' ? 'auto' : u.value + (u.unit === 'PERCENT' ? '%' : 'px');
return (await figma.getLocalTextStylesAsync()).map(s => ({ name: s.name, family: s.fontName.family, style: s.fontName.style, size: s.fontSize,
  lineHeight: fmt(s.lineHeight), letterSpacing: fmt(s.letterSpacing), case: s.textCase, decoration: s.textDecoration }));
```

## reactions: prototype interactions and motion in a section

```js
const ROOT = '553:617980';
const out = [];
for (const n of (await figma.getNodeByIdAsync(ROOT)).findAll(n => n.reactions && n.reactions.length)) {
  for (const re of n.reactions) for (const a of (re.actions || [re.action]).filter(Boolean)) {
    const dest = a.destinationId ? await figma.getNodeByIdAsync(a.destinationId) : null;
    out.push({ node: n.name, id: n.id, trigger: re.trigger && re.trigger.type + (re.trigger.delay ? ` +${re.trigger.delay}ms` : ''),
      action: a.type + (a.navigation ? ':' + a.navigation : ''), to: dest && dest.name,
      transition: a.transition && `${a.transition.type} ${Math.round(a.transition.duration * 1000)}ms ${a.transition.easing && a.transition.easing.type}` + (a.transition.easing && a.transition.easing.easingFunctionCubicBezier ? ' ' + JSON.stringify(a.transition.easing.easingFunctionCubicBezier) : '') });
  }
}
return out;
```

To compare component states (default, hover, pressed), find the main component's set with `comp` from the compact tree and run the compact tree on each variant.

## svg export: icons and vectors

```js
const ROOT = '123:456';
const n = await figma.getNodeByIdAsync(ROOT);
return { name: n.name, svg: await n.exportAsync({ format: 'SVG_STRING', svgIdAttribute: false, svgOutlineText: true }) };
```

Only use this for small vector nodes (icons, logos, simple illustrations). Do not use it for raster images or large frames.

## bridge export: assets straight to files (default way to export)

List `[nodeId, path, exportSettings]` jobs. The result holds base64 data and is too large for the conversation, so Claude Code saves it to a `tool-results/*.txt` file. Decode that file with `node scripts/save-bridge-export.mjs <that file>`. Do not read the base64 yourself.

```js
const jobs = [
  ['784:629806', 'public/images/widgets/adapty-pixels.svg', { format: 'SVG', svgIdAttribute: false }],
  ['553:617972', 'public/images/widgets/prague-photos.png', { format: 'PNG', constraint: { type: 'SCALE', value: 3 } }],
];
const files = [], errors = [];
for (const [id, path, opts] of jobs) {
  const n = await figma.getNodeByIdAsync(id);
  try { files.push({ path, b64: figma.base64Encode(await n.exportAsync({ ...opts, useAbsoluteBounds: true })) }); }
  catch (e) { errors.push(`${path}: ${e.message}`); }
}
return { errors, files };
```

If the result is small, for example a single icon, it comes back inline instead. For an SVG, return `exportAsync({ format: 'SVG_STRING' })` and write the text with the Write tool.

"Failed to export node": the id is usually wrong. For example, `findOne` matched a hidden duplicate. Find the node through its parent's `children` instead.

## node boxes for the pixel diff

`scripts/pixel-diff.mjs` reads the block boxes from `scripts/figma-boxes.json`. When you add a block, refresh the file through the bridge:

```js
const ids = ['553:660034', '553:617776' /* page + every block */];
const out = {};
for (const id of ids) { const b = (await figma.getNodeByIdAsync(id)).absoluteBoundingBox; out[id] = { x: b.x, y: b.y, width: b.width, height: b.height }; }
return out;
```

To refresh the full-page reference (`.pixel-diff/page-<id>.png`) after the design changes, bridge-export the page frame at scale 1 to that path.

## Patterns and heavy decoration

**Raster textures that are really regular patterns** (hatching, grids, dots) should be measured and redrawn as vector, not shipped as images. Decode the exported texture with `sharp` and average the alpha along the suspected line direction, for example by `x + y` for 45° lines. That gives the period, phase, line width and colour. Then generate an SVG with one path segment per line, as `scripts/make-hatch.mjs` does. Do not use a CSS `repeating-linear-gradient`: Chrome aliases thin stripes with a fractional period, which cost 3–8% in the pixel diff. Do not use an SVG `<pattern>` with a fractional tile either. On this project the hatch went from a 700 KB WebP to a 14.5 KB SVG (4.5 KB gzipped) at the same diff %.

When the palette scan shows one value used thousands of times, it is a repeated pattern. In this file, `#ffffff/0.1` on about 5,900 nodes is the grid of tiles behind sections. Never rebuild patterns node by node. Take one tile's size and gap from the compact tree and draw the pattern with a CSS `background-image` (repeating gradients) or a small tiling SVG.

## Effects without a direct CSS equivalent

- `GLASS`: Figma's glass material. Approximate it with `backdrop-filter: blur() saturate()`, a translucent white fill, and an inset highlight shadow. Show the user the result for approval.
- `BACKGROUND_BLUR n`: `backdrop-filter: blur(n/2 px)`.
- `LAYER_BLUR n`: `filter: blur(n/2 px)`.
