// Glass surface for the navbar and the chips (like reactbits.dev "Glass Surface"):
// the backdrop is bent at the edges by an SVG displacement map, with the red, green
// and blue channels shifted by slightly different amounts (a thin chromatic fringe).
//
// Mark an element with data-glass. When the browser can run an SVG filter as a
// backdrop-filter (Chromium), the element gets class "glass--svg" and its own filter;
// Safari and Firefox keep the element's plain CSS blur.

const P = {
  borderWidth: 0.07, // edge band, as a share of the short side
  brightness: 50, // %, grey of the flat middle of the map (no displacement)
  opacity: 0.93,
  blur: 11, // px, softens the edge band of the map
  displace: 1, // px, final blur of the bent image
  saturation: 1,
  distortionScale: -180,
  redOffset: 0,
  greenOffset: 10,
  blueOffset: 20,
};

const SVG_NS = 'http://www.w3.org/2000/svg';
let count = 0;

function supportsSvgBackdrop() {
  const ua = navigator.userAgent;
  if ((/Safari/.test(ua) && !/Chrome/.test(ua)) || /Firefox/.test(ua)) return false;
  const probe = document.createElement('div');
  probe.style.backdropFilter = 'url(#probe)';
  return probe.style.backdropFilter !== '';
}

// Map: red grows left→right, blue top→bottom (x and y displacement), grey flat middle
function displacementMap(w: number, h: number, radius: number) {
  const edge = Math.min(w, h) * (P.borderWidth * 0.5);
  const svg = `<svg viewBox="0 0 ${w} ${h}" xmlns="${SVG_NS}">
    <defs>
      <linearGradient id="r" x1="100%" y1="0%" x2="0%" y2="0%"><stop offset="0%" stop-color="#0000"/><stop offset="100%" stop-color="red"/></linearGradient>
      <linearGradient id="b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#0000"/><stop offset="100%" stop-color="blue"/></linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="black"/>
    <rect width="${w}" height="${h}" rx="${radius}" fill="url(#r)"/>
    <rect width="${w}" height="${h}" rx="${radius}" fill="url(#b)" style="mix-blend-mode:difference"/>
    <rect x="${edge}" y="${edge}" width="${w - edge * 2}" height="${h - edge * 2}" rx="${radius}" fill="hsl(0 0% ${P.brightness}% / ${P.opacity})" style="filter:blur(${P.blur}px)"/>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function channel(scale: number, matrix: string, name: string) {
  return `<feDisplacementMap in="SourceGraphic" in2="map" scale="${scale}" xChannelSelector="R" yChannelSelector="G" result="d${name}"/>
    <feColorMatrix in="d${name}" type="matrix" values="${matrix}" result="${name}"/>`;
}

function createFilter(id: string) {
  const holder = document.createElementNS(SVG_NS, 'svg');
  holder.setAttribute('aria-hidden', 'true');
  holder.setAttribute('width', '0');
  holder.setAttribute('height', '0');
  holder.style.position = 'absolute';
  holder.innerHTML = `<defs><filter id="${id}" color-interpolation-filters="sRGB" x="0%" y="0%" width="100%" height="100%">
    <feImage x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map"/>
    ${channel(P.distortionScale + P.redOffset, '1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0', 'red')}
    ${channel(P.distortionScale + P.greenOffset, '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0', 'green')}
    ${channel(P.distortionScale + P.blueOffset, '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0', 'blue')}
    <feBlend in="red" in2="green" mode="screen" result="rg"/>
    <feBlend in="rg" in2="blue" mode="screen" result="output"/>
    <feGaussianBlur in="output" stdDeviation="${P.displace}"/>
  </filter></defs>`;
  document.body.append(holder);
  return holder.querySelector('feImage')!;
}

export function initGlass() {
  if (!supportsSvgBackdrop()) return;
  document.querySelectorAll<HTMLElement>('[data-glass]').forEach((el) => {
    if (el.classList.contains('glass--svg')) return;
    const id = `glass-${++count}`;
    const image = createFilter(id);
    const update = () => {
      // offsetWidth ignores transforms (the pixel intro scales the chips in)
      const w = el.offsetWidth, h = el.offsetHeight;
      if (!w || !h) return;
      const radius = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0;
      image.setAttribute('href', displacementMap(w, h, Math.min(radius, h / 2)));
    };
    update();
    new ResizeObserver(update).observe(el);
    el.style.backdropFilter = `url(#${id}) saturate(${P.saturation})`;
    el.style.setProperty('-webkit-backdrop-filter', `url(#${id}) saturate(${P.saturation})`);
    el.classList.add('glass--svg');
  });
}
