import { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let stars: { x: number; y: number; size: number; opacity: number; speed: number; twinkleSpeed: number; twinkleOffset: number }[] = [];
    let shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; angle: number; life: number; maxLife: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 3000);
      stars = Array.from({ length: count }, () => {
        const isBright = Math.random() < 0.15;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: isBright ? Math.random() * 3 + 1.5 : Math.random() * 1.8 + 0.3,
          opacity: isBright ? Math.random() * 0.4 + 0.6 : Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.02 + 0.005,
          twinkleSpeed: isBright ? Math.random() * 0.05 + 0.02 : Math.random() * 0.03 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2,
        };
      });
    };

    const spawnShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.003) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 4 + 3,
          opacity: 1,
          angle: (Math.random() * 30 + 15) * (Math.PI / 180),
          life: 0,
          maxLife: Math.random() * 60 + 30,
        });
      }
    };

    let time = 0;
    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars with twinkle
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        const alpha = star.opacity * twinkle;
        
        // Star glow
        if (star.size > 1.2) {
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
          gradient.addColorStop(0, `rgba(180, 190, 255, ${alpha * 0.3})`);
          gradient.addColorStop(1, 'rgba(180, 190, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Star core
        ctx.fillStyle = `rgba(220, 225, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Shooting stars
      spawnShootingStar();
      shootingStars = shootingStars.filter((s) => {
        s.life++;
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity = 1 - s.life / s.maxLife;

        if (s.opacity <= 0) return false;

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        gradient.addColorStop(0, `rgba(180, 190, 255, 0)`);
        gradient.addColorStop(1, `rgba(220, 225, 255, ${s.opacity * 0.8})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(document.documentElement);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="space-bg-wrapper">
      {/* Deep space gradient */}
      <div className="space-gradient" />
      
      {/* Nebula effects */}
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />
      
      {/* Animated stars canvas */}
      <canvas ref={canvasRef} className="space-stars-canvas" />
    </div>
  );
};

export default SpaceBackground;
