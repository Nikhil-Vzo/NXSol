import React from 'react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: '0 2rem' }}>
      {/* Navigation */}
      <nav style={{ 
        height: '80px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>
          NX<span style={{ color: 'var(--primary-color)' }}>SOL</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="btn btn-primary" style={{ padding: '8px 20px' }}>Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        padding: '120px 0 80px', 
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'inline-block', 
          padding: '6px 16px', 
          borderRadius: '100px', 
          background: 'rgba(59, 130, 246, 0.1)',
          color: 'var(--primary-color)',
          fontSize: '0.8rem',
          fontWeight: 600,
          marginBottom: '2rem',
          border: '1px solid rgba(59, 130, 246, 0.2)'
        }}>
          ✨ The future of solutions is here
        </div>
        <h1 className="hero-text" style={{ 
          fontSize: 'clamp(3rem, 8vw, 5rem)', 
          lineHeight: 1.1,
          marginBottom: '1.5rem'
        }}>
          Next-Gen Performance for Modern Ventures
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'rgba(255,255,255,0.6)',
          marginBottom: '3rem',
          maxWidth: '600px',
          marginInline: 'auto'
        }}>
          Unlock unparalleled scalability and design excellence with NXSol's revolutionary architecture. Built for speed, designed for impact.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button className="btn btn-primary">Start Building Now</button>
          <button className="btn glass-panel" style={{ background: 'transparent' }}>View Documentation</button>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" style={{ 
        maxWidth: '1200px', 
        margin: '80px auto',
        paddingBottom: '100px'
      }}>
        <div className="grid grid-cols-3">
          {[
            { title: 'Lightning Fast', desc: 'Optimized at every level to ensure sub-second response times.', icon: '⚡' },
            { title: 'Modern Design', desc: 'Crafted with the latest UI trends including glassmorphism and mesh gradients.', icon: '🎨' },
            { title: 'Full Control', desc: 'Customizable components and architecture to fit your specific needs.', icon: '🛠️' }
          ].map((feature, i) => (
            <div key={feature.title} className="glass-panel animate-float" style={{ 
              padding: '2.5rem',
              animationDelay: `${i * 0.2}s`
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '60px 0', 
        textAlign: 'center', 
        borderTop: '1px solid var(--glass-border)',
        marginTop: '100px',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.85rem'
      }}>
        © 2026 NXSol. All rights reserved. Crafted for the future.
      </footer>
    </main>
  );
}
