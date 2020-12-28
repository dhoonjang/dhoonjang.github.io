import GlowParticle from "./glowParticles";

const COLORS = [
  { r: 34, g: 13, b: 56 },
  { r: 40, g: 24, b: 96 },
  { r: 56, g: 18, b: 28 },
  { r: 56, g: 40, b: 27 },
  { r: 44, g: 66, b: 21 },
];

class BackGradation {
  rootElement: HTMLElement;

  canvas: HTMLCanvasElement;
  pixelRatio: number;
  totalParticles: number;
  ctx: CanvasRenderingContext2D | null;

  particles: any[];
  maxRadius: number;
  minRadius: number;

  stageWidth: number = document.body.clientWidth;
  stageHeight: number = document.body.clientHeight;

  constructor(ref: React.RefObject<HTMLDivElement>) {
    this.rootElement = ref.current ? ref.current : document.body;

    this.canvas = document.createElement("canvas");
    ref.current?.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.totalParticles = 8;
    this.particles = [];
    this.maxRadius = 1000;
    this.minRadius = 500;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = this.rootElement.clientWidth;
    this.stageHeight = this.rootElement.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx?.scale(this.pixelRatio, this.pixelRatio);

    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; i < this.totalParticles; i++) {
      const item = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        COLORS[curColor]
      );

      if (++curColor >= COLORS.length) curColor = 0;

      this.particles[i] = item;
    }
  }

  animate() {
    if (!this.ctx) return;
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
  }
}

export default BackGradation;
