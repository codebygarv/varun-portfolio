import { useRef, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Download, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { FaYoutube } from 'react-icons/fa6';

import { portfolioContent } from '../constants/content';

const contactItems = [
  { icon: Mail, label: 'Email', value: portfolioContent.contact.email, href: `mailto:${portfolioContent.contact.email}`, truncate: true },
  { icon: MapPin, label: 'Location', value: portfolioContent.contact.location, href: null, truncate: false },
  { icon: Phone, label: 'Phone', value: portfolioContent.contact.phone, href: null, truncate: false },
  { icon: MessageCircle, label: 'Status', value: 'Open to Work', href: null, truncate: false },
];

const socialLinks = [
  { icon: Github, href: portfolioContent.socials.github, hoverColor: '#fff', label: 'GitHub' },
  { icon: Linkedin, href: portfolioContent.socials.linkedin, hoverColor: '#0A66C2', label: 'LinkedIn' },
  { icon: FaYoutube, href: portfolioContent.socials.youtube, hoverColor: '#FF0000', label: 'Youtube' },
];


const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

const Sidebar = () => {
  const avatarRef = useRef<HTMLDivElement>(null);

  // Animate glow ring on hover
  useEffect(() => {
    const el = avatarRef.current;
    if (!el) return;
    const enter = () => gsap.to(el, { boxShadow: '0 0 0 3px rgba(140,82,255,0.6), 0 0 30px rgba(140,82,255,0.3)', duration: 0.4 });
    const leave = () => gsap.to(el, { boxShadow: '0 0 0 2px rgba(140,82,255,0.2), 0 0 0px transparent', duration: 0.4 });
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    return () => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave); };
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
      style={{
        flexShrink: 0,
        width: '100%',
      }}
      className='md:w-full lg:max-w-[320px]'
    >
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          paddingTop: '55px',
          paddingBottom: '55px',
          paddingLeft: '35px',
          paddingRight: '35px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
        }}
      >
        {/* Top — Avatar + Name + Role */}
        <div
          className="flex  gap-5 flex-row lg:flex-col lg:justify-center items-center md:items-center"
        >
          {/* Avatar */}
          <div
            ref={avatarRef}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '20px',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 0 0 2px rgba(140,82,255,0.2)',
              transition: 'box-shadow 0.4s',
              cursor: 'none',
            }}
            className="hidden md:block lg:block"
          >
            <img
              src="/vt.jpg"
              alt="Varun"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                // Fallback gradient avatar if image not found
                const div = document.createElement('div');
                div.style.cssText = 'width:100%;height:100%;background:linear-gradient(135deg,#8c52ff,#00d4ff);display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-weight:700;color:#fff;font-family:Space Grotesk,sans-serif;';
                div.textContent = 'V';
                (e.target as HTMLImageElement).parentNode?.replaceChild(div, e.target as HTMLImageElement);
              }}
            />
          </div>

          {/* Mobile avatar (smaller) */}
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '14px',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 0 0 2px rgba(140,82,255,0.2)',
            }}
            className="block md:hidden"
          >
            <img src="/vt.jpg" alt="Varun" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ textAlign: 'center' }} className="text-left md:text-center lg:text-center">
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', textAlign: 'left', textWrap: 'balance' }}>
              Varun
            </div>
            <div style={{
              marginTop: '6px',
              display: 'inline-block',
              padding: '3px 12px',
              background: 'rgba(140,82,255,0.12)',
              border: '1px solid rgba(140,82,255,0.25)',
              borderRadius: '99px',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: '#b07fff',
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
          className="hidden lg:flex flex-col gap-4"
        >
          {contactItems.map(({ icon: Icon, label, value, href, truncate }) => (
            <motion.div key={label} variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                flexShrink: 0,
                borderRadius: '10px',
                background: 'rgba(140,82,255,0.1)',
                border: '1px solid rgba(140,82,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9a6fff',
              }}>
                <Icon size={14} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>
                  {label}
                </div>
                {href ? (
                  <a href={href} style={{ fontSize: '13px', color: 'var(--text)', textDecoration: 'none', display: 'block', overflow: truncate ? 'hidden' : undefined, textOverflow: truncate ? 'ellipsis' : undefined, whiteSpace: truncate ? 'nowrap' : undefined }}>
                    {value}
                  </a>
                ) : (
                  <span style={{ fontSize: '13px', color: 'var(--text)' }}>{value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Resume */}
        <div className="md:block lg:block">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
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
              cursor: 'none',
              letterSpacing: '0.02em',
              boxShadow: '0 4px 20px rgba(140,82,255,0.1)',
              transition: 'box-shadow 0.3s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 30px rgba(140,82,255,0.25)')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(140,82,255,0.1)')}
            onClick={() => window.open('/Varun_Resume.pdf', '_blank')}
          >
            <Download size={14} />
            {portfolioContent.microcopy.downloadResume}
          </motion.button>
        </div>

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border)',
          }}
          className="hidden md:flex lg:flex"
        >
          {socialLinks.map(({ icon: Icon, href, hoverColor, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                cursor: 'none',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = hoverColor)}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;