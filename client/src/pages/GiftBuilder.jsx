import { motion } from 'framer-motion';

export default function GiftBuilder() {
  return (
    <motion.div 
      className="page-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ marginTop: '8rem', paddingBottom: '10rem' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(500px, 3fr) minmax(300px, 1fr)', gap: '4rem' }}>
        
        {/* Left Side: Product Selection */}
        <div>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
             <span style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--text-primary)' }}>1. WATCH</span>
             <span>2. APPAREL</span>
             <span>3. COMPLIMENT</span>
          </div>
          
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontStyle: 'italic', marginBottom: '1rem' }}>Select Timepiece</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem' }}>
            The foundation of your composition. Choose a timepiece that defines the character of your gift.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Option 1 */}
            <div style={{ cursor: 'pointer' }}>
               <div style={{ aspectRatio: '3/4', background: 'var(--bg-secondary)', marginBottom: '1rem' }}>
                  <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1699&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Watch 1" />
               </div>
               <h4 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem' }}>The Obsidian</h4>
               <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>$240</p>
            </div>
            
            {/* Option 2 */}
            <div style={{ cursor: 'pointer' }}>
               <div style={{ aspectRatio: '3/4', background: 'var(--bg-secondary)', marginBottom: '1rem' }}>
                  <img src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1470&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Watch 2" />
               </div>
               <h4 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem' }}>Aurelius Classic</h4>
               <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>$190</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Composition Cart */}
        <div style={{ position: 'sticky', top: '8rem', height: 'fit-content', background: 'var(--bg-secondary)', padding: '2rem' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>The Composition</h3>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', opacity: 0.5 }}>
             <div style={{ width: '60px', height: '60px', background: 'var(--bg-primary)', borderRadius: '50%' }}></div>
             <div>
               <p style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Timepiece</p>
               <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Pending selection</p>
             </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', opacity: 0.5 }}>
             <div style={{ width: '60px', height: '60px', background: 'var(--bg-primary)', borderRadius: '50%' }}></div>
             <div>
               <p style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Apparel</p>
               <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Pending selection</p>
             </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
             <span style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Total</span>
             <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>$0.00</span>
          </div>

          <button className="primary-btn" style={{ width: '100%', marginTop: '2rem' }} disabled>REVIEW COMPOSITION</button>
        </div>

      </div>
    </motion.div>
  );
}
