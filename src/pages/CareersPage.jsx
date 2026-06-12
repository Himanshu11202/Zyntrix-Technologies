import React, { useState } from 'react';
import { Briefcase, Clock, ArrowRight, X, Send, Award, BookOpen } from 'lucide-react';

const JobCard = ({ title, type, location, experience, description, onApply }) => {
  return (
    <div 
      className="glass-card"
      style={{
        padding: '2rem',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <span style={{
            padding: '0.2rem 0.6rem',
            borderRadius: '10px',
            fontSize: '0.7rem',
            fontWeight: '700',
            background: 'var(--accent-glow)',
            color: 'var(--accent-color)',
            textTransform: 'uppercase'
          }}>
            {type}
          </span>
          <span style={{
            padding: '0.2rem 0.6rem',
            borderRadius: '10px',
            fontSize: '0.7rem',
            fontWeight: '700',
            background: 'rgba(255,255,255,0.05)',
            color: 'var(--text-muted)',
            textTransform: 'uppercase'
          }}>
            {location}
          </span>
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: '750', marginBottom: '0.75rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
          {description}
        </p>

        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Clock size={12} />
            <span>{experience}</span>
          </div>
        </div>
      </div>

      <button 
        onClick={() => onApply(title)}
        className="btn btn-primary"
        style={{ width: '100%', padding: '0.6rem', fontSize: '0.8rem' }}
      >
        Apply Now <ArrowRight size={14} />
      </button>
    </div>
  );
};

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyData, setApplyData] = useState({ name: '', email: '', portfolio: '', resumeName: '' });
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      title: 'React Frontend Developer Intern',
      type: 'Internship (3-6 Months)',
      location: 'Remote / Indore',
      experience: 'Fresher / Portfolio required',
      description: 'Join our team to construct clean, interactive components for Nivas and ScanBite. Requires good skills in Javascript ES6, React hooks, CSS layouts, and Git branches.'
    },
    {
      title: 'Fullstack Software Engineer',
      type: 'Full Time',
      location: 'Hybrid / Indore',
      experience: '1-3 Years Experience',
      description: 'Maintain Java/Spring backend services and React dashboard panels. Responsible for SQL optimizations, transaction limits, and writing unit test suites.'
    },
    {
      title: 'Node.js Backend Developer',
      type: 'Full Time',
      location: 'Remote',
      experience: '2+ Years Experience',
      description: 'Build real-time socket connections for ScanBite restaurant systems and construct microservice structures for internal tools using REST APIs and MongoDB.'
    }
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setApplyData({ name: '', email: '', portfolio: '', resumeName: '' });
    }, 4000);
  };

  return (
    <div className="page-fade-in" style={{ padding: '8rem 0 4rem 0', minHeight: '100vh', position: 'relative' }}>
      <div className="glow-spot" style={{ top: '15%', right: '10%' }}></div>
      <div className="glow-spot-purple" style={{ bottom: '15%', left: '10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Page Header */}
        <div className="title-container">
          <h1 className="section-title" style={{ fontSize: '3rem' }}>Work With Us</h1>
          <p className="section-subtitle">
            Join a small, remote-first development team pushing software automation boundaries.
          </p>
        </div>

        {/* Benefits */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <BookOpen size={22} style={{ color: 'var(--accent-color)', marginBottom: '0.75rem' }} />
            <h4 style={{ fontWeight: '750', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Active Mentorship</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.5' }}>
              Work directly with our lead architects on real production repositories, learning production-level structures.
            </p>
          </div>
          
          <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <Award size={22} style={{ color: 'var(--accent-color)', marginBottom: '0.75rem' }} />
            <h4 style={{ fontWeight: '750', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Modern Stacks</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.5' }}>
              No outdated tools. We build using Vite, React, Spring Boot, MongoDB, PostgreSQL, and LLM orchestration tools.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <Briefcase size={22} style={{ color: 'var(--accent-color)', marginBottom: '0.75rem' }} />
            <h4 style={{ fontWeight: '750', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Remote Autonomy</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.5' }}>
              We track commits and milestones completed, not active hours. Work where you are most comfortable.
            </p>
          </div>
        </div>

        {/* Openings */}
        <h2 style={{ fontSize: '1.65rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center' }}>
          Open Positions
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {jobs.map((job, idx) => (
            <JobCard 
              key={idx}
              title={job.title}
              type={job.type}
              location={job.location}
              experience={job.experience}
              description={job.description}
              onApply={(title) => setSelectedJob(title)}
            />
          ))}
        </div>

        {/* Apply Modal */}
        {selectedJob && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.7)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
          >
            <div 
              className="glass-panel page-fade-in"
              style={{
                width: '100%',
                maxWidth: '480px',
                borderRadius: '24px',
                padding: '2.2rem 1.8rem',
                border: '1px solid var(--accent-color)',
                boxShadow: '0 0 30px var(--accent-glow)',
                position: 'relative'
              }}
            >
              <button 
                onClick={() => setSelectedJob(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-color)',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '750', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                    Application Sent!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    Thank you for applying to Zyntrix for the **{selectedJob}** position. We will review your links and follow up soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.2rem' }}>
                    Apply for Position
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: '700', display: 'block', marginBottom: '1.25rem' }}>
                    {selectedJob}
                  </span>

                  <div className="form-group">
                    <label className="form-label" htmlFor="name-input">Full Name</label>
                    <input 
                      type="text" 
                      id="name-input"
                      required 
                      value={applyData.name} 
                      onChange={(e) => setApplyData({ ...applyData, name: e.target.value })}
                      placeholder="Jane Doe" 
                      className="form-input" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email-input">Email Address</label>
                    <input 
                      type="email" 
                      id="email-input"
                      required 
                      value={applyData.email} 
                      onChange={(e) => setApplyData({ ...applyData, email: e.target.value })}
                      placeholder="jane@example.com" 
                      className="form-input" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="portfolio-input">Portfolio / GitHub URL</label>
                    <input 
                      type="url" 
                      id="portfolio-input"
                      required 
                      value={applyData.portfolio} 
                      onChange={(e) => setApplyData({ ...applyData, portfolio: e.target.value })}
                      placeholder="https://github.com/username" 
                      className="form-input" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="resume-input">Resume File Name (Mock)</label>
                    <input 
                      type="text" 
                      id="resume-input"
                      required 
                      value={applyData.resumeName} 
                      onChange={(e) => setApplyData({ ...applyData, resumeName: e.target.value })}
                      placeholder="resume.pdf" 
                      className="form-input" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem', fontSize: '0.85rem' }}
                  >
                    Submit Application <Send size={12} />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CareersPage;
