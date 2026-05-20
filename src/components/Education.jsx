import { useFadeIn } from '../hooks/useFadeIn';
import { useStagger } from '../hooks/useStagger';

const education = [
  { period: '2023 – 2027', degree: 'B.Tech in CSE (AI & DS)', institute: 'Vishnu Institute of Technology, Bhimavaram, AP', score: 'CGPA: 9.0', current: true },
  { period: '2021 – 2023', degree: 'Intermediate (MPC)', institute: 'Visakha Defence Academy Junior College, Visakhapatnam', score: '95%', current: false },
  { period: '2020 – 2021', degree: 'Secondary School (SSC)', institute: 'SR D.I.G.I School, Visakhapatnam', score: '69.8%', current: false },
];

export default function Education() {
  const headRef = useFadeIn();
  const listRef = useStagger(0.1);

  return (
    <section id="education" style={{ padding: '100px 40px', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={headRef} className="fade-in">
          <div className="section-label">EDUCATION</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '36px',
            color: 'var(--text-primary)', marginBottom: '56px',
          }}>
            Academic Background
          </h2>
        </div>

        <div ref={listRef} style={{ position: 'relative' }}>
          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute', left: '7px', top: '8px', bottom: '8px',
            width: '1px', background: 'linear-gradient(to bottom, var(--accent-green), rgba(0,245,196,0.1))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {education.map((entry, i) => (
              <div key={i} style={{ display: 'flex', gap: '32px', paddingBottom: i < education.length - 1 ? '40px' : '0' }}>
                <div style={{ flexShrink: 0, paddingTop: '4px' }}>
                  <div className={entry.current ? 'section-active-dot' : ''} style={{
                    width: '16px', height: '16px', borderRadius: '50%',
                    backgroundColor: entry.current ? 'var(--accent-green)' : 'var(--bg)',
                    border: `2px solid ${entry.current ? 'var(--accent-green)' : 'rgba(0,245,196,0.4)'}`,
                    boxShadow: entry.current ? '0 0 12px rgba(0,245,196,0.5)' : 'none',
                  }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--accent-green)', letterSpacing: '0.1em', marginBottom: '8px',
                  }}>
                    {entry.period}
                    {entry.current && (
                      <span style={{
                        marginLeft: '12px', fontFamily: 'var(--font-mono)', fontSize: '9px',
                        color: '#050508', backgroundColor: 'var(--accent-green)',
                        padding: '2px 8px', letterSpacing: '0.1em', textTransform: 'uppercase',
                      }}>Current</span>
                    )}
                  </p>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px',
                    color: 'var(--text-primary)', marginBottom: '6px',
                  }}>
                    {entry.degree}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: '13px',
                    color: 'var(--text-muted)', marginBottom: '10px',
                  }}>
                    {entry.institute}
                  </p>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '12px',
                    color: 'var(--accent-purple)', letterSpacing: '0.06em',
                  }}>
                    {entry.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #education { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  );
}
