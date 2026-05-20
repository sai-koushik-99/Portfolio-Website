import { Mail, Phone, MapPin } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

export default function About() {
  const ref = useFadeIn();

  return (
    <section id="about" style={{ backgroundColor: 'var(--surface)', padding: '100px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-label">ABOUT</div>

        <div ref={ref} className="fade-in" style={{
          display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '80px', alignItems: 'start',
        }}>
          {/* Left — metadata */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px',
              color: 'var(--text-primary)', marginBottom: '4px',
            }}>
              Gunta Sai Koushik
            </h2>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: 'var(--accent-green)', letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '28px',
            }}>
              B.Tech CSE (AI &amp; DS)
            </p>

            {/* Info rows */}
            {[
              { label: 'Institute', value: 'Vishnu Institute of Technology' },
              { label: 'Period', value: '2023 – 2027' },
              { label: 'CGPA', value: '9.0' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '10px 0', borderBottom: '1px solid rgba(0,245,196,0.08)',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-primary)' }}>{value}</span>
              </div>
            ))}

            {/* Contact */}
            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: Mail, label: 'saikoushikgunta@gmail.com', href: 'mailto:saikoushikgunta@gmail.com' },
                { icon: Phone, label: '+91-7386429513', href: 'tel:+917386429513' },
                { icon: MapPin, label: 'Bhimavaram, AP, India', href: null },
              ].map(({ icon: Icon, label, href }) => (
                href ? (
                  <a key={label} href={href} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    fontFamily: 'var(--font-mono)', fontSize: '12px',
                    color: 'var(--text-muted)', textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-green)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    <Icon size={13} strokeWidth={1.5} />{label}
                  </a>
                ) : (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>
                    <Icon size={13} strokeWidth={1.5} />{label}
                  </div>
                )
              ))}
            </div>

            {/* Social buttons */}
            <div style={{ marginTop: '28px', display: 'flex', gap: '12px' }}>
              {[
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/sai-koushik-gunta-4a032b306', label: 'LinkedIn' },
                { icon: GithubIcon, href: 'https://github.com/sai-koushik-99', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  color: 'var(--text-muted)', textDecoration: 'none',
                  border: '1px solid rgba(0,245,196,0.25)',
                  padding: '8px 14px',
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-green)'; e.currentTarget.style.color = 'var(--accent-green)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,245,196,0.25)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  <Icon />{label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — bio */}
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 400,
              color: '#b0b0d0', lineHeight: 2.0, marginBottom: '40px',
            }}>
              I&apos;m Koushik, a Final-year B.Tech student at Vishnu Institute of
              Technology, Bhimavaram. I build responsive full-stack web applications
              using the MERN stack and enjoy connecting frontend experiences with
              robust backend systems. Currently exploring the intersection of AI and
              web development.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(0,245,196,0.1)' }}>
              {[
                { value: '8.97', label: 'CGPA' },
                { value: '3+', label: 'Projects' },
                { value: '5+', label: 'Certs' },
              ].map(({ value, label }) => (
                <div key={label} style={{
                  background: 'var(--surface)', padding: '28px 20px', textAlign: 'center',
                }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '32px', color: 'var(--accent-green)', marginBottom: '6px' }}>{value}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .fade-in { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  );
}
