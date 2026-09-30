// Liquid glass for the navbar and the chips — Figma's GLASS effect, Apple-style:
// the element is a slab of glass with a rounded bevel along its edge. Through the
// bevel the backdrop is magnified inward (refraction), the colour channels split a
// little (dispersion), a light catches the rim (specular), and the whole backdrop
// is slightly frosted. The flat middle stays clear.
//
// Mark an element with data-glass="<preset>". The presets are the Figma values.
// Needs an SVG filter as a backdrop-filter, which only Chromium runs; Safari and
// Firefox keep the element's plain CSS blur.

interface Glass {
  frost: number; // Figma "Frost", px blur of the backdrop
  refraction: number; // 0–1, how strongly the bevel bends the backdrop
  depth: number; // px, width of the bevel
  lightAngle: number; // deg, 0 = from the right, clockwise
  lightIntensity: number; // 0–1
  dispersion: number; // 0–1, colour split through the bevel
}

const PRESETS: Record<string, Glass> = {
  // Figma: Navbar Container 553:618207
  nav: { frost: 1, refraction: 1, depth: 23, lightAngle: -45, lightIntensity: 0.8, dispersion: 1 },
  // Figma: Component 4/5 chips
  chip: { frost: 4, refraction: 0.53, depth: 20, lightAngle: 320, lightIntensity: 0.6, dispersion: 0.27 },
};

const SVG_NS = 'http://www.w3.org/2000/svg';
const BEND = 1.1; // px of shift per px of depth at full refraction
const SPLIT = 0.12; // red/blue shift difference at full dispersion
let count = 0;

function supportsSvgBackdrop() {
  const ua = navigator.userAgent;
  if ((/Safari/.test(ua) && !/Chrome/.test(ua)) || /Firefox/.test(ua)) return false;
  const probe = document.createElement('div');
  probe.style.backdropFilter = 'url(#probe)';
  return probe.style.backdropFilter !== '';
}

// Signed distance to a rounded rect centred at 0,0 (negative inside) and the
// outward normal of its nearest edge.
function roundedRect(px: number, py: number, hw: number, hh: number, r: number) {
  const qx = Math.abs(px) - (hw - r);
  const qy = Math.abs(py) - (hh - r);
  let nx: number, ny: number, d: number;
  if (qx > 0 && qy > 0) {
    const l = Math.hypot(qx, qy);
    d = l - r;
    nx = qx / l;
    ny = qy / l;
  } else if (qx > qy) {
    d = qx - r;
    nx = 1;
    ny = 0;
  } else {
    d = qy - r;
    nx = 0;
    ny = 1;
  }
  return { d, nx: nx * Math.sign(px || 1), ny: ny * Math.sign(py || 1) };
}

// Two bitmaps for the glass layer: the element plus a margin m on every side, so
// the rim can reach the backdrop just outside the element.
//  map  — displacement: red = x shift, green = y shift, 128 = none
//  spec — white rim light with alpha
function maps(w: number, h: number, m: number, radius: number, g: Glass, scale: number) {
  const LW = w + 2 * m, LH = h + 2 * m;
  const W = Math.round(LW * scale), H = Math.round(LH * scale);
  const bevel = Math.min(g.depth, h / 2, w / 2);
  const lx = Math.cos((g.lightAngle * Math.PI) / 180);
  const ly = Math.sin((g.lightAngle * Math.PI) / 180);
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const disp = ctx.createImageData(W, H);
  const spec = ctx.createImageData(W, H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const px = (x + 0.5) / scale - LW / 2, py = (y + 0.5) / scale - LH / 2;
      const { d, nx, ny } = roundedRect(px, py, w / 2, h / 2, radius);
      const inside = -d; // px from the edge
      const i = (y * W + x) * 4;
      // Bevel: steepest at the rim, flat at `bevel` px in. Like a glass paperweight,
      // the rim shows what lies beyond the edge, squeezed in: the steeper the
      // surface, the further out it looks.
      const t = Math.min(Math.max(inside / bevel, 0), 1);
      const bend = d > 0 ? 0 : (1 - t) ** 1.5; // 1 at the rim → 0 inside
      // Map value v gives a shift of scale·(v − 0.5); look outward (+normal)
      disp.data[i] = 128 + nx * bend * 127;
      disp.data[i + 1] = 128 + ny * bend * 127;
      disp.data[i + 2] = 128;
      disp.data[i + 3] = 255;
      // Rim light on the sides facing the light, weaker on the opposite ones
      const facing = nx * lx + ny * ly;
      const lit = facing > 0 ? facing : -facing * 0.5;
      const rim = Math.exp(-Math.max(inside, 0) / 1.1); // thin bright line at the edge
      const glow = 0.18 * bend * bend; // soft sheen across the bevel
      const a = g.lightIntensity * lit * lit * (rim + glow);
      spec.data[i] = spec.data[i + 1] = spec.data[i + 2] = 255;
      spec.data[i + 3] = d <= 0 ? Math.min(255, a * 255) : 0;
    }
  }
  ctx.putImageData(disp, 0, 0);
  const mapUrl = canvas.toDataURL();
  ctx.putImageData(spec, 0, 0);
  const specUrl = canvas.toDataURL();
  return { mapUrl, specUrl };
}

