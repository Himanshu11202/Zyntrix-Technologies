import React, { useState } from 'react';
import { Check, Play, Star, X, ExternalLink, Cpu, Sparkles } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const ProductsPage = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('nivas');
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);

  const nivasFeatures = [
    { name: 'Tenant Management', desc: 'Secure database containing tenant KYC data, agreement history, and digital signatures.' },
    { name: 'Rent Tracking', desc: 'Real-time monitoring of monthly rental payments with automatic overdue alerts.' },
    { name: 'Automated Billing', desc: 'Generate PDF invoices containing rent details, electricity usages, and amenities charges.' },
    { name: 'Dashboard Analytics', desc: 'Aggregated analytics reflecting monthly profit, building occupancy status, and expense flow.' },
    { name: 'Room Allocations', desc: 'Interactive room grid to manage beds, room types, rates, and vacant spots instantly.' },
    { name: 'Maintenance Desk', desc: 'Tenants submit repair tickets with photos, tracked directly in the owner panel.' }
  ];

  const scanbiteFeatures = [
    { name: 'QR Menu System', desc: 'Dynamic QR codes linked to digital menus. Update items, prices, and availability in seconds.' },
    { name: 'Real-time Orders', desc: 'Customers order from mobile browsers. Orders sync instantly to kitchen display terminals.' },
    { name: 'Restaurant Dashboard', desc: 'Control live menus, track sales volumes, manage tables, and check chef performance.' },
    { name: 'Billing Automation', desc: 'Print unified bills containing split checks, taxes, and integrations with digital payment links.' },
    { name: 'Kitchen Display Terminal', desc: 'Simplified chef view showing active tickets sorted by order timestamp.' },
    { name: 'Sales Analytics', desc: 'Insights highlighting top-selling dishes, peak dining hours, and repeat client profiles.' }
  ];

  const upcomingProducts = [
    {
      id: 'telemetry',
      name: 'Zyntrix Telemetry Hub',
      desc: 'Smart concrete stress detectors and real-time environment heatmaps linking structural builds to cloud sensors.',
      status: 'Alpha Phase',
      tech: ['IoT Sensors', 'MQTT', 'Go', 'AWS'],
      eta: 'Q4 2026',
      details: 'Connecting telemetry hardware to structural databases to alert managers of stress deviations and thermal expansions.'
    },
    {
      id: 'ledger-pro',
      name: 'Nivas Ledger Pro',
      desc: 'Automated rent bank account reconciliation and ledger audits utilizing open banking APIs.',
      status: 'Design Phase',
      tech: ['Banking APIs', 'Python', 'React', 'Postgres'],
      eta: 'Q1 2027',
      details: 'Syncing PG rent accounts directly with national bank reconciliations, eliminating invoice tracking errors entirely.'
    },
    {
      id: 'ai-recommender',
      name: 'ScanBite Smart Recommender',
      desc: 'Machine learning checkout recommendation engine suggesting items based on local dining histories.',
      status: 'Research Phase',
      tech: ['TensorFlow', 'FastAPI', 'Node.js'],
      eta: 'Q2 2027',
      details: 'A neural recommendation layer appended to restaurant mobile checkout pages, driving average client billing up by 15%.'
    }
  ];

  const handleProductCardClick = (title, features, liveUrl, tech, desc) => {
    setSelectedProductDetails({ title, features, liveUrl, tech, desc });
  };

  return (
    <div className="page-fade-in" style={{ padding: '8rem 0 4rem 0', minHeight: '100vh', position: 'relative' }}>
      <div className="glow-spot" style={{ top: '15%', right: '10%' }}></div>
      <div className="glow-spot-purple" style={{ bottom: '15%', left: '10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Page Header */}
        <div className="title-container" style={{ marginBottom: '3.5rem' }}>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>Our Software Platforms</h1>
          <p className="section-subtitle">
            Explore our core SaaS products and the upcoming developer pipeline. Click on any product details to explore.
          </p>

          {/* Tabs */}
          <div
            className="glass-card"
            style={{
              display: 'inline-flex',
              padding: '0.35rem',
              borderRadius: '12px',
              border: '1px solid var(--glass-border)',
              marginTop: '1rem',
              background: 'var(--glass-bg)'
            }}
          >
            {[
              { id: 'nivas', label: 'Nivas (PG Manager)' },
              { id: 'scanbite', label: 'ScanBite (Restaurants)' },
              { id: 'upcoming', label: 'Upcoming Releases' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.6rem 1.6rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  background: activeTab === tab.id ? 'var(--primary-gradient)' : 'transparent',
                  color: activeTab === tab.id ? '#ffffff' : 'var(--text-muted)',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: NIVAS */}
        {activeTab === 'nivas' && (
          <div className="page-fade-in">
            {/* Intro */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              marginBottom: '4rem'
            }}>
              <div>
                <h2 style={{ fontSize: '2.1rem', fontWeight: '800', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                  Nivas Property Manager
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                  Managing rooms, leases, and tenant compliance can turn into administrative headaches. Nivas automates utility billing calculations, creates rent receipts, alerts tenants of due dates, and visualizes cash flow statistics.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => handleProductCardClick(
                      'Nivas PG Manager',
                      nivasFeatures.map(f => f.name + ': ' + f.desc),
                      'https://nivas-frontend.vercel.app/',
                      ['React', 'Spring Boot', 'Postgres', 'AWS'],
                      'Enterprise-grade property administration platform automating KYC databases, room configurations, and double-entry rent ledger auditing.'
                    )}
                    className="btn btn-primary"
                    style={{ borderRadius: '8px' }}
                  >
                    <Play size={16} fill="#ffffff" /> Explore Interactive Demo
                  </button>
                  <a href="#nivas-pricing" className="btn btn-secondary" style={{ borderRadius: '8px' }}>Check Pricing</a>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--accent-color)',
                  boxShadow: '0 8px 30px var(--accent-glow)'
                }}
              >
                <OptimizedImage
                  src="/nivas_dashboard.png"
                  alt="Nivas Dashboard Preview"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Features list */}
            <h3 style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center' }}>
              Deep-Dive Platform Features
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {nivasFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  onClick={() => handleProductCardClick(
                    feat.name,
                    [feat.desc],
                    'https://nivas-frontend.vercel.app/',
                    ['React', 'Spring Boot', 'Postgres'],
                    'Core module of Nivas PG Manager. Designed for high performance, ease of use, and local compliance.'
                  )}
                  style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Check size={18} style={{ color: 'var(--accent-color)' }} />
                    <h4 style={{ fontWeight: '750', fontSize: '1.05rem' }}>{feat.name}</h4>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5' }}>{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <h3 id="nivas-pricing" style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center' }}>
              Nivas Plan Options
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { name: 'Starter', price: '₹999', desc: 'Best for local single-building landlord models.', limit: 'Up to 25 tenants' },
                { name: 'Growth', price: '₹2,499', desc: 'Designed for larger hostels & multi-floor PG systems.', limit: 'Up to 100 tenants', popular: true },
                { name: 'Enterprise', price: 'Custom', desc: 'Dedicated cloud containers and custom SMS integrations.', limit: 'Unlimited tenants' }
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '2.2rem 1.8rem',
                    border: tier.popular ? '2px solid var(--accent-color)' : '1px solid var(--glass-border)',
                    textAlign: 'center',
                    boxShadow: tier.popular ? '0 8px 25px var(--accent-glow)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '16px'
                  }}
                >
                  <div>
                    {tier.popular && (
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        background: 'var(--accent-color)',
                        color: '#030712',
                        fontSize: '0.7rem',
                        fontWeight: '800',
                        display: 'inline-block',
                        marginBottom: '1rem'
                      }}>
                        POPULAR
                      </span>
                    )}
                    <h4 style={{ fontSize: '1.2rem', fontWeight: '750', marginBottom: '0.5rem' }}>{tier.name}</h4>
                    <span style={{ fontSize: '2.1rem', fontWeight: '800', color: 'var(--accent-color)', display: 'block', margin: '0.75rem 0' }}>
                      {tier.price} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '400' }}>/month</span>
                    </span>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1.25rem', minHeight: '38px' }}>{tier.desc}</p>
                    <hr style={{ borderColor: 'var(--glass-border)', margin: '1rem 0' }} />
                    <span style={{ fontWeight: '600', fontSize: '0.85rem', display: 'block', marginBottom: '1.75rem' }}>{tier.limit}</span>
                  </div>
                  <button
                    onClick={() => handleProductCardClick(
                      `Nivas ${tier.name} Plan`,
                      [`Pricing level: ${tier.price}/month`, `Limitation parameters: ${tier.limit}`, `Features included: All basic Nivas dashboard tools.`],
                      'https://nivas-frontend.vercel.app/',
                      ['React', 'Postgres'],
                      `Plan selection details. Select this setup to deploy Zyntrix Nivas software on your custom servers.`
                    )}
                    className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: '100%', fontSize: '0.8rem', padding: '0.7rem', borderRadius: '8px' }}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: SCANBITE */}
        {activeTab === 'scanbite' && (
          <div className="page-fade-in">
            {/* Intro */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              marginBottom: '4rem'
            }}>
              <div>
                <h2 style={{ fontSize: '2.1rem', fontWeight: '800', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                  ScanBite QR Ordering
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                  Streamline hospitality loops with mobile checkouts. Guests scan QR codes at restaurant tables, check descriptions/menus, specify preferences, and order. Kitchen displays receive logs instantly, and waiters only deliver dishes.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => handleProductCardClick(
                      'ScanBite QR Ordering',
                      scanbiteFeatures.map(f => f.name + ': ' + f.desc),
                      'https://scanbite-frontend.vercel.app/',
                      ['React', 'Node.js', 'MongoDB', 'Websockets'],
                      'A mobile-first dynamic menu ordering suite. Supports instant KDS (Kitchen Display System) routing and digital receipt processing.'
                    )}
                    className="btn btn-primary"
                    style={{ borderRadius: '8px' }}
                  >
                    <Play size={16} fill="#ffffff" /> Explore Interactive Demo
                  </button>
                  <a href="#scanbite-pricing" className="btn btn-secondary" style={{ borderRadius: '8px' }}>Check Pricing</a>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--accent-color)',
                  boxShadow: '0 8px 30px var(--accent-glow)',
                  maxWidth: '380px',
                  margin: '0 auto'
                }}
              >
                <OptimizedImage
                  src="/scanbite_qr_ui.png"
                  alt="ScanBite Mobile Mockup"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Features */}
            <h3 style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center' }}>
              Dynamic Restaurant Features
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {scanbiteFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  onClick={() => handleProductCardClick(
                    feat.name,
                    [feat.desc],
                    'https://scanbite-frontend.vercel.app/',
                    ['React', 'Node.js', 'MongoDB'],
                    'Core module of ScanBite QR ordering system. Zero friction menu browsing.'
                  )}
                  style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Check size={18} style={{ color: 'var(--accent-color)' }} />
                    <h4 style={{ fontWeight: '750', fontSize: '1.05rem' }}>{feat.name}</h4>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5' }}>{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <h3 id="scanbite-pricing" style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center' }}>
              ScanBite Plan Options
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { name: 'Cafe Basic', price: '₹1,499', desc: 'Perfect for local bakeries, cafes, and tea bars.', tables: 'Up to 10 tables' },
                { name: 'Restaurant Pro', price: '₹3,499', desc: 'Full-service dine-in tables, kitchen screens, analytics.', tables: 'Up to 35 tables', popular: true },
                { name: 'Franchise Hub', price: 'Custom', desc: 'Centralized warehouse, brand management, custom POS sync.', tables: 'Unlimited tables' }
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '2.2rem 1.8rem',
                    border: tier.popular ? '2px solid var(--accent-color)' : '1px solid var(--glass-border)',
                    textAlign: 'center',
                    boxShadow: tier.popular ? '0 8px 25px var(--accent-glow)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '16px'
                  }}
                >
                  <div>
                    {tier.popular && (
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        background: 'var(--accent-color)',
                        color: '#030712',
                        fontSize: '0.7rem',
                        fontWeight: '800',
                        display: 'inline-block',
                        marginBottom: '1rem'
                      }}>
                        POPULAR
                      </span>
                    )}
                    <h4 style={{ fontSize: '1.2rem', fontWeight: '750', marginBottom: '0.5rem' }}>{tier.name}</h4>
                    <span style={{ fontSize: '2.1rem', fontWeight: '800', color: 'var(--accent-color)', display: 'block', margin: '0.75rem 0' }}>
                      {tier.price} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '400' }}>/month</span>
                    </span>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1.25rem', minHeight: '38px' }}>{tier.desc}</p>
                    <hr style={{ borderColor: 'var(--glass-border)', margin: '1rem 0' }} />
                    <span style={{ fontWeight: '600', fontSize: '0.85rem', display: 'block', marginBottom: '1.75rem' }}>{tier.tables}</span>
                  </div>
                  <button
                    onClick={() => handleProductCardClick(
                      `ScanBite ${tier.name} Plan`,
                      [`Pricing tier: ${tier.price}/month`, `Capacity: ${tier.tables}`, `Features: Full menu sync.`],
                      'https://scanbite-frontend.vercel.app/',
                      ['React', 'Node.js'],
                      `Plan selection details. Select this setup to deploy Zyntrix ScanBite software on your custom restaurant layout.`
                    )}
                    className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: '100%', fontSize: '0.8rem', padding: '0.7rem', borderRadius: '8px' }}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: UPCOMING PIPELINE */}
        {activeTab === 'upcoming' && (
          <div className="page-fade-in">
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.25rem', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
              Developer Release Roadmap
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              We are actively developing next-generation automated B2B applications, integrating machine learning modules and telemetry database systems.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {upcomingProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="glass-card"
                  onClick={() => handleProductCardClick(
                    prod.name,
                    [prod.details],
                    '#',
                    prod.tech,
                    prod.desc + ` Target launch: ${prod.eta}`
                  )}
                  style={{ padding: '2rem', border: '1px solid var(--glass-border)', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifySubpage: 'space-between', minHeight: '230px' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '9px', fontWeight: '800', padding: '0.2rem 0.6rem', border: '1px solid var(--accent-color)', background: 'var(--accent-glow)', color: 'var(--accent-color)', borderRadius: '4px' }}>
                        {prod.status}
                      </span>
                      <span style={{ fontSize: '11px', fontWeight: '750', color: 'var(--text-muted)' }}>
                        ETA: {prod.eta}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: '750', marginBottom: '0.5rem', color: 'var(--text-color)' }}>
                      {prod.name}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                      {prod.desc}
                    </p>
                  </div>

                  <div>
                    <hr style={{ borderColor: 'var(--glass-border)', marginBottom: '1rem' }} />
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {prod.tech.map(t => (
                        <span key={t} style={{ fontSize: '8px', color: 'var(--text-color)', background: 'rgba(255, 255, 255, 0.03)', padding: '0.15rem 0.4rem', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Shared Interactive Detail Modal */}
      {selectedProductDetails && (
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
          onClick={() => setSelectedProductDetails(null)}
        >
          <div
            className="glass-card modal-panel"
            style={{
              maxWidth: '650px',
              width: '100%',
              maxHeight: '85vh',
              background: 'var(--glass-bg)',
              border: '1px solid var(--accent-color)',
              borderRadius: '24px',
              padding: '2.5rem',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(16, 185, 129, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProductDetails(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.03)',
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

            {/* Content Details */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--accent-color)', tracking: '0.1em', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                PRODUCT DETAILS
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                {selectedProductDetails.title}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                {selectedProductDetails.desc}
              </p>
            </div>

            {/* Dummy Mockup Window */}
            <div
              style={{
                height: '120px',
                borderRadius: '12px',
                border: '1px dashed var(--glass-border)',
                background: 'rgba(255, 255, 255, 0.01)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                fontSize: '10px',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={16} style={{ color: 'var(--accent-color)' }} /> Interface Mockup Placeholder
            </div>

            {/* Feature lists inside Modal */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '750', marginBottom: '0.75rem', color: 'var(--text-color)' }}>
                Key platform scopes:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedProductDetails.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <Check size={14} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
              {selectedProductDetails.tech.map(t => (
                <span key={t} style={{ fontSize: '9px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--text-color)' }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Close / Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button
                onClick={() => setSelectedProductDetails(null)}
                className="btn btn-secondary"
                style={{ fontSize: '0.8rem', padding: '0.6rem 1.4rem', borderRadius: '8px' }}
              >
                Close Details
              </button>

              {selectedProductDetails.liveUrl !== '#' && (
                <a
                  href={selectedProductDetails.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: '0.8rem', padding: '0.6rem 1.6rem', borderRadius: '8px' }}
                >
                  Explore Live Project <ExternalLink size={14} />
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProductsPage;
