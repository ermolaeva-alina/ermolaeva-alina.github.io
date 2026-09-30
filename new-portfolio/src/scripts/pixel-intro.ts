// Pixel intro for the tile grids (like reactbits.dev "Pixel Swap"):
// when a grid scrolls into view, its empty tiles pop in one by one in random order
// (grow from 35% and fade in), then every widget on the grid is revealed the same way,
// pixel by pixel on the same 58px grid.
//
// Mark a grid with data-pixel-intro; its direct children with class "tile" are the
// tiles, every other direct child is a widget. The head script in Base.astro hides
// them before first paint (html.pixel-intro) unless the user prefers reduced motion.

const PITCH = 58; // 56px tile + 2px gap
const TOTAL = 1400; // ms, the whole wave for one grid
const PIXEL = 450; // ms, one pixel opening
const FROM = 0.35; // start size of a pixel, relative to its final size
const WIDGETS_AT = 0.45; // widgets start when the tile wave is this far along
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
const ease = (t: number) => 1 - (1 - t) ** 5; // ≈ the same curve, for the JS-driven pixels

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

// A widget is revealed through a clip-path made of square cells, each growing
// around its centre. The cell grid extends one cell past the box so shadows and
// overflowing parts (the tilted photos) are revealed too.
function playWidget(el: HTMLElement, start: number) {
  const cols = Math.ceil(el.offsetWidth / PITCH) + 2;
  const rows = Math.ceil(el.offsetHeight / PITCH) + 2;
  const cells: { x: number; y: number; delay: number }[] = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      cells.push({ x: (c - 1) * PITCH, y: (r - 1) * PITCH, delay: Math.random() * (TOTAL - PIXEL) });

  const t0 = performance.now() + start;
  const frame = (now: number) => {
    let d = '';
    let done = true;
    for (const cell of cells) {
      const t = (now - t0 - cell.delay) / PIXEL;
      if (t <= 0) { done = false; continue; }
      if (t < 1) done = false;
      const size = (FROM + (1 - FROM) * ease(Math.min(t, 1))) * PITCH + 1; // +1 closes the seams
      const x = cell.x + (PITCH - size) / 2;
      const y = cell.y + (PITCH - size) / 2;
      d += `M${x.toFixed(1)} ${y.toFixed(1)}h${size.toFixed(1)}v${size.toFixed(1)}h${(-size).toFixed(1)}Z`;
    }
    if (done) {
      el.style.clipPath = '';
      return;
    }
    el.style.clipPath = d ? `path('${d}')` : 'inset(50%)';
    requestAnimationFrame(frame);
  };
  el.style.clipPath = 'inset(50%)';
  requestAnimationFrame(frame);
}

function play(grid: HTMLElement) {
  const kids = [...grid.children] as HTMLElement[];
  const tiles = kids.filter((k) => k.classList.contains('tile'));
  const widgets = kids.filter((k) => !k.classList.contains('tile'));
  widgets.forEach((w) => (w.style.clipPath = 'inset(50%)'));
  grid.dataset.pixelIntro = 'played'; // lifts the CSS that hides everything before the start
  playTiles(tiles);
  widgets.forEach((w) => playWidget(w, TOTAL * WIDGETS_AT));
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
