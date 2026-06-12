import React, { useState } from 'react';
import { Star, X, ExternalLink, ShieldAlert, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import OptimizedImage from '../OptimizedImage';

const ProjectsSlide = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'nivas',
      name: 'Nivas PG Manager',
      desc: 'High-performance property tenant database, rent processing ledger, and utility calculations. Automated billing for landlords.',
      category: 'featured',
      status: 'Completed',
      image: '/nivas_dashboard.png',
      tech: ['React', 'Spring Boot', 'Postgres'],
      successRate: '99.9%',
      satisfaction: 5,
      liveUrl: 'https://nivas-frontend.vercel.app/',
      features: [
        'KYC database for tenant document verification and e-signatures.',
        'Electricity, rent, and utility automated ledger tracking.',
        'SMS/WhatsApp direct integration for rent due notifications.',
        'Occupancy visual metrics mapping room beds and vacancy levels.'
      ],
      impact: 'Automated 120+ property hours per month for property managers.'
    },
    {
      id: 'scanbite',
      name: 'ScanBite QR Ordering',
      desc: 'Mobile-first restaurant ordering app, digital table QR tags, and real-time kitchen display screens syncing food status.',
      category: 'featured',
      status: 'Completed',
      image: '/scanbite_qr_ui.png',
      tech: ['React', 'Node.js', 'MongoDB'],
      successRate: '99.8%',
      satisfaction: 5,
      liveUrl: 'https://scanbite-qr-checkout.vercel.app',
      features: [
        'Zero-app installation browser menu scans for guests.',
        'Instant kitchen display terminal sync reducing order lags.',
        'Payment gateway integration for mobile checkout splits.',
        'Chef performance analytics and top-dishes metrics tracking.'
      ],
      impact: 'Reduced restaurant customer ordering waiting times by 32%.'
    },
    {
      id: 'indore-hub',
      name: 'Indore IT Smart Campus',
      desc: 'Constructing a multi-floor software tech park integrated with real-time concrete structural temperature and stress telemetry sensors.',
      category: 'ongoing',
      status: 'In Progress',
      image: '/engineering_map.png',
      tech: ['Smart Concrete', 'AWS IoT', 'React Dashboard'],
      successRate: '97.6%',
      satisfaction: 5,
      liveUrl: 'https://indore-smart-campus-telemetry.vercel.app',
      features: [
        'IoT node connection to structural concrete sensors.',
        'Real-time heat maps reflecting stress points across multi-floor grids.',
        'Automated structural safety triggers syncing with emergency units.',
        'Analytical portal forecasting structural longevity metrics.'
      ],
      impact: 'Delivered continuous stress monitoring dashboard across 12,000 sqm.'
    },
    {
      id: 'three-l',
      name: 'Three L Website',
      desc: 'Ed-Tech resource database and study planner app built for student revision schedules.',
      category: 'completed',
      status: 'Completed',
      image: '/nivas_dashboard.png', // Fallback
      tech: ['Next.js', 'Tailwind', 'Supabase'],
      successRate: '98.5%',
      satisfaction: 4,
      liveUrl: 'https://three-l.vercel.app/',
      features: [
        'Custom revision calendars adapting to student exam targets.',
        'Direct revision question banks divided by chapters.',
        'Study buddy room sync matching active revision goals.',
        'Progress tracking graphs reflecting course completion metrics.'
      ],
      impact: 'Active revision hub supporting over 1,500 students daily.'
    },
    {
      id: 'mip',
      name: 'MIP Industrial Automation',
      desc: 'Industrial controller dashboard syncing telemetry from shop floor PLCs, reducing tracking lag.',
      category: 'completed',
      status: 'Completed',
      image: '/engineering_map.png', // Fallback
      tech: ['Java', 'C++', 'Websockets'],
      successRate: '99.5%',
      satisfaction: 5,
      liveUrl: 'https://mip-automation.vercel.app/',
      features: [
        'Direct Modbus connection to PLCs streaming telemetry data.',
        'Sub-millisecond data pipelines parsing pressure and heat.',
        'Predictive maintenance alarms forecasting bearing failures.',
        'Historical sensor reports with CSV export integrations.'
      ],
      impact: 'Minimized industrial machine downtimes by 15% on shop floor.'
    }
  ];

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter || (filter === 'completed' && p.status === 'Completed') || (filter === 'ongoing' && p.status === 'In Progress'));

  return (
    <section className="ppt-slide" style={{ position: 'relative' }}>
      <div className="glow-spot" style={{ top: '-10%', left: '20%' }}></div>
      
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between'
      }}>
        {/* Title */}
        <div className="title-container" style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Engineering Portfolio</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Click on any project to explore detailed specifications, live mockups, and live Vercel deployments.
          </p>

          {/* Filter Tabs */}
          <div 
            className="glass-panel"
            style={{
              display: 'inline-flex',
              padding: '0.35rem',
              borderRadius: '12px',
              border: '1px solid var(--glass-border)',
              gap: '0.35rem',
              background: 'var(--glass-bg)'
            }}
          >
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'completed', label: 'Completed' },
              { id: 'ongoing', label: 'Ongoing' },
              { id: 'featured', label: 'Featured' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '0.55rem 1.4rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  background: filter === tab.id ? 'var(--primary-gradient)' : 'transparent',
                  color: filter === tab.id ? '#ffffff' : 'var(--text-muted)',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div 
          className="projects-grid" 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            width: '100%',
            paddingBottom: '2rem'
          }}
        >
          {filtered.map(proj => (
            <div 
              key={proj.id}
              className="glass-card"
              onClick={() => setSelectedProject(proj)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--glass-border)',
                height: '100%',
                borderRadius: '16px',
                cursor: 'pointer'
              }}
            >
              <div>
                {/* Header Image */}
                <div style={{ position: 'relative', height: '180px', width: '100%', overflow: 'hidden' }}>
                  <OptimizedImage 
                    src={proj.image} 
                    alt={proj.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'none'}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <span 
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '6px',
                        fontSize: '9px',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: proj.status === 'Completed' ? 'rgba(16, 185, 129, 0.9)' : 'rgba(245, 158, 11, 0.9)',
                        color: '#ffffff'
                      }}
                    >
                      {proj.status}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div style={{ padding: '1.5rem' }}>
                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                    {proj.tech.map(t => (
                      <span 
                        key={t} 
                        style={{ 
                          fontSize: '9px', 
                          fontWeight: '700', 
                          color: 'var(--text-muted)', 
                          background: 'rgba(255,255,255,0.03)', 
                          border: '1px solid var(--glass-border)', 
                          padding: '0.2rem 0.5rem', 
                          borderRadius: '6px' 
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: '750', marginBottom: '0.5rem', color: 'var(--text-color)' }}>{proj.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.55' }}>{proj.desc}</p>
                </div>
              </div>

              {/* Metrics footer */}
              <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '9px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>SUCCESS RATE</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--accent-color)' }}>{proj.successRate}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '9px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', textAlign: 'right' }}>SATISFACTION</span>
                    <div style={{ display: 'flex', gap: '0.1rem', justifyContent: 'flex-end', marginTop: '0.2rem' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          fill={i < proj.satisfaction ? "var(--accent-color)" : "none"} 
                          stroke={i < proj.satisfaction ? "var(--accent-color)" : "var(--text-muted)"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small footer tag */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
          <button 
            onClick={() => onNavigate('contact')}
            className="btn btn-secondary"
            style={{ fontSize: '0.85rem', padding: '0.7rem 1.8rem', borderRadius: '8px' }}
          >
            Inquire Project Integration
          </button>
        </div>
      </div>

      {/* Project Details Modal Overlay */}
      {selectedProject && (
        <div 
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
            padding: '1.5rem'
          }}
          onClick={() => setSelectedProject(null)}
        >
          {/* Modal Panel Content */}
          <div 
            className="glass-card modal-panel"
            style={{
              maxWidth: '750px',
              width: '100%',
              maxHeight: '90vh',
              background: 'var(--glass-bg)',
              border: '1px solid var(--accent-color)',
              borderRadius: '24px',
              padding: '2.5rem',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(16, 185, 129, 0.15)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-color)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-color)'}
            >
              <X size={18} />
            </button>

            {/* Header info */}
            <div style={{ marginBottom: '1.75rem' }}>
              <span 
                style={{
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  fontSize: '9px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  border: '1px solid var(--accent-color)',
                  background: 'var(--accent-glow)',
                  color: 'var(--accent-color)',
                  display: 'inline-block',
                  marginBottom: '0.75rem'
                }}
              >
                {selectedProject.status}
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                {selectedProject.name}
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                {selectedProject.tech.map(t => (
                  <span key={t} style={{ fontSize: '10px', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.03)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Dummy Mockup Representation (Placeholders) */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              {[1, 2].map((num) => (
                <div 
                  key={num}
                  className="glass-card"
                  style={{
                    height: '140px',
                    borderRadius: '12px',
                    border: '1px dashed var(--glass-border)',
                    background: 'rgba(255,255,255,0.01)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    padding: '1rem',
                    textAlign: 'center'
                  }}
                >
                  <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.25rem' }}>📷</span>
                  <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>Mockup Interface {num}</span>
                  <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.2)' }}>(Click to Swap Image)</span>
                </div>
              ))}
            </div>

            {/* Specifications & Deliverables */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '750', marginBottom: '0.75rem', color: 'var(--text-color)' }}>
                Platform Specifications
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '0.1rem' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact & Outcomes */}
            <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--glass-border)', borderRadius: '12px', marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '750', color: 'var(--text-color)', display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                <Cpu size={14} style={{ color: 'var(--accent-color)' }} /> Telemetry Impact
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                {selectedProject.impact}
              </p>
            </div>

            {/* Vercel Live Demo Action Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button 
                onClick={() => setSelectedProject(null)}
                className="btn btn-secondary"
                style={{ fontSize: '0.8rem', padding: '0.6rem 1.4rem', borderRadius: '8px' }}
              >
                Close Details
              </button>
              
              <a 
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.6rem 1.6rem', borderRadius: '8px' }}
              >
                Explore Live Project <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSlide;
