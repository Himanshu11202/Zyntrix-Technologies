import React from 'react';
import { Code, Cloud, Cpu, Settings, Check, ArrowRight } from 'lucide-react';

const ServiceSection = ({ icon: Icon, title, tag, desc, capabilities, index, onNavigate }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        padding: '2.5rem 2rem',
        gap: '2.5rem',
        marginBottom: '2.5rem',
        border: '1px solid var(--glass-border)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      <div style={{ flex: '1.2', minWidth: '280px' }}>
        <span style={{ 
          color: 'var(--accent-color)', 
          fontSize: '0.75rem', 
          fontWeight: '800', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em',
          display: 'block',
          marginBottom: '0.5rem'
        }}>
          {tag}
        </span>
        <h2 style={{ fontSize: '1.65rem', fontWeight: '800', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
          {title}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
          {desc}
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={() => onNavigate('contact')}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.8rem' }}
          >
            Inquire Project <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <div 
        style={{ 
          flex: '0.8', 
          background: 'rgba(0,0,0,0.15)', 
          padding: '1.75rem', 
          borderRadius: '16px', 
          border: '1px solid var(--glass-border)',
          width: '100%',
          minWidth: '240px'
        }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem',
          borderRadius: '8px',
          background: 'var(--primary-gradient)',
          color: '#ffffff',
          marginBottom: '1rem'
        }}>
          <Icon size={18} />
        </div>
        
        <h4 style={{ fontSize: '0.95rem', fontWeight: '750', marginBottom: '0.75rem' }}>Core Capabilities</h4>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {capabilities.map((cap, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <Check size={12} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
              <span>{cap}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ServicesPage = ({ onNavigate }) => {
  const serviceList = [
    {
      icon: Code,
      tag: 'DESIGN & CODE',
      title: 'Custom Software Development',
      desc: 'We construct tailormade applications optimized for your enterprise flow. Our processes include requirement maps, architectural diagrams, responsive frontends (React/Vite), and clean REST/GraphQL server scripts.',
      capabilities: [
        'Enterprise Frontend Dashboards',
        'Database Schema Tuning & Indexing',
        'API Design & Integration Hubs',
        'Legacy Code Migration Patterns',
        'Cross-platform Desktop Frameworks'
      ]
    },
    {
      icon: Cloud,
      tag: 'SCALE & MANAGE',
      title: 'SaaS Platform Development',
      desc: 'Turn SaaS concepts into operational code. We build multi-tenant database clusters, configure role-based auth protocols, set up usage-based pricing meters, and configure auto-scaling cloud containers.',
      capabilities: [
        'Multi-tenant DB Partitioning',
        'Stripe & Razorpay Payment Loops',
        'Usage Analytics & Metered Billing',
        'Role-Based Authorization Matrices',
        'Real-time Websocket Subscriptions'
      ]
    },
    {
      icon: Cpu,
      tag: 'INTEGRATE & AUTOMATE',
      title: 'AI Integration & Solutions',
      desc: 'Inject cutting-edge cognitive features into your stack. We connect systems with leading language LLM providers, build semantic vector search engines, construct recommendation pipelines, and build visual inspection systems.',
      capabilities: [
        'LLM Tuning & Agentic Pipelines',
        'Vector DB Search (Pinecone/Chroma)',
        'Recommendation ML Classifiers',
        'Computer Vision & Object Detection',
        'Natural Language Parsing Scripts'
      ]
    },
    {
      icon: Settings,
      tag: 'OPTIMIZE & AUTOMATE',
      title: 'Automation & ERP Systems',
      desc: 'Connect disconnected departments with unified CRM/ERP nodes. We automate manual spreadsheet transfers, set up email alerts, configure warehouse stock loops, and write workflow triggers.',
      capabilities: [
        'ERP/CRM Custom Integrations',
        'Internal Slack & Teams Webhooks',
        'Cron Job Automated Email Reports',
        'Data Sync Scrapers & Parsers',
        'Legacy System API Wrappers'
      ]
    }
  ];

  return (
    <div className="page-fade-in" style={{ padding: '8rem 0 4rem 0', minHeight: '100vh', position: 'relative' }}>
      <div className="glow-spot-purple" style={{ top: '15%', left: '5%' }}></div>
      <div className="glow-spot" style={{ bottom: '15%', right: '5%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Page Header */}
        <div className="title-container" style={{ marginBottom: '3rem' }}>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>Our Engineering Offerings</h1>
          <p className="section-subtitle">
            From initial wireframing and local database design to global multi-node cloud deployments.
          </p>
        </div>

        {/* Services List */}
        <div className="services-sections-list">
          {serviceList.map((service, index) => (
            <ServiceSection 
              key={index}
              index={index}
              icon={service.icon}
              tag={service.tag}
              title={service.title}
              desc={service.desc}
              capabilities={service.capabilities}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
