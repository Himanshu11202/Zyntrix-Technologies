import React, { useState } from 'react';
import { HardHat, Send, Mail, MapPin, Linkedin, Instagram, Twitter, Github } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5500);
    }
  };

  return (
    <footer 
      className="glass-panel"
      style={{
        borderTop: '1px solid var(--glass-border)',
        padding: '5rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 5,
        borderRadius: '35px 35px 0 0',
        marginTop: '3.5rem'
      }}
    >
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        {/* Brand Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', filter: 'drop-shadow(0 0 6px var(--purple-glow))' }}>
              <defs>
                <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary-color)" />
                  <stop offset="100%" stopColor="var(--accent-color)" />
                </linearGradient>
              </defs>
              <path d="M25 25H75L35 75H75" stroke="url(#footerLogoGrad)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="25" cy="25" r="8" fill="var(--accent-color)" />
              <circle cx="75" cy="75" r="8" fill="var(--primary-color)" />
            </svg>
            <span style={{
              background: 'linear-gradient(135deg, var(--text-color) 70%, var(--accent-color) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 900,
              fontSize: '1.55rem',
              letterSpacing: '-0.04em',
              fontFamily: 'var(--font-heading)',
              display: 'inline-block'
            }}>
              Zyntrix
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.65' }}>
            Bridging real-world civil engineering with cybernetic IT products. We design infrastructure and build automated enterprise platforms.
          </p>

          {/* Social Profiles Row */}
          <div style={{ display: 'flex', gap: '0.85rem', marginTop: '0.5rem' }}>
            {[
              { icon: Linkedin, url: 'https://linkedin.com/company/zyntrix', name: 'LinkedIn' },
              { icon: Instagram, url: 'https://instagram.com/zyntrix', name: 'Instagram' },
              { icon: Twitter, url: 'https://twitter.com/zyntrix', name: 'Twitter' },
              { icon: Github, url: 'https://github.com/zyntrix', name: 'GitHub' }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a 
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-color)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                    e.currentTarget.style.color = 'var(--accent-color)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px var(--accent-glow)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.color = 'var(--text-color)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  title={social.name}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={14} style={{ color: 'var(--accent-color)' }} />
              <span>Indore, Madhya Pradesh, India</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={14} style={{ color: 'var(--accent-color)' }} />
              <a href="mailto:info@zyntrix.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@zyntrix.com</a>
            </div>
          </div>
        </div>

        {/* Civil Engineering Column */}
        <div>
          <h4 style={{ fontSize: '0.95rem', marginBottom: '1.5rem', fontWeight: '700', textTransform: 'uppercase', tracking: '0.05em', color: 'var(--text-color)' }}>
            Engineering & Civil
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {['Industrial Construction', 'Smart Office Campuses', 'Structural Modeling', 'Telemetry Integrations'].map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IT Products Column */}
        <div>
          <h4 style={{ fontSize: '0.95rem', marginBottom: '1.5rem', fontWeight: '700', textTransform: 'uppercase', tracking: '0.05em', color: 'var(--text-color)' }}>
            IT & SaaS Products
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {['Nivas Property Management', 'ScanBite QR Ordering', 'Internal Developer CLIs', 'AI Analytical Predictors'].map((item) => (
              <li key={item}>
                <span 
                  onClick={() => onNavigate('products')} 
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 style={{ fontSize: '0.95rem', marginBottom: '1.25rem', fontWeight: '700', textTransform: 'uppercase', tracking: '0.05em', color: 'var(--text-color)' }}>
            Stay Updated
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1rem', lineHeight: '1.5' }}>
            Subscribe to our corporate mailing lists for technical papers and software updates.
          </p>
          <form onSubmit={handleSubscribe} style={{ display: 'flex', position: 'relative' }}>
            <input 
              type="email" 
              placeholder="Corporate email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              style={{
                borderRadius: '8px',
                paddingRight: '3.5rem',
                fontSize: '0.8rem'
              }}
            />
            <button 
              type="submit" 
              style={{
                position: 'absolute',
                right: '4px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'var(--primary-gradient)',
                color: '#ffffff',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px var(--purple-glow)'
              }}
            >
              <Send size={12} />
            </button>
          </form>
          {subscribed && (
            <p className="page-fade-in" style={{ color: 'var(--accent-color)', fontSize: '0.75rem', marginTop: '0.5rem', fontWeight: '600' }}>
              ✓ Subscribed successfully!
            </p>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container" style={{
        borderTop: '1px solid var(--glass-border)',
        paddingTop: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }}>
        <span>© {new Date().getFullYear()} Zyntrix Technologies. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['about', 'services', 'careers', 'contact'].map((page) => (
            <button 
              key={page}
              onClick={() => onNavigate(page)} 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'inherit', 
                cursor: 'pointer', 
                textTransform: 'capitalize',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--text-color)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
