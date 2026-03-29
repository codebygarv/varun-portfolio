import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

interface LoadingScreenProps {
  isLoading: boolean;
}

const letters = ['V', 'A', 'R', 'U', 'N'];

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading && progressRef.current) {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.8, ease: 'power2.inOut', transformOrigin: 'left center' }
      );
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } }}
          style={{
            background: 'radial-gradient(ellipse at 40% 50%, #EDE9FE 0%, #F5F4F2 55%, #F0EFED 100%)',
          }}
        >
          {/* Soft glow orb */}
          <div style={{
            position: 'absolute',
            width: '420px',
            height: '420px',
            background: 'radial-gradient(circle, rgba(140,82,255,0.10) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }} />

          {/* Second orb - blue tint */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(0,123,255,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '30%',
            right: '20%',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }} />

          {/* Letters */}
          <div style={{ display: 'flex', gap: '2px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '4rem',
                  fontWeight: 700,
                  letterSpacing: '-0.05em',
                  color: '#1a1a2e',
                  display: 'inline-block',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.28em',
              color: '#9ca3af',
              textTransform: 'uppercase',
              marginBottom: '52px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Game Developer
          </motion.p>

          {/* Progress bar */}
          <div style={{
            width: '160px',
            height: '2px',
            background: 'rgba(0,0,0,0.08)',
            borderRadius: '99px',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
          }}>
            <div
              ref={progressRef}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #8c52ff, #007bff)',
                borderRadius: '99px',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
