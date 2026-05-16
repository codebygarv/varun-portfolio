import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  const activeItem = [...navItems].reverse().find(item => 
    item.path === '/' 
      ? location.pathname === '/' 
      : location.pathname.startsWith(item.path)
  ) ?? navItems[0];

  return (
    <motion.nav
      ref={navRef}
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