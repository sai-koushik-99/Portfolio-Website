import { X, ArrowUpRight } from 'lucide-react';

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0,
        backgroundColor: 'rgba(5,5,8,0.7)',
        backdropFilter: 'blur(4px)', zIndex: 200,
      }} />

      <div className="detail-panel open" style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '100%', maxWidth: '520px',
        backgroundColor: '#0a0a12',
        borderLeft: '1px solid rgba(0,245,196,0.2)',
        zIndex: 201, overflowY: 'auto', padding: '48px 40px',
      }}>
        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: '24px', right: '24px',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text-muted)', transition: 'color 0.2s ease',
        }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-green)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Index */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          color: 'var(--accent-purple)', letterSpacing: '0.14em',
          textTransform: 'uppercase', marginBottom: '16px',
        }}>
          {project.id} — PROJECT
        </p>

        {/* Title */}
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '32px',
          color: 'var(--text-primary)', marginBottom: '8px',
        }}>
          {project.title}
        </h2>

        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '12px',
          color: 'var(--text-muted)', marginBottom: '28px',
        }}>
          {project.subtitle} · {project.year}
        </p>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
          {project.stack.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(0,245,196,0.1)', marginBottom: '28px' }} />

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '14px',
          color: '#b0b0d0', lineHeight: 1.9, marginBottom: '28px',
        }}>
          {project.description}
        </p>

        {/* Features */}
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {project.features.map((feat, i) => (
            <li key={i} style={{
              fontFamily: 'var(--font-mono)', fontSize: '13px',
              color: 'var(--text-muted)', display: 'flex', gap: '10px', lineHeight: 1.6,
            }}>
              <span style={{ color: 'var(--accent-green)', flexShrink: 0 }}>→</span>
              {feat}
            </li>
          ))}
        </ul>

        {/* GitHub */}
        <a href={project.github} target="_blank" rel="noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--accent-purple)', textDecoration: 'none',
          border: '1px solid rgba(123,97,255,0.3)', padding: '10px 20px',
          transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-pink)'; e.currentTarget.style.borderColor = 'var(--accent-pink)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--accent-purple)'; e.currentTarget.style.borderColor = 'rgba(123,97,255,0.3)'; }}
        >
          <GithubIcon /> View on GitHub <ArrowUpRight size={12} />
        </a>
      </div>
    </>
  );
}
