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
      {/* Subtle noise texture for tactile depth */}
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
          gap: 20px;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          align-items: flex-start;
          padding-bottom: 80px;
        }
        @media (min-width: 768px) {
          .layout-wrapper {
            padding: 28px 30px;
            padding-bottom: 80px;
          }
        }
        @media (min-width: 1024px) {
          .layout-wrapper {
            flex-direction: row;
            padding: 26px 36px;
            padding-bottom: 36px;
          }
        }
        @media (min-width: 1280px) {
          .layout-wrapper { padding: 30px 52px; }
        }
      `}</style>

      <div
        className="layout-wrapper"
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.55s ease 0.1s' }}
      >
        <Sidebar />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            width: '100%',
            background: '#FAFAF9',
            border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '80vh',
            boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
          }}
        >
          <Navbar />
          <div className="layout-content-inner" style={{ flex: 1, paddingBottom: '48px' }}>
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