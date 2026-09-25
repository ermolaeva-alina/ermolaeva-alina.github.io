---
name: figma-console-to-code
description: Turn Figma frames into production code for this portfolio site using the Figma Console MCP (Desktop Bridge) — extracting tokens, reading a section's layout tree, exporting assets, building the section, and accepting it only after a pixel diff against the Figma export shows ≤ 5% differing pixels per block. Use whenever the user shares a figma.com/design link or node id and wants it built, or says "сверстай", "собери секцию", "перенеси из фигмы", "сделай как в макете", "обнови по макету", "implement this frame", "build this section", "match the design". Also use when the user says the site looks different from Figma and asks to fix it. Not for editing the Figma file itself.
---

# Figma Console → code

Build this site from Figma one section at a time, with the Figma file as the source of truth. Every section follows the same loop: **read → build → pixel diff → fix**. A block counts as finished only when `npm run diff` shows **≤ 5% differing pixels** against the Figma export (see step 4). This rule is part of the process and is not optional.

The stack and folder layout are in [references/stack.md](references/stack.md). How Figma properties map to CSS is in [references/figma-to-css.md](references/figma-to-css.md). Ready-to-run `figma_execute` snippets are in [references/snippets.md](references/snippets.md).

The user is a product designer and does not write code. Explain decisions in design terms (spacing, hierarchy, states), not framework jargon, and keep the code simple enough that a later session can read it.

## Hard rules

- **Figma is read-only here.** `figma_execute` can modify the document. Only run read code: no `create*`, `remove()`, setters, or `set*` tools. If the design itself looks wrong, tell the user instead of editing it. The one exception is **copy fixes the user explicitly asks to mirror in Figma**. For those, load the node's fonts (`getRangeAllFontNames` → `loadFontAsync`), replace only the differing characters with `insertCharacters` + `deleteCharacters` so that mixed-font runs keep their styles, then read the styled segments back to verify. Text inside instances can be edited the same way.
- **Never guess values.** Every size, color, radius, shadow and font comes from the Figma data. If a value is missing, ask the user or read it again. Do not eyeball it from a screenshot.
- **Tokens before literals.** If a value matches a token in `src/styles/tokens.css`, use the variable. A raw value is allowed only for one-off values, with a short comment naming the Figma layer.
- **Screenshots can mislead.** Use them for composition and to check the result. Take numbers from the node data.
- **Keep token usage small.** Do not call `figma_get_file_data` with depth 0, or `figma_get_component_for_development_deep` on a whole page. Work at section level and use the compact tree snippet.

## 0. Connection check (every session)

1. `figma_get_status` with `probe: true`. If it is not connected, ask the user to open **Plugins → Development → Figma Desktop Bridge** in the file, then retry.
2. `figma_navigate` with the link the user gave, so the right file is active. Node ids in links use `-` (`553-660034`). The API uses `:` (`553:660034`).
3. Node ids go stale when the design changes. Re-read the tree at the start of each session instead of trusting ids from earlier notes.

## 1. Project setup (first time only)

If the project has no `package.json`, scaffold it as described in [references/stack.md](references/stack.md), start the dev server, and confirm an empty page renders before building anything.

## 2. Foundations: tokens, type, fonts (first time, then whenever they change in Figma)

1. **Variables:** `figma_get_variables` with `format: "full"` and `resolveAliases: true`. If the file has collections, `figma_export_tokens` with `format: "css-vars"`, `sizeUnit: "px"` and `strategy: "dry-run"` shows what would be written. Write the result to `src/styles/tokens.css`.
2. **Unbound values:** in many portfolio files most colors, shadows and spacings are raw values, not variables. Run the *palette scan* snippet on the page frame. It collects every distinct fill, stroke, effect, radius and gap with a usage count. Turn repeated values (used 3+ times) into tokens with readable names, such as `--color-accent`, `--shadow-card` or `--space-24`. Show the user the proposed list before writing it.
3. **Text styles:** run the *text styles* snippet and create one CSS class per style in `src/styles/typography.css` (`.t-h1`, `.t-body-20`…). Include family, weight, size, line-height and letter-spacing, converted as described in figma-to-css.md.
4. **Fonts:** check each family's license before self-hosting it. Google Fonts families (Instrument Serif, Inter Tight) are open-source, so they can be self-hosted. Where possible, self-host the exact files installed in `~/Library/Fonts`, because Figma renders with those. An npm or CDN build of the same family can have different metrics and shift the text by a pixel. Any font whose name contains *Trial* or *Demo* (for example **FK Raster … Trial**) is not licensed for a public website. Flag it to the user, and use the trial files for local development only until they buy a license.

