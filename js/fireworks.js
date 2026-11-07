/**
 * High-performance Canvas Engine for:
 * 1. Flying Sky Lanterns (Akash Deep) drifting gracefully into the night sky
 * 2. Floating Festive Golden Embers & Sparks
 * 3. Matchstick Strike Sparks
 * 4. Zamin Chakri (Whirling Ground Spinner)
 * 5. Golden Anar (Flowerpot Spark Fountain)
 * 6. Sky Rockets & Starbursts
 * 7. Phuljhadi (Handheld Sparkler)
 * 8. Interactive Click-to-Burst anywhere on screen
 */

class FireworksCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.rockets = [];
    this.lanterns = [];
    this.embers = [];
    this.showLanterns = true;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initLanterns(24);
    this.initEmbers(35);
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  /**
   * Flying Paper Sky Lanterns (Akash Deep) drifting slowly upwards with warm candle glow
   */
  initLanterns(count = 20) {
    this.lanterns = [];
    for (let i = 0; i < count; i++) {
      this.lanterns.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: 14 + Math.random() * 22,
        speedY: 0.35 + Math.random() * 0.65,
        swaySpeed: 0.01 + Math.random() * 0.02,
        swayRange: 15 + Math.random() * 25,
        swayOffset: Math.random() * Math.PI * 2,
        flickerOffset: Math.random() * 10,
        opacity: 0.35 + Math.random() * 0.55,
        hue: Math.random() > 0.4 ? 35 : (Math.random() > 0.5 ? 20 : 45) // warm amber, gold, saffron
      });
    }
  }

  /**
   * Floating festive golden embers floating in the night air
   */
  initEmbers(count = 35) {
    this.embers = [];
    for (let i = 0; i < count; i++) {
      this.embers.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: 0.8 + Math.random() * 1.8,
        speedY: 0.2 + Math.random() * 0.4,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: 0.2 + Math.random() * 0.6,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }
  }

  /**
   * Sparks emitted specifically when match strikes the friction strip
   */
  spawnMatchSparks(x, y, count = 35) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 0.1) + (Math.random() * Math.PI * 0.8);
      const speed = 3 + Math.random() * 7;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 3,
        vy: -Math.abs(Math.sin(angle) * speed) - Math.random() * 4,
        color: Math.random() > 0.3 ? '#fef08a' : (Math.random() > 0.5 ? '#f59e0b' : '#ffedd5'),
        size: 1.5 + Math.random() * 2.5,
        alpha: 1,
        decay: 0.025 + Math.random() * 0.035,
        gravity: 0.18
      });
    }
  }

  /**
   * Launch a sky rocket from (startX, startY) to target
   */
  launchRocket(startX, startY, targetX, targetY, color = null) {
    const festiveColors = ['#f59e0b', '#ec4899', '#a855f7', '#10b981', '#ef4444', '#38bdf8', '#fbbf24', '#ffedd5'];
    const chosenColor = color || festiveColors[Math.floor(Math.random() * festiveColors.length)];

    if (window.festiveAudio) {
      window.festiveAudio.playRocketLaunch();
    }

    this.rockets.push({
      x: startX,
      y: startY,
      targetX: targetX,
      targetY: targetY,
      color: chosenColor,
      speed: 13 + Math.random() * 4,
      trail: []
    });
  }

  createExplosion(x, y, color, count = 70) {
    if (window.festiveAudio) {
      window.festiveAudio.playFireworkBurst();
    }

    const festivePalette = ['#f59e0b', '#fbbf24', '#f43f5e', '#a855f7', '#38bdf8', '#34d399', '#ffffff'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 7.5;
      const pColor = color || festivePalette[Math.floor(Math.random() * festivePalette.length)];

      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: pColor,
        size: 2 + Math.random() * 2.5,
        alpha: 1,
        decay: 0.012 + Math.random() * 0.018,
        gravity: 0.06
      });
    }
  }

  /**
   * Golden Anar (Flowerpot Fountain of sparks)
   */
  startAnar(x = this.width / 2, y = this.height - 90, durationMs = 3500) {
    if (window.festiveAudio) {
      window.festiveAudio.playFireworkBurst();
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      if (Date.now() - startTime > durationMs) {
        clearInterval(interval);
        return;
      }

      for (let i = 0; i < 9; i++) {
        const spreadAngle = -Math.PI / 2 + (Math.random() - 0.5) * 0.55;
        const speed = 8 + Math.random() * 12;
        this.particles.push({
          x: x + (Math.random() - 0.5) * 16,
          y: y,
          vx: Math.cos(spreadAngle) * speed,
          vy: Math.sin(spreadAngle) * speed,
          color: Math.random() > 0.4 ? '#fef08a' : (Math.random() > 0.5 ? '#f59e0b' : '#ffedd5'),
          size: 1.8 + Math.random() * 2,
          alpha: 1,
          decay: 0.025 + Math.random() * 0.03,
          gravity: 0.22
        });
      }
    }, 40);
  }

  /**
   * Zamin Chakri (Whirling Ground Spinner)
   */
  startChakri(centerX = this.width / 2, centerY = this.height / 2 + 50, durationMs = 3500) {
    if (window.festiveAudio) {
      window.festiveAudio.playFireworkBurst();
    }

    let angle = 0;
    const startTime = Date.now();
    const interval = setInterval(() => {
      if (Date.now() - startTime > durationMs) {
        clearInterval(interval);
        return;
      }

      angle += 0.45;
      for (let arm = 0; arm < 4; arm++) {
        const currentAngle = angle + (arm * (Math.PI / 2));
        const speed = 4 + Math.random() * 5.5;
        this.particles.push({
          x: centerX + Math.cos(currentAngle) * 22,
          y: centerY + Math.sin(currentAngle) * 22,
          vx: Math.cos(currentAngle) * speed,
          vy: Math.sin(currentAngle) * speed,
          color: arm % 2 === 0 ? '#fbbf24' : '#ec4899',
          size: 2 + Math.random() * 2,
          alpha: 1,
          decay: 0.03,
          gravity: 0.02
        });
      }
    }, 35);
  }

  startSparkler(x = this.width / 2, y = this.height / 2, count = 16) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 4.5;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: Math.random() > 0.3 ? '#ffffff' : '#fbbf24',
        size: 1.5 + Math.random() * 1.5,
        alpha: 1,
        decay: 0.04 + Math.random() * 0.04,
        gravity: 0.08
      });
    }
  }

  triggerGrandShow(durationSec = 6) {
    const end = Date.now() + durationSec * 1000;
    const showInterval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(showInterval);
        return;
      }
      const x = Math.random() * this.width;
      const targetY = 80 + Math.random() * (this.height * 0.45);
      this.launchRocket(x, this.height, x + (Math.random() - 0.5) * 150, targetY);
    }, 280);
  }

  drawLantern(l) {
    const time = Date.now() * 0.002;
    const currentX = l.x + Math.sin(time * l.swaySpeed * 100 + l.swayOffset) * l.swayRange;
    const flicker = 0.85 + Math.sin(time * 5 + l.flickerOffset) * 0.15;

    this.ctx.save();
    this.ctx.globalAlpha = l.opacity * flicker;

    // Ambient lantern glow
    const glowGrad = this.ctx.createRadialGradient(currentX, l.y, l.size * 0.2, currentX, l.y, l.size * 2.2);
    glowGrad.addColorStop(0, `hsla(${l.hue}, 100%, 60%, 0.4)`);
    glowGrad.addColorStop(0.5, `hsla(${l.hue}, 90%, 45%, 0.12)`);
    glowGrad.addColorStop(1, 'transparent');
    this.ctx.fillStyle = glowGrad;
    this.ctx.beginPath();
    this.ctx.arc(currentX, l.y, l.size * 2.2, 0, Math.PI * 2);
    this.ctx.fill();

    // Lantern paper body (trapezoid-like rounded lantern)
    const w = l.size;
    const h = l.size * 1.35;
    const topW = w * 0.8;
    const botW = w * 0.65;

    this.ctx.fillStyle = `hsl(${l.hue}, 95%, 52%)`;
    this.ctx.beginPath();
    this.ctx.moveTo(currentX - topW / 2, l.y - h / 2);
    this.ctx.lineTo(currentX + topW / 2, l.y - h / 2);
    this.ctx.lineTo(currentX + botW / 2, l.y + h / 2);
    this.ctx.lineTo(currentX - botW / 2, l.y + h / 2);
    this.ctx.closePath();
    this.ctx.fill();

    // Inner burning candle flame core
    this.ctx.fillStyle = '#ffffff';
    this.ctx.beginPath();
    this.ctx.ellipse(currentX, l.y + h * 0.2, w * 0.22, h * 0.25, 0, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.restore();
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Deep midnight canvas clear with motion trail
    this.ctx.fillStyle = 'rgba(5, 4, 10, 0.22)';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // 1. Render Background Sky Lanterns (Flying Lamps)
    if (this.showLanterns) {
      for (let l of this.lanterns) {
        l.y -= l.speedY;
        if (l.y < -l.size * 3) {
          l.y = this.height + l.size * 2;
          l.x = Math.random() * this.width;
        }
        this.drawLantern(l);
      }
    }

    // 2. Render Ambient Golden Embers
    for (let em of this.embers) {
      em.y -= em.speedY;
      em.x += em.speedX;
      if (em.y < 0) em.y = this.height;
      if (em.x < 0) em.x = this.width;
      if (em.x > this.width) em.x = 0;

      this.ctx.save();
      this.ctx.globalAlpha = em.opacity * (0.7 + Math.sin(Date.now() * em.pulseSpeed) * 0.3);
      this.ctx.fillStyle = '#fbbf24';
      this.ctx.beginPath();
      this.ctx.arc(em.x, em.y, em.size, 0, Math.PI * 2);
      this.ctx.shadowBlur = 6;
      this.ctx.shadowColor = '#f59e0b';
      this.ctx.fill();
      this.ctx.restore();
    }

    // 3. Update & draw ascending rockets
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i];
      const dx = r.targetX - r.x;
      const dy = r.targetY - r.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 15 || r.y <= r.targetY) {
        this.createExplosion(r.targetX, r.targetY, r.color);
        this.rockets.splice(i, 1);
        continue;
      }

      const vx = (dx / dist) * r.speed;
      const vy = (dy / dist) * r.speed;

      r.x += vx;
      r.y += vy;

      this.ctx.beginPath();
      this.ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
      this.ctx.fillStyle = '#fef08a';
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = '#f59e0b';
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    // 4. Update & draw explosion / sparkler particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 6;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();
      this.ctx.restore();
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.fireworks = new FireworksCanvas('fireworks-canvas');
});
