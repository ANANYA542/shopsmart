import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const editorialProducts = [
    { name: "Ambient Arc Lamp", type: "Lighting", price: "$420", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1470&auto=format&fit=crop" },
    { name: "Chronos Classic", type: "Horology", price: "$2,150", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1470&auto=format&fit=crop" },
    { name: "Monolith Wall Clock", type: "Decor", price: "$180", img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=1470&auto=format&fit=crop" },
    { name: "Noir Evening Gown", type: "Formal Wear", price: "$890", img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1492&auto=format&fit=crop" }
  ];

  return (
    <section ref={ref} className="cta-section container" style={{ padding: '8rem 5%', textAlign: 'center' }}>
      <motion.div style={{ y }} className="cta-content" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <p style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
          EDITORIAL SHOWCASE
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', margin: '0 auto 1.5rem', fontStyle: 'italic', maxWidth: '800px', lineHeight: 1.2 }}>
          Refined taste for the modern connoisseur.
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
          &ldquo;Style is the soul&apos;s expression, but a curated environment is its silent celebration.&rdquo;
        </p>
        
        <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          {editorialProducts.map((product, idx) => (
            <motion.div key={idx} className="card-hover" style={{ cursor: 'pointer', paddingBottom: '1rem' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', marginBottom: '1rem' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{product.type}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>{product.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '5rem' }}>
          <button className="primary-btn">Begin The Ritual</button>
        </div>
      </motion.div>
    </section>
  );
}
