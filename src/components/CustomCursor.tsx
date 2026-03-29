import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    // Snap dot immediately
    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.08, ease: 'power2.out' });
    };

    // Laggy ring follows with lerp
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      gsap.set(ring, { x: ringX, y: ringY });
      requestAnimationFrame(animateRing);
    };

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMove);

    // Add hover detection to all interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    const raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`cursor-container ${isHovering ? 'cursor-hover' : ''}`}>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
};

export default CustomCursor;
