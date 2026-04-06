import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToShop = (e) => {
    e.preventDefault();
    const target = document.getElementById('shop');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" style={{ padding: '0 5%', marginTop: '6rem', position: 'relative', height: '85vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
      
      <div className="hero-img-bg" style={{ position: 'absolute', top: 0, left: '10%', right: 0, bottom: '5%', zIndex: 0 }}>
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="Fashion Editorial" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <motion.div 
        className="hero-text-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'var(--bg-primary)',
          padding: '4rem 3rem',
          maxWidth: '500px',
          marginLeft: '5%',
          marginBottom: '5%',
          boxShadow: 'var(--shadow-custom)'
        }}
      >
        <p className="hero-subtitle" style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
          THE EPHEMERAL COLLECTION
        </p>
        <h1 className="hero-title-main" style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: '1', marginBottom: '2rem', fontStyle: 'italic', color: 'var(--text-primary)' }}>
          Silence in <br /> Composition
        </h1>
        <a href="#shop" onClick={scrollToShop} className="primary-btn" style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid var(--border-color)', color: 'var(--text-primary)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', textDecoration: 'none' }}>
          DISCOVER THE CURATIONS
        </a>
      </motion.div>
      
    </section>
  );
}
