/**
 * Cyber Security Portfolio - Interactive Background Canvas
 * Draws a clean, high-performance, responsive particle-connection web (neural net / network packets).
 * Interactive features:
 *  - Particle connection web
 *  - Mouse attraction (particles are gently pulled towards the cursor)
 *  - Mouse ambient lighting (glow effect beneath cursor)
 *  - Mouse click bursts (spawns temporary floating packets)
 */

class Particle {
    constructor(x, y, vx, vy, size, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
        this.color = color;
        this.baseSize = size;
        this.alpha = 1;
        this.decay = 0; // Used for temporary click-burst particles
    }

    update(width, height, mouseX, mouseY) {
        // Move particle
        this.x += this.vx;
        this.y += this.vy;

        // Apply decay if temporary
        if (this.decay > 0) {
            this.alpha -= this.decay;
        }

        // Boundary reflection for permanent particles
        if (this.decay === 0) {
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Clamp to boundary to prevent drift issues
            this.x = Math.max(0, Math.min(width, this.x));
            this.y = Math.max(0, Math.min(height, this.y));
        }

        // Interactive mouse gravity effect
        if (mouseX !== null && mouseY !== null) {
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const maxDist = 200;
            if (dist < maxDist) {
                // Stronger pull when further out, weakening as they arrive
                const force = (maxDist - dist) / maxDist;
                this.x += (dx / dist) * force * 0.45;
                this.y += (dy / dist) * force * 0.45;
            }
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

class CyberBackground {
    constructor() {
        this.canvas = document.getElementById('bg-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.tempParticles = [];

        // Config settings
        this.maxParticles = 90;
        this.connectionDist = 150;
        this.baseSpeed = 0.4;

        this.mouseX = null;
        this.mouseY = null;
        this.mouseActive = false;

        this.init();
        this.bindEvents();
        this.animate();
    }

    init() {
        this.resize();

        // Adjust particle density based on screen area
        const area = this.canvas.width * this.canvas.height;
        this.maxParticles = Math.min(130, Math.floor(area / 16000));
        if (this.maxParticles < 30) this.maxParticles = 30; // Mobile safety

        this.particles = [];
        const themeColors = [
            'rgba(99, 102, 241, 0.45)', // Indigo
            'rgba(6, 182, 212, 0.45)',  // Cyan
            'rgba(139, 92, 246, 0.4)'    // Violet
        ];

        for (let i = 0; i < this.maxParticles; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            const vx = (Math.random() - 0.5) * this.baseSpeed;
            const vy = (Math.random() - 0.5) * this.baseSpeed;
            const size = Math.random() * 2 + 1.2;
            const color = themeColors[Math.floor(Math.random() * themeColors.length)];

            this.particles.push(new Particle(x, y, vx, vy, size, color));
        }
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.init();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.mouseActive = true;
        });

        window.addEventListener('mouseleave', () => {
            this.mouseX = null;
            this.mouseY = null;
            this.mouseActive = false;
        });

        // Trigger packet burst animation on click
        window.addEventListener('click', (e) => {
            // Ignore click if it's on a button, link or modal element
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.cert-card') || e.target.closest('.modal-content-wrapper')) {
                return;
            }
            this.spawnBurst(e.clientX, e.clientY);
        });
    }

    spawnBurst(x, y) {
        const burstCount = 14;
        const colors = [
            'rgba(6, 182, 212, 0.75)', // Cyan
            'rgba(99, 102, 241, 0.75)'  // Indigo
        ];
        for (let i = 0; i < burstCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 2.2 + 0.8;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            const size = Math.random() * 2.2 + 1.2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const p = new Particle(x, y, vx, vy, size, color);
            p.decay = Math.random() * 0.018 + 0.012; // Gradual fade
            this.tempParticles.push(p);
        }
    }

    drawConnections() {
        const allParticles = [...this.particles, ...this.tempParticles];
        const length = allParticles.length;

        for (let i = 0; i < length; i++) {
            const p1 = allParticles[i];

            // Connect node to active mouse cursor
            if (this.mouseActive && this.mouseX !== null && this.mouseY !== null) {
                const dx = this.mouseX - p1.x;
                const dy = this.mouseY - p1.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.connectionDist) {
                    const alpha = (1 - dist / this.connectionDist) * 0.22;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(this.mouseX, this.mouseY);

                    const grad = this.ctx.createLinearGradient(p1.x, p1.y, this.mouseX, this.mouseY);
                    grad.addColorStop(0, p1.color.replace(/[\d.]+\)$/, `${alpha})`));
                    grad.addColorStop(1, `rgba(6, 182, 212, ${alpha * 0.4})`);

                    this.ctx.strokeStyle = grad;
                    this.ctx.lineWidth = 0.9;
                    this.ctx.stroke();
                }
            }

            // Connect node to other nodes
            for (let j = i + 1; j < length; j++) {
                const p2 = allParticles[j];
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.connectionDist) {
                    const alpha = (1 - dist / this.connectionDist) * 0.14;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);

                    const grad = this.ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                    grad.addColorStop(0, p1.color.replace(/[\d.]+\)$/, `${alpha})`));
                    grad.addColorStop(1, p2.color.replace(/[\d.]+\)$/, `${alpha})`));

                    this.ctx.strokeStyle = grad;
                    this.ctx.lineWidth = 0.7;
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw ambient cursor spotlight
        if (this.mouseActive && this.mouseX !== null && this.mouseY !== null) {
            const glowSize = 360;
            const grad = this.ctx.createRadialGradient(
                this.mouseX, this.mouseY, 15,
                this.mouseX, this.mouseY, glowSize
            );
            grad.addColorStop(0, 'rgba(99, 102, 241, 0.065)');
            grad.addColorStop(0.5, 'rgba(6, 182, 212, 0.02)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

            this.ctx.fillStyle = grad;
            this.ctx.beginPath();
            this.ctx.arc(this.mouseX, this.mouseY, glowSize, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Update and draw permanent background nodes
        this.particles.forEach(p => {
            p.update(this.canvas.width, this.canvas.height, this.mouseX, this.mouseY);
            p.draw(this.ctx);
        });

        // Update and draw click-burst nodes
        for (let i = this.tempParticles.length - 1; i >= 0; i--) {
            const p = this.tempParticles[i];
            p.update(this.canvas.width, this.canvas.height, this.mouseX, this.mouseY);
            p.draw(this.ctx);

            if (p.alpha <= 0.01) {
                this.tempParticles.splice(i, 1);
            }
        }

        // Draw lines between proximate nodes
        this.drawConnections();

        requestAnimationFrame(() => this.animate());
    }
}

// Run canvas background after DOM loading
document.addEventListener('DOMContentLoaded', () => {
    new CyberBackground();
});
