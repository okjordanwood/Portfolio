import SimplexNoise from "../../utils/SimplexNoise";
import {
  TAU,
  rand,
  randRange,
  fadeInOut,
  cos,
  sin,
  lerp,
} from "../../utils/util";

const particleCount = 1000;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const rangeY = 100;
const baseTTL = 80;
const rangeTTL = 150;
const baseSpeed = 0.3;
const rangeSpeed = 2.5;
const baseRadius = 1;
const rangeRadius = 4;
const baseHue = 220;
const rangeHue = 100;
const noiseSteps = 8;
const xOff = 0.0008;
const yOff = 0.0008;
const zOff = 0.0002;
const backgroundColor = "hsla(260,40%,5%,1)";

let canvas, ctx, center, tick, simplex, particleProps;

function createCanvas(container) {
  canvas = {
    a: document.createElement("canvas"),
    b: document.createElement("canvas"),
  };

  canvas.b.style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  `;

  container.appendChild(canvas.b);

  ctx = {
    a: canvas.a.getContext("2d"),
    b: canvas.b.getContext("2d"),
  };

  center = [0, 0];
}

function resize() {
  const { innerWidth, innerHeight } = window;

  canvas.a.width = canvas.b.width = innerWidth;
  canvas.a.height = canvas.b.height = innerHeight;

  center[0] = 0.5 * innerWidth;
  center[1] = 0.5 * innerHeight;
}

function initParticles() {
  tick = 0;
  simplex = new SimplexNoise();
  particleProps = new Float32Array(particlePropsLength);

  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    initParticle(i);
  }
}

function initParticle(i) {
  const x = rand(canvas.a.width);
  const y = center[1] + randRange(rangeY);
  const vx = 0;
  const vy = 0;
  const life = 0;
  const ttl = baseTTL + rand(rangeTTL);
  const speed = baseSpeed + rand(rangeSpeed);
  const radius = baseRadius + rand(rangeRadius);
  const hue = baseHue + rand(rangeHue);

  particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
}

function updateParticle(i) {
  const i2 = i + 1,
    i3 = i + 2,
    i4 = i + 3,
    i5 = i + 4,
    i6 = i + 5,
    i7 = i + 6,
    i8 = i + 7,
    i9 = i + 8;

  const x = particleProps[i];
  const y = particleProps[i2];
  const n = simplex.noise(x * xOff, y * yOff + tick * zOff) * noiseSteps * TAU;
  const vx = lerp(particleProps[i3], cos(n), 0.075);
  const vy = lerp(particleProps[i4], sin(n), 0.075);
  const life = particleProps[i5];
  const ttl = particleProps[i6];
  const speed = particleProps[i7];
  const x2 = x + vx * speed;
  const y2 = y + vy * speed;
  const radius = particleProps[i8];
  const hue = particleProps[i9];

  drawParticle(x, y, x2, y2, life, ttl, radius, hue);

  particleProps[i] = x2;
  particleProps[i2] = y2;
  particleProps[i3] = vx;
  particleProps[i4] = vy;
  particleProps[i5] = life + 1;

  if (checkBounds(x2, y2) || life > ttl) initParticle(i);
}

function drawParticle(x, y, x2, y2, life, ttl, radius, hue) {
  ctx.a.save();
  ctx.a.lineCap = "round";
  ctx.a.lineWidth = radius;
  ctx.a.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
  ctx.a.beginPath();
  ctx.a.moveTo(x, y);
  ctx.a.lineTo(x2, y2);
  ctx.a.stroke();
  ctx.a.restore();
}

function checkBounds(x, y) {
  return x > canvas.a.width || x < 0 || y > canvas.a.height || y < 0;
}

function renderGlow() {
  ctx.b.save();
  ctx.b.filter = "blur(4px) brightness(180%)";
  ctx.b.globalCompositeOperation = "lighter";
  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();

  ctx.b.save();
  ctx.b.filter = "blur(2px) brightness(150%)";
  ctx.b.globalCompositeOperation = "lighter";
  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();
}

function renderToScreen() {
  ctx.b.save();
  ctx.b.globalCompositeOperation = "lighter";
  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();
}

function draw() {
  tick++;
  ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);

  ctx.b.fillStyle = backgroundColor;
  ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height);

  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    updateParticle(i);
  }

  renderGlow();
  renderToScreen();

  requestAnimationFrame(draw);
}

export function startSwirl(container) {
  createCanvas(container);
  resize();
  initParticles();
  draw();
  window.addEventListener("resize", resize);
}
