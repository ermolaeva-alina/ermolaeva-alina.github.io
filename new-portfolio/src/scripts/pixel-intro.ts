// Pixel intro for the tile grids (like reactbits.dev "Pixel Swap"):
// when a grid scrolls into view, its empty tiles pop in one by one in random order
// (grow from 35% and fade in); once they are down, the widgets pop in on top, each whole.
//
// Mark a grid with data-pixel-intro; its direct children with class "tile" are the
// tiles, every other direct child is a widget. The head script in Base.astro hides
// them before first paint (html.pixel-intro) unless the user prefers reduced motion.

const TOTAL = 800; // ms, the tile wave for one grid
const PIXEL = 300; // ms, one tile opening
const WIDGET = 450; // ms, one widget opening
const WIDGETS_SPREAD = 350; // ms, widgets start at random within this window after the tiles
const FROM = 0.35; // start size, relative to the final size
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

function playTiles(tiles: HTMLElement[]) {
  for (const t of tiles) {
    t.animate(
      [
        { transform: `scale(${FROM})`, opacity: 0 },
        { transform: 'scale(1)', opacity: 1 },
      ],
      { duration: PIXEL, delay: Math.random() * (TOTAL - PIXEL), easing: EASING, fill: 'backwards' },
    );
  }
}

// Widgets pop in whole, with the same grow-and-fade, once the tiles are down
function playWidgets(widgets: HTMLElement[]) {
  for (const w of widgets) {
    w.animate(
      [
        { transform: `scale(${FROM})`, opacity: 0 },
        { transform: 'scale(1)', opacity: 1 },
      ],
      { duration: WIDGET, delay: TOTAL + Math.random() * WIDGETS_SPREAD, easing: EASING, fill: 'backwards' },
    );
  }
}

function play(grid: HTMLElement) {
  const kids = [...grid.children] as HTMLElement[];
  const tiles = kids.filter((k) => k.classList.contains('tile'));
  const widgets = kids.filter((k) => !k.classList.contains('tile'));
  grid.dataset.pixelIntro = 'played'; // lifts the CSS that hides everything before the start
  playTiles(tiles);
  playWidgets(widgets);
}

export function initPixelIntro() {
  const root = document.documentElement;
  (window as any).__pixelIntroReady = true;
  if (!root.classList.contains('pixel-intro')) return; // reduced motion: nothing hidden
  const grids = document.querySelectorAll<HTMLElement>('[data-pixel-intro=""]');
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        io.unobserve(e.target);
        play(e.target as HTMLElement);
      }
    },
    { threshold: 0.15 },
  );
  grids.forEach((g) => io.observe(g));
}
