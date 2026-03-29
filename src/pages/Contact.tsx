import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle, Loader } from 'lucide-react';
import gsap from 'gsap';

type Status = 'idle' | 'sending' | 'sent';

const FloatingLabelInput = ({
  id,
  label,
  type = 'text',
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
}) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const active = focused || hasValue;

  return (
    <div style={{ position: 'relative' }}>
      {/* Animated glow border */}
      <div style={{
        position: 'absolute', inset: '-1px',
        borderRadius: '13px',
        background: focused
          ? 'linear-gradient(135deg, rgba(140,82,255,0.6), rgba(0,212,255,0.3))'
          : 'transparent',
        transition: 'opacity 0.3s',
        opacity: focused ? 1 : 0,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <label
          htmlFor={id}
          style={{
            position: 'absolute',
            left: '16px',
            top: active ? '8px' : '50%',
            transform: active ? 'translateY(0) scale(0.8)' : 'translateY(-50%)',
            transformOrigin: 'left center',
            fontSize: active ? '11px' : '14px',
            fontWeight: 600,
            color: focused ? '#9a6fff' : 'var(--text-muted)',
            letterSpacing: active ? '0.06em' : '0',
            textTransform: active ? 'uppercase' : 'none',
            transition: 'all 0.25s cubic-bezier(0.23, 1, 0.32, 1)',
            pointerEvents: 'none',
            zIndex: 2,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {label}
        </label>
        <input
          ref={inputRef}
          id={id}
          type={type}
          placeholder={focused ? placeholder : ''}
          className="premium-input"
          style={{
            paddingTop: active ? '22px' : '14px',
            paddingBottom: active ? '6px' : '14px',
            borderRadius: '12px',
            border: `1px solid ${focused ? 'transparent' : 'rgba(255,255,255,0.07)'}`,
            background: 'rgba(0,0,0,0.3)',
            position: 'relative',
            zIndex: 1,
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={e => setHasValue(e.target.value.length > 0)}
        />
      </div>
    </div>
  );
};

const FloatingLabelTextarea = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const active = focused || hasValue;

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: '-1px', borderRadius: '13px',
        background: focused ? 'linear-gradient(135deg, rgba(140,82,255,0.6), rgba(0,212,255,0.3))' : 'transparent',
        transition: 'opacity 0.3s', opacity: focused ? 1 : 0,
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <label htmlFor={id} style={{
          position: 'absolute', left: '16px', top: active ? '10px' : '16px',
          fontSize: active ? '11px' : '14px', fontWeight: 600,
          color: focused ? '#9a6fff' : 'var(--text-muted)',
          letterSpacing: active ? '0.06em' : '0',
          textTransform: active ? 'uppercase' : 'none',
          transition: 'all 0.25s cubic-bezier(0.23, 1, 0.32, 1)',
          pointerEvents: 'none', zIndex: 2, fontFamily: 'Inter, sans-serif',
        }}>
          {label}
        </label>
        <textarea
          id={id}
          rows={5}
          placeholder={focused ? placeholder : ''}
          className="premium-input"
          style={{
            paddingTop: active ? '28px' : '16px',
            border: `1px solid ${focused ? 'transparent' : 'rgba(255,255,255,0.07)'}`,
            resize: 'none',
            borderRadius: '12px',
            position: 'relative', zIndex: 1,
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={e => setHasValue(e.target.value.length > 0)}
        />
      </div>
    </div>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<Status>('idle');
  const btnRef = useRef<HTMLButtonElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    if (status !== 'idle') return;
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 2000);
    setTimeout(() => setStatus('idle'), 5000);
  };

  // Magnetic button effect
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: 'power3.out' });
    };
    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    };
    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const quickContacts = [
    { icon: Mail, label: 'Email', value: 'varunthakral999@gmail.com', href: 'mailto:varunthakral999@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Kurukshetra, Haryana', href: null },
    { icon: Github, label: 'GitHub', value: 'github.com/varun', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/varun', href: '#' },
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* Background grid lines */}
      <div ref={gridRef} style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(140,82,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(140,82,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '40px', position: 'relative', zIndex: 1 }}
      >
        <h1 className="section-header" style={{ fontSize: '2.2rem' }}>Contact</h1>
        <span className="section-divider" />
        <p style={{ color: 'var(--text-subtle)', fontSize: '14px', marginTop: '4px' }}>
          Have a project in mind? Let's build something incredible together.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', position: 'relative', zIndex: 1 }}>

        {/* ── Form ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          style={{
            padding: '32px',
            borderRadius: '24px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow top-right */}
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '180px', height: '180px',
            background: 'radial-gradient(circle, rgba(140,82,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(30px)',
          }} />

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#fff', marginBottom: '24px' }}>
            Send a Message
          </h2>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={e => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
              <FloatingLabelInput id="name" label="Full Name" placeholder="John Doe" />
              <FloatingLabelInput id="email" label="Email Address" type="email" placeholder="john@example.com" />
            </div>
            <FloatingLabelInput id="subject" label="Subject" placeholder="Project inquiry..." />
            <FloatingLabelTextarea id="message" label="Your Message" placeholder="Hello! I'd love to collaborate on a project..." />

            {/* Submit button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button
                ref={btnRef}
                type="button"
                onClick={handleSubmit}
                disabled={status !== 'idle'}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '13px 28px',
                  borderRadius: '14px',
                  background: status === 'sent'
                    ? 'linear-gradient(135deg, rgba(74,222,128,0.2), rgba(74,222,128,0.1))'
                    : 'linear-gradient(135deg, rgba(140,82,255,0.25), rgba(0,212,255,0.12))',
                  border: status === 'sent'
                    ? '1px solid rgba(74,222,128,0.4)'
                    : '1px solid rgba(140,82,255,0.4)',
                  color: status === 'sent' ? '#4ade80' : '#c4a9ff',
                  fontSize: '13px', fontWeight: 700,
                  fontFamily: 'Inter, sans-serif',
                  cursor: status === 'idle' ? 'none' : 'default',
                  letterSpacing: '0.04em',
                  boxShadow: `0 4px 24px ${status === 'sent' ? 'rgba(74,222,128,0.15)' : 'rgba(140,82,255,0.2)'}`,
                  transition: 'all 0.4s',
                  willChange: 'transform',
                }}
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.div key="idle" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Send size={14} />
                      Send Message
                    </motion.div>
                  )}
                  {status === 'sending' && (
                    <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}>
                        <Loader size={14} />
                      </motion.div>
                      Sending...
                    </motion.div>
                  )}
                  {status === 'sent' && (
                    <motion.div key="sent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={14} />
                      Message Sent!
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </form>
        </motion.div>

        {/* ── Quick Contact Info ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
        >
          <div style={{
            padding: '24px',
            borderRadius: '20px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            marginBottom: '8px',
          }}>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '6px' }}>
              Open for Opportunities
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-subtle)', lineHeight: 1.7 }}>
              Currently available for freelance game dev projects, full-time roles, and exciting collaborations in game development and interactive media.
            </p>
          </div>

          {quickContacts.map(({ icon: Icon, label, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.45 }}
              whileHover={{ x: 4 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '14px 18px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border)',
                textDecoration: 'none',
                cursor: 'none',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(140,82,255,0.3)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(140,82,255,0.05)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
              }}
            >
              <div style={{
                width: '36px', height: '36px', flexShrink: 0,
                borderRadius: '10px',
                background: 'rgba(140,82,255,0.1)',
                border: '1px solid rgba(140,82,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#9a6fff',
              }}>
                <Icon size={15} />
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>
                  {label}
                </div>
                {href ? (
                  <a href={href} style={{ fontSize: '13px', color: 'var(--text)', textDecoration: 'none' }}>
                    {value}
                  </a>
                ) : (
                  <span style={{ fontSize: '13px', color: 'var(--text)' }}>{value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
