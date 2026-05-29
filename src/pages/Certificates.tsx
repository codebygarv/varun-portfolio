import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye, ArrowUpRight } from 'lucide-react';
import { portfolioContent } from '../constants/content';
import MediaModal from '../components/MediaModal';

interface CertificateCardProps {
  cert: {
    readonly id: string;
    readonly title: string;
    readonly issuer: string;
    readonly issueDate: string;
    readonly pdfUrl: string;
    readonly previewImage: string;
  };
  index: number;
  onView: () => void;
}

const CertificateCard = ({ cert, index, onView }: CertificateCardProps) => {
  const [hovered, setHovered] = useState(false);

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
      onClick={onView}
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        zIndex: 1,
        cursor: 'pointer',
      }}
      whileHover={{
        y: -8,
        borderColor: 'rgba(140, 82, 255, 0.4)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(140, 82, 255, 0.2)',
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
    >
      {/* PDF Document Preview container */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden', background: '#1a1a1c' }}>
        <iframe
          src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          scrolling="no"
          style={{
            position: 'absolute',
            width: '110%',
            height: '110%',
            top: '-5%',
            left: '-5%',
            border: 'none',
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
          title={cert.title}
        />
        {/* Click blocking overlay to ensure card interactions trigger correctly */}
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered ? 'rgba(140, 82, 255, 0.05)' : 'transparent',
          zIndex: 2,
          transition: 'background-color 0.3s',
        }} />
      </div>

      {/* Card content */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <h3 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700, fontSize: '1.25rem',
            color: '#fff',
            lineHeight: 1.4,
          }}>
            {cert.title}
          </h3>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0, scale: hovered ? 1.2 : 1 }}
            style={{ color: 'var(--accent)', flexShrink: 0, marginLeft: '12px' }}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-subtle)' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Issuer:</span>
            <span>{cert.issuer}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-subtle)' }}>
            <Calendar size={13} style={{ color: 'var(--text-muted)' }} />
            <span>Issued {cert.issueDate}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => { e.stopPropagation(); onView(); }}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(140,82,255,0.15), rgba(0,212,255,0.08))',
            border: '1px solid rgba(140,82,255,0.3)',
            color: '#c4a9ff',
            fontSize: '13px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            cursor: 'pointer',
            letterSpacing: '0.02em',
            boxShadow: '0 4px 20px rgba(140,82,255,0.1)',
            transition: 'box-shadow 0.3s, background-color 0.3s',
            marginTop: 'auto',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 30px rgba(140,82,255,0.25)';
            (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, rgba(140,82,255,0.22), rgba(0,212,255,0.12))';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(140,82,255,0.1)';
            (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, rgba(140,82,255,0.15), rgba(0,212,255,0.08))';
          }}
        >
          <Eye size={14} />
          View Certificate
        </motion.button>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<{
    readonly id: string;
    readonly title: string;
    readonly issuer: string;
    readonly issueDate: string;
    readonly pdfUrl: string;
    readonly previewImage: string;
  } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificates = portfolioContent.certificates;

  return (
    <div>
      {/* Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '48px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-header section-header-responsive" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Certificates</h1>
          <span className="section-divider" style={{ width: '80px', height: '4px', background: 'var(--accent)' }} />
          <p style={{ color: 'var(--text-subtle)', fontSize: '16px', marginTop: '16px', maxWidth: '600px', lineHeight: 1.6 }}>
            A compilation of my verified credentials, academic achievement, and specialized game engineering training.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px',
          paddingBottom: '60px'
        }}
      >
        {certificates.map((cert, i) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            index={i}
            onView={() => setSelectedCert(cert)}
          />
        ))}
      </motion.div>

      {/* Media Modal popup for PDF viewing */}
      <MediaModal
        isOpen={selectedCert !== null}
        onClose={() => setSelectedCert(null)}
        media={selectedCert ? { type: 'pdf', url: selectedCert.pdfUrl } : undefined}
        title={selectedCert?.title || ''}
        color="var(--accent)"
      />
    </div>
  );
};

export default Certificates;
