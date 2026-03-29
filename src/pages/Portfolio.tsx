import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const filters = ['All', 'Unreal Engine', 'Unity', 'VR', 'Level Design'];

const projects = [
  {
    title: 'Neon Cybernetic',
    category: 'Unreal Engine',
    tags: ['UE5', 'Lumen', 'Nanite', 'C++'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
    desc: 'A cyberpunk action-RPG featuring dynamic Lumen lighting, procedural city generation, and real-time ray-traced reflections.',
    featured: true,
    color: '#8c52ff',
  },
  {
    title: 'Fantasy World',
    category: 'Level Design',
    tags: ['UE5', 'World Building', 'Open World'],
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop',
    desc: 'An expansive open-world RPG with hand-crafted biomes, dynamic weather systems, and adaptive AI-driven NPC behavior.',
    featured: false,
    color: '#4ade80',
  },
  {
    title: 'Space Shooter 2D',
    category: 'Unity',
    tags: ['Unity', 'C#', 'Mobile', '2D'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    desc: 'A fast-paced mobile shooter with procedurally generated waves, physics-based destruction, and global leaderboards.',
    featured: false,
    color: '#00d4ff',
  },
  {
    title: 'VR Escape Room',
    category: 'VR',
    tags: ['Unity', 'XR Toolkit', 'VR', 'Puzzle'],
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop',
    desc: 'An immersive VR puzzler with intuitive hand interactions, spatial audio design, and progressively complex logic challenges.',
    featured: false,
    color: '#FEDF9E',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.65,
        ease: 'power3.out',
        delay: (index % 2) * 0.12,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 86%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? `${project.color}40` : 'var(--border)'}`,
        boxShadow: hovered ? `0 12px 48px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}20` : '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'border-color 0.35s, box-shadow 0.35s, transform 0.35s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div style={{
          position: 'absolute', top: '14px', left: '14px', zIndex: 10,
          padding: '4px 10px',
          borderRadius: '99px',
          background: 'rgba(140,82,255,0.85)',
          fontSize: '10px', fontWeight: 700, color: '#fff',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 0 16px rgba(140,82,255,0.6)',
        }}>
          ✦ Featured
        </div>
      )}

      {/* Image container */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            filter: hovered ? 'brightness(0.6)' : 'brightness(0.75)',
          }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
          opacity: hovered ? 1 : 0.6,
          transition: 'opacity 0.4s',
        }} />

        {/* Hover action button */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex', gap: '12px',
              }}
            >
              {[{ icon: ExternalLink, label: 'View' }, { icon: Github, label: 'Code' }].map(({ icon: Icon, label }) => (
                <motion.button
                  key={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '99px',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    fontSize: '12px', fontWeight: 600,
                    cursor: 'none',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  <Icon size={13} />
                  {label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card content */}
      <div ref={contentRef} style={{ padding: '20px' }}>
        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: '3px 9px',
              borderRadius: '99px',
              fontSize: '10px', fontWeight: 600,
              color: project.color,
              background: `${project.color}15`,
              border: `1px solid ${project.color}25`,
              letterSpacing: '0.04em',
            }}>
              {tag}
            </span>
          ))}
        </div>

        <h3 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 700, fontSize: '1.1rem',
          color: hovered ? '#fff' : 'rgba(255,255,255,0.9)',
          marginBottom: '8px',
          transition: 'color 0.25s',
        }}>
          {project.title}
        </h3>

        <p style={{ fontSize: '13px', color: 'var(--text-subtle)', lineHeight: 1.7, marginBottom: '14px' }}>
          {project.desc}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            {project.category}
          </span>
          <motion.span
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ color: project.color, display: 'flex', alignItems: 'center' }}
          >
            <ChevronRight size={16} />
          </motion.span>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [activeFilter]);

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '36px' }}
      >
        <h1 className="section-header" style={{ fontSize: '2.2rem' }}>Portfolio</h1>
        <span className="section-divider" />
        <p style={{ color: 'var(--text-subtle)', fontSize: '14px', marginTop: '4px' }}>
          A selection of games, interactive experiences, and technical demos.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.45 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}
      >
        {filters.map(filter => {
          const isActive = filter === activeFilter;
          return (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: '7px 18px',
                borderRadius: '99px',
                fontSize: '12px', fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.03em',
                background: isActive ? 'rgba(140,82,255,0.2)' : 'rgba(255,255,255,0.04)',
                border: isActive ? '1px solid rgba(140,82,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
                color: isActive ? '#c4a9ff' : 'var(--text-muted)',
                cursor: 'none',
                transition: 'all 0.25s',
                boxShadow: isActive ? '0 0 16px rgba(140,82,255,0.2)' : 'none',
              }}
            >
              {filter}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
