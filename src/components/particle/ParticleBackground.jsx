import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const darkModeRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle data
    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.5,
      });
    }

    const isDarkMode = () =>
      document.documentElement.classList.contains('dark');

    // MutationObserver to detect dark mode change
    const observer = new MutationObserver(() => {
      darkModeRef.current = isDarkMode();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Start with current mode
    darkModeRef.current = isDarkMode();

    const animate = () => {
      const isDark = darkModeRef.current;

      // Background
      ctx.fillStyle = isDark ? '#000000' : '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Fixed color #878787 for all particles and lines
      const baseColor = 'rgba(135, 135, 135'; // #878787

      // Draw all particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, `${baseColor}, ${particle.opacity})`);
        gradient.addColorStop(1, `${baseColor}, 0)`);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Center dot
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `${baseColor}, ${particle.opacity + 0.4})`;
        ctx.fill();

        // Lines
        particles.forEach((other, j) => {
          if (i !== j) {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 180) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              const lineOpacity = (180 - dist) / 180 * 0.6;
              ctx.strokeStyle = `${baseColor}, ${lineOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;