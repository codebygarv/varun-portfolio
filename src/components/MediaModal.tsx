import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Loader2 } from 'lucide-react';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  media?: {
    readonly type: 'video' | 'youtube' | 'images';
    readonly url?: string;
    readonly urls?: readonly string[];
  };
  title: string;
  color: string;
}

const MediaModal: React.FC<MediaModalProps> = ({ isOpen, onClose, media, title, color }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
      setIsLoaded(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getYoutubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&modestbranding=1&rel=0` : url;
  };

  const getDriveEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      return url.replace('/view', '/preview').replace('?usp=sharing', '');
    }
    return url;
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (media && media.urls) {
      setIsLoaded(false);
      setCurrentIndex((prev) => (prev + 1) % media.urls!.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (media && media.urls) {
      setIsLoaded(false);
      setCurrentIndex((prev) => (prev - 1 + media.urls!.length) % media.urls!.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !media) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, media]);

  if (!media) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(5, 5, 8, 0.96)', // Much higher opacity to hide "dirty" background
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '20px',
          }}
          onClick={onClose}
        >
          {/* Header Bar - More like a cinematic floating bar */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              zIndex: 10000,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pointerEvents: 'none',
              padding:'10px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ 
                    color: color, 
                    fontSize: '11px', 
                    fontWeight: 800, 
                    textTransform: 'uppercase', 
                    letterSpacing: '3px',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>
                    {media.type === 'images' ? 'Gallery Experience' : 'Media Preview'}
                </span>
                <h3 style={{ 
                    color: '#fff', 
                    fontSize: '1.25rem', 
                    fontWeight: 700, 
                    margin: 0, 
                    fontFamily: 'Space Grotesk, sans-serif',
                    textShadow: '0 2px 20px rgba(0,0,0,0.8)'
                }}>
                    {title} {media.type === 'images' && <span style={{ opacity: 0.5, fontSize: '0.8em', marginLeft: '10px' }}>{currentIndex + 1} / {media.urls?.length}</span>}
                </h3>
            </div>

            <button
                onClick={onClose}
                style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(10px)',
                    pointerEvents: 'auto',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}
            >
                <X size={24} />
            </button>
          </motion.div>

          {/* Main Modal Content Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            style={{
              width: '100%',
              maxWidth: '900px',
              height: 'auto',
              maxHeight: '75vh',
              aspectRatio: media.type === 'images' ? 'unset' : '16/9',
              position: 'relative',
              borderRadius: '24px',
              background: '#111113', // Matches --bg-surface
              overflow: 'hidden',
              boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05), 0 0 40px ${color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading Spinner */}
            {!isLoaded && (
                <div style={{ position: 'absolute', zIndex: 1, color: color }}>
                    <Loader2 size={40} className="animate-spin" />
                </div>
            )}

            {media.type === 'youtube' && (
                <iframe
                    width="100%"
                    height="100%"
                    src={getYoutubeEmbedUrl(media.url || '')}
                    onLoad={() => setIsLoaded(true)}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: 'none', width: '100%', height: '100%', opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
                />
            )}

            {media.type === 'video' && (
                <iframe
                    src={getDriveEmbedUrl(media.url || '')}
                    onLoad={() => setIsLoaded(true)}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    style={{ border: 'none', width: '100%', height: '100%', opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
                    title="Drive video player"
                />
            )}

            {media.type === 'images' && media.urls && (
                <div style={{ width: '100%', height: '100%', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={media.urls[currentIndex]}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            onLoad={() => setIsLoaded(true)}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </AnimatePresence>

                    {/* Image-specific Navigation Controls */}
                    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px' }}>
                        <button
                            onClick={handlePrev}
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#fff',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s',
                                pointerEvents: 'auto',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = color; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.3)'; e.currentTarget.style.color = '#fff'; }}
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            onClick={handleNext}
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#fff',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s',
                                pointerEvents: 'auto',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = color; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.3)'; e.currentTarget.style.color = '#fff'; }}
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>

                    {/* Bottom Indicators */}
                    <div style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '10px',
                        padding: '10px 20px',
                        background: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '99px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        zIndex: 20
                    }}>
                        {media.urls.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); setIsLoaded(false); }}
                            style={{
                                width: idx === currentIndex ? '24px' : '6px',
                                height: '6px',
                                borderRadius: '3px',
                                background: idx === currentIndex ? color : 'rgba(255,255,255,0.2)',
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        />
                        ))}
                    </div>
                </div>
            )}
          </motion.div>

          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MediaModal;