// Largest shift of any colour channel, px
const reach = (g: Glass) => BEND * g.depth * g.refraction * (1 + SPLIT * g.dispersion);

function createFilter(id: string, g: Glass) {
  const shift = 2 * BEND * g.depth * g.refraction; // map 0…1 → ±shift/2 px
  const split = SPLIT * g.dispersion;
  const channel = (k: number, matrix: string, name: string) =>
    `<feDisplacementMap in="frost" in2="map" scale="${(shift * (1 + k * split)).toFixed(2)}" xChannelSelector="R" yChannelSelector="G" result="d${name}"/>
     <feColorMatrix in="d${name}" type="matrix" values="${matrix}" result="${name}"/>`;
  const holder = document.createElementNS(SVG_NS, 'svg');
  holder.setAttribute('aria-hidden', 'true');
  holder.setAttribute('width', '0');
  holder.setAttribute('height', '0');
  holder.style.position = 'absolute';
  holder.innerHTML = `<defs><filter id="${id}" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="${g.frost / 2}" result="frost"/>
    <feImage class="glass-map" x="0" y="0" preserveAspectRatio="none" result="map"/>
    ${channel(-1, '1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0', 'red')}
    ${channel(0, '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0', 'green')}
    ${channel(1, '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0', 'blue')}
    <feBlend in="red" in2="green" mode="screen" result="rg"/>
    <feBlend in="rg" in2="blue" mode="screen" result="glass"/>
    <feImage class="glass-spec" x="0" y="0" preserveAspectRatio="none" result="spec"/>
    <feComposite in="spec" in2="glass" operator="over"/>
  </filter></defs>`;
  document.body.append(holder);
  return {
    filter: holder.querySelector('filter')!,
    map: holder.querySelector<SVGFEImageElement>('.glass-map')!,
    spec: holder.querySelector<SVGFEImageElement>('.glass-spec')!,
  };
}

export function initGlass() {
  if (!supportsSvgBackdrop()) return;
  document.querySelectorAll<HTMLElement>('[data-glass]').forEach((el) => {
    const g = PRESETS[el.dataset.glass || ''];
    if (!g || el.classList.contains('glass--svg')) return;
    const id = `glass-${++count}`;
    const images = createFilter(id, g);
    const m = Math.ceil(reach(g)) + 2;
    // The glass is a layer behind the content, m px bigger than the element on every
    // side (so it sees the backdrop around it) and clipped back to the element shape.
    // It takes over the element's fill, so the backdrop it bends is untinted.
    const cs = getComputedStyle(el);
    const layer = document.createElement('span');
    layer.className = 'glass-layer';
    layer.setAttribute('aria-hidden', 'true');
    Object.assign(layer.style, {
      position: 'absolute',
      inset: `${-m}px`,
      zIndex: '-1',
      pointerEvents: 'none',
      background: cs.backgroundColor,
      backdropFilter: `url(#${id})`,
    });
    layer.style.setProperty('-webkit-backdrop-filter', `url(#${id})`);
    if (cs.position === 'static') el.style.position = 'relative';
    el.style.isolation = 'isolate';
    el.style.background = 'transparent';
    el.style.backdropFilter = 'none';
    el.style.setProperty('-webkit-backdrop-filter', 'none');
    el.prepend(layer);

    let size = '';
    const update = () => {
      // offsetWidth ignores transforms (the pixel intro scales the chips in)
      const w = el.offsetWidth, h = el.offsetHeight;
      if (!w || !h || size === `${w}x${h}`) return;
      size = `${w}x${h}`;
      const radius = Math.min(parseFloat(cs.borderTopLeftRadius) || 0, h / 2, w / 2);
      layer.style.clipPath = `inset(${m}px round ${radius}px)`;
      const { mapUrl, specUrl } = maps(w, h, m, radius, g, Math.min(devicePixelRatio || 1, 2));
      // Sizes in px: percentages would resolve against the 0×0 holder <svg>
      for (const n of [images.filter, images.map, images.spec]) {
        n.setAttribute('width', String(w + 2 * m));
        n.setAttribute('height', String(h + 2 * m));
      }
      images.map.setAttribute('href', mapUrl);
      images.spec.setAttribute('href', specUrl);
    };
    update();
    new ResizeObserver(update).observe(el);
    el.classList.add('glass--svg');
  });
}
