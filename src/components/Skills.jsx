import { skills } from '../data/skills';
import { useFadeIn } from '../hooks/useFadeIn';
import { useStagger } from '../hooks/useStagger';

export default function Skills() {
  const headRef = useFadeIn();
  const rowsRef = useStagger(0.1);

  return (
    <section id="skills" style={{ backgroundColor: 'var(--surface)', padding: '100px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={headRef} className="fade-in">
          <div className="section-label">SKILLS</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '36px',
            color: 'var(--text-primary)', marginBottom: '56px',
          }}>
            Technical Skills
          </h2>
        </div>

        <div ref={rowsRef}>
          {skills.map((row) => (
            <div key={row.category}>
              <div style={{ borderTop: '1px solid rgba(0,245,196,0.1)' }} />
              <div className="skills-row" style={{
                display: 'grid', gridTemplateColumns: '160px 1fr',
                gap: '40px', padding: '20px 0', alignItems: 'center',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  textTransform: 'uppercase', letterSpacing: '0.14em',
                  color: 'var(--accent-purple)',
                }}>
                  {row.category}
                </p>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '13px',
                  color: 'var(--text-primary)', letterSpacing: '0.02em',
                }}>
                  {row.items.join('  ·  ')}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(0,245,196,0.1)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .skills-row { grid-template-columns: 1fr !important; gap: 8px !important; }
          #skills { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  );
}
