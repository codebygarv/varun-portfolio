import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  // GSAP scroll hide/show on desktop
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + 10) {
        setHidden(true);
      } else if (currentY < lastScrollY.current - 10) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate navbar hide/show
  useEffect(() => {
    if (!navRef.current) return;
    gsap.to(navRef.current, {
      y: hidden ? -80 : 0,
      opacity: hidden ? 0 : 1,
      duration: 0.4,
      ease: 'power3.out',
    });
  }, [hidden]);

  const activeItem = navItems.find(item => item.path === location.pathname) ?? navItems[0];

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
      style={{
        position: 'sticky',
        top: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '16px 24px',
        background: 'rgba(17,17,19,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
      className="rounded-t-3xl"
    >
      <ul style={{ display: 'flex', alignItems: 'center', gap: '6px', listStyle: 'none' }}>
        {navItems.map((item) => {
          const isActive = item.path === activeItem.path;
          return (
            <li key={item.name} style={{ position: 'relative' }}>
              <Link
                to={item.path}
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: 'Inter, sans-serif',
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  borderRadius: '100px',
                  zIndex: 1,
                  transition: 'color 0.25s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)';
                }}
                onMouseLeave={e => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)';
                }}
              >
                {/* Sliding active pill */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-pill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '100px',
                      background: 'rgba(140,82,255,0.15)',
                      border: '1px solid rgba(140,82,255,0.3)',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;