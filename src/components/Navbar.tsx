import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Certificates', path: '/certificates' },
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
    <>
      <style>{`
        .navbar-nav {
          position: sticky;
          top: 0;
          right: 0;
          z-index: 50;
          display: flex;
          justify-content: flex-end;
          padding: 16px 24px;
          background: rgba(17,17,19,0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          width: 100%;
          overflow: visible;
        }

        .navbar-list {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-list li {
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .navbar-nav {
            justify-content: flex-start;
            overflow-x: auto;
            white-space: nowrap;
            padding: 16px;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none;  /* IE/Edge */
          }

          .navbar-nav::-webkit-scrollbar {
            display: none; /* Chrome/Safari/Opera */
          }
        }
      `}</style>

      <motion.nav
        ref={navRef}
        className="navbar-nav rounded-t-3xl"
      >
        <ul className="navbar-list">
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
    </>
  );
};

export default Navbar;