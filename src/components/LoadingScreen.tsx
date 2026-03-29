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
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }}
          style={{
            background: 'radial-gradient(ellipse at center, #100820 0%, #080808 70%)',
          }}
        >
          {/* Glow orb */}
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(140,82,255,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }} />

          {/* Letters */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '32px' }}>
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '4rem',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  color: '#fff',
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
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            Game Developer
          </motion.p>

          {/* Progress bar */}
          <div style={{
            width: '180px',
            height: '1px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '99px',
            overflow: 'hidden',
          }}>
            <div
              ref={progressRef}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #8c52ff, #00d4ff)',
                borderRadius: '99px',
                boxShadow: '0 0 12px rgba(140,82,255,0.8)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
