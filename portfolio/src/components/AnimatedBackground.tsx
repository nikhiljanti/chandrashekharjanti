import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  isDarkMode?: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDarkMode = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Just draw a static gradient if reduced motion is preferred
      const drawStatic = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        if (isDarkMode) {
          gradient.addColorStop(0, '#1e1b4b');    // deep indigo
          gradient.addColorStop(0.33, '#312e81'); // indigo-900
          gradient.addColorStop(0.67, '#4c1d95'); // violet-900
          gradient.addColorStop(1, '#0f172a');    // slate-900
        } else {
          gradient.addColorStop(0, '#dbeafe');    // blue-100
          gradient.addColorStop(0.33, '#e0e7ff'); // indigo-100
          gradient.addColorStop(0.67, '#ede9fe'); // violet-100
          gradient.addColorStop(1, '#f5f3ff');    // purple-50
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      };
      drawStatic();
      window.addEventListener('resize', drawStatic);
      return () => window.removeEventListener('resize', drawStatic);
    }

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Adjust particle count based on screen size (mobile vs desktop)
    const getParticleCount = () => window.innerWidth < 768 ? 50 : 100;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw(ctx: CanvasRenderingContext2D, isDarkMode: boolean) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Create a radial gradient for each particle with vibrant colors
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2);
        const darkColors = [
          'rgba(99, 102, 241, 0.6)',  // indigo
          'rgba(139, 92, 246, 0.6)',  // violet
          'rgba(236, 72, 153, 0.6)',  // pink
          'rgba(251, 146, 60, 0.6)',  // orange
          'rgba(34, 211, 238, 0.6)',  // cyan
        ];
        const lightColors = [
          'rgba(67, 56, 202, 0.5)',   // indigo-600
          'rgba(109, 40, 217, 0.5)',  // violet-600
          'rgba(219, 39, 119, 0.5)',  // pink-600
          'rgba(234, 88, 12, 0.5)',   // orange-600
          'rgba(8, 145, 178, 0.5)',   // cyan-600
        ];
        const colors = isDarkMode ? darkColors : lightColors;
        const color = colors[Math.floor((this.x + this.y) % colors.length)];
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const drawConnectingLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Opacity based on distance with colorful gradient
            const opacity = 0.2 * (1 - distance / 120);
            // Create gradient for lines
            const lineGradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            if (isDarkMode) {
              lineGradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`); // violet
              lineGradient.addColorStop(0.5, `rgba(236, 72, 153, ${opacity})`); // pink
              lineGradient.addColorStop(1, `rgba(34, 211, 238, ${opacity})`); // cyan
            } else {
              lineGradient.addColorStop(0, `rgba(109, 40, 217, ${opacity})`); // violet-600
              lineGradient.addColorStop(0.5, `rgba(219, 39, 119, ${opacity})`); // pink-600
              lineGradient.addColorStop(1, `rgba(8, 145, 178, ${opacity})`); // cyan-600
            }
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      // Beautiful colorful gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      if (isDarkMode) {
        gradient.addColorStop(0, '#1e1b4b');    // deep indigo
        gradient.addColorStop(0.25, '#312e81'); // indigo-900
        gradient.addColorStop(0.5, '#4c1d95');  // violet-900
        gradient.addColorStop(0.75, '#581c87'); // purple-900
        gradient.addColorStop(1, '#0f172a');    // slate-900
      } else {
        gradient.addColorStop(0, '#dbeafe');    // blue-100
        gradient.addColorStop(0.25, '#e0e7ff'); // indigo-100
        gradient.addColorStop(0.5, '#ede9fe');  // violet-100
        gradient.addColorStop(0.75, '#fae8ff'); // fuchsia-100
        gradient.addColorStop(1, '#f5f3ff');    // purple-50
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add colorful radial glows
      if (isDarkMode) {
        // Top-left glow (cyan-blue)
        const topLeftGradient = ctx.createRadialGradient(
          canvas.width * 0.2, canvas.height * 0.2, 0,
          canvas.width * 0.2, canvas.height * 0.2, canvas.width * 0.4
        );
        topLeftGradient.addColorStop(0, 'rgba(34, 211, 238, 0.15)'); // cyan
        topLeftGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = topLeftGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Bottom-right glow (pink-purple)
        const bottomRightGradient = ctx.createRadialGradient(
          canvas.width * 0.8, canvas.height * 0.8, 0,
          canvas.width * 0.8, canvas.height * 0.8, canvas.width * 0.4
        );
        bottomRightGradient.addColorStop(0, 'rgba(236, 72, 153, 0.12)'); // pink
        bottomRightGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = bottomRightGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Center glow (violet)
        const centerGradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width * 0.3
        );
        centerGradient.addColorStop(0, 'rgba(139, 92, 246, 0.08)'); // violet
        centerGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = centerGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // Light mode glows - more subtle
        // Top-left glow (cyan-blue)
        const topLeftGradient = ctx.createRadialGradient(
          canvas.width * 0.2, canvas.height * 0.2, 0,
          canvas.width * 0.2, canvas.height * 0.2, canvas.width * 0.4
        );
        topLeftGradient.addColorStop(0, 'rgba(6, 182, 212, 0.08)'); // cyan-500
        topLeftGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = topLeftGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Bottom-right glow (pink-purple)
        const bottomRightGradient = ctx.createRadialGradient(
          canvas.width * 0.8, canvas.height * 0.8, 0,
          canvas.width * 0.8, canvas.height * 0.8, canvas.width * 0.4
        );
        bottomRightGradient.addColorStop(0, 'rgba(219, 39, 119, 0.06)'); // pink-600
        bottomRightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = bottomRightGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Center glow (violet)
        const centerGradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width * 0.3
        );
        centerGradient.addColorStop(0, 'rgba(109, 40, 217, 0.05)'); // violet-600
        centerGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = centerGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx, isDarkMode);
      });

      drawConnectingLines();

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
};