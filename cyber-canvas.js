/**
 * Cyber Security Portfolio - Interactive Background Canvas
 * Draws a clean, high-performance, relaxing particle/data-drift background.
 * Interactive features:
 *  - Floating digital particles and binary bits (extremely low CPU usage, 0% lag)
 *  - Mouse ambient lighting (glow effect beneath cursor)
 *  - Mouse proximity glow (particles glow brighter near mouse)
 *  - Mouse click bursts (spawns temporary floating binary data)
 */

class Particle {
    constructor(x, y, vx, vy, size, color, isBinary = false) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
        this.color = color;
        this.baseSize = size;
        this.alpha = Math.random() * 0.4 + 0.1; // Random starting opacity
        this.targetAlpha = this.alpha;
        this.decay = 0; // Used for temporary click-burst particles
        this.isBinary = isBinary;
        this.char = Math.random() > 0.5 ? '0' : '1';
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.005;
    }

    update(width, height, mouseX, mouseY) {
        // Move particle
        this.x += this.vx;
        this.y += this.vy;

        // Subtle side-to-side wobble
        this.wobble += this.wobbleSpeed;
        this.x += Math.sin(this.wobble) * 0.15;

        // Apply decay if temporary click burst particle
        if (this.decay > 0) {
            this.alpha -= this.decay;
        } else {
            // Permanent particle screen wrapping / resetting at bottom
            if (this.y < -20) {
                this.y = height + 20;
                this.x = Math.random() * width;
            }
            if (this.x < -20) this.x = width + 20;
            if (this.x > width + 20) this.x = -20;

            // Proximity interaction with mouse (glow brighter)
            if (mouseX !== null && mouseY !== null) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 180;

                if (dist < maxDist) {
                    // Increase target alpha based on proximity
                    const factor = (maxDist - dist) / maxDist;
                    this.targetAlpha = Math.min(0.8, this.alpha + factor * 0.5);
                    // Gentle attraction to mouse
                    this.x += (dx / dist) * factor * 0.3;
                    this.y += (dy / dist) * factor * 0.3;
                } else {
                    this.targetAlpha = this.alpha;
                }
            } else {
                this.targetAlpha = this.alpha;
            }
        }
    }

    draw(ctx) {
        if (this.alpha <= 0) return;

        ctx.save();
        ctx.globalAlpha = this.decay > 0 ? this.alpha : (this.decay === 0 ? this.targetAlpha : this.alpha);
        ctx.fillStyle = this.color;

        if (this.isBinary) {
            ctx.font = `${Math.floor(this.size * 5) + 8}px monospace`;
            ctx.fillText(this.char, this.x, this.y);
        } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
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

        // Low particle counts for smooth, lag-free performance
        this.maxParticles = 35;
        this.baseSpeed = -0.3; // Gentle upward drift

        this.mouseX = null;
        this.mouseY = null;
        this.mouseActive = false;
        this.isScrolling = false;
        this.scrollTimeout = null;

        this.init();
        this.bindEvents();
        this.animate();
    }

    init() {
        this.resize();

        // Dynamically set particle count for mobile vs desktop
        const area = this.canvas.width * this.canvas.height;
        this.maxParticles = Math.min(45, Math.floor(area / 40000));
        if (this.maxParticles < 15) this.maxParticles = 15; // Mobile limit

        this.particles = [];
        const themeColors = [
            'rgba(129, 140, 248, 0.55)', // Soft purple
            'rgba(56, 189, 248, 0.55)',  // Soft sky blue
            'rgba(52, 211, 153, 0.45)'   // Soft green
        ];

        for (let i = 0; i < this.maxParticles; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            // Drifts upwards
            const vx = (Math.random() - 0.5) * 0.15;
            const vy = (Math.random() * 0.5 + 0.2) * this.baseSpeed;
            const size = Math.random() * 2 + 1.2;
            const color = themeColors[Math.floor(Math.random() * themeColors.length)];
            const isBinary = Math.random() > 0.65; // Some are binary characters, some are dots

            this.particles.push(new Particle(x, y, vx, vy, size, color, isBinary));
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

        window.addEventListener('scroll', () => {
            this.isScrolling = true;
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                this.isScrolling = false;
            }, 100);
        }, { passive: true });

        // Click burst effect
        window.addEventListener('click', (e) => {
            // Ignore click if it's on a button, link or modal element
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.cert-card') || e.target.closest('.modal-content-wrapper')) {
                return;
            }
            this.spawnBurst(e.clientX, e.clientY);
        });
    }

    spawnBurst(x, y) {
        const burstCount = 10;
        const colors = [
            'rgba(56, 189, 248, 0.75)', // Soft sky blue
            'rgba(129, 140, 248, 0.75)'  // Soft purple
        ];
        for (let i = 0; i < burstCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 1.5 + 0.5;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            const size = Math.random() * 1.5 + 1.0;
            const color = colors[Math.floor(Math.random() * colors.length)];
            // Click bursts are always binary digits
            const p = new Particle(x, y, vx, vy, size, color, true);
            p.decay = Math.random() * 0.015 + 0.015; // Fades out
            this.tempParticles.push(p);
        }
    }

    animate() {
        if (this.isScrolling) {
            requestAnimationFrame(() => this.animate());
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw ambient cursor spotlight
        if (this.mouseActive && this.mouseX !== null && this.mouseY !== null) {
            const glowSize = 320;
            const grad = this.ctx.createRadialGradient(
                this.mouseX, this.mouseY, 15,
                this.mouseX, this.mouseY, glowSize
            );
            grad.addColorStop(0, 'rgba(129, 140, 248, 0.07)');
            grad.addColorStop(0.5, 'rgba(56, 189, 248, 0.02)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

            this.ctx.fillStyle = grad;
            this.ctx.beginPath();
            this.ctx.arc(this.mouseX, this.mouseY, glowSize, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Update and draw permanent floating nodes
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

        requestAnimationFrame(() => this.animate());
    }
}

// Run background after DOM loading
document.addEventListener('DOMContentLoaded', () => {
    new CyberBackground();
});
