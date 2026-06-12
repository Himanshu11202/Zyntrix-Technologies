import React from 'react';
import { Calendar, Briefcase, Rocket, Globe } from 'lucide-react';

const JourneyCard = ({ year, title, desc, icon: Icon, align = 'left' }) => {
  return (
    <div 
      className={`timeline-item ${align === 'left' ? 'left-item' : 'right-item'}`}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div 
        className="glass-card page-fade-in"
        style={{
          padding: '1.25rem',
          border: '1px solid var(--glass-border)',
          width: '100%',
          position: 'relative',
          borderRadius: '12px'
        }}
      >
        <span 
          style={{
            fontSize: '1.1rem',
            fontWeight: '800',
            color: 'var(--accent-color)',
            fontFamily: 'var(--font-heading)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '0.4rem'
          }}
        >
          <Icon size={14} />
          {year}
        </span>
        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.3rem' }}>{title}</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.5' }}>{desc}</p>
      </div>
    </div>
  );
};

const JourneySlide = () => {
  const milestones = [
    {
      year: 'Early 2025',
      title: 'Company Idea Started',
      desc: 'Formulation of core team principles, establishing development guidelines and testing frameworks.',
      icon: Calendar,
      align: 'left'
    },
    {
      year: 'Mid 2025',
      title: 'First Projects Built',
      desc: 'Successful launches of high-performance landing portals and custom business applications for our first clients.',
      icon: Briefcase,
      align: 'right'
    },
    {
      year: '2026',
      title: 'Product Launch Phase',
      desc: 'Official launch of Nivas Property Management Platform and ScanBite QR-based ordering system in local regions.',
      icon: Rocket,
      align: 'left'
    },
    {
      year: 'Future',
      title: 'Global SaaS Company',
      desc: 'Scaling cloud servers to support millions of cross-border active tenants and digital hospitality orders.',
      icon: Globe,
      align: 'right'
    }
  ];

  return (
    <section className="ppt-slide" style={{ position: 'relative' }}>
      <div className="glow-spot" style={{ top: '-10%', right: '20%' }}></div>
      <div className="glow-spot-purple" style={{ bottom: '10%', left: '10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column' }}>
        <div className="title-container" style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Our Milestone Journey</h2>
          <p className="section-subtitle">
            A brief history of how we started and where we are heading as an enterprise.
          </p>
        </div>

        <div className="timeline" style={{ width: '100%', paddingBottom: '1.5rem' }}>
          {milestones.map((item, idx) => (
            <JourneyCard 
              key={idx}
              year={item.year}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
              align={item.align}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySlide;