## 3. Build a section

Do this once for each top-level section, working top to bottom. Map the page first with the *children* snippet on the page frame and list the sections to the user, so you agree on the order.

1. **Look:** `figma_take_screenshot` of the section with `scale: 1`. Note the composition, what repeats, and what is decorative.
2. **Read:** run the *compact tree* snippet on the section node. It returns layout, sizing, fills, text and style names in a small format. For a component instance that needs deeper detail, use `figma_get_component_for_development_deep` on that instance only, with `depth` ≤ 6.
3. **Plan the markup:** before writing code, list the elements you will build: the semantic HTML (`header`, `nav`, `section`, `h1`/`h2`, `article`, `a` vs `button`), which parts become reusable components (for example a case study card that appears 3×), and which parts are content that belongs in the content collection.
4. **Assets:** see *Assets* below. Put files in `public/images/<section>/`, use kebab-case names, and never keep the layer name `image 556`.
5. **Write the code** as a component in `src/components/`, following figma-to-css.md. Auto-layout becomes flex or grid. Absolute children become `position: absolute` inside a `position: relative` parent. Use text style classes and token variables.
6. **Interactions and motion:** run the *reactions* snippet on the section. It lists prototype interactions (hover, click, smart-animate durations and easings). Build hover and press states in CSS. Build scroll-triggered and page-level motion as described in stack.md. If the design shows motion that the prototype does not specify, ask the user for timing and easing instead of inventing them.
7. **Pixel diff** (next step). A section is done only after every block in it passes at ≤ 5%.

## 4. Pixel diff: the acceptance test (every block must be ≤ 5%)

The user's rule: **every block is compared pixel by pixel, and no more than 5% of its pixels may differ.** A block that has not passed `npm run diff` is not done.

