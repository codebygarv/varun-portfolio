import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, ArrowUpRight, Image as ImageIcon, LayoutGrid } from 'lucide-react';

import { portfolioContent, type Project } from '../constants/content';

gsap.registerPlugin(ScrollTrigger);

const filters = ['All', 'Professional', 'Personal'];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.23, 1, 0.32, 1],
        delay: (index % 3) * 0.05 
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/portfolio/${project.id}`)}
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1,
      }}
      whileHover={{ 
        y: -8,
        borderColor: `${project.color}40`,
        boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${project.color}20`,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
    >
      {/* Type badge */}
      <div style={{
          position: 'absolute', top: '16px', left: '16px', zIndex: 10,
          padding: '4px 12px',
          borderRadius: '99px',
          background: 'rgba(0,0,0,0.5)',
          fontSize: '10px', fontWeight: 700, color: '#fff',
          letterSpacing: '0.05em', textTransform: 'uppercase',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}>
          {project.type}
      </div>

      {/* Image container */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ 
            scale: hovered ? 1.1 : 1,
            filter: hovered ? 'brightness(0.9)' : 'brightness(0.8)'
          }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          // background: `linear-gradient(to top, var(--bg-card) 0%, transparent 60%)`,
          opacity: 0.8,
          zIndex: 1
        }} />
      </div>

      {/* Card content */}
      <div style={{ padding: '24px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <h3 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700, fontSize: '1.25rem',
            color: '#fff',
          }}>
            {project.title}
          </h3>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0, scale: hovered ? 1.2 : 1 }}
            style={{ color: project.color }}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        <p style={{ 
          fontSize: '14px', 
          color: 'var(--text-subtle)', 
          lineHeight: 1.6, 
          marginBottom: '20px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {project.description}
        </p>

        {/* Info Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '3px 8px', borderRadius: '4px' }}>
            {project.role}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '3px 8px', borderRadius: '4px' }}>
            {project.duration}
          </span>
        </div>

        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            paddingTop: '16px', 
            borderTop: '1px solid rgba(255,255,255,0.05)',
            margin: '0 -24px -24px',
            padding: '16px 24px',
          }}
        >
          <span style={{
            fontSize: '11px', fontWeight: 800, color: project.color,
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Explore Project
          </span>
          <ChevronRight size={16} color={project.color} />
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'image'>('grid');
  const navigate = useNavigate();


  const filtered = (activeFilter === 'All'
    ? portfolioContent.projects
    : portfolioContent.projects.filter(p => p.type === activeFilter)) as Project[];

  useEffect(() => {
    ScrollTrigger.refresh();
    window.scrollTo(0, 0);
  }, [activeFilter, viewMode]);

  return (
    <div>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '24px',
        marginBottom: '48px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-header section-header-responsive" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Projects</h1>
          <span className="section-divider" style={{ width: '80px', height: '4px', background: 'var(--accent)' }} />
          <p style={{ color: 'var(--text-subtle)', fontSize: '16px', marginTop: '16px', maxWidth: '600px', lineHeight: 1.6 }}>
            A showcase of my professional work and personal experiments in game development and interactive systems.
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ 
            display: 'flex', 
            background: 'rgba(255,255,255,0.03)', 
            padding: '4px', 
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <button 
            onClick={() => setViewMode('grid')}
            style={{
              padding: '8px 12px',
              borderRadius: '8px',
              background: viewMode === 'grid' ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none',
              color: viewMode === 'grid' ? '#fff' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 600,
              transition: 'all 0.3s'
            }}
          >
            <LayoutGrid size={16} />
            Details
          </button>

          <button 
            onClick={() => setViewMode('image')}
            style={{
              padding: '8px 12px',
              borderRadius: '8px',
              background: viewMode === 'image' ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none',
              color: viewMode === 'image' ? '#fff' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 600,
              transition: 'all 0.3s'
            }}
          >
            <ImageIcon size={16} />
            Imagemode
          </button>
        </motion.div>
      </div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}
      >
        {filters.map(filter => {
          const isActive = filter === activeFilter;
          return (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '10px 24px',
                borderRadius: '12px',
                fontSize: '13px', fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.02em',
                background: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.03)',
                border: isActive ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.08)',
                color: isActive ? '#fff' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                boxShadow: isActive ? '0 8px 16px rgba(140,82,255,0.25)' : 'none',
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
          key={`${activeFilter}-${viewMode}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className={viewMode === 'image' ? 'portfolio-grid-image' : 'portfolio-grid'}
        >
          {filtered.map((project, i) => (
            viewMode === 'image' ? (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                onClick={() => navigate(`/portfolio/${project.id}`)}
                className="image-mode-card"
                style={{
                  position: 'relative',
                  height: '400px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                }}
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  zIndex: 1
                }}>
                  <span style={{ 
                    fontSize: '10px', 
                    fontWeight: 800, 
                    color: project.color, 
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '4px'
                  }}>
                    {project.type}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 700 }}>{project.title}</h3>
                </div>
              </motion.div>
            ) : (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={i} 
              />
            )
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
