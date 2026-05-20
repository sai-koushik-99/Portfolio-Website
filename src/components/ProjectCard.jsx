import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
      style={{
        backgroundColor: hovered ? '#111120' : 'var(--surface)',
        border: `1px solid ${hovered ? 'rgba(0,245,196,0.4)' : 'rgba(0,245,196,0.12)'}`,
        padding: '32px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
        display: 'flex', flexDirection: 'column', height: '100%',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hovered ? '0 8px 40px rgba(0,245,196,0.08)' : 'none',
      }}
    >
      {/* Index */}
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px',
        color: 'var(--accent-purple)', letterSpacing: '0.12em', marginBottom: '12px',
      }}>
        {project.id}
      </p>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(0,245,196,0.15)', marginBottom: '20px' }} />

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px',
        color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.2,
      }}>
        {project.title}
      </h3>

      {/* Subtitle */}
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px',
        color: 'var(--text-muted)', marginBottom: '20px', letterSpacing: '0.04em',
      }}>
        {project.subtitle} · {project.year}
      </p>

      {/* Stack tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {project.stack.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '13px',
        color: 'var(--text-muted)', lineHeight: 1.8, flex: 1, marginBottom: '24px',
      }}>
        {project.description}
      </p>

      {/* GitHub link */}
      <a href={project.github} target="_blank" rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--accent-purple)', textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-pink)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent-purple)')}
      >
        GitHub <ArrowUpRight size={13} />
      </a>
    </div>
  );
}
