import React from 'react';
import { Globe, Smartphone, Cloud, Cpu, Server, Palette, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, onNavigate }) => {
  return (
    <div 
      className="glass-card"
      style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        border: '1px solid var(--glass-border)',
        cursor: 'pointer'
      }}
      onClick={() => onNavigate('services')}
    >
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        background: 'var(--primary-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        boxShadow: '0 4px 10px var(--purple-glow)'
      }}>
        <Icon size={20} />
      </div>
      
      <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-color)' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.5', flexGrow: 1 }}>
        {description}
      </p>

      <span style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.4rem', 
        fontSize: '0.75rem', 
        fontWeight: '700', 
        color: 'var(--accent-color)',
        marginTop: '0.5rem'
      }}>
        Learn More <ArrowRight size={12} />
      </span>
    </div>
  );
};

const ServicesSlide = ({ onNavigate }) => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'High-performance interactive web portals and corporate websites optimized for search, speed, and conversion.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for Android & iOS delivering seamless mobile interfaces.'
    },
    {
      icon: Cloud,
      title: 'SaaS Product Development',
      description: 'From architecture to deployment, we build scalable multi-tenant architectures and subscription dashboards.'
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Enriching platforms with natural language models, custom recommendation algorithms, and visual recognition AI.'
    },
    {
      icon: Server,
      title: 'ERP Solutions',
      description: 'Custom internal CRM and ERP modules to manage complex business databases and automated operations.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interactive and visual prototyping that maps frictionless journeys and aligns with corporate design principles.'
    }
  ];

  return (
    <section className="ppt-slide" style={{ position: 'relative' }}>
      <div className="glow-spot-purple" style={{ top: '10%', right: '10%' }}></div>
      <div className="glow-spot" style={{ bottom: '10%', left: '10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="title-container">
          <h2 className="section-title">End-to-End Services</h2>
          <p className="section-subtitle">
            Leveraging modern stacks and agile workflows to transform raw ideas into enterprise-grade products.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          width: '100%'
        }}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlide;
