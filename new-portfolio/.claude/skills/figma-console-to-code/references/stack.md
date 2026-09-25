# Stack

**Astro + plain CSS (custom properties) + GSAP**, deployed as a static site (Vercel or Netlify).

Why this stack for this site (home page + case studies, rich motion, owner does not write code):
- **Astro** outputs plain HTML with no JS by default, so pages are fast and the code reads like HTML. Case studies are Markdown/MDX files in a content collection: adding a case means adding one file.
- **Plain CSS with variables** stays closest to the Figma values (one token equals one variable) and has no utility-class noise. Styles live in each `.astro` component's `<style>` block, scoped automatically.
- **GSAP + ScrollTrigger** handles the complex motion: scroll-driven reveals, pinning, parallax and timelines. It is free for all uses, including all plugins. **Lenis** adds smooth scrolling if the design calls for it.
- **Astro View Transitions** (`<ClientRouter />`) handles animated transitions between the home page and case pages.
- Add React or any other framework through an Astro island only if a single widget truly needs complex state. Do not add it by default.

## Scaffold (first time)

```bash
npm create astro@latest . -- --template minimal --typescript strict --install --no-git --skip-houston
npm install gsap lenis
npm install -D playwright pixelmatch pngjs
npx playwright install chromium
```

Add `"diff": "node scripts/pixel-diff.mjs"` to `package.json` scripts, and `.pixel-diff/` to `.gitignore`.

Then add a `.claude/launch.json` entry so the preview browser can start the dev server:

```json
{ "version": "0.0.1", "configurations": [ { "name": "dev", "runtimeExecutable": "npm", "runtimeArgs": ["run", "dev"], "port": 4321 } ] }
```

## Folder layout

```
src/
  styles/
    tokens.css        # colors, radii, spacing, shadows, widths — from Figma
    typography.css    # one class per Figma text style
    global.css        # reset, @font-face, imports tokens + typography
  components/         # one .astro file per section / reusable block (Navbar, Hero, CaseCard…)
  layouts/Base.astro  # <html>, <head>, fonts, ClientRouter, Lenis init
  pages/
    index.astro
    work/[slug].astro # case study template
  content/
    work/*.md(x)      # one file per case study: title, summary, cover, role, years, accent color
  scripts/motion.ts   # GSAP registrations and shared animation helpers
scripts/
  pixel-diff.mjs      # acceptance test: Figma export vs Playwright screenshot, pixelmatch, ≤5%
  blocks.json         # block list: name, Figma nodeId, CSS selector
public/
  fonts/              # self-hosted fonts (same files as in ~/Library/Fonts)
  images/<section>/   # exported assets
```

## Conventions

- Component names follow the Figma layer names in PascalCase (`Case studies` becomes `CaseStudies.astro`). Mention the Figma node id in a comment at the top of the file.
- Class names are short and local to the component (`.card`, `.card__title`). Scoped styles mean no global prefixing is needed.
- The container width comes from the Figma variable (`content width`, which becomes `--content-width`). Center it with `margin-inline: auto` and fluid side padding.
- Breakpoints: `1440`, `1024`, `768`, `480`. Build desktop first to match Figma, then use `@media (max-width: …)`.
- Motion: put the resting state in CSS so the page works without JS. GSAP animates *from* an offset. Wrap every animation in `gsap.matchMedia()` with `(prefers-reduced-motion: no-preference)`. Re-initialize on `astro:page-load` because of View Transitions.
- Images use Astro `<Image>` / `<Picture>` from `astro:assets` when the file is in `src/assets/`, or plain `<img>` with `loading="lazy"` for files in `public/`.

## Deploy

Connect the git repo to Vercel or Netlify. The framework preset is Astro, the build command is `npm run build`, and the output folder is `dist/`. There is no server code.
