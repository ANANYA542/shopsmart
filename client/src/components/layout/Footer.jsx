import { useTheme } from '../../context/ThemeContext';


export default function Footer() {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section" style={{
      padding: '6rem 5% 3rem',
      backgroundColor: theme === 'dark' ? '#080808' : '#fDFbF7',
      color: theme === 'dark' ? '#dfb27e' : '#a3a3a3',
      borderTop: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e2ddd5'}`
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
        
        {/* Left: Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--text-primary)', fontWeight: '600', letterSpacing: '0.05em' }}>NŪMA</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Refined curation for the modern connoisseur.<br/>Where timeless elegance meets visceral design.
          </p>
        </div>

        {/* Center: Navigation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-primary)' }}>Explore</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['Home', 'Shop', 'Curations', 'Editorial'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} 
                   onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} 
                   onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Newsletter & Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-primary)', marginBottom: '1rem' }}>Newsletter</h4>
            <div style={{ display: 'flex', borderBottom: `1px solid var(--border-color)`, paddingBottom: '0.5rem' }}>
              <input type="email" placeholder="Email Address" style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', width: '100%', fontSize: '0.85rem' }} />
              <button style={{ color: 'var(--text-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Subscribe</button>
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-primary)', marginBottom: '1rem' }}>Social</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['Instagram', 'Pinterest', 'Twitter'].map((social) => (
                <a key={social} href="#" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}
                   onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} 
                   onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: `1px solid var(--border-color)`, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} NŪMA. All rights reserved.</p>
        <button onClick={scrollToTop} style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} 
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
