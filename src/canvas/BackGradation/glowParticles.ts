const PI2 = Math.PI * 2;

class GlowParticle {
  x: number;
  y: number;
  radius: number;
  rgb: {
    r: number;
    g: number;
    b: number;
  };

  vx: number;
  vy: number;

  sinValue: number;

  constructor(
    x: number,
    y: number,
    radius: number,
    rgb: {
      r: number;
      g: number;
      b: number;
    }
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;

    this.vx = Math.random() * 3;
    this.vy = Math.random() * 3;

    this.sinValue = Math.random();
  }

  animate(
    ctx: CanvasRenderingContext2D,
    stageWidth: number,
    stageHeight: number
  ) {
    this.sinValue += 0.01;

    this.radius += Math.sin(this.sinValue);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 5;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 5;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 1;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 1;
    }

    ctx.beginPath();

    const { r, g, b } = this.rgb;

    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius
    );

    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.4)`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();
  }
}

export default GlowParticle;
