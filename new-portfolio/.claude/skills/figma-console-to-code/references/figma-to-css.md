# Figma → CSS mapping

## Auto-layout (frame with `layoutMode` HORIZONTAL / VERTICAL)

| Figma | CSS |
|---|---|
| `layoutMode: HORIZONTAL` / `VERTICAL` | `display: flex; flex-direction: row / column` |
| `layoutWrap: WRAP` | `flex-wrap: wrap`, with `counterAxisSpacing` becoming `row-gap` |
| `itemSpacing` | `gap` |
| `primaryAxisAlignItems: SPACE_BETWEEN` | `justify-content: space-between` (no `gap`) |
| `primaryAxisAlignItems: MIN / CENTER / MAX` | `justify-content: flex-start / center / flex-end` |
| `counterAxisAlignItems: MIN / CENTER / MAX / BASELINE` | `align-items: flex-start / center / flex-end / baseline` |
| `paddingTop/Right/Bottom/Left` | `padding` (shorthand when equal) |
| `layoutMode: GRID` | `display: grid` with the given row/column counts and gaps |
| `layoutMode: NONE` | usually `position: relative`, with children placed absolutely (see below) |

## Child sizing

| Figma (`layoutSizingHorizontal` / `Vertical`) | CSS on the child |
|---|---|
| `FIXED` | `width` / `height` in px (or tokens) |
| `HUG` | leave size unset (content-sized) |
| `FILL` on the parent's main axis | `flex: 1 1 0; min-width: 0`. When several FILL siblings have **different padding**, use a grid instead (`grid-template-columns: 1fr 1fr`). Flexbox adds the padding on top of the zero basis, so the columns come out unequal. |
| `FILL` on the cross axis | `align-self: stretch` |
| `minWidth` / `maxWidth` | `min-width` / `max-width` |
| `layoutPositioning: ABSOLUTE` | `position: absolute` with offsets from the parent; the parent gets `position: relative` |

For absolutely placed children (in a `NONE` frame or with `ABSOLUTE` positioning), convert `constraints` as follows: `LEFT` becomes `left`, `RIGHT` becomes `right`, `LEFT_RIGHT` becomes both, `CENTER` becomes `left: 50%` with a translate, and `SCALE` becomes a percentage.

Decorative collages, such as scattered widgets or floating cards, are usually `NONE` frames. Keep them absolute at desktop and plan a separate stacked layout for mobile.

## Visual

| Figma | CSS |
|---|---|
| SOLID fill `{r,g,b}` 0–1, with `opacity` | `rgb(r*255 g*255 b*255 / opacity)`, or `#hex` when opacity is 1 |
| GRADIENT_LINEAR | `linear-gradient(<angle>, stops…)`. Compute the angle from `gradientTransform`; if unsure, take a screenshot of the node and match it |
| GRADIENT_RADIAL | `radial-gradient(…)` |
| IMAGE fill with `scaleMode` FILL / FIT / CROP | `<img>` with `object-fit: cover / contain`; for CROP, export the node as-is |
| multiple fills | stacked `background` layers; the top Figma fill comes first in CSS |
| `strokes` + `strokeWeight`, INSIDE | `box-shadow: inset 0 0 0 Wpx color` or `border` + `box-sizing: border-box` |
| `strokeAlign: OUTSIDE` | `outline` or `box-shadow: 0 0 0 Wpx` |
| `cornerRadius` / `topLeftRadius`… | `border-radius` |
| `cornerSmoothing` > 0 | no exact CSS equivalent; use plain `border-radius` |
| DROP_SHADOW `{offset, radius, spread, color}` | `box-shadow: x y radius spread color` |
| INNER_SHADOW | `box-shadow: inset …` |
| LAYER_BLUR | `filter: blur(radius/2 px)` |
| BACKGROUND_BLUR | `backdrop-filter: blur(radius/2 px)` |
| node `opacity` | `opacity` |
| `blendMode` other than NORMAL / PASS_THROUGH | `mix-blend-mode`. **No `transform`, `translate`, `filter`, `opacity < 1` or `z-index` on any ancestor up to the backdrop.** Each of these creates a stacking context, and the blend then mixes with transparency instead of the page (for example, a Screen glow shows up as an orange blob). Center such blocks with `left: calc(50% - w/2)`. |
| `clipsContent: true` | `overflow: hidden` |
| `rotation` | `transform: rotate(-Ndeg)`; Figma's positive angle is counter-clockwise |

