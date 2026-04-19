import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PageTransition from '../components/PageTransition';
import LoadingScreen from '../components/LoadingScreen';
import CustomCursor from '../components/CustomCursor';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Loading screen timer
    const timer = setTimeout(() => setIsLoading(false), 2200);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Noise texture overlay for depth */}
      <div className="noise-overlay" />

      {/* Loading screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Custom cursor */}
      <CustomCursor />

      <style>{`
        .layout-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding: 16px;
          gap: 24px;
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
          align-items: flex-start;
          padding-bottom: 96px;
        }
        @media (min-width: 768px) {
          .layout-wrapper { padding: 22px 38px; }
          .layout-wrapper .sidebar { width: 100%; }
        }
        @media (min-width: 1024px) {
          .layout-wrapper {
            flex-direction: row;
            padding: 30px 54px;
            padding-bottom: 40px;
          }
        }
        @media (min-width: 1280px) {
          .layout-wrapper { padding: 25px 60px; }
        }
      `}</style>

      <div
        className="layout-wrapper"
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease 0.1s' }}
      >
        <div className='sidebar-container'>
          <Sidebar />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            width: '100%',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '80vh',
          }}
        >
          <Navbar />
          <div className="main-content-container">
            <PageTransition>
              <Outlet />
            </PageTransition>
          </div>
        </div>
      </div>
    </>
  );

};

export default Layout;