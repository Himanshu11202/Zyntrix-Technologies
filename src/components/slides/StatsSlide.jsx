import React, { useState, useEffect, useRef } from 'react';
import { Layers, Briefcase, Award, Users, Heart } from 'lucide-react';

const StatCard = ({ icon: Icon, target, suffix, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseFloat(target);
    if (isNaN(end)) return;

    const totalDuration = 1500; // ms
    const incrementTime = Math.max(Math.floor(totalDuration / end), 15);

    const timer = setTimeout(() => {
      const step = Math.ceil(end / 40);
      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, target, delay]);

  return (
    <div
      ref={cardRef}
      className="glass-card"
      style={{
        padding: '2.5rem 1.8rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flex: '1 1 200px',
        maxWidth: '240px',
        border: '1px solid var(--glass-border)',
        borderRadius: '16px'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.85rem',
          borderRadius: '12px',
          background: 'var(--primary-gradient)',
          color: '#ffffff',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 15px var(--purple-glow)'
        }}
      >
        <Icon size={20} />
      </div>
      <h3
        style={{
          fontSize: '2.6rem',
          fontWeight: '800',
          marginBottom: '0.25rem',
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-color)'
        }}
      >
        {count}
        <span style={{ color: 'var(--accent-color)' }}>{suffix}</span>
      </h3>
      <p style={{ color: 'var(--text-muted)', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
    </div>
  );
};

const StatsSlide = () => {
  const stats = [
    { icon: Briefcase, target: '6', suffix: '+', label: 'Projects Completed', delay: 100 },
    { icon: Users, target: '10', suffix: '+', label: 'Clients Served', delay: 200 },
    { icon: Award, target: '99', suffix: '.8%', label: 'Success Rate', delay: 300 },
    { icon: Heart, target: '3', suffix: '+', label: 'Years Experience', delay: 400 },
    { icon: Layers, target: '20', suffix: '+', label: 'Team Size', delay: 500 }
  ];

  return (
    <section className="ppt-slide" style={{ position: 'relative', background: 'rgba(0,0,0,0.1)' }}>
      <div className="glow-spot" style={{ top: '20%', right: '20%' }}></div>
      <div className="glow-spot-purple" style={{ bottom: '10%', left: '10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="title-container">
          <h2 className="section-title">Operations in Numbers</h2>
          <p className="section-subtitle">
            We deliver robust physical layouts alongside scalable, high-performance database configurations globally.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
          width: '100%',
          margin: '0 auto'
        }}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSlide;
