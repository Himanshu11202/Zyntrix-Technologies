import React, { useState } from 'react';
import { Target, Eye, Award, ShieldCheck, Cpu, Award as AwardIcon, CheckSquare, TrendingUp, Linkedin, Github, Twitter, Instagram, Quote, GraduationCap } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const AboutPage = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Limit rotation to maximum 15 degrees
    setTilt({ x: -(y / rect.height) * 15, y: (x / rect.width) * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };
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

        {/* Grid: Story */}
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
          <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(139, 92, 246, 0.02)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-color)', letterSpacing: '0.12em', display: 'block' }}>ZYNTRIX METHOD</span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>Next-Gen Systems Engineering</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              We design software and automation architectures that run seamlessly under high workloads, keeping load times sub-second and code maintainable.
            </p>
          </div>
        </div>

        {/* Premium Founder & CEO Showcase Section */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2.5rem',
            border: '1px solid var(--glass-border)',
            borderRadius: '24px',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--glass-bg)',
            boxShadow: '0 15px 40px var(--glass-shadow)'
          }}
        >
          {/* Subtle background glow spots just for this section */}
          <div className="glow-spot-purple" style={{ top: '-10%', left: '-10%', opacity: 0.3, width: '300px', height: '300px' }}></div>
          <div className="glow-spot" style={{ bottom: '-10%', right: '-10%', opacity: 0.3, width: '300px', height: '300px' }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Left side: Premium photo frame with 3D hover tilt */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  width: '240px',
                  height: '240px',
                  borderRadius: '24px',
                  background: 'var(--primary-gradient)',
                  padding: '4px',
                  boxShadow: '0 20px 40px rgba(139, 92, 246, 0.25)',
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: 'transform 0.1s ease-out',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                {/* Floating Glow Spot behind image */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  right: '-15px',
                  bottom: '-15px',
                  background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
                  opacity: 0.4,
                  zIndex: -1,
                  borderRadius: '30px',
                  filter: 'blur(10px)',
                  pointerEvents: 'none'
                }}></div>

                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'var(--bg-color)',
                  position: 'relative'
                }}>
                  <OptimizedImage
                    src="/himanshu_ceo.jpg.jpeg"
                    alt="Himanshu Patidar, Founder & CEO"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>

              {/* Social Media Links */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem' }}>
                {[
                  { icon: Linkedin, url: 'https://linkedin.com/in/himanshupatidar', name: 'LinkedIn' },
                  { icon: Github, url: 'https://github.com/himanshupatidar', name: 'GitHub' },
                  { icon: Twitter, url: 'https://twitter.com/himanshupatidar', name: 'Twitter' },
                  { icon: Instagram, url: 'https://instagram.com/himanshupatidar', name: 'Instagram' }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
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
                        e.currentTarget.style.color = 'var(--accent-color)';
                        e.currentTarget.style.borderColor = 'var(--accent-color)';
                        e.currentTarget.style.boxShadow = '0 0 12px var(--accent-glow)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = 'var(--text-color)';
                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.transform = 'none';
                      }}
                      title={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right side: Detailed CEO presentation */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '9px',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    border: '1px solid var(--accent-color)',
                    background: 'var(--accent-glow)',
                    color: 'var(--accent-color)',
                    display: 'inline-flex',
                    marginBottom: '0.75rem'
                  }}
                >
                  Corporate Leadership
                </span>
                <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--text-color)', marginBottom: '0.15rem', fontFamily: 'var(--font-heading)' }}>
                  Himanshu Patidar
                </h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', tracking: '0.05em' }}>
                  Founder & CEO
                </span>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                Himanshu Patidar is a visionary software engineer and technology entrepreneur driving the core development, system design, and technology roadmap at Zyntrix. He oversees the structural integration of Nivas property telemetry networks and ScanBite checkout automation suites.
              </p>

              {/* Highlighted Vision Statement */}
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  borderLeft: '4px solid var(--accent-color)',
                  background: 'rgba(255,255,255,0.01)',
                  borderRadius: '0 12px 12px 0',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start'
                }}
              >
                <Quote size={24} style={{ color: 'var(--accent-color)', flexShrink: 0, opacity: 0.5 }} />
                <p style={{ color: 'var(--text-color)', fontSize: '0.85rem', fontWeight: '500', fontStyle: 'italic', margin: 0, lineHeight: '1.5' }}>
                  "To build next-generation scalable architectures that automate complex real-world operations, bridging the gap between hardware telemetry and software solutions."
                </p>
              </div>

              {/* Education Background */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--purple-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-color)'
                }}>
                  <GraduationCap size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '8px', fontWeight: '800', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', tracking: '0.05em' }}>
                    Academic Foundation
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-color)' }}>
                    B.Tech in Computer Science & Engineering
                  </span>
                </div>
              </div>

              {/* Skills Tags */}
              <div>
                <span style={{ fontSize: '8px', fontWeight: '800', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', tracking: '0.05em', marginBottom: '0.5rem' }}>
                  Core Expertise & Domain Skills
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Full-Stack Engineering', 'Cloud Architecture', 'System Design', 'Automation Algorithms', 'UI/UX Design'].map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: '9.5px',
                        fontWeight: '700',
                        color: 'var(--text-color)',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--glass-border)',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
