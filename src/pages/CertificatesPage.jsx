// src/pages/CertificatesPage.jsx
import React from 'react';
import { ArrowLeft, ArrowRight, Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CertificatesPage({ category, setRoute }) {
  const { certificates } = portfolioData;
  const certsList = certificates?.[category] || [];

  const isTechnical = category === 'technical';
  const pageTitle = isTechnical ? 'Technical Certifications' : 'Others Certifications';
  const pageDescription = isTechnical
    ? 'Verifiable academic, technical, and industrial credentials highlighting specialized training and competency achievements.'
    : 'Additional accomplishments, non-technical training, workshops, and extracurricular achievements.';

  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', background: 'var(--bg)', position: 'relative' }}>
      {/* Background glow overlay */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.03) 0%, transparent 70%)',
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
          <span className="section-label">Credentials</span>
          <h1 className="section-title" style={{ marginTop: '8px' }}>{pageTitle}</h1>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '12px', maxWidth: '600px' }}>
            {pageDescription}
          </p>
        </div>

        {/* Certificate Cards Grid */}
        {certsList.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {certsList.map((cert, idx) => (
              <a
                key={idx}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '180px',
                  transition: 'var(--transition)',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '4px',
                      background: 'var(--accent-dim)',
                      border: '1px solid rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Award size={20} style={{ color: 'var(--accent)' }} />
                    </div>
                    <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 700,
                    lineHeight: '1.4',
                    color: 'var(--text)'
                  }}>
                    {cert.name}
                  </h3>
                </div>

                <span style={{
                  fontSize: '11px',
                  color: 'var(--accent)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginTop: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  View Certificate <ArrowRight size={12} />
                </span>
              </a>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div style={{
            border: '1px dashed var(--border)',
            padding: '80px 40px',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.003)',
            borderRadius: '4px'
          }}>
            <Award size={48} style={{ color: 'var(--text-muted)', marginBottom: '20px', opacity: 0.3 }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px' }}>
              No Certificates Available
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto', lineHeight: '1.6' }}>
              Credentials in this category will be uploaded here when they are available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