How it works: `scripts/pixel-diff.mjs` exports the whole page frame from the Figma REST API at 1×, once, and cuts each block out of it by its `absoluteBoundingBox`. The reference therefore includes whatever sits behind or on top of the block, such as the page background or the navbar. It then takes a Playwright screenshot of the matching element at 1920px wide and 1× scale, with animations off and the dev toolbar hidden. Finally it runs [pixelmatch](https://github.com/mapbox/pixelmatch) (`threshold: 0.05`, anti-aliasing ignored) and writes `.pixel-diff/<block>/{figma,site,diff}.png`.

1. Add the block to `scripts/blocks.json`: `name`, the Figma `nodeId`, and a CSS `selector` for the element that has exactly the Figma frame's box. Optional fields: `css`, extra CSS injected before the shot (for example `.navbar{display:none}` for blocks further down the page, where the fixed navbar would overlap the shot but is absent from the Figma crop), and `threshold`, a per-block limit that must not exceed 5.
2. With the dev server running, run `npm run diff -- <block>`. After the design changes in Figma, add `--refresh` to download the reference again.
3. If the sizes differ (`figma` ≠ `site` columns), fix the block's box first. Nothing else is meaningful until they match.
4. Look at `diff.png` even when the block passes, because on a large block small widgets can hide inside a low percentage. Red marks differing pixels. Zoom into suspicious areas with `node scripts/diff-zoom.mjs <block> x y w h [zoom]`, which writes `zoom.png` with Figma on top and the site below. Find the cause instead of nudging values:
   - An offset in the text or content means the layout or alignment is wrong. Measure it with a small Playwright script and compare it with the Figma node data.
   - Text that is doubled or blurred means a different font file or version. Use the exact font files Figma uses (check `~/Library/Fonts`), not a CDN or npm build.
   - A textured or noisy area means a raster fill was redrawn in CSS. Export the real texture instead.
   - Colors off in large flat areas: check the parent background and the paint styles.
5. Rerun the diff after each fix. After 3 rounds above 5%, stop and report to the user with `diff.png` and your explanation.
6. Also look at the preview screenshot once, for things pixel counts can hide, such as a missing hover state or the wrong image.
7. Report the diff % for each block in the wrap-up.

If a block's size or styles don't match what the code says, the Astro dev server may be serving stale CSS. This happens after new components or content-config changes. Restart it with `preview_stop` + `preview_start` before debugging.

Known unavoidable noise: Figma's `GLASS` refraction, and sub-pixel text anti-aliasing. These usually add up to 1–3%.

Responsive layouts (see below) are checked visually. Figma has no reference frames for them.

`figma_check_design_parity` is useful for component-shaped pieces like a button or card: fill `codeSpec` from the code you wrote and it returns a list of mismatches. Use it in addition to the pixel diff, not instead of it.

## Assets

**Default: export through the Desktop Bridge** with the *bridge export* snippet in snippets.md. It has no rate limit and exports each node on its own, without the parent's clipping. On the Starter plan the REST image endpoint allows only a handful of calls, and a 429 response then locks it for days (`retry-after` ≈ 400 000 s was seen). Save REST for when the bridge is unavailable, and call it through `scripts/figma-export.mjs`, which fails fast on long lockouts.

Rules for the exported files:
- Pass `useAbsoluteBounds: true`, so the file covers exactly the layer's box and can be positioned with the layer's `x/y` from the compact tree.
- Export SVG for vectors and pixel art, PNG at 2–3× for photos and complex groups.
- Convert photos to WebP with `sharp`, which ships with Astro.

The older order of preference is kept below for reference:

1. **SVG icons, logos and vectors:** run the *svg export* snippet. `exportAsync({format:'SVG_STRING'})` returns markup as text. Save it with the Write tool. If the icon should inherit text color, replace hardcoded fills with `currentColor`.
2. **Raster images (photos, screenshots):** original image fills can be 10–20 MB (4096px sources), so never pull their bytes through the bridge. Use `figma_get_component_image` with `format: "png"` or `"jpg"` and `scale: 2`. It returns a URL; download it with `curl -L -o`. This needs a valid `FIGMA_ACCESS_TOKEN` in the MCP config. If it fails with 403 or "Token expired", tell the user to create a new personal access token (figma.com → Settings → Security) and update the MCP config.
   If the MCP server still holds an old token (the user updated the config but has not restarted the app), call the REST API directly. Read the token from the config without printing it: `T=$(grep -o '"FIGMA_ACCESS_TOKEN": *"[^"]*"' ~/Library/Application\ Support/Claude/claude_desktop_config.json | sed -E 's/.*"(figd_[^"]*)"/\1/')`. Then request `curl -s -H "X-Figma-Token: $T" "https://api.figma.com/v1/images/<fileKey>?ids=<nodeId>&format=png&scale=3"` and download the returned URL. The exported PNG covers the node's *render bounds*, shadows and rotation included. Read `absoluteRenderBounds` and `absoluteBoundingBox` through the bridge, then position the image with that offset inside a box of the frame's size.
3. **Fallback:** give the user a checklist with the layer name, node id and target file path, and ask them to export these from Figma (Export panel, 2×) into the given folders.

**Lighten every exported SVG** (keep the original in `.pixel-diff/svg-orig/`, then re-run the block's diff):
- A regular dot grid (hundreds of `<circle>`s with the same r/fill) becomes one `<pattern>` plus a `<rect>` per filled area. Check the export for missing cells first: a partial row gets its own rect, and single gaps get a background-colored rect.
- Per-dot drop-shadow filters (Figma glow) become one precomputed `radialGradient` (the `glow()` in `DotScreen.astro`, or `scripts/make-pixels.mjs`).
- Then run `npx svgo -p 2 <files>`. It cuts path-heavy icons by 40–60% with no visible change. InlineSvg re-prefixes ids, so svgo's id shortening is safe.
- Keep a Figma vector as PNG only when the node contains a raster image fill.
- **Photos inside frames, handles or rotation:** do not export the whole composition as one image. An export is cut to the node box, so anything sticking out (selection handles, strokes, shadows) is clipped. Instead, take the original fill with `figma.getImageByHash(hash).getBytesAsync()` through the bridge, crop it to the box with sharp (`fit: 'cover'` for scaleMode FILL) at 2×, and build the frame, handles, shadow and `rotate(-rotation deg)` (with `transform-origin: 0 0` at the node's x/y) in CSS.

After downloading, convert photos to `.webp` or `.avif` at 2× display size. Astro's `<Image>` does this at build time. Always set `width`, `height` and meaningful `alt` text; decorative images get `alt=""`.

## Elements the user will animate: inline SVG

When a design element will be animated (the user asks for it, or it's a "screen", an icon tile or an illustration), it must be **inline SVG in the page**, not an `<img>`:
- **Dot-matrix / pixel screens** (Figma grids of hundreds of dots): do not export them. Read the grid (rows, cols, pitch from dot x/y, the list of lit dots) and render them with `src/components/DotScreen.astro` from data in `src/data/dot-screens.ts`. Unlit dots are one `<pattern>`. Each lit dot is `<circle class="dot" data-r data-c>`, and the LED is `.led`. A new animation frame is just another list of `[row, col]` pairs.
- **Vector icons and illustrations:** export the SVG through the bridge into `src/assets/…`, import it with `?raw`, and render it with `src/components/InlineSvg.astro`. That component prefixes Figma's duplicate `filter0_…`/`clip0_…` ids and adds `data-svg="<id>"` for GSAP targeting.
- Photos inside such blocks stay raster images.

## Scroll performance (every section)

Figma effects are cheap in Figma but can be expensive to paint in a browser. Before finishing a section, run `npm run perf` (Chrome trace, DPR 2) and compare with the previous total. Known costs on this project:
- An **SVG `filter` on many elements** (a glow on each of 393 dots) was the biggest cost. Precompute glows as a `radialGradient` circle instead; `DotScreen.astro` does this with the exact blur/spread profile.
- **A huge vector background repeated in many cells** (the 2048 × 1338 hatch SVG): use a small seamless tile with `background-repeat` instead.
- **Infinite CSS animations**: add `will-change: transform` and pause them off screen with an IntersectionObserver. **Never put an `outline` + `box-shadow` on an ancestor of an animated element.** Chrome then repaints that ancestor every frame (the ticker ran at 15 fps). Draw the card frame on a sibling layer (`.ticker__frame`) and clip the moving content in a separate child (`.ticker__clip`). Check with idle frame timing in the preview: rAF deltas with the animation running vs paused should both be about 16.7 ms.
- Keep `backdrop-filter` to a few small elements (navbar, chips). Figma's background blur on the grid tiles is intentionally not reproduced.

## Copy check (every section)

Before finishing a section, proofread every piece of text in it: grammar, capitalization (for example "i'm" → "I'm"), product and term spelling (SaaS, EdTech, consistent with UrbanTech and DevTools), en dashes in ranges (2021–2022), and consistent end punctuation across sibling items. Fix clear errors in code. Style or wording suggestions go to the user and are not applied silently. List every change in the wrap-up and remind the user to make the same edits in Figma, so the design and the site stay in sync.

## Responsive

If Figma has only a desktop frame, do not invent a mobile design silently. Ask the user whether there are tablet or mobile frames. If there are none, propose a plan section by section (stack columns, reduce type scale by step, hide decorative elements) and get a yes before building it. Use fluid `clamp()` for large display type and container widths instead of many breakpoints. Breakpoints are listed in stack.md.

## Wrap-up for each section

Tell the user in 3–5 lines what was built, which tokens or components were added, what still differs from Figma, and any open questions (missing states, font license, mobile design). Then move to the next section.
