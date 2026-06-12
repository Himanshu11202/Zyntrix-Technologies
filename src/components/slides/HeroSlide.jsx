import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, HardHat, Cpu } from 'lucide-react';

const HeroSlide = ({ onNavigate }) => {
  return (
    <section className="ppt-slide" style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background gradients */}
      <div className="glow-spot-purple" style={{ top: '-10%', left: '10%' }}></div>
      <div className="glow-spot" style={{ bottom: '15%', right: '10%' }}></div>

      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        {/* Dynamic Badge */}
        <div 
          className="glass-card page-fade-in animate-float"
          style={{
            padding: '0.45rem 1.25rem',
            borderRadius: '30px',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: 'var(--accent-color)',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            background: 'var(--accent-glow)',
            boxShadow: '0 0 20px var(--accent-glow)',
            marginBottom: '2rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <ShieldCheck size={14} /> Global Enterprise Standards
        </div>

        {/* Main Title */}
        <h1 
          className="page-fade-in"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: '1.15',
            fontWeight: '800',
            maxWidth: '950px',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.04em',
            color: 'var(--text-color)'
          }}
        >
          Building Future with <span style={{
            background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Innovation</span> & Engineering Excellence
        </h1>

        {/* Subheading */}
        <p 
          className="page-fade-in"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-muted)',
            maxWidth: '700px',
            marginBottom: '3rem',
            lineHeight: '1.7'
          }}
        >
          Zyntrix is a premier integration company, constructing real-world civil architectures while engineering smart, cybernetic SaaS platforms for structural and database automation.
        </p>

        {/* Action Buttons */}
        <div 
          className="page-fade-in"
          style={{
            display: 'flex',
            gap: '1.25rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}
        >
          <button 
            onClick={() => onNavigate('contact')} 
            className="btn btn-primary"
            style={{ fontSize: '0.95rem', padding: '0.9rem 2.2rem', borderRadius: '8px' }}
          >
            Explore Projects <ArrowRight size={16} />
          </button>
          
          <button 
            onClick={() => {
              const el = document.getElementById('products-slide');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }} 
            className="btn btn-secondary"
            style={{ fontSize: '0.95rem', padding: '0.9rem 2.2rem', borderRadius: '8px' }}
          >
            Our Products
          </button>
        </div>

        {/* Modern Interactive Dashboard Mockup Showcase */}
        <div 
          className="page-fade-in glass-card"
          style={{
            marginTop: '4rem',
            width: '100%',
            maxWidth: '900px',
            borderRadius: '16px',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            overflow: 'hidden',
            position: 'relative',
            background: 'var(--glass-bg)',
            padding: '1.5rem'
          }}
        >
          {/* Header of mockup */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace', background: 'rgba(0,0,0,0.2)', padding: '0.1rem 1rem', borderRadius: '10px' }}>
              zyntrix-terminal.sh
            </div>
            <div style={{ width: '30px' }}></div>
          </div>
          {/* Mockup content: grids showing active telemetry */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'left' }}>
            {/* Column 1: System Telemetry */}
            <div style={{ background: 'rgba(0,0,0,0.15)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: '800', display: 'block', marginBottom: '0.5rem' }}>SYSTEM TELEMETRY</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>STATUS:</span>
                  <span style={{ color: 'var(--accent-color)' }}>ACTIVE</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>NET RATE:</span>
                  <span>99.98%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>PING:</span>
                  <span style={{ color: '#10b981' }}>12ms</span>
                </div>
              </div>
            </div>
            {/* Column 2: Active Modules */}
            <div style={{ background: 'rgba(0,0,0,0.15)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--primary-color)', fontWeight: '800', display: 'block', marginBottom: '0.5rem' }}>ACTIVE PLATFORMS</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-color)' }}></span>
                  <span style={{ fontWeight: '600' }}>Nivas Tenant Manager</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
                  <span style={{ fontWeight: '600' }}>ScanBite QR Ordering</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-color)' }}></span>
                  <span style={{ fontWeight: '600' }}>MIP Telemetry Panel</span>
                </div>
              </div>
            </div>
            {/* Column 3: Live Output Logs */}
            <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', fontFamily: 'monospace', fontSize: '0.7rem', color: '#10b981', maxHeight: '100px', overflowY: 'hidden' }}>
              <div>$ zyntrix deploy --prod</div>
              <div style={{ color: 'var(--text-muted)' }}>[info] Packing assets... done</div>
              <div>[success] Active at live Vercel links.</div>
              <div style={{ color: 'var(--accent-color)' }}>[info] Listening on port 5173</div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Prompt (Desktop only) */}
      <div 
        className="animated-float desktop-only"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          cursor: 'pointer',
          zIndex: 10
        }}
        onClick={() => {
          const el = document.getElementById('stats-slide');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span>Discover More</span>
        <ChevronDown size={14} style={{ color: 'var(--accent-color)' }} />
      </div>
    </section>
  );
};

export default HeroSlide;
