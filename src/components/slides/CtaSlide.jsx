import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const CtaSlide = ({ onNavigate }) => {
  return (
    <section className="ppt-slide" style={{ position: 'relative' }}>
      <div className="glow-spot-purple" style={{ top: '-10%', left: '10%' }}></div>
      <div className="glow-spot" style={{ bottom: '15%', right: '10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div 
          className="glass-card page-fade-in"
          style={{
            padding: '3.5rem 2rem',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            border: '1px solid var(--accent-color)',
            boxShadow: '0 12px 40px var(--accent-glow)',
            borderRadius: '28px',
            background: 'var(--glass-bg)'
          }}
        >
          <span style={{
            fontSize: '0.8rem',
            color: 'var(--accent-color)',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '0.75rem',
            display: 'block'
          }}>
            LET'S CONSTRUCT SOMETHING OUTSTANDING
          </span>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '1rem',
            fontFamily: 'var(--font-heading)'
          }}>
            Ready to Build Your Digital Product?
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
            maxWidth: '650px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.6'
          }}>
            Whether you require a custom SaaS database, a responsive mobile application, or a deep AI model integration, Zyntrix is here to scale your business operations.
          </p>

          <div style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => onNavigate('contact')}
              className="btn btn-primary"
              style={{ fontSize: '0.9rem', padding: '0.8rem 1.8rem' }}
            >
              Get Started <ArrowRight size={16} />
            </button>
            
            <button 
              onClick={() => onNavigate('contact')}
              className="btn btn-secondary"
              style={{ fontSize: '0.9rem', padding: '0.8rem 1.8rem' }}
            >
              Book Demo <Calendar size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSlide;
