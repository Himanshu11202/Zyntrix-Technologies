import React from 'react';
import { Target, Eye, Award, ShieldCheck, Cpu, Award as AwardIcon, CheckSquare, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="page-fade-in" style={{ padding: '8rem 0 4rem 0', minHeight: '100vh', position: 'relative' }}>
      {/* Background ambient spots */}
      <div className="glow-spot-purple" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow-spot" style={{ bottom: '20%', right: '5%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Page Header */}
        <div className="title-container">
          <h1 className="section-title" style={{ fontSize: '3rem' }}>About Zyntrix Technologies</h1>
          <p className="section-subtitle">
            Pioneering digital automation, premium SaaS, and cybernetic architectures.
          </p>
        </div>

        {/* Grid: Story + Profile Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Our Story
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              Founded in 2025, Zyntrix Technologies emerged from a core vision: making enterprise-grade software products accessible to startups, local landlords, and dining chains alike.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              We specialize in constructing reliable modular SaaS architectures, QR ordering systems, and customized ERP systems. By using modern tools and keeping codebases clean, we deliver fast, secure solutions.
            </p>
          </div>

          {/* Premium Founder Card */}
          <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid var(--glass-border)', textAlign: 'center', borderRadius: '24px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-color)', letterSpacing: '0.12em', display: 'block', marginBottom: '1.25rem' }}>LEADERSHIP FOCUS</span>
            
            {/* Pulsing Avatar Frame with Founder Portrait */}
            <div 
              className="glow-neon"
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'var(--primary-gradient)',
                padding: '3px',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'var(--bg-color)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="public/himanshu_ceo.jpg" 
                  alt="Himanshu Patidar, Founder & CEO"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    transform: 'scale(1.05)',
                    display: 'block'
                  }} 
                />
              </div>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.25rem' }}>Himanshu Patidar</h3>
            <span style={{ color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: '750', textTransform: 'uppercase', tracking: '0.05em', display: 'block', marginBottom: '0.25rem' }}>
              Founder & CEO
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block', marginBottom: '1.5rem' }}>Chief Software Architect</span>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.6', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              Himanshu drives the core product development, system design, and technology roadmap at Zyntrix. He oversees the implementation of both Nivas and ScanBite.
            </p>

            {/* Qualifications / Skills grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'left' }}>
              <div>
                <span style={{ fontSize: '8px', fontWeight: '800', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', tracking: '0.05em', marginBottom: '0.35rem' }}>Qualifications</span>
                <ul style={{ listStyle: 'none', fontSize: '9.5px', color: 'var(--text-color)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <li>• B.Tech in CS</li>
                  <li>• System Architect</li>
                </ul>
              </div>
              <div>
                <span style={{ fontSize: '8px', fontWeight: '800', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', tracking: '0.05em', marginBottom: '0.35rem' }}>Core Expertise</span>
                <ul style={{ listStyle: 'none', fontSize: '9.5px', color: 'var(--text-color)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <li>• React & Java Stack</li>
                  <li>• Cloud Telemetry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Mission */}
          <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--glass-border)' }}>
            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}><Target size={26} /></div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.75rem' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              To engineer secure, user-centric software applications that automate daily operational tasks, allowing business owners to focus on growth.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--glass-border)' }}>
            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}><Eye size={26} /></div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.75rem' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              To establish Zyntrix as a globally recognized provider of customizable SaaS tools and automation algorithms, catering to millions of digital businesses.
            </p>
          </div>

          {/* Values */}
          <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--glass-border)' }}>
            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}><Award size={26} /></div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.75rem' }}>Our Values</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              Transparency in code delivery, performance-focused system architecture, high-security default integrations, and customer support.
            </p>
          </div>
        </div>

        {/* Company Achievements & Accolades */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.65rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
            Company Achievements
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: AwardIcon,
                title: 'Tech Startup Nominee',
                desc: 'Acknowledged as one of the fastest emerging regional developer units, crafting custom double-entry ledgers and QR networks.'
              },
              {
                icon: ShieldCheck,
                title: 'Data Privacy Compliant',
                desc: 'Constructing software matching strict client encryption guidelines, security hashes, and private cloud deployment scopes.'
              },
              {
                icon: TrendingUp,
                title: '1M+ Weekly Telemetry logs',
                desc: 'Actively processing over one million API and sensor requests across our active smart structural grids and property ledgers.'
              }
            ].map((ach, idx) => {
              const Icon = ach.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-card" 
                  style={{ 
                    padding: '2rem', 
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div style={{
                    padding: '0.6rem',
                    borderRadius: '10px',
                    background: 'var(--primary-gradient)',
                    color: '#ffffff'
                  }}>
                    <Icon size={20} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '750', color: 'var(--text-color)' }}>{ach.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5' }}>{ach.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Goals */}
        <div className="glass-card" style={{ padding: '2.5rem 2rem', border: '1px solid var(--glass-border)', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '1rem', textAlign: 'center' }}>Future Roadmap</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginTop: '2rem'
          }}>
            {[
              { phase: 'Phase 1: Regional Expansion', detail: 'Deploy Nivas and ScanBite across 15+ new metro cities, expanding server support bounds.' },
              { phase: 'Phase 2: Artificial Intelligence Integration', detail: 'Deploy automated rent prediction engines for landlords and smart order recommenders for restaurant checkouts.' },
              { phase: 'Phase 3: Multi-currency & Global Compliance', detail: 'Open operations to cross-border subscription payments and compliance audits.' }
            ].map((goal, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1rem', borderLeft: '2px solid var(--accent-color)', paddingLeft: '1.25rem' }}>
                <div>
                  <h4 style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-color)' }}>{goal.phase}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{goal.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
