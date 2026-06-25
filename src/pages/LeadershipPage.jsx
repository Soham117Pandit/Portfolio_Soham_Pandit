// src/pages/LeadershipPage.jsx
import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, ShieldAlert, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function LeadershipPage({ setRoute }) {
  const { leadership } = portfolioData;

  const icons = [
    <ShieldAlert size={22} style={{ color: 'var(--accent)' }} />, // SIH
    <MessageSquare size={22} style={{ color: 'var(--accent)' }} />, // Techathon
    <Award size={22} style={{ color: 'var(--accent)' }} /> // Internships
  ];

  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Background glow overlay */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.03) 0%, transparent 70%)', // red/orange hint
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />

      <div className="container-main">
        {/* Navigation back */}
        <button 
          onClick={() => { setRoute('/'); window.scrollTo(0, 0); }}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent)',
            fontFamily: 'var(--font-heading)',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            marginBottom: '40px'
          }}
        >
          <ArrowLeft size={14} /> Back to Hub
        </button>

        {/* Header Title */}
        <div style={{ marginBottom: '56px' }}>
          <span className="section-label">Public Engagement</span>
          <h1 className="section-title" style={{ marginTop: '8px' }}>Leadership & Direction</h1>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '12px', maxWidth: '600px' }}>
            System design requires communication logic. Outside the lab, I coordinate debates, construct policy resolutions, and direct mock assembly committees.
          </p>
        </div>

        {/* Detailed Panels Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px'
        }}>
          {leadership.map((item, idx) => (
            <div 
              key={item.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                padding: '40px'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '24px',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                paddingBottom: '20px',
                marginBottom: '28px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '4px',
                    background: 'var(--accent-dim)',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {icons[idx] || <Award size={22} />}
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700 }}>
                      {item.title}
                    </h2>
                    <span style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 500 }}>
                      {item.role}
                    </span>
                  </div>
                </div>

                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {item.duration}
                </span>
              </div>

              {/* Card Main columns */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                marginTop: '16px'
              }} className="md:flex-row md:items-start">
                
                {/* Bullets text column */}
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                    marginBottom: '16px'
                  }}>
                    Core Responsibilities & Achievements
                  </h4>
                  <ul style={{
                    paddingLeft: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px'
                  }}>
                    {item.bullets.map((bullet, bIdx) => (
                      <li 
                        key={bIdx}
                        style={{
                          fontSize: '13.5px',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.65',
                          listStyleType: 'square'
                        }}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certificate Column preview */}
                {item.certificates && item.certificates.length > 0 && (
                  <div style={{
                    flexShrink: 0,
                    width: '100%',
                    maxWidth: '280px',
                    alignSelf: 'center'
                  }} className="md:w-auto">
                    <span style={{
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '8px',
                      letterSpacing: '0.05em'
                    }}>
                      Verification Credentials
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {item.certificates.map((cert, cIdx) => (
                        <a 
                          key={cIdx}
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '16px 20px',
                            background: 'rgba(16, 185, 129, 0.03)',
                            border: '1px solid rgba(16, 185, 129, 0.15)',
                            borderRadius: '4px',
                            color: 'var(--text)',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent)';
                            e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.15)';
                            e.currentTarget.style.background = 'rgba(16, 185, 129, 0.03)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '4px',
                            background: 'rgba(16, 185, 129, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <Award size={16} style={{ color: 'var(--accent)' }} />
                          </div>
                          <div style={{ textAlign: 'left' }}>
                            <div style={{
                              fontFamily: 'var(--font-heading)',
                              fontSize: '12.5px',
                              fontWeight: 700,
                              lineHeight: '1.2'
                            }}>
                              {cert.name}
                            </div>
                            <span style={{
                              fontSize: '10px',
                              color: 'var(--accent)',
                              fontWeight: 500,
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                              marginTop: '4px',
                              display: 'inline-block'
                            }}>
                              Open PDF [↗]
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
