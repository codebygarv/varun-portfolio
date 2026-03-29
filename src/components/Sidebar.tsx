import { useRef, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Download, Cake } from 'lucide-react';
import gsap from 'gsap';

const contactItems = [
  { icon: Mail, label: 'Email', value: 'varunthakral999@gmail.com', href: 'mailto:varunthakral999@gmail.com', truncate: true },
  { icon: MapPin, label: 'Location', value: 'Kurukshetra, HR', href: null, truncate: false },
  { icon: Phone, label: 'Phone', value: '+91 9588710931', href: null, truncate: false },
  { icon: Cake, label: 'Birthday', value: '1 December, 2001', href: null, truncate: false },
];

const socialLinks = [
  { icon: Github, href: '#', hoverColor: '#1a1a2e', label: 'GitHub' },
  { icon: Linkedin, href: '#', hoverColor: '#0A66C2', label: 'LinkedIn' },
  { icon: Twitter, href: '#', hoverColor: '#1DA1F2', label: 'Twitter' },
];

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

const Sidebar = () => {
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = avatarRef.current;
    if (!el) return;
    const enter = () => gsap.to(el, {
      boxShadow: '0 0 0 3px rgba(140,82,255,0.45), 0 8px 30px rgba(140,82,255,0.18)',
      duration: 0.4,
    });
    const leave = () => gsap.to(el, {
      boxShadow: '0 0 0 2px rgba(140,82,255,0.15), 0 4px 16px rgba(0,0,0,0.08)',
      duration: 0.4,
    });
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
      style={{
        position: 'sticky',
        top: '32px',
        flexShrink: 0,
        width: '100%',
        maxWidth: '300px',
      }}
    >
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '22px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
        }}
      >
        {/* Top — Avatar + Name + Role */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          {/* Large Avatar (desktop) */}
          <div
            ref={avatarRef}
            className="sidebar-avatar-lg"
            style={{
              width: '112px',
              height: '112px',
              borderRadius: '20px',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 0 0 2px rgba(140,82,255,0.15), 0 4px 16px rgba(0,0,0,0.08)',
              transition: 'box-shadow 0.4s',
              cursor: 'none',
            }}
          >
            <img
              src="/vt.jpg"
              alt="Varun"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                const div = document.createElement('div');
                div.style.cssText = 'width:100%;height:100%;background:linear-gradient(135deg,#8c52ff,#007bff);display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-weight:700;color:#fff;font-family:Space Grotesk,sans-serif;';
                div.textContent = 'V';
                (e.target as HTMLImageElement).parentNode?.replaceChild(div, e.target as HTMLImageElement);
              }}
            />
          </div>

          {/* Small Avatar (mobile) */}
          <div
            className="sidebar-avatar-sm"
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '14px',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 0 0 2px rgba(140,82,255,0.15)',
            }}
          >
            <img src="/vt.jpg" alt="Varun" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#1a1a2e',
              letterSpacing: '-0.02em',
            }}>
              Varun
            </div>
            <div style={{
              marginTop: '7px',
              display: 'inline-block',
              padding: '3px 12px',
              background: 'rgba(140,82,255,0.09)',
              border: '1px solid rgba(140,82,255,0.20)',
              borderRadius: '99px',
              fontSize: '10.5px',
              fontWeight: 600,
              letterSpacing: '0.07em',
              color: '#8c52ff',
              textTransform: 'uppercase',
            }}>
              Game Developer
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="sidebar-contact-info"
        >
          {contactItems.map(({ icon: Icon, label, value, href, truncate }) => (
            <motion.div key={label} variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '34px',
                height: '34px',
                flexShrink: 0,
                borderRadius: '10px',
                background: 'rgba(140,82,255,0.08)',
                border: '1px solid rgba(140,82,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8c52ff',
              }}>
                <Icon size={14} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{
                  fontSize: '9.5px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#9ca3af',
                  marginBottom: '2px',
                }}>
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    style={{
                      fontSize: '12.5px',
                      color: '#374151',
                      textDecoration: 'none',
                      display: 'block',
                      overflow: truncate ? 'hidden' : undefined,
                      textOverflow: truncate ? 'ellipsis' : undefined,
                      whiteSpace: truncate ? 'nowrap' : undefined,
                      cursor: 'none',
                    }}
                  >
                    {value}
                  </a>
                ) : (
                  <span style={{ fontSize: '12.5px', color: '#374151' }}>{value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Resume */}
        <div className="sidebar-download">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '11px',
              borderRadius: '12px',
              // background: 'linear-gradient(135deg, #8c52ff, #007bff)', 
              border: 'none',
              color: '#000',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              cursor: 'none',
              letterSpacing: '0.02em',
              // boxShadow: '0 4px 16px rgba(140,82,255,0.30)',
              textDecoration: 'none',
              transition: 'box-shadow 0.3s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(140,82,255,0.40)')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(140,82,255,0.30)')}
          >
            <Download size={14} />
            Download Resume
          </motion.a>
        </div>

        {/* Social Links */}
        <div
          className="sidebar-social"
          style={{
            justifyContent: 'center',
            gap: '14px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {socialLinks.map(({ icon: Icon, href, hoverColor, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                transition: 'color 0.2s',
                cursor: 'none',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = hoverColor)}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af')}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;