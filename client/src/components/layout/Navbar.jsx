import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ShoppingBag, User, Search, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'shop', 'curations', 'editorial'];
      let currentSection = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = ['Home', 'Shop', 'Curations', 'Editorial'];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.05, 1] }}
    >
      <div className="nav-container">
        <div className="nav-left">
          {navLinks.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a 
                key={item}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className="nav-link"
                style={{ 
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  borderBottom: isActive ? '1px solid var(--text-primary)' : 'none',
                  paddingBottom: '2px'
                }}
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="nav-logo">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} style={{ cursor: 'pointer', fontFamily: 'var(--font-serif)', fontSize: '2rem', letterSpacing: '0.1em', fontWeight: 600 }}>
            NŪMA
          </a>
        </div>

        <div className="nav-right">
          <a href="/search" className="icon-btn"><Search size={20} strokeWidth={1.5} /></a>
          <button className="icon-btn" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>
          <a href="/login" className="icon-btn"><User size={20} strokeWidth={1.5} /></a>
          <a href="/cart" className="icon-btn"><ShoppingBag size={20} strokeWidth={1.5} /></a>
        </div>
      </div>
    </motion.nav>
  );
}
