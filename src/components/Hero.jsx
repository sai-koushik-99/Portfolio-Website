import { useFadeIn } from '../hooks/useFadeIn';

import koushikPhoto from '../assets/hero.png';

export default function Hero() {
  const ref = useFadeIn(0.05);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg)',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background radial glows */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,196,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 40px 80px', width: '100%' }}>
        <div ref={ref} className="fade-in" style={{
          display: 'grid', gridTemplateColumns: '1fr 340px',
          gap: '80px', alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <div className="section-label" style={{ marginBottom: '36px' }}>
              00 / INTRO
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(38px, 7vw, 72px)', lineHeight: 0.95,
              color: 'var(--text-primary)', marginBottom: '32px',
              letterSpacing: '-0.02em',
            }}>
              Full-Stack<br />
              <span className="glow-green" style={{ color: 'var(--accent-green)' }}>Developer.</span>
            </h1>

            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 400,
              color: 'var(--text-muted)', marginBottom: '48px',
              letterSpacing: '0.04em', lineHeight: 1.8,
            }}>
              AI &amp; DS &nbsp;·&nbsp; MERN Stack &nbsp;·&nbsp; VIT Bhimavaram
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#projects" className="btn-press" style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--accent-green)',
                border: '1px solid var(--accent-green)',
                padding: '12px 28px', textDecoration: 'none',
                transition: 'background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 0 16px rgba(0,245,196,0.15)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-green)'; e.currentTarget.style.color = '#050508'; e.currentTarget.style.boxShadow = '0 0 28px rgba(0,245,196,0.35)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-green)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(0,245,196,0.15)'; }}
              >
                View Work ↓
              </a>
              <a href="/Koushik_Resume.pdf" download className="btn-press" style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 400,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--text-muted)', textDecoration: 'none',
                padding: '12px 4px',
                borderBottom: '1px solid transparent',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-purple)'; e.currentTarget.style.borderBottomColor = 'var(--accent-purple)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
              >
                Resume ↓
              </a>
            </div>

            {/* Scroll hint */}
            <div style={{ marginTop: '64px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--accent-green), transparent)' }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase',
              }}>Scroll to explore</span>
            </div>
          </div>

          {/* Right — photo */}
          <div className="hero-photo-wrap" style={{ position: 'relative' }}>
            {/* Glow behind photo */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '340px', height: '340px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,245,196,0.15) 0%, transparent 70%)',
              pointerEvents: 'none', zIndex: 0,
            }} />

            {/* Photo container with overlay effects */}
            <div className="photo-frame" style={{
              position: 'relative', zIndex: 1,
              width: '100%',
              border: '1px solid rgba(0,245,196,0.35)',
              overflow: 'hidden',
            }}>
              {/* The actual photo */}
              <img src={koushikPhoto} alt="Gunta Sai Koushik" style={{
                width: '100%', height: '420px',
                objectFit: 'cover', objectPosition: 'top center',
                display: 'block',
                filter: 'grayscale(100%) contrast(1.1) brightness(0.75)',
                transition: 'filter 0.4s ease, transform 0.4s ease',
                mixBlendMode: 'luminosity',
              }} className="hero-img" />

              {/* Green duotone overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(160deg, rgba(0,245,196,0.18) 0%, rgba(123,97,255,0.12) 60%, rgba(5,5,8,0.5) 100%)',
                mixBlendMode: 'screen',
                pointerEvents: 'none',
              }} />

              {/* Scanlines overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
                pointerEvents: 'none', zIndex: 2,
              }} />

              {/* Bottom fade to dark */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
                background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)',
                pointerEvents: 'none', zIndex: 3,
              }} />

              {/* Corner accent — top left */}
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '24px', height: '24px',
                borderTop: '2px solid var(--accent-green)',
                borderLeft: '2px solid var(--accent-green)',
                zIndex: 4,
              }} />
              {/* Corner accent — bottom right */}
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: '24px', height: '24px',
                borderBottom: '2px solid var(--accent-green)',
                borderRight: '2px solid var(--accent-green)',
                zIndex: 4,
              }} />

              {/* Name tag at bottom */}
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 5,
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: 'var(--accent-green)', letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  textShadow: '0 0 10px rgba(0,245,196,0.8)',
                }}>
                  Gunta Sai Koushik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero .fade-in { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-photo-wrap { max-width: 280px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          #hero > div { padding: 100px 20px 60px !important; }
        }
        .photo-frame:hover .hero-img {
          filter: grayscale(60%) contrast(1.1) brightness(0.85) !important;
          transform: scale(1.03);
        }
        .photo-frame:hover {
          box-shadow: 0 0 40px rgba(0,245,196,0.2), 0 0 80px rgba(0,245,196,0.08);
          border-color: rgba(0,245,196,0.7) !important;
        }
      `}</style>
    </section>
  );
}
