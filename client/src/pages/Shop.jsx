import { motion } from 'framer-motion';

export default function Shop() {
  return (
    <motion.div 
      className="container"
      style={{ padding: '6rem 0' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="section-title" style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>The Autumn Curation</h1>
      <p style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        Explore a selection of items curated for the modern wardrobe. Each piece is chosen for its timeless appeal and uncompromising quality.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', padding: '0 2rem' }}>
        
        {/* Product 1 */}
        <div className="card-hover" style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer', paddingBottom: '1rem' }}>
           <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
             <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1483&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
             <div>
               <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Midnight Silk Gown</h3>
               <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>$1,200</p>
             </div>
             <button style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', borderBottom: '1px solid var(--text-primary)', paddingBottom: '2px' }}>Add to Cart</button>
           </div>
        </div>

        {/* Product 2 - Offset */}
        <div className="card-hover" style={{ gridColumn: 'span 4', top: '4rem', position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer', paddingBottom: '1rem' }}>
           <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
             <img src="https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1587&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
             <div>
               <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Gold Leaf Truffles</h3>
               <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>$85</p>
             </div>
             <button style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', borderBottom: '1px solid var(--text-primary)', paddingBottom: '2px' }}>Add to Cart</button>
           </div>
        </div>

        {/* Product 3 */}
        <div className="card-hover" style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer', paddingBottom: '1rem' }}>
           <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
             <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1699&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
             <div>
               <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Geometric Obsidian Pillar</h3>
               <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>$350</p>
             </div>
             <button style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', borderBottom: '1px solid var(--text-primary)', paddingBottom: '2px' }}>Add to Cart</button>
           </div>
        </div>

      </div>
    </motion.div>
  );
}
