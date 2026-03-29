import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiUnrealengine, SiUnity } from 'react-icons/si';
import { Gamepad2, Film } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const whatIDo = [
  {
    icon: SiUnrealengine,
    title: 'Unreal Engine 5',
    desc: 'Skilled in UE5 for creating games and cinematics, proficient with Blueprints for game logic, Lumen lighting, and Nanite geometry.',
    color: '#8c52ff',
    bg: 'rgba(140,82,255,0.08)',
    border: 'rgba(140,82,255,0.16)',
  },
  {
    icon: SiUnity,
    title: 'Unity Engine',
    desc: 'Experienced in developing 2D and 3D games, utilizing C# for scripting and creating engaging gameplay mechanics with performance optimization.',
    color: '#007bff',
    bg: 'rgba(0,123,255,0.08)',
    border: 'rgba(0,123,255,0.16)',
  },
  {
    icon: Gamepad2,
    title: 'Gameplay Programming',
    desc: 'Building core player controllers, physics-based puzzles, AI systems, and interactive dialogue trees from the ground up.',
    color: '#D4A017',
    bg: 'rgba(212,160,23,0.08)',
    border: 'rgba(212,160,23,0.18)',
  },
  {
    icon: Film,
    title: 'Cinematics & Video',
    desc: 'Creating cinematic sequences and editing videos to enhance storytelling. Blending technical expertise with creative vision.',
    color: '#e0416a',
    bg: 'rgba(224,65,106,0.07)',
    border: 'rgba(224,65,106,0.15)',
  },
];

const experiences = [
  {
    role: 'Gameplay Programmer',
    company: 'Indie Game Studio',
    period: '2023 – Present',
    desc: "Developed core player controller mechanics and interactive dialogue systems. Managed physics-based puzzles using Unity Engine's rigidbodies and custom C# wrappers. Optimized game performance by implementing object pooling, significantly reducing stutters.",
    current: true,
  },
  {
    role: 'Level Designer Intern',
    company: 'Creative Arts Agency',
    period: '2021 – 2023',
    desc: 'Assisted in prototyping level designs using Unreal Engine 5. Created blockouts and tested flow, rhythm, and pacing of immersive narrative maps. Integrated audio cues and cinematic visual effects.',
    current: false,
  },
];

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
        .map(char => `<span style="display:inline-block;opacity:0;transform:translateY(18px)">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      gsap.to(headingRef.current.querySelectorAll('span'), {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.55,
        ease: 'power3.out',
        delay: 0.2,
      });
    }

    // Experience cards scroll animation
    if (experienceRef.current) {
      const cards = experienceRef.current.querySelectorAll('.exp-card');
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: i % 2 === 0 ? -36 : 36, scale: 0.97 },
          {
            opacity: 1, x: 0, scale: 1,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 86%',
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
    visible: { transition: { staggerChildren: 0.10, delayChildren: 0.3 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative soft particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        {[...Array(8)].map((_, i) => (
          <Particle key={i} style={{
            width: `${5 + i * 2}px`,
            height: `${5 + i * 2}px`,
            background: i % 2 === 0 ? 'rgba(140,82,255,0.18)' : 'rgba(0,123,255,0.14)',
            left: `${10 + i * 11}%`,
            top: `${5 + i * 9}%`,
            '--duration': `${5 + i}s`,
            '--delay': `${i * 0.7}s`,
          } as React.CSSProperties} />
        ))}
      </div>

      {/* Top soft gradient orb */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-60px',
        width: '340px', height: '340px',
        background: 'radial-gradient(circle, rgba(140,82,255,0.07) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0,
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
            style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '700px' }}
          >
            <motion.p variants={itemVariants} style={{ color: '#1a1a2e', fontSize: '16px', fontWeight: 500, lineHeight: 1.75 }}>
              Hi! I'm <span className="gradient-text-accent" style={{ fontWeight: 700 }}>Varun</span>. I make Video Games.
            </motion.p>
            <motion.p variants={itemVariants} style={{ color: '#6b7280', lineHeight: 1.85 }}>
              I'm an Unreal Engine Developer from Kurukshetra, Haryana. I recently graduated with a bachelor's degree in Game Design and Development. I find great joy in crafting unforgettable experiences that come alive through the computer screen.
            </motion.p>
            <motion.p variants={itemVariants} style={{ color: '#6b7280', lineHeight: 1.85 }}>
              My role involves not only developing games but also creating cinematic sequences and editing videos to enhance storytelling. I strive to blend technical expertise with creative vision, aiming to create games that are both engaging and visually stunning.
            </motion.p>

            {/* Quick stat chips */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              {[
                { label: '3+ Years XP', color: '#8c52ff' },
                { label: 'UE5 Certified', color: '#007bff' },
                { label: 'Open to Work', color: '#16a34a' },
              ].map(s => (
                <span key={s.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '5px 13px', borderRadius: '99px',
                  fontSize: '11px', fontWeight: 600, letterSpacing: '0.04em',
                  color: s.color,
                  background: `${s.color}12`,
                  border: `1px solid ${s.color}25`,
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: s.color, display: 'inline-block' }} />
                  {s.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── What I'm Doing ── */}
        <div style={{ marginBottom: '64px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.45rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#1a1a2e', marginBottom: '4px' }}>
              What I'm Doing
            </h2>
            <span className="section-divider" />
          </motion.div>

          <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '14px' }}>
            {whatIDo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="card"
                  style={{
                    padding: '22px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'default',
                  }}
                >
                  {/* Subtle colour tint in corner */}
                  <div style={{
                    position: 'absolute', top: '-16px', right: '-16px',
                    width: '80px', height: '80px',
                    background: `radial-gradient(circle, ${item.color}12 0%, transparent 70%)`,
                    borderRadius: '50%', filter: 'blur(12px)',
                  }} />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 350 }}
                    style={{
                      width: '42px', height: '42px',
                      borderRadius: '12px',
                      background: item.bg,
                      border: `1px solid ${item.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: item.color,
                      fontSize: '19px',
                      marginBottom: '14px',
                    }}
                  >
                    <Icon />
                  </motion.div>

                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#1a1a2e', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.75 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Experience ── */}
        <div ref={experienceRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.45rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#1a1a2e', marginBottom: '4px' }}>
              Experience
            </h2>
            <span className="section-divider" />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="exp-card card"
                style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}
              >
                {/* Top gradient accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2.5px',
                  background: exp.current
                    ? 'linear-gradient(90deg, #8c52ff, #007bff)'
                    : 'linear-gradient(90deg, rgba(0,0,0,0.08), transparent)',
                }} />

                {exp.current && (
                  <div style={{
                    position: 'absolute', top: '18px', right: '18px',
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '3px 10px',
                    borderRadius: '99px',
                    background: 'rgba(140,82,255,0.08)',
                    border: '1px solid rgba(140,82,255,0.20)',
                    fontSize: '10.5px', fontWeight: 600, color: '#8c52ff',
                    letterSpacing: '0.04em',
                  }}>
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#8c52ff', display: 'inline-block',
                      animation: 'pulse-glow 2s ease-in-out infinite',
                    }} />
                    Active
                  </div>
                )}

                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#1a1a2e', marginBottom: '4px' }}>
                  {exp.role}
                </h3>
                <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8c52ff' }}>
                  {exp.company} · {exp.period}
                </span>
                <p style={{ marginTop: '10px', fontSize: '13.5px', color: '#6b7280', lineHeight: 1.8 }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
