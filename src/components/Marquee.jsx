// src/components/Marquee.jsx
import React from 'react';

export default function Marquee({ items, reverse = false, speed = '30s', color = 'rgba(200, 200, 215, 0.08)', textShadow = 'none' }) {
  // Repeating items to ensure full width coverage
  const repeatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="marquee-container" style={{ margin: '6px 0' }}>
      <div 
        className={`marquee-content ${reverse ? 'reverse' : ''}`}
        style={{
          animationDuration: speed,
          color: color,
          textShadow: textShadow,
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: 'clamp(18px, 2.5vw, 30px)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          userSelect: 'none'
        }}
      >
        {repeatedItems.map((item, idx) => (
          <span key={idx} style={{ marginRight: '1.5em', display: 'inline-block' }}>
            {item} &middot;
          </span>
        ))}
      </div>
    </div>
  );
}
