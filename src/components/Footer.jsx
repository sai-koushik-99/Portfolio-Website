import { Mail } from 'lucide-react';

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const links = [
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/sai-koushik-gunta-4a032b306', label: 'LinkedIn' },
  { icon: GithubIcon,   href: 'https://github.com/sai-koushik-99', label: 'GitHub' },
  { icon: Mail,         href: 'mailto:saikoushikgunta@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer id="contact" style={{
      backgroundColor: 'var(--bg)',
      borderTop: '1px solid rgba(0,245,196,0.1)',
      padding: '64px 40px 40px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}>

        {/* Logo */}
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '28px',
          color: 'var(--accent-green)',
          textShadow: '0 0 24px rgba(0,245,196,0.4)',
        }}>
          GSK
        </p>

        {/* Icons */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {links.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer" aria-label={label}
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease, filter 0.2s ease', display: 'flex' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-green)'; e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(0,245,196,0.5))'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.filter = 'none'; }}
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, transparent, var(--accent-green), transparent)', opacity: 0.5 }} />

        {/* Copyright */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          color: 'var(--text-muted)', letterSpacing: '0.08em', textAlign: 'center',
        }}>
          © 2026 Gunta Sai Koushik &nbsp;·&nbsp; Built with ❤ from Bhimavaram
        </p>
      </div>
    </footer>
  );
}
