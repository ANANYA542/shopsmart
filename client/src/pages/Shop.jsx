import { motion } from 'framer-motion';

export default function Shop() {
  return (
    <motion.div 
      className="page-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="section-title" style={{ marginTop: '12rem', textAlign: 'center', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-primary)' }}>The Autumn Curation</h1>
      <p style={{ textAlign: 'center', marginBottom: '6rem', maxWidth: '600px', margin: '0 auto 6rem', color: 'var(--text-secondary)' }}>
        Explore a selection of items curated for the modern wardrobe. Each piece is chosen for its timeless appeal and uncompromising quality.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', padding: '0 2rem' }}>
        
        {/* Product 1 */}
        <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
           <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
             <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1483&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
           <div>
             <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Midnight Silk Gown</h3>
             <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>$1,200</p>
           </div>
        </div>

        {/* Product 2 - Offset */}
        <div style={{ gridColumn: 'span 4', top: '4rem', position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
           <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
             <img src="https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1587&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
           <div>
             <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Gold Leaf Truffles</h3>
             <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>$85</p>
           </div>
        </div>

        {/* Product 3 */}
        <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
           <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
             <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1699&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
           <div>
             <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Geometric Obsidian Pillar</h3>
             <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>$350</p>
           </div>
        </div>

      </div>
    </motion.div>
  );
}
