import React, { useState } from 'react';

const OptimizedImage = ({ src, alt, style, className, width, height, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  // Default dimensions if none supplied, to avoid layout shifts
  const defaultStyle = {
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    width: width || '100%',
    height: height || 'auto',
    ...style
  };

  return (
    <div className={`optimized-image-container ${className || ''}`} style={defaultStyle}>
      {/* Glassmorphic Shimmer Loader */}
      {!loaded && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.01) 25%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.01) 75%)',
            backgroundSize: '200% 100%',
            animation: 'imageShimmer 1.5s infinite linear',
            borderRadius: style?.borderRadius || 'inherit',
            backdropFilter: 'blur(8px)',
            zIndex: 1
          }}
        />
      )}
      
      <img
        src={src}
        alt={alt || ''}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: style?.objectFit || 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
          display: 'block',
          borderRadius: style?.borderRadius || 'inherit'
        }}
        {...props}
      />

      <style>{`
        @keyframes imageShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;
