import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Film, Target, Layout, Cpu, Monitor, Bug, Box, GitBranch } from 'lucide-react';
import { portfolioContent } from '../constants/content';
import { SiUnrealengine } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const skillMetaData: Record<string, { icon: React.ComponentType; desc: string }> = {
  'Unreal Engine 5': {
    icon: SiUnrealengine,
    desc: 'Expertise in architecting complex systems using Blueprints and C++, with a sharp focus on performance optimization and visual fidelity.',
  },
  'Level Design': {
    icon: Layout,
    desc: 'Designing immersive environments with strong focus on player flow, pacing, and storytelling.',
  },
  'Gameplay Programming': {
    icon: Target,
    desc: 'Developing core gameplay systems, mechanics, and interactive player experiences.',
  },
  'UI/UX Implementation': {
    icon: Monitor,
    desc: 'Building intuitive, responsive, and visually engaging user interfaces for games.',
  },
  'Debugging & Optimization': {
    icon: Bug,
    desc: 'Fixing bugs, profiling performance, and optimizing systems for smooth gameplay.',
  },
  'Blueprints (Unreal Visual Scripting)': {
    icon: Box,
    desc: 'Using Unreal Engine Blueprints to prototype and build scalable gameplay systems.',
  },
  'Source Control (Git, Perforce, SVN)': {
    icon: GitBranch,
    desc: 'Managing projects efficiently using version control for collaboration and stability.',
  },
  'Physics & Mechanics': {
    icon: Cpu,
    desc: 'Implementing realistic physics systems and advanced gameplay mechanics.',
  },
  'Cinematics & Videos': {
    icon: Film,
    desc: 'Creating cinematic sequences and visual showcases to enhance storytelling.',
  },
};

const whatIDo = portfolioContent.skills.flatMap(category =>
  category.items.map(item => {
    const meta = skillMetaData[item.name as keyof typeof skillMetaData] || { icon: Target, desc: '' };
    return {
      icon: meta.icon,
      title: item.name,
      desc: meta.desc,
      color: item.color,
    };
  })
);



// Floating particle component
const Particle = ({ style }: { style: React.CSSProperties }) => (
  <div className="particle" style={style} />
);

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

const Home = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Heading character animation
    if (headingRef.current) {
      const text = headingRef.current.textContent || '';
      headingRef.current.innerHTML = text
        .split('')
        .map(char => `<span style="display:inline-block;opacity:0;transform:translateY(20px)">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      gsap.to(headingRef.current.querySelectorAll('span'), {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.2,
      });
    }

    // Experience cards scroll animation
    if (experienceRef.current) {
      const cards = experienceRef.current.querySelectorAll('.exp-card');
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40, scale: 0.97 },
          {
            opacity: 1, x: 0, scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        {[...Array(8)].map((_, i) => (
          <Particle key={i} style={{
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            background: i % 2 === 0 ? 'rgba(140,82,255,0.3)' : 'rgba(0,212,255,0.2)',
            left: `${10 + i * 12}%`,
            top: `${5 + i * 8}%`,
            '--duration': `${5 + i}s`,
            '--delay': `${i * 0.7}s`,
          } as React.CSSProperties} />
        ))}
      </div>

      {/* Top gradient orb */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-80px',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(140,82,255,0.12) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* ── About Me Section ── */}
        <div style={{ marginBottom: '56px' }}>
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1
              ref={headingRef}
              className="section-header"
              style={{ fontSize: '2.2rem', marginBottom: '4px' }}
            >
              About Me
            </h1>
            <span className="section-divider" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '920px' }}
          >
            <motion.p variants={itemVariants} style={{ color: 'var(--text)', fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '8px' }}>
              {portfolioContent.about.hero.tagline}
            </motion.p>
            {portfolioContent.about.long.split('\n\n').map((para, idx) => (
              <motion.p key={idx} variants={itemVariants} style={{ color: 'var(--text-subtle)', lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify' }}>
                {para}
              </motion.p>
            ))}

          </motion.div>
        </div>

        {/* ── What I'm Doing ── */}
        <div >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', marginBottom: '4px' }}>
              What I'm Doing
            </h2>
            <span className="section-divider" />
          </motion.div>

          <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {whatIDo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="card"
                  style={{
                    padding: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'default',
                  }}
                >
                  {/* Glow blob */}
                  <div style={{
                    position: 'absolute', top: '-20px', right: '-20px',
                    width: '80px', height: '80px',
                    background: `radial-gradient(circle, ${item.color}20 0%, transparent 70%)`,
                    borderRadius: '50%', filter: 'blur(16px)',
                  }} />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    style={{
                      width: '44px', height: '44px',
                      borderRadius: '12px',
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: item.color,
                      fontSize: '20px',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon />
                  </motion.div>

                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-subtle)', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
