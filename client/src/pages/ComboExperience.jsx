import { motion } from 'framer-motion';

export default function ComboExperience() {
  return (
    <motion.div 
      className="page-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingBottom: '10rem' }}
    >
      {/* Hero section for Combo */}
      <section style={{ position: 'relative', marginTop: '8rem', marginBottom: '8rem' }}>
        <div style={{ aspectRatio: '21/9', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Lounge" />
        </div>
        <div style={{
          position: 'absolute', top: '20%', left: '0', 
          background: 'var(--bg-primary)', padding: '3rem', maxWidth: '450px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>CURATED EXPERIENCE NO. 1</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem', fontStyle: 'italic' }}>The Date Night Box</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            A sequence of moments captured in obsidian weave. Designed for the evening that transcends, and the morning that stretches on.
          </p>
          <button className="primary-btn" style={{ padding: '0.8rem 2rem' }}>SECURE THE ENSEMBLE</button>
        </div>
      </section>

      {/* Item 1 */}
      <section style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem', marginBottom: '10rem', alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '1rem' }}>I. Obsidian Chronograph</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            The raw, unpolished form of the Obsidian Chronograph introduces a dark beauty to the gravity of an evening out. Crafted with a ceramic bezel finish and sapphire crystal.
          </p>
          <button style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)', borderBottom: '1px solid var(--accent-gold)', paddingBottom: '0.2rem' }}>VIEW DETAILS</button>
        </div>
        <div style={{ paddingLeft: '4rem' }}>
           <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1699&auto=format&fit=crop" style={{ width: '80%', aspectRatio: '1/1', objectFit: 'cover' }} alt="Watch" />
        </div>
      </section>

      {/* Item 2 */}
      <section style={{ display: 'grid', gridTemplateColumns: '2fr minmax(300px, 1fr)', gap: '4rem', marginBottom: '10rem', alignItems: 'center' }}>
        <div style={{ paddingRight: '4rem', display: 'flex', justifyContent: 'flex-end' }}>
           <img src="https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1587&auto=format&fit=crop" style={{ width: '80%', aspectRatio: '1/1', objectFit: 'cover' }} alt="Truffles" />
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '1rem' }}>II. Midnight Truffles</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            A bittersweet compliment to a perfect evening. Handcrafted 70% dark cocoa infused with rich notes.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <div style={{ textAlign: 'center', marginTop: '10rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontStyle: 'italic', marginBottom: '2rem' }}>Secure the Ensemble</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Curated as a cohesive narrative. Presented in a hand-finished cedar box.</p>
        <button className="primary-btn">ADD THE SET TO BAG</button>
      </div>
      
    </motion.div>
  );
}
