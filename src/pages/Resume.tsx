import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Briefcase, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Unreal Engine 5', level: 90, color: '#8c52ff' },
  { name: 'Blueprints Visual Script', level: 85, color: '#9b6fff' },
  { name: 'Unity Engine', level: 75, color: '#00d4ff' },
  { name: 'C++ / C#', level: 70, color: '#FEDF9E' },
  { name: 'Cinematics & VFX', level: 80, color: '#ff6b9d' },
  { name: 'Level Design', level: 78, color: '#4ade80' },
];

const education = [
  {
    degree: 'Game Design and Development',
    institution: 'Indore University',
    period: '2019 – 2023',
    desc: "Bachelor's degree focusing on core gameplay systems, interactive narrative, and engine architecture. Participated in multiple game jams, leading the programming efforts using Unreal Engine and C++.",
  },
];

const experience = [
  {
    role: 'Gameplay Programmer',
    company: 'Indie Game Studio',
    period: '2023 – Present',
    desc: 'Developed core player controller mechanics and interactive dialogue systems. Managed physics-based puzzles using Unity Engine\'s rigidbodies and custom C# wrappers.',
    current: true,
  },
  {
    role: 'Level Designer Intern',
    company: 'Creative Arts Agency',
    period: '2021 – 2023',
    desc: 'Assisted in prototyping level designs using Unreal Engine 5. Created blockouts and tested flow, rhythm, and pacing of immersive narrative maps.',
    current: false,
  },
];

const SkillBar = ({ name, level, color, index }: { name: string; level: number; color: string; index: number }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    gsap.fromTo(barRef.current,
      { width: '0%' },
      {
        width: `${level}%`,
        duration: 1.2,
        ease: 'power3.out',
        delay: index * 0.1,
        scrollTrigger: {
          trigger: barRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      style={{ marginBottom: '18px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.4, duration: 0.4 }}
          style={{ fontSize: '12px', fontWeight: 700, color, letterSpacing: '0.05em' }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar-track">
        <div
          ref={barRef}
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)`, boxShadow: `0 0 12px ${color}60` }}
        />
      </div>
    </motion.div>
  );
};

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  index: number;
  current?: boolean;
}

const TimelineItem = ({ title, subtitle, period, description, index, current }: TimelineItemProps) => {
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!dotRef.current) return;
    gsap.fromTo(dotRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)',
        delay: index * 0.15,
        scrollTrigger: {
          trigger: dotRef.current,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: index * 0.15, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      style={{ position: 'relative', paddingBottom: '8px' }}
    >
      <span
        ref={dotRef}
        style={{
          position: 'absolute',
          left: '-41px',
          top: '6px',
          width: '14px', height: '14px',
          borderRadius: '50%',
          background: current ? 'var(--accent)' : '#444',
          border: `3px solid var(--bg-surface)`,
          boxShadow: current ? '0 0 0 3px rgba(140,82,255,0.3), 0 0 16px rgba(140,82,255,0.4)' : 'none',
          display: 'inline-block',
          zIndex: 1,
        }}
      />
      {current && (
        <span style={{
          position: 'absolute', left: '-48px', top: '-1px',
          width: '28px', height: '28px', borderRadius: '50%',
          border: '1px solid rgba(140,82,255,0.3)',
          animation: 'dot-ping 2.5s ease-out infinite',
          pointerEvents: 'none',
        }} />
      )}
      <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>
        {title}
      </h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#9a6fff', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {subtitle}
        </span>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500 }}>{period}</span>
      </div>
      <p style={{ fontSize: '13.5px', color: 'var(--text-subtle)', lineHeight: 1.75 }}>{description}</p>
    </motion.div>
  );
};

const SectionHeader = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}
  >
    <motion.div
      whileInView={{ scale: [0.8, 1.15, 1] }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      style={{
        width: '42px', height: '42px', borderRadius: '12px',
        background: 'rgba(140,82,255,0.1)',
        border: '1px solid rgba(140,82,255,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#9a6fff',
      }}
    >
      <Icon size={20} />
    </motion.div>
    <div>
      <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.02em', color: '#fff' }}>
        {title}
      </h2>
      <span className="section-divider" style={{ marginBottom: 0, marginTop: '6px' }} />
    </div>
  </motion.div>
);

const Resume = () => {
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = document.querySelectorAll('.timeline-vertical-line');
    lines.forEach(line => {
      gsap.fromTo(line,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Decorative glow */}
      <div style={{
        position: 'absolute', top: '-60px', right: '-60px',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '48px' }}
      >
        <h1 className="section-header" style={{ fontSize: '2.2rem' }}>Resume</h1>
        <span className="section-divider" />
      </motion.div>

      {/* ── Skills ── */}
      <div style={{ marginBottom: '60px' }}>
        <SectionHeader icon={Code2} title="Skills" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0 40px' }}>
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>

      {/* ── Education ── */}
      <div style={{ marginBottom: '60px' }}>
        <SectionHeader icon={BookOpen} title="Education" />
        <div style={{ position: 'relative', borderLeft: '1px solid rgba(255,255,255,0.08)', marginLeft: '24px', paddingLeft: '32px', paddingTop: '4px' }}>
          <div className="timeline-vertical-line" style={{ position: 'absolute', left: '-1px', top: 0, width: '1px', background: 'linear-gradient(to bottom, #8c52ff, transparent)', height: '100%' }} ref={timelineLineRef} />
          {education.map((edu, i) => (
            <TimelineItem
              key={i}
              index={i}
              title={edu.degree}
              subtitle={edu.institution}
              period={edu.period}
              description={edu.desc}
              current={false}
            />
          ))}
        </div>
      </div>

      {/* ── Experience ── */}
      <div>
        <SectionHeader icon={Briefcase} title="Experience" />
        <div style={{ position: 'relative', borderLeft: '1px solid rgba(255,255,255,0.08)', marginLeft: '24px', paddingLeft: '32px', paddingTop: '4px' }}>
          <div className="timeline-vertical-line" style={{ position: 'absolute', left: '-1px', top: 0, width: '1px', background: 'linear-gradient(to bottom, #8c52ff, rgba(0,212,255,0.3), transparent)', height: '100%' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experience.map((exp, i) => (
              <TimelineItem
                key={i}
                index={i}
                title={exp.role}
                subtitle={exp.company}
                period={exp.period}
                description={exp.desc}
                current={exp.current}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
