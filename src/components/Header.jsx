import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, HardHat, ChevronRight, Linkedin, Instagram } from 'lucide-react';

const Header = ({ currentPage, onNavigate, theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: scrolled ? '0.75rem 3rem' : '1.25rem 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.15)' : 'none'
      }}
    >
      {/* Logo */}
      <div 
        onClick={() => handleNavClick('home')}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem', 
          cursor: 'pointer',
          fontFamily: 'var(--font-heading)'
        }}
      >
        <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', filter: 'drop-shadow(0 0 8px var(--purple-glow))' }}>
          <defs>
            <linearGradient id="headerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary-color)" />
              <stop offset="100%" stopColor="var(--accent-color)" />
            </linearGradient>
          </defs>
          <path d="M25 25H75L35 75H75" stroke="url(#headerLogoGrad)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="25" cy="25" r="8" fill="var(--accent-color)" />
          <circle cx="75" cy="75" r="8" fill="var(--primary-color)" />
        </svg>
        <span style={{
          background: 'linear-gradient(135deg, var(--text-color) 70%, var(--accent-color) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 900,
          fontSize: '1.75rem',
          letterSpacing: '-0.04em',
          display: 'inline-block'
        }}>
          Zyntrix
        </span>
      </div>

      {/* Desktop Links - Centered */}
      <nav style={{ display: 'none' }} className="desktop-only">
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2.25rem' }}>
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: currentPage === item.id ? 'var(--accent-color)' : 'var(--text-color)',
                  fontWeight: currentPage === item.id ? '700' : '500',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  padding: '0.5rem 0.2rem',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                  opacity: currentPage === item.id ? 1 : 0.8
                }}
                onMouseOver={(e) => e.target.style.opacity = 1}
                onMouseOut={(e) => e.target.style.opacity = currentPage === item.id ? 1 : 0.8}
              >
                {item.label}
                {currentPage === item.id && (
                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    background: 'var(--accent-color)',
                    boxShadow: '0 0 8px var(--accent-color)',
                    borderRadius: '2px'
                  }} />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right widgets & Social Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        {/* Socials - Desktop only */}
        <div style={{ display: 'none', gap: '0.75rem', alignItems: 'center' }} className="desktop-only">
          <a 
            href="https://linkedin.com/company/zyntrix" 
            target="_blank" 
            rel="noreferrer"
            style={{ color: 'var(--text-color)', opacity: 0.7, transition: 'all 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.opacity = 1}
            onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="https://instagram.com/zyntrix" 
            target="_blank" 
            rel="noreferrer"
            style={{ color: 'var(--text-color)', opacity: 0.7, transition: 'all 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.opacity = 1}
            onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
            title="Instagram"
          >
            <Instagram size={18} />
          </a>
          <div style={{ width: '1px', height: '16px', background: 'var(--glass-border)' }}></div>
        </div>

        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-color)',
            cursor: 'pointer',
            padding: '0.45rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            opacity: 0.8
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = 1}
          onMouseOut={(e) => e.currentTarget.style.opacity = 0.8}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          onClick={() => handleNavClick('contact')}
          className="btn btn-primary desktop-only"
          style={{ padding: '0.55rem 1.4rem', fontSize: '0.8rem', borderRadius: '8px' }}
        >
          Get Quote <ChevronRight size={12} />
        </button>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-only"
          aria-label="Toggle Menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-color)',
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          className="glass-panel page-fade-in"
          style={{
            position: 'fixed',
            top: '4.5rem',
            left: '4%',
            width: '92%',
            borderRadius: '16px',
            padding: '2rem 1.5rem',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            border: '1px solid var(--glass-border)'
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', gap: '1.25rem' }}>
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: currentPage === item.id ? 'var(--accent-color)' : 'var(--text-color)',
                    fontWeight: '600',
                    fontSize: '1.05rem',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.4rem 0'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '1.25rem', padding: '0.5rem 0', borderTop: '1px solid var(--glass-border)', paddingTop: '1.25rem' }}>
            <a href="https://linkedin.com/company/zyntrix" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', textDecoration: 'none', opacity: 0.8 }}>
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://instagram.com/zyntrix" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', textDecoration: 'none', opacity: 0.8 }}>
              <Instagram size={16} /> Instagram
            </a>
          </div>
          
          <button
            onClick={() => handleNavClick('contact')}
            className="btn btn-primary"
            style={{ width: '100%', borderRadius: '8px' }}
          >
            Inquire Now
          </button>
        </div>
      )}

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
    </header>
  );
};

export default Header;
