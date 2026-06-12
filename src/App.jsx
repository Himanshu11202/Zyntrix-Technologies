import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

// Slides/Sections for Home Page Flow
import HeroSlide from './components/slides/HeroSlide';
import StatsSlide from './components/slides/StatsSlide';
import ProductsSlide from './components/slides/ProductsSlide';
import ServicesSlide from './components/slides/ServicesSlide';
import ProcessSlide from './components/slides/ProcessSlide';
import WhyChooseUsSlide from './components/slides/WhyChooseUsSlide';
import JourneySlide from './components/slides/JourneySlide';
import ReviewsSlide from './components/slides/ReviewsSlide';
import PricingSlide from './components/slides/PricingSlide';
import CtaSlide from './components/slides/CtaSlide';

// Sub Pages
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [currentPage, setCurrentPage] = useState('home');

  // Sync theme with document class/attributes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Synchronize routing via URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'products', 'services', 'about', 'careers', 'contact'];
      
      if (hash && validPages.includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger initially
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (pageId) => {
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return (
          <div className="page-wrapper page-fade-in">
            <AboutPage />
            <Footer onNavigate={navigateTo} />
          </div>
        );
      case 'products':
        return (
          <div className="page-wrapper page-fade-in">
            <ProductsPage onNavigate={navigateTo} />
            <Footer onNavigate={navigateTo} />
          </div>
        );
      case 'services':
        return (
          <div className="page-wrapper page-fade-in">
            <ServicesPage onNavigate={navigateTo} />
            <Footer onNavigate={navigateTo} />
          </div>
        );
      case 'careers':
        return (
          <div className="page-wrapper page-fade-in">
            <CareersPage />
            <Footer onNavigate={navigateTo} />
          </div>
        );
      case 'contact':
        return (
          <div className="page-wrapper page-fade-in">
            <ContactPage />
            <Footer onNavigate={navigateTo} />
          </div>
        );
      case 'home':
      default:
        return (
          <div className="home-sections page-fade-in">
            {/* Section 1: Hero */}
            <div id="hero-slide">
              <HeroSlide onNavigate={navigateTo} />
            </div>

            {/* Section 2: Stats */}
            <div id="stats-slide">
              <StatsSlide />
            </div>

            {/* Section 3: Projects Portfolio */}
            <div id="products-slide">
              <ProductsSlide onNavigate={navigateTo} />
            </div>

            {/* Section 4: Services */}
            <div id="services-slide">
              <ServicesSlide onNavigate={navigateTo} />
            </div>

            {/* Section 5: Stepper Roadmap */}
            <div id="process-slide">
              <ProcessSlide />
            </div>

            {/* Section 6: Why Choose Us */}
            <div id="why-choose-us-slide">
              <WhyChooseUsSlide />
            </div>

            {/* Section 7: Corporate Journey */}
            <div id="journey-slide">
              <JourneySlide />
            </div>

            {/* Section 8: Reviews Carousel */}
            <div id="reviews-slide">
              <ReviewsSlide />
            </div>

            {/* Section 8.5: Pricing */}
            <div id="pricing-slide">
              <PricingSlide onNavigate={navigateTo} />
            </div>

            {/* Section 9: CTA Action */}
            <div id="cta-slide">
              <CtaSlide onNavigate={navigateTo} />
            </div>

            {/* Global Footer appended to flow naturally */}
            <Footer onNavigate={navigateTo} />
          </div>
        );
    }
  };

  return (
    <div className="cyber-grid" style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Particle Canvas nodes */}
      <ParticleBackground />

      {/* Navigation bar */}
      <Header 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Render selected view */}
      {renderContent()}
    </div>
  );
}

export default App;
