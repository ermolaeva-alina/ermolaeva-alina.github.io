// Dot-matrix screens from the "My story" section (Figma grids of 4px dots).
// Each screen: grid size, dot pitch, and the dots that are lit ([row, col]).
// To draw a new frame for an animation, add another list of lit dots with the same grid.

export type Dot = [row: number, col: number];

export interface DotScreen {
  rows: number;
  cols: number;
  width: number; // grid box in px (Figma)
  height: number;
  pitchX: number; // distance between dot origins
  pitchY: number;
  led: Dot; // green status LED
  empty: Dot[]; // cells without a dot (rounded corners)
  on: Dot[]; // lit dots — the picture
}

// Expand "row: col-col, col" shorthand into [row, col] pairs
const rows = (spec: Record<number, string>): Dot[] =>
  Object.entries(spec).flatMap(([r, cols]) =>
    cols.split(',').flatMap((part) => {
      const [a, b = a] = part.trim().split('-').map(Number);
      return Array.from({ length: b - a + 1 }, (_, i) => [Number(r), a + i] as Dot);
    }),
  );

// Figma 768:566405 — heart, 42 × 80 grid
export const heart: DotScreen = {
  rows: 42,
  cols: 80,
  width: 398,
  height: 204,
  pitchX: 5,
  pitchY: 5,
  led: [1, 1],
  empty: [[0, 0], [0, 79], [40, 0], [40, 79]],
  on: rows({
    15: '35-38, 42-45',
    16: '34-39, 41-46',
    17: '33-47',
    18: '33-47',
    19: '33-47',
    20: '33-47',
    21: '33-47',
    22: '34-46',
    23: '35-45',
    24: '36-44',
    25: '37-43',
    26: '38-42',
    27: '39-41',
    28: '40',
  }),
};

// Figma 752:564242 — two eyes, 31 × 68 grid (flexible cells: pitch is fractional)
export const eyes: DotScreen = {
  rows: 31,
  cols: 68,
  width: 340,
  height: 150,
  pitchX: 5.0147,
  pitchY: 4.871,
  led: [1, 1],
  empty: [[0, 0], [0, 67], [30, 0]],
  on: rows({
    8: '27-29, 37-39',
    9: '26-30, 36-40',
    10: '25-31, 35-41',
    11: '25-31, 35-41',
    12: '25-31, 35-41',
    13: '25-31, 35-41',
    14: '25-31, 35-41',
    15: '25-31, 35-41',
    16: '25-31, 35-41',
    17: '26-30, 36-40',
    18: '27-29, 37-39',
  }),
};

// Figma 770:559275 — cocktail glass, 33 × 18 grid
export const glass: DotScreen = {
  rows: 33,
  cols: 18,
  width: 90,
  height: 166,
  pitchX: 5,
  pitchY: 5,
  led: [1, 1],
  empty: [[0, 0], [0, 17], [32, 0], [32, 17]],
  on: rows({
    12: '2-5',
    13: '2-6, 8-9',
    14: '2-9',
    15: '2-9',
    16: '3-9',
    17: '4-9, 12-15',
    18: '5-9, 11-15',
    19: '8-15',
    20: '8-15',
    21: '8-14',
    22: '8-13',
    23: '8-12',
    24: '8-9',
    25: '8-9',
    26: '8-9',
    27: '8-9',
    28: '6-11',
    29: '5-12',
    30: '5-12',
  }),
};
