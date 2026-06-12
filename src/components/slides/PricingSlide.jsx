import React from 'react';
import { Check, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const PricingCard = ({ title, price, features, badge, isPopular, onNavigate }) => {
  const badgeColors = isPopular 
    ? { border: '1px solid var(--accent-color)', bg: 'var(--accent-glow)', text: 'var(--accent-color)' }
    : { border: '1px solid rgba(139, 92, 246, 0.3)', bg: 'var(--purple-glow)', text: 'var(--primary-color)' };

  return (
    <div 
      className="glass-card"
      style={{
        padding: '2rem 1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        border: isPopular ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--glass-border)',
        boxShadow: isPopular ? '0 10px 30px rgba(16, 185, 129, 0.08)' : '0 10px 30px rgba(0,0,0,0.3)',
        position: 'relative',
        height: '100%',
        justifyContent: 'space-between',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {badge && (
        <span 
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.25rem 0.65rem',
            borderRadius: '20px',
            fontSize: '9px',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            border: badgeColors.border,
            background: badgeColors.bg,
            color: badgeColors.text,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}
        >
          {isPopular ? <Zap size={10} /> : <ShieldCheck size={10} />}
          {badge}
        </span>
      )}

      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-color)' }}>
          {title}
        </h3>
        
        <div style={{ margin: '1rem 0' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', tracking: '0.05em' }}>
            Est. Price Range
          </span>
          <span style={{ 
            fontSize: '1.75rem', 
            fontWeight: '900', 
            background: 'linear-gradient(135deg, var(--text-color) 40%, var(--accent-color) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {price}
          </span>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
          {features.map((feat, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <Check size={14} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '0.15rem' }} />
              <span style={{ lineHeight: '1.4' }}>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => onNavigate('contact')}
        className={`btn ${isPopular ? 'btn-primary' : 'btn-secondary'}`}
        style={{ width: '100%', marginTop: '1.5rem', padding: '0.7rem 1rem', fontSize: '0.85rem', borderRadius: '8px' }}
      >
        Get Custom Quote
      </button>
    </div>
  );
};

const PricingSlide = ({ onNavigate }) => {
  const pricingData = [
    {
      title: 'Basic Business Website',
      price: '₹15,000 – ₹30,000',
      badge: 'Startup Starter',
      isPopular: false,
      features: [
        'Modern Responsive Design',
        'Up to 5 Pages Layout',
        'Contact Form Integration',
        'Basic SEO Optimizations',
        'Social Media Links Sync',
        '1 Month Free Maintenance'
      ]
    },
    {
      title: 'Premium UI/UX Website',
      price: '₹40,000 – ₹80,000',
      badge: 'Most Popular',
      isPopular: true,
      features: [
        'Custom Interactive Layouts',
        'Up to 10 Pages & Slides',
        'Dynamic Animations & CSS',
        'Speed & Performance Optimized',
        'CMS Setup (Blog/News)',
        '3 Months Priority Support'
      ]
    },
    {
      title: 'E-Commerce Website',
      price: '₹50,000 – ₹1,50,000',
      badge: 'Merchant Focus',
      isPopular: false,
      features: [
        'Advanced Shopping Cart & Orders',
        'Stripe / Razorpay Payment APIs',
        'Complete Admin Inventory Dashboard',
        'Unlimited Product Catalogs',
        'Automatic Invoice Generation',
        'Secure Client Accounts Portal'
      ]
    },
    {
      title: 'Custom Software Development',
      price: '₹1,00,000 – ₹10,00,000+',
      badge: 'Enterprise Architecture',
      isPopular: false,
      features: [
        'Tailored CRM & ERP Databases',
        'Real-time WebSocket Notifications',
        'Scalable REST / GraphQL API Hubs',
        'Role-Based Authorization Matrices',
        'Cloud Telemetry Integrations',
        'Comprehensive Code Handover'
      ]
    },
    {
      title: 'Mobile App Development',
      price: '₹1,50,000 – ₹15,00,000+',
      badge: 'Cross-Platform SDK',
      isPopular: false,
      features: [
        'Android & iOS Native Support',
        'React Native / Flutter Stack',
        'Real-time Geolocation APIs',
        'Offline-First Data Syncing',
        'Play Store & App Store Publish',
        'Push Notification Automation'
      ]
    },
    {
      title: 'AI Solutions & Automation',
      price: 'Custom Pricing',
      badge: 'Next-Gen Cognitive',
      isPopular: false,
      features: [
        'Generative LLM Implementations',
        'Vector Search DB Integrations',
        'Recommendation ML Classifiers',
        'Intelligent Web Scrapers & Bots',
        'Structural Failure Predictions',
        'Agile Workflow automation'
      ]
    },
    {
      title: 'Digital Marketing Services',
      price: '₹10,000 – ₹1,00,000/mo',
      badge: 'Growth Booster',
      isPopular: false,
      features: [
        'Advanced Search SEO & Rank Audits',
        'Social Media Profile Management',
        'High-Conversion Meta & Google Ads',
        'Premium Branding & Creative Collaterals',
        'Verified B2B Lead Generation',
        'Weekly Telemetry Performance Logs'
      ]
    }
  ];

  return (
    <section className="ppt-slide" style={{ position: 'relative' }}>
      <div className="glow-spot-purple" style={{ bottom: '15%', right: '5%' }}></div>
      <div className="glow-spot" style={{ top: '15%', left: '5%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="title-container">
          <h2 className="section-title">Professional Service Pricing</h2>
          <p className="section-subtitle">
            Flexible, high-performance packages designed to scale your operations. No hidden charges—transparent project scoping for everyone.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          marginTop: '2rem'
        }}>
          {pricingData.map((data, index) => (
            <PricingCard 
              key={index}
              title={data.title}
              price={data.price}
              features={data.features}
              badge={data.badge}
              isPopular={data.isPopular}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        <div 
          className="glass-card animated-float"
          style={{
            marginTop: '3.5rem',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            border: '1px solid var(--glass-border)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)' }}>
            <HeartHandshake size={20} />
            <span style={{ fontWeight: '800', fontSize: '0.9rem' }}>Need a completely custom enterprise agreement?</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', maxWidth: '500px', margin: 0 }}>
            We draft tailor-made service agreements for large multi-unit setups, landlords, and corporations.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.4rem', fontSize: '0.8rem', borderRadius: '8px' }}
          >
            Consult Our Founder
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSlide;
