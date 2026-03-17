import { motion } from 'framer-motion';

export default function Cart() {
  return (
    <motion.div 
      className="page-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ marginTop: '12rem', minHeight: '60vh' }}
    >
      <h1 className="section-title">Your Curations</h1>
      <p style={{ color: 'var(--text-secondary)' }}>You have no items in your cart.</p>
      
      <div style={{ marginTop: '4rem' }}>
        <button className="primary-btn">Continue Shopping</button>
      </div>
    </motion.div>
  );
}
