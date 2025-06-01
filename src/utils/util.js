export const PI = Math.PI;
export const TAU = 2 * PI;
export const cos = Math.cos;
export const sin = Math.sin;
export const abs = Math.abs;
export const random = Math.random;

export const rand = (n) => n * random();
export const randRange = (n) => n - rand(2 * n);

export const fadeInOut = (t, m) => {
  const hm = 0.5 * m;
  return abs(((t + hm) % m) - hm) / hm;
};

export const lerp = (a, b, n) => (1 - n) * a + n * b;
