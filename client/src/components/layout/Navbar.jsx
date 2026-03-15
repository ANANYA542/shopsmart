import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ShoppingBag, User, Search, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.05, 1] }}
    >
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/curations" className="nav-link">Curations</Link>
          <Link to="/editorial" className="nav-link">Editorial</Link>
        </div>

        <div className="nav-logo">
          <Link to="/">{theme === 'dark' ? 'ATELIER OBSIDIAN' : 'THE MUSE'}</Link>
        </div>

        <div className="nav-right">
          <Link to="/shop" className="icon-btn"><Search size={20} strokeWidth={1.5} /></Link>
          <button className="icon-btn" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>
          <Link to="/login" className="icon-btn"><User size={20} strokeWidth={1.5} /></Link>
          <Link to="/cart" className="icon-btn"><ShoppingBag size={20} strokeWidth={1.5} /></Link>
        </div>
      </div>
    </motion.nav>
  );
}
