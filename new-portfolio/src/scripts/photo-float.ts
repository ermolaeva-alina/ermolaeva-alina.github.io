// Photo stacks (the intro photos, Based in Prague): on hover the photos pop out
// one after another like reactbits.dev "Folder Float" — each rises from below,
// small and transparent, springs into its place, then drifts gently while hovered.
//
// Mark the hover area with data-photo-float and each photo with data-float-item.
// The photos keep their own rotation (transform); the pop uses the separate
// translate/scale properties, so both combine.

const OPEN = 520; // ms, one photo springing into place
const STAGGER = 45; // ms between photos
const FADE = 160; // ms
const FROM = 0.6; // start size
const SPRING = 'cubic-bezier(0.34, 1.57, 0.64, 1)'; // reactbits bounce 0.3

export function initPhotoFloat() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-photo-float]').forEach((area) => {
    if (area.dataset.photoFloat === 'ready') return;
    area.dataset.photoFloat = 'ready';
    const items = [...area.querySelectorAll<HTMLElement>('[data-float-item]')];
    let anims: Animation[] = [];

    area.addEventListener('pointerenter', () => {
      anims.forEach((a) => a.cancel());
      area.classList.add('is-floating');
      anims = items.flatMap((el, i) => {
        // The photos rotate around their top-left corner, so shift while shrunk
        // to keep each one growing out of its own centre
        const cx = el.offsetWidth / 2, cy = el.offsetHeight / 2;
        const lift = el.offsetHeight / 2; // starts half its height lower
        const delay = i * STAGGER;
        return [
          el.animate(
            [
              { translate: `${(cx * (1 - FROM)).toFixed(1)}px ${(cy * (1 - FROM) + lift).toFixed(1)}px`, scale: FROM },
              { translate: '0 0', scale: 1 },
            ],
            { duration: OPEN, delay, easing: SPRING, fill: 'backwards' },
          ),
          el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: FADE, delay, easing: 'ease', fill: 'backwards' }),
        ];
      });
    });
    area.addEventListener('pointerleave', () => area.classList.remove('is-floating'));
  });
}
