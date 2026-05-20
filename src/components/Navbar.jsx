import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Work',    href: '#projects' },
    { label: 'About',   href: '#about' },
    { label: 'Skills',  href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: scrolled ? 'rgba(5,5,8,0.92)' : 'rgba(5,5,8,0.6)',
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${scrolled ? 'rgba(0,245,196,0.2)' : 'rgba(0,245,196,0.08)'}`,
      transition: 'background-color 0.3s ease, border-color 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 40px',
        height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px',
          color: 'var(--accent-green)', textDecoration: 'none', letterSpacing: '0.04em',
          textShadow: '0 0 20px rgba(0,245,196,0.5)',
        }}>
          GSK
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="desktop-nav">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link" style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 400,
              textTransform: 'uppercase', letterSpacing: '0.14em',
              color: 'var(--text-muted)', textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent-green)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          ))}
          <a href="/Koushik_Resume.pdf" download style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--accent-green)',
            border: '1px solid var(--accent-green)',
            padding: '8px 18px', textDecoration: 'none',
            transition: 'background 0.2s ease, color 0.2s ease',
            boxShadow: '0 0 12px rgba(0,245,196,0.1)',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-green)'; e.currentTarget.style.color = '#050508'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-green)'; }}
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', color: 'var(--accent-green)',
        }} className="mobile-menu-btn" aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          backgroundColor: 'rgba(5,5,8,0.98)', borderTop: '1px solid var(--border)',
          padding: '24px 40px', display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-mono)', fontSize: '13px', textTransform: 'uppercase',
              letterSpacing: '0.12em', color: 'var(--text-muted)', textDecoration: 'none',
            }}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
