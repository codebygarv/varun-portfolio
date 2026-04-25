import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioContent, type Project } from '../constants/content';
import { ArrowLeft, ExternalLink, Calendar, Briefcase, Monitor, Cpu, Play, Image as ImageIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import MediaModal from '../components/MediaModal';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioContent.projects.find(p => p.id === id) as Project | undefined;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff' }}>Project not found</h2>
        <button 
          onClick={() => navigate('/portfolio')}
          style={{ 
            marginTop: '20px', 
            padding: '10px 20px', 
            background: 'var(--accent)', 
            border: 'none', 
            borderRadius: '8px',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/portfolio')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 16px',
          borderRadius: '99px',
          color: 'var(--text-subtle)',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '30px',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s'
        }}
        whileHover={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}
      >
        <ArrowLeft size={16} />
        Back to Gallery
      </motion.button>

      {/* Hero Section */}
      <section style={{ position: 'relative', marginBottom: '60px' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="project-hero"
           style={{
             boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}20`
           }}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, var(--bg) 0%, transparent 100%), linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 60%)`
          }} />

          <div className="project-hero-content" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            height: '100%'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span style={{
                background: `${project.color}25`,
                color: project.color,
                padding: '6px 14px',
                borderRadius: '99px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                border: `1px solid ${project.color}40`,
                display: 'inline-block',
                marginBottom: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                {project.type} Project
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-title-responsive"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '8px',
                lineHeight: 1.1
              }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: 'clamp(14px, 4vw, 18px)',
                color: 'var(--text-subtle)',
                maxWidth: '650px',
                lineHeight: 1.5,
                margin: 0
              }}
            >
              {project.description}
            </motion.p>
          </div>

        </motion.div>
      </section>

      {/* Media Modal */}
      <MediaModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        media={project.media}
        title={project.title}
        color={project.color}
      />

      {/* Grid Content */}
      <div className="project-details-grid">
        {/* Left Column: Contributions */}
        <div className="project-main-content" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <section>
            <h2 style={{ 
              fontSize: '1.8rem', 
              fontFamily: 'Space Grotesk, sans-serif', 
              color: '#fff', 
              marginBottom: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{ width: '30px', height: '2px', background: project.color }}></span>
              Technical Contributions
            </h2>


            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {project.technicalContributions?.map((category, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    padding: '24px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}

                >
                  <h3 style={{ color: project.color, fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {category.category}
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '20px' }}>
                    {category.points.map((point, pIdx) => (
                      <li key={pIdx} style={{ color: 'var(--text-subtle)', lineHeight: 1.6, fontSize: '15px' }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Metadata */}
        <div className="project-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{
            background: 'var(--bg-card)',
            padding: '30px',
            borderRadius: '24px',
            border: '1px solid var(--border)',
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '24px', fontFamily: 'Space Grotesk, sans-serif' }}>Project Info</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Briefcase size={20} color={project.color} />
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Role</p>
                  <p style={{ color: '#fff', fontWeight: 600 }}>{project.role}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <Calendar size={20} color={project.color} />
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Duration</p>
                  <p style={{ color: '#fff', fontWeight: 600 }}>{project.duration}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <Monitor size={20} color={project.color} />
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Platforms</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                    {project.platforms.map(p => (
                      <span key={p} style={{ fontSize: '13px', color: '#fff', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>{p}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <Cpu size={20} color={project.color} />
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tech Stack</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                    {project.techStack.map(tech => (
                      <span key={tech} style={{
                        fontSize: '13px',
                        color: '#fff',
                        background: 'rgba(255,255,255,0.05)',
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <button 
                  onClick={() => {
                    if (project.media) {
                      setIsModalOpen(true);
                    } else {
                      window.open(project.link, '_blank');
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    width: '100%',
                    padding: '18px',
                    borderRadius: '16px',
                    background: project.color,
                    color: '#fff',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                    fontFamily: 'Space Grotesk, sans-serif',
                    boxShadow: `0 10px 30px ${project.color}40`,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 20px 40px ${project.color}60`;
                    e.currentTarget.style.filter = 'brightness(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = `0 10px 30px ${project.color}40`;
                    e.currentTarget.style.filter = 'brightness(1)';
                  }}
                >
                  {project.media ? (project.media.type === 'images' ? <ImageIcon size={20} /> : <Play size={20} fill="currentColor" />) : <ExternalLink size={20} />}
                  {project.media ? (project.media.type === 'images' ? 'Launch Gallery' : 'Watch Showcase') : 'Explore Project'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