## Text

| Figma | CSS |
|---|---|
| `fontName.family` / `.style` | `font-family`, plus `font-weight` / `font-style` from the style name (Regular 400, Medium 500, SemiBold 600, Bold 700; "Italic" becomes `font-style: italic`) |
| `fontSize` | `font-size` |
| `lineHeight` `{unit: PIXELS, value}` | `line-height: value/fontSize` (unitless) |
| `lineHeight` `{unit: PERCENT}` | `line-height: value/100` |
| `lineHeight` AUTO | single line: `line-height: <Figma text box height>px`, because browsers compute `normal` about 1px differently. Multi-line text: `normal` |
| `letterSpacing` `{unit: PERCENT, value}` | `letter-spacing: value/100 em` |
| `letterSpacing` `{unit: PIXELS}` | `letter-spacing: Npx` |
| `textCase` UPPER / LOWER / TITLE | `text-transform` |
| `textDecoration` | `text-decoration` |
| `textAlignHorizontal` | `text-align` |
| `textAutoResize: WIDTH_AND_HEIGHT` | no width, `white-space: nowrap` if it is one line |
| `textAutoResize: HEIGHT` | width from layout, height auto |
| mixed styles within one text (`getStyledTextSegments`) | wrap each run in `<span>` or `<em>` with its own class; this design mixes serif italic and sans in headlines, e.g. "*Adapty*: Designed…" |
| `textStyleId` set | use the matching `.t-*` class; do not repeat properties in the component |
| HUG text inside a row, a sequence or a `SPACE_BETWEEN` layout | **set `width` to the Figma text box width** (with `flex: none`). Browsers measure the same text 1–2px differently than Figma, which shifts the following items and centered text. In a ticker the error accumulates across items. |
| text `strokes` with `strokeAlign: OUTSIDE` | `-webkit-text-stroke: <2×weight>px color; paint-order: stroke fill` (the stroke is centered, so double it and paint it underneath) |

## Figma vs Chrome text rendering (measured on this project)

- **Regular weight is set about 1.25% wider in Figma** than in Chrome with the same font file. Medium and SemiBold match. This is enough to change line breaks in paragraphs. The fix is a calibrated letter-spacing on the style, for example `.t-body-16` uses `-0.015em` instead of Figma's `-2%`. Calibrate each new Regular style with the pixel diff: compare the ink extents of lines that wrap the same way, then grid-search the letter-spacing with `EXTRA_CSS=".t-x{letter-spacing:…!important}" node scripts/pixel-diff.mjs …`. Word-spacing is the wrong model; tested, it makes the diff worse.
- **Mixed Inter + FK Raster lines:** Figma draws the whole line about 1px lower than Chrome, and FK Raster's taller ascent grows Chrome's line box by 1px. Fix: give the FK spans `line-height: 1`, and give the heading `position: relative; top: 1px`. Verify with `node scripts/diff-shift.mjs <block> x,y,w,h`.
- **U+2028 (line separator)** in Figma text is a forced line break. It shows up as a space in `characters`, so check char codes and use `<br />`.
- If a single line overflows by less than 0.5px after calibration, widen that text box by 1px and leave a comment. Do not touch the letter-spacing again.

## Units

- Keep px for borders, radii, shadows and small spacing.
- Use rem for type (`font-size`) so it respects user zoom (px / 16).
- For large display type (H0 168, H1 104), use `clamp(min, vw-based, max)`, where max is the Figma value.
