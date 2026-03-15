import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="cta-section">
      <motion.div style={{ y }} className="cta-content">
        <h2 className="cta-title">Refined taste for the modern atelier.</h2>
        <p className="cta-quote">"Style is the soul's expression, but a sweet indulgence is its silent celebration."</p>
        <div style={{ marginTop: '4rem' }}>
          <button className="primary-btn">Begin The Ritual</button>
        </div>
      </motion.div>
    </section>
  );
}
