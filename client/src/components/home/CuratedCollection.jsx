import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HomeSections() {
  return (
    <div className="home-sections container" style={{ marginTop: '5rem' }}>
      
      {/* Precision of Time (Watches) */}
      <section style={{ display: 'flex', alignItems: 'center', gap: '4rem', marginBottom: '10rem', flexWrap: 'wrap' }}>
        <motion.div 
          style={{ flex: '1 1 500px', aspectRatio: '1/1', overflow: 'hidden' }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1699&auto=format&fit=crop" alt="Precision Watch" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
        
        <motion.div 
          style={{ flex: '1 1 300px', padding: '2rem' }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1.5rem', fontStyle: 'italic', color: 'var(--text-primary)' }}>The Precision of Time</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
            Explore a curated selection of horological masterpieces where technical excellence meets the pinnacle of aesthetic refinement.
          </p>
          <ul style={{ listStyle: 'none', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', color: 'var(--accent-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <li style={{ padding: '0.5rem 0', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)' }}>
              <span>Heritage Pieces</span> <span>→</span>
            </li>
            <li style={{ padding: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
              <span>Modern Complications</span> <span>→</span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Gourmet Curation */}
      <section style={{ marginBottom: '10rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>Gourmet Curation</h2>
        <p style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '3rem' }}>The Art of Sweet Taste</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2fr) minmax(200px, 1fr)', gap: '1rem' }}>
          <motion.div 
            style={{ aspectRatio: '16/9', overflow: 'hidden' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1587&auto=format&fit=crop" alt="Chocolates" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1rem' }}>
            <motion.div style={{ overflow: 'hidden' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
               <img src="https://images.unsplash.com/photo-1574226516831-e1dff420e562?q=80&w=1000&auto=format&fit=crop" alt="Macarons" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            <motion.div style={{ backgroundColor: 'var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', textAlign: 'left' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
               <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Limited Edition</p>
               <h3 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--text-primary)' }}>Seasonal Delicacies</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curated by Mood */}
      <section style={{ marginBottom: '8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontStyle: 'italic' }}>Curated by Mood</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ color: 'var(--text-secondary)' }}>←</button>
            <button style={{ color: 'var(--text-primary)' }}>→</button>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            { title: "Romantic", img: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1470&auto=format&fit=crop", desc: "Soft textures, warm scents, and floral elements." },
            { title: "Professional", img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1480&auto=format&fit=crop", desc: "Structured silhouettes and architectural precision." },
            { title: "Introspective", img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1587&auto=format&fit=crop", desc: "Pure lines, monochromatic tones, and quiet luxury." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
