import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const ReviewsSlide = () => {
  const reviews = [
    {
      text: "Very professional system and smooth experience. The Nivas dashboard completely automated our rental tracking.",
      author: "Rajesh Sharma",
      role: "PG Owner, Elite Living",
      stars: 5
    },
    {
      text: "Helped automate our business completely. ScanBite reduced order processing delays and cut wait times.",
      author: "Aditi Joshi",
      role: "Founder, ByteFood Restaurant",
      stars: 5
    },
    {
      text: "Amazing UI design system and fast support response times. Zyntrix engineering team exceeded expectations.",
      author: "Vikram Malhotra",
      role: "Product Owner, Three L",
      stars: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="ppt-slide" style={{ position: 'relative' }}>
      <div className="glow-spot-purple" style={{ top: '-10%', left: '20%' }}></div>
      <div className="glow-spot" style={{ bottom: '10%', right: '10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="title-container">
          <h2 className="section-title" style={{ fontSize: '2.3rem' }}>Client Reviews</h2>
          <p className="section-subtitle">
            What founders and operations managers say about partnering with Zyntrix.
          </p>
        </div>

        {/* Carousel */}
        <div style={{
          position: 'relative',
          maxWidth: '750px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="glass-card desktop-only"
            aria-label="Previous Review"
            style={{
              padding: '0.75rem',
              borderRadius: '50%',
              cursor: 'pointer',
              color: 'var(--text-color)',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Testimonial card */}
          <div 
            className="glass-card page-fade-in"
            key={activeIndex}
            style={{
              padding: '2.5rem 2rem',
              border: '1px solid var(--glass-border)',
              textAlign: 'center',
              flex: '1',
              borderRadius: '24px',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '1.25rem',
              left: '1.5rem',
              opacity: 0.15,
              color: 'var(--accent-color)'
            }}>
              <Quote size={40} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem', marginBottom: '1.25rem' }}>
              {[...Array(reviews[activeIndex].stars)].map((_, i) => (
                <Star key={i} size={14} fill="var(--accent-color)" stroke="var(--accent-color)" />
              ))}
            </div>

            <p style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
              fontWeight: '500',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontStyle: 'italic',
              color: 'var(--text-color)'
            }}>
              “{reviews[activeIndex].text}”
            </p>

            <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.2rem', color: 'var(--accent-color)' }}>
              {reviews[activeIndex].author}
            </h4>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              {reviews[activeIndex].role}
            </span>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="glass-card desktop-only"
            aria-label="Next Review"
            style={{
              padding: '0.75rem',
              borderRadius: '50%',
              cursor: 'pointer',
              color: 'var(--text-color)',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '1.5rem'
        }}>
          {/* Mobile Navigator */}
          <div className="mobile-only" style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={handlePrev}
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
            >
              Next
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: idx === activeIndex ? 'var(--accent-color)' : 'var(--glass-border)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlide;
