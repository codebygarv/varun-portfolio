import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';

const posts = [
  {
    title: 'Optimizing Collision Detection in Unity',
    date: 'Oct 12, 2024',
    tag: 'Unity',
    tagColor: '#00d4ff',
    excerpt: 'Learn how to significantly reduce overhead when dealing with complex multi-body physics in 2D platformers — from broad phase to narrow phase optimizations.',
    readTime: '6 min read',
  },
  {
    title: 'Unreal Engine 5: Lumen vs Ray Tracing',
    date: 'Sep 28, 2024',
    tag: 'Unreal Engine',
    tagColor: '#8c52ff',
    excerpt: 'A deep dive into the performance overhead of hardware ray tracing compared to Unreal Engine\'s software Lumen rendering pipeline for modern games.',
    readTime: '8 min read',
  },
  {
    title: 'Structuring Dialogues for RPGs',
    date: 'Aug 15, 2024',
    tag: 'Game Design',
    tagColor: '#FEDF9E',
    excerpt: 'Building a node-based dialogue editor from scratch can seem daunting, but it scales much better than standard arrays. Let\'s explore the architecture.',
    readTime: '5 min read',
  },
];

const Blog = () => {
  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '40px' }}
      >
        <h1 className="section-header" style={{ fontSize: '2.2rem' }}>Blog</h1>
        <span className="section-divider" />
        <p style={{ color: 'var(--text-subtle)', fontSize: '14px', marginTop: '4px' }}>
          Thoughts on game development, engine internals, and creative workflow.
        </p>
      </motion.div>

      {/* Posts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {posts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ x: 4 }}
            style={{
              padding: '28px 24px',
              borderRadius: '20px',
              border: '1px solid transparent',
              cursor: 'none',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.3s, background 0.3s',
              marginBottom: '8px',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <span style={{
                padding: '3px 10px',
                borderRadius: '99px',
                fontSize: '10px', fontWeight: 700,
                color: post.tagColor,
                background: `${post.tagColor}15`,
                border: `1px solid ${post.tagColor}28`,
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                {post.tag}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', fontSize: '12px' }}>
                <Calendar size={11} />
                {post.date}
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: '12px', marginLeft: 'auto' }}>
                {post.readTime}
              </span>
            </div>

            {/* Title + arrow */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '10px' }}>
              <h2 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700, fontSize: '1.2rem',
                color: '#fff',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
              }}>
                {post.title}
              </h2>
              <motion.div
                whileHover={{ x: 3, y: -3, scale: 1.1 }}
                style={{
                  color: 'var(--text-muted)',
                  flexShrink: 0,
                  marginTop: '2px',
                  transition: 'color 0.2s',
                }}
              >
                <ArrowUpRight size={18} />
              </motion.div>
            </div>

            {/* Excerpt */}
            <p style={{ fontSize: '13.5px', color: 'var(--text-subtle)', lineHeight: 1.75 }}>
              {post.excerpt}
            </p>

            {/* Bottom divider */}
            {i < posts.length - 1 && (
              <div style={{
                position: 'absolute', bottom: '-4px', left: '24px', right: '24px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)',
              }} />
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
