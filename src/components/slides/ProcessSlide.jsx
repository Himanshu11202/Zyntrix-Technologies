import React, { useState } from 'react';
import { MessageSquare, Layout, Code, ShieldCheck, Rocket, HelpCircle } from 'lucide-react';

const ProcessSlide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: MessageSquare,
      title: 'Idea Discussion',
      desc: 'Collaborative analysis of project goals, scaling requirements, tech stack evaluation, and wireframing core user flows.'
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      desc: 'Creating high-fidelity interactive screens, visual prototypes, responsive layout frameworks, and defining CSS design tokens.'
    },
    {
      icon: Code,
      title: 'Development',
      desc: 'Writing clean modular code, setting up multi-tenant DB schemas, building REST/GraphQL endpoints, and integrating APIs.'
    },
    {
      icon: ShieldCheck,
      title: 'Testing',
      desc: 'Rigorous manual and automated testing, regression suites, edge case verification, speed optimization, and vulnerability scans.'
    },
    {
      icon: Rocket,
      title: 'Deployment',
      desc: 'Launching on cloud infrastructure, configuring DNS, setting up HTTPS certs, edge caching, and server load monitoring.'
    },
    {
      icon: HelpCircle,
      title: 'Support',
      desc: 'Continuous performance analytics, bug fixes, software updates, new feature rollouts, and server infrastructure support.'
    }
  ];

  return (
    <section className="ppt-slide" style={{ position: 'relative' }}>
      <div className="glow-spot" style={{ bottom: '10%', right: '10%' }}></div>
      <div className="glow-spot-purple" style={{ top: '-10%', left: '10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div className="title-container" style={{ marginBottom: '0.5rem' }}>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle" style={{ marginBottom: '1rem' }}>
            Our structured development process ensures projects are built to scale on budget and on schedule.
          </p>
        </div>

        {/* Stepper bar (Desktop layout) */}
        <div 
          className="desktop-only"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            width: '100%',
            padding: '0 2rem',
            margin: '1.5rem 0'
          }}
        >
          {/* Connector Line */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '4rem',
              right: '4rem',
              height: '3px',
              background: 'var(--glass-border)',
              zIndex: 1,
              transform: 'translateY(-50%)'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '4rem',
              width: `${(activeStep / (steps.length - 1)) * 88}%`,
              height: '3px',
              background: 'var(--primary-gradient)',
              boxShadow: '0 0 10px var(--accent-color)',
              zIndex: 2,
              transform: 'translateY(-50%)',
              transition: 'all 0.5s ease'
            }}
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === activeStep;
            const isCompleted = idx < activeStep;

            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: isActive ? 'var(--primary-gradient)' : isCompleted ? 'var(--accent-color)' : 'var(--glass-bg)',
                  border: `2px solid ${isActive || isCompleted ? 'var(--accent-color)' : 'var(--glass-border)'}`,
                  color: isActive || isCompleted ? '#ffffff' : 'var(--text-muted)',
                  width: '55px',
                  height: '55px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 3,
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 15px var(--accent-color)' : 'none'
                }}
              >
                <Icon size={22} />
              </button>
            );
          })}
        </div>

        {/* Labels under stepper (Desktop layout) */}
        <div 
          className="desktop-only"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 1rem',
            marginBottom: '0.75rem'
          }}
        >
          {steps.map((step, idx) => (
            <div 
              key={idx}
              style={{
                width: '100px',
                textAlign: 'center',
                fontSize: '0.75rem',
                fontWeight: idx === activeStep ? '700' : '500',
                color: idx === activeStep ? 'var(--accent-color)' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveStep(idx)}
            >
              {step.title}
            </div>
          ))}
        </div>

        {/* Dynamic Card content */}
        <div 
          className="glass-card page-fade-in"
          key={activeStep}
          style={{
            padding: '2rem',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            background: 'var(--glass-bg)',
            width: '100%',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.8rem',
            borderRadius: '50%',
            background: 'var(--accent-glow)',
            color: 'var(--accent-color)',
            marginBottom: '1rem',
            border: '1px solid var(--accent-color)'
          }}>
            {React.createElement(steps[activeStep].icon, { size: 28 })}
          </div>
          
          <h3 style={{ fontSize: '1.35rem', fontWeight: '750', marginBottom: '0.5rem', color: 'var(--text-color)' }}>
            Phase {activeStep + 1}: {steps[activeStep].title}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            {steps[activeStep].desc}
          </p>
        </div>

        {/* Mobile buttons */}
        <div 
          className="mobile-only"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            justifyContent: 'center',
            marginTop: '1rem',
            width: '100%'
          }}
        >
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className="glass-card"
              style={{
                padding: '0.4rem 0.8rem',
                fontSize: '0.7rem',
                fontWeight: '700',
                borderRadius: '20px',
                border: `1px solid ${idx === activeStep ? 'var(--accent-color)' : 'var(--glass-border)'}`,
                color: idx === activeStep ? 'var(--accent-color)' : 'var(--text-muted)',
                background: idx === activeStep ? 'var(--accent-glow)' : 'transparent',
                cursor: 'pointer'
              }}
            >
              {step.title}
            </button>
          ))}
        </div>
      </div>

      {/* Breakpoint Styles */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-only { display: flex !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </section>
  );
};

export default ProcessSlide;
