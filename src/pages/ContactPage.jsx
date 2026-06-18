import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ExternalLink, Globe2 } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className="page-fade-in" style={{ padding: '8rem 0 4rem 0', minHeight: '100vh', position: 'relative' }}>
      {/* Background ambient spots */}
      <div className="glow-spot" style={{ top: '15%', right: '10%' }}></div>
      <div className="glow-spot-purple" style={{ bottom: '15%', left: '10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Page Header */}
        <div className="title-container">
          <h1 className="section-title" style={{ fontSize: '3rem' }}>Contact Zyntrix</h1>
          <p className="section-subtitle">
            Let's build the future together. Reach out for custom software architecture, land management setups, or digital dining systems.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          marginTop: '2rem'
        }}>
          {/* Left Column: Form */}
          <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid var(--glass-border)' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              Send a Message
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Fill out the form below, and our system engineers will respond within 12 business hours.
            </p>

            {submitted ? (
              <div style={{
                padding: '2rem 1rem',
                textAlign: 'center',
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid var(--accent-color)',
                borderRadius: '16px',
                marginTop: '1rem'
              }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>🚀</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '750', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>Message Transmitted</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Thank you. Our lead architect will review your project details shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '1.25rem', fontSize: '0.75rem', padding: '0.45rem 1.25rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Product setup / custom development"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details / Message</label>
                  <textarea
                    required
                    className="form-input"
                    placeholder="Tell us about your project requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  Submit Inquiry <Send size={15} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info & Map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Quick Contact Info */}
            <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--glass-border)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                Direct Communication
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'var(--accent-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-color)'
                  }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', tracking: '0.05em' }}>Email Support</span>
                    <a href="mailto:patidarhimanshu2004@gmail.com" style={{ fontSize: '0.9rem', color: 'var(--text-color)', textDecoration: 'none', fontWeight: '600' }}>
                      patidarhimanshu2004@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'var(--purple-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--secondary-color)'
                  }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', tracking: '0.05em' }}>Phone Lines</span>
                    <a href="tel:+919876543210" style={{ fontSize: '0.9rem', color: 'var(--text-color)', textDecoration: 'none', fontWeight: '600' }}>
                      +91 9343099916
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)'
                  }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', tracking: '0.05em' }}>Operation Base</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-color)', fontWeight: '600' }}>
                      Indore, Madhya Pradesh, India
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/919343099916?text=Hello%20Zyntrix%20Team,%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{
                  width: '100%',
                  marginTop: '1.75rem',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid #22c55e',
                  color: '#22c55e',
                  boxShadow: '0 0 10px rgba(34,197,94,0.15)'
                }}
              >
                <MessageSquare size={16} /> Instant Chat on WhatsApp <ExternalLink size={12} />
              </a>
            </div>

            {/* Custom Location Map Card */}
            <div className="glass-card" style={{ border: '1px solid var(--glass-border)', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '220px', background: 'var(--bg-color)' }}>
                {/* Tech map background */}
                <OptimizedImage
                  src="/engineering_map.png"
                  alt="Indore Office Location"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, filter: 'grayscale(1) invert(0.8)' }}
                />

                {/* Scanner/Radar Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 80%)',
                  pointerEvents: 'none'
                }}></div>

                {/* Pulsing Indore locator dot */}
                <div style={{
                  position: 'absolute',
                  top: '55%',
                  left: '48%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Radar Wave 1 */}
                  <div style={{
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1.5px solid var(--accent-color)',
                    animation: 'radarSpread 2s infinite linear'
                  }}></div>
                  {/* Radar Wave 2 */}
                  <div style={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '1px solid var(--secondary-color)',
                    animation: 'radarSpread 3s infinite linear',
                    animationDelay: '0.8s'
                  }}></div>
                  {/* Glowing Core */}
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: 'var(--accent-color)',
                    boxShadow: '0 0 15px var(--accent-color)',
                    zIndex: 2
                  }}></div>
                </div>

                {/* Location indicator tag */}
                <div
                  className="glass-panel"
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '20px',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Globe2 size={12} className="animated-float" style={{ color: 'var(--accent-color)' }} />
                  <span style={{ fontSize: '9px', fontWeight: '800', letterSpacing: '0.05em', color: 'var(--text-color)' }}>
                    GLOBAL OFFICE: INDORE
                  </span>
                </div>
              </div>

              {/* Map Footer Info */}
              <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.2)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', tracking: '0.05em', marginBottom: '0.2rem' }}>Indore Engineering Hub</span>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-color)', lineHeight: '1.4' }}>
                  Vijay Nagar Commercial Center, Near Smart City Infrastructure Park, Indore, MP 452010 India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes radarSpread {
          0% {
            transform: scale(0.3);
            opacity: 1;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
