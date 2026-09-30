// Dock magnification for the navbar (like reactbits.dev "Dock"): the labels grow
// the closer they are to the pointer, and settle back on a spring when it leaves.
// Only the labels scale (a transform), so the pill and its glass never resize.

const MAGNIFY = 1.35; // scale of the label right under the pointer
const DISTANCE = 200; // px, beyond this a label stays at 1
const SPRING = { mass: 0.1, stiffness: 150, damping: 12 }; // reactbits defaults
const STEP = 1 / 240; // s, spring integration step

export function initDock() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-dock]').forEach((list) => {
    const labels = [...list.querySelectorAll<HTMLElement>('.label')];
    const state = labels.map(() => ({ x: 1, v: 0, target: 1 }));
    let pointerX: number | null = null;
    let raf = 0;
    let last = 0;

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      let moving = false;
      labels.forEach((el, i) => {
        const s = state[i];
        if (pointerX === null) s.target = 1;
        else {
          const r = el.parentElement!.getBoundingClientRect();
          const d = Math.abs(pointerX - (r.left + r.width / 2));
          s.target = 1 + (MAGNIFY - 1) * Math.max(0, 1 - d / DISTANCE);
        }
        for (let t = 0; t < dt; t += STEP) {
          const a = (-SPRING.stiffness * (s.x - s.target) - SPRING.damping * s.v) / SPRING.mass;
          s.v += a * STEP;
          s.x += s.v * STEP;
        }
        if (Math.abs(s.x - s.target) > 0.0005 || Math.abs(s.v) > 0.001) moving = true;
        else { s.x = s.target; s.v = 0; }
        el.style.transform = s.x === 1 ? '' : `scale(${s.x.toFixed(4)})`;
      });
      raf = moving || pointerX !== null ? requestAnimationFrame(frame) : 0;
    };
    const start = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    list.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      pointerX = e.clientX;
      start();
    });
    list.addEventListener('pointerleave', () => {
      pointerX = null;
      start();
    });
  });
}
