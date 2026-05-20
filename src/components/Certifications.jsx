import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { certifications } from '../data/certifications';
import { useFadeIn } from '../hooks/useFadeIn';
import { useStagger } from '../hooks/useStagger';

function CertRow({ cert }) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div className="cert-row" style={{
      display: 'flex', alignItems: 'center', padding: '20px 12px',
      cursor: cert.link ? 'pointer' : 'default',
    }}>
      {/* Index */}
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px',
        color: 'var(--accent-purple)', letterSpacing: '0.1em',
        minWidth: '36px', flexShrink: 0,
      }}>
        {cert.id}
      </span>

      {/* Title */}
      <span className="cert-title" style={{
        fontFamily: 'var(--font-mono)', fontSize: '13px',
        color: 'var(--text-primary)', flexShrink: 0,
        transition: 'color 0.15s ease',
      }}>
        {cert.title}
      </span>

      {/* Dot leader */}
      <span className="dot-leader" />

      {/* Issuer */}
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px',
        color: 'var(--text-muted)', flexShrink: 0, marginRight: '16px',
      }}>
        {cert.issuer}
      </span>

      {/* Badge or arrow */}
      {!cert.link ? (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px',
          color: 'var(--accent-pink)',
          background: 'rgba(255,106,240,0.1)',
          border: '1px solid rgba(255,106,240,0.3)',
          padding: '3px 10px', letterSpacing: '0.08em',
          textTransform: 'uppercase', flexShrink: 0,
        }}>
          soon
        </span>
      ) : (
        <ArrowRight className="cert-arrow" size={14} style={{
          color: 'var(--accent-green)', flexShrink: 0,
          opacity: 0, transform: 'translateX(-6px)',
          transition: 'opacity 0.15s ease, transform 0.15s ease',
        }} />
      )}
    </div>
  );

  return (
    <div>
      <div style={{ borderTop: '1px solid rgba(0,245,196,0.1)' }} />
      {cert.link ? (
        <a href={cert.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
          {inner}
        </a>
      ) : inner}
    </div>
  );
}

export default function Certifications() {
  const headRef = useFadeIn();
  const listRef = useStagger(0.1);

  return (
    <section id="certifications" style={{ backgroundColor: 'var(--surface)', padding: '100px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={headRef} className="fade-in">
          <div className="section-label">CERTIFICATIONS</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '36px',
              color: 'var(--text-primary)',
            }}>
              Credentials &amp; Achievements
            </h2>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              color: 'var(--text-muted)', letterSpacing: '0.06em',
            }}>
              Click to view →
            </p>
          </div>
        </div>

        <div ref={listRef}>
          {certifications.map((cert) => (
            <CertRow key={cert.id} cert={cert} />
          ))}
          <div style={{ borderTop: '1px solid rgba(0,245,196,0.1)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #certifications { padding: 80px 20px !important; }
          .dot-leader { display: none; }
        }
      `}</style>
    </section>
  );
}
