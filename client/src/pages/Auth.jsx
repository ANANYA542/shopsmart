import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <motion.div 
      className="page-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', marginTop: '6rem' }}
    >
      <div style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {isLogin ? 'Welcome Back' : 'Join the Atelier'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          {isLogin ? 'Enter your details to access your curations.' : 'Create an account to begin the ritual.'}
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Full Name" 
              style={{ padding: '1rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
            />
          )}
          <input 
            type="email" 
            placeholder="Email Address" 
            style={{ padding: '1rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            style={{ padding: '1rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
          />
          
          <button className="primary-btn" style={{ marginTop: '1rem', width: '100%' }}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <button 
          onClick={() => setIsLogin(!isLogin)}
          style={{ marginTop: '2rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </motion.div>
  );
}
