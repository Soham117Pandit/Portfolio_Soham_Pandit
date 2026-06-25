// src/pages/AboutPage.jsx
import React from 'react';
import { ArrowLeft, GraduationCap, Calendar, Compass, BarChart2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutPage({ setRoute }) {
  const { personal, stats, journey, evolution } = portfolioData;

  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Background glow overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '20%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.04) 0%, transparent 70%)',
        filter: 'blur(60px)',
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
          <span className="section-label">Identity Overview</span>
          <h1 className="section-title" style={{ marginTop: '8px' }}>About Me</h1>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '12px', maxWidth: '600px' }}>
            Systematic builder turning data models into deployed realities. Currently executing in Pune, India.
          </p>
        </div>

        {/* Profile Content Details & Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          marginBottom: '80px'
        }} className="md:flex md:flex-row md:items-start">

          <div style={{ flex: 3 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
              Architecting Production-First AI Solutions
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '20px' }}>
              I am a Third-year Computer Science engineering student at AISSMS IOIT, Pune. My journey started with a fascination for algorithmic limits, which quickly evolved into building end-to-end software architectures.
            </p>
            <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '20px' }}>
              I specialize in building AI-powered applications by combining intelligent automation, modern full-stack development, and scalable architectures. Whether it's generative AI, computer vision, or secure web platforms, I focus on creating reliable, production-ready solutions that solve real-world problems with precision.            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              background: 'rgba(255,255,255,0.01)',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              fontFamily: 'var(--font-heading)',
              fontSize: '13px'
            }}>
              <GraduationCap size={20} style={{ color: 'var(--accent)' }} />
              <span style={{ color: 'var(--text-secondary)' }}>AISSMS Institute of Information Technology, Pune (2024 - 2028)</span>
            </div>
          </div>

          {/* Stats Box Dashboard */}
          <div style={{
            flex: 2,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            padding: '32px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px'
          }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '16px' }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: '1'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '9px',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginTop: '8px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Evolution Steps Grid */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <BarChart2 size={18} style={{ color: 'var(--accent)' }} />
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 700, textTransform: 'uppercase' }}>
              Evolution Dashboard
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {evolution.map((evo, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '24px',
                  position: 'relative'
                }}
              >
                {/* Visual Accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '3px',
                  height: '100%',
                  background: 'var(--accent)'
                }} />

                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '9px',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  {evo.timeline}
                </span>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                  {evo.phase}
                </h4>
                <div style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>
                  Focus: {evo.focus}
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {evo.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Timeline Events */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <Calendar size={18} style={{ color: 'var(--accent)' }} />
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 700, textTransform: 'uppercase' }}>
              My Journey (From Admission to Production)
            </h2>
          </div>

          <div className="timeline">
            {journey.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot" />
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '24px',
                  maxWidth: '700px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: 700 }}>
                      {item.title}
                    </h4>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '2px 8px',
                      background: 'var(--accent-dim)',
                      border: '1px solid rgba(16, 185, 129, 0.2)'
                    }}>
                      {item.date}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
