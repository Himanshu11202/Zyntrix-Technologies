import React from 'react';
import { Layers, ShieldCheck, Zap, Heart, Award, ArrowUpRight } from 'lucide-react';

const ChooseItem = ({ icon: Icon, title, desc }) => {
  return (
    <div 
      className="glass-card"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        padding: '1.25rem',
        gap: '1rem',
        border: '1px solid var(--glass-border)',
        textAlign: 'left'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.6rem',
        borderRadius: '10px',
        background: 'var(--primary-gradient)',
        color: '#ffffff',
        flexShrink: 0
      }}>
        <Icon size={18} />
      </div>
      <div>
        <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem', color: 'var(--text-color)' }}>{title}</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.45' }}>{desc}</p>
      </div>
    </div>
  );
};

const WhyChooseUsSlide = ({ onNavigate }) => {
  const pillars = [
    {
      icon: Layers,
      title: 'Modern Architecture',
      desc: 'Modular frontend structures (React/Vite) paired with scalable server endpoints for robust codebases.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Codebase',
      desc: 'Strict input sanitization, OAuth auth scopes, data encryption, and active vulnerability audits.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      desc: 'Optimized asset bundles, database index patterns, and edge delivery to minimize page loads.'
    },
    {
      icon: Heart,
      title: 'User Friendly UI',
      desc: 'Modern visual principles, consistent sizing, and responsive design systems that increase retention.'
    },
    {
      icon: Award,
      title: 'Scalable Systems',
      desc: 'Deployments prepared for auto-scaling nodes, CDN routing, and optimized load peaks.'
    }
  ];

  return (
    <section className="ppt-slide" style={{ position: 'relative' }}>
      <div className="glow-spot-purple" style={{ bottom: '-10%', right: '20%' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          width: '100%'
        }}>
          {/* Left Text */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div 
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '800',
                background: 'var(--accent-glow)',
                color: 'var(--accent-color)',
                border: '1px solid var(--accent-color)',
                marginBottom: '1rem',
                letterSpacing: '0.05em'
              }}
            >
              OUR PROMISE
            </div>
            
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: '800',
              lineHeight: '1.25',
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)'
            }}>
              Engineering Code Built for the <span style={{
                background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--secondary-color) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Long Run</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
              At Zyntrix Technologies, we do not believe in shortcuts. We deploy clean, self-documenting codebases built on open frameworks that scale effortlessly as your users grow.
            </p>

            <button 
              onClick={() => onNavigate && onNavigate('contact')}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.85rem', borderRadius: '8px' }}
            >
              Get Started Now <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Pillars List - Flow naturally */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {pillars.map((item, idx) => (
              <ChooseItem 
                key={idx}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSlide;
