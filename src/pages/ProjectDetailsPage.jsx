// src/pages/ProjectDetailsPage.jsx
import React from 'react';
import { ArrowLeft, Cpu, Shield, HelpCircle, Code, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectDetailsPage({ projectId, setRoute }) {
  const project = portfolioData.projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div style={{ padding: '120px 0', textAlign: 'center', minHeight: '100vh' }}>
        <h2>Project Not Found</h2>
        <button className="btn-outline" onClick={() => setRoute('/')}>Return to Hub</button>
      </div>
    );
  }

  const projectColors = {
    safera: { primary: '#EF4444', bgGlow: 'rgba(239, 68, 68, 0.04)', textGlow: 'rgba(239, 68, 68, 0.2)' },
    projecthub: { primary: '#0EA5E9', bgGlow: 'rgba(14, 165, 233, 0.04)', textGlow: 'rgba(14, 165, 233, 0.2)' },
    'rogue-ai': { primary: '#10B981', bgGlow: 'rgba(16, 185, 129, 0.04)', textGlow: 'rgba(16, 185, 129, 0.2)' }
  };

  const currentTheme = projectColors[project.id] || { primary: 'var(--accent)', bgGlow: 'var(--accent-dim)', textGlow: 'var(--accent-glow)' };

  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', background: 'var(--bg)', position: 'relative' }}>
      
      {/* Visual background glow matched with project color */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: '10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${currentTheme.bgGlow} 0%, transparent 70%)`,
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div className="container-main">
        {/* Back navigation */}
        <button 
          onClick={() => { setRoute('/'); window.scrollTo(0, 0); }}
          style={{
            background: 'none',
            border: 'none',
            color: currentTheme.primary,
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

        {/* Headline Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span className="tag" style={{ borderColor: currentTheme.primary, color: currentTheme.primary }}>
              {project.category}
            </span>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-heading)', color: 'var(--text-muted)' }}>
              Completed in {project.year}
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: 'var(--text)'
          }}>
            {project.title}
          </h1>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '15px',
            color: 'var(--text-secondary)',
            fontWeight: 500,
            letterSpacing: '0.02em',
            marginTop: '8px'
          }}>
            {project.tagline}
          </p>
        </div>

        {/* Project Metrics dashboard */}
        {project.metrics && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '56px'
          }}>
            {project.metrics.map((metric, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '24px',
                  textAlign: 'left'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: currentTheme.primary,
                  textShadow: `0 0 10px ${currentTheme.textGlow}`
                }}>
                  {metric.value}
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
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Case Details */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          marginBottom: '64px'
        }} className="md:flex md:flex-row md:items-start">
          
          {/* Main write-up */}
          <div style={{ flex: 3 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>
              Project Narrative
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              {project.description}
            </p>
            <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              The system utilizes deep optimization pipelines to ensure zero performance degradation under intense scaling pressure. By designing microservice wrappers around each core predictive task and offloading communication logic to background servers, it operates with extremely low response times.
            </p>

            {/* Tech Stack list tags */}
            <div style={{ marginTop: '32px' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Technology Integration
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tag" style={{ fontSize: '11px', padding: '6px 12px' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Action Side panel */}
          <div style={{
            flex: 2,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: 'var(--text)' }}>
              Execution Terminal
            </h3>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Try the platform interface live or checkout compile outputs.
            </p>

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target={project.liveUrl !== '#' ? "_blank" : "_self"} 
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: currentTheme.primary,
                  justifyContent: 'center',
                  boxShadow: `0 0 10px ${currentTheme.textGlow}`
                }}
              >
                Launch Live Instance <ExternalLink size={14} />
              </a>
            )}

            <button 
              onClick={() => alert("Source code is proprietary / subject to academic audit.")}
              className="btn-outline"
              style={{ justifyContent: 'center' }}
            >
              Inspect Repository
            </button>
          </div>

        </div>

        {/* Structural Architecture Layers */}
        {project.architecture && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
              <Cpu size={20} style={{ color: currentTheme.primary }} />
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 700, textTransform: 'uppercase' }}>
                Structural Architecture
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '20px'
            }} className="md:grid-cols-2">
              
              {/* 1. Data Layer */}
              {project.architecture.data && (
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '28px',
                  position: 'relative'
                }}>
                  <span style={{ fontSize: '10px', color: currentTheme.primary, fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Layer 01
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, margin: '6px 0 12px' }}>
                    Data Ingestion
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.architecture.data}
                  </p>
                </div>
              )}

              {/* 2. Intelligence Layer */}
              {project.architecture.intelligence && (
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '28px',
                  position: 'relative'
                }}>
                  <span style={{ fontSize: '10px', color: currentTheme.primary, fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Layer 02
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, margin: '6px 0 12px' }}>
                    Intelligence Engine
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.architecture.intelligence}
                  </p>
                </div>
              )}

              {/* 3. Decision Layer */}
              {project.architecture.decision && (
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '28px',
                  position: 'relative'
                }}>
                  <span style={{ fontSize: '10px', color: currentTheme.primary, fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Layer 03
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, margin: '6px 0 12px' }}>
                    Decision Processor
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.architecture.decision}
                  </p>
                </div>
              )}

              {/* 4. Output Layer */}
              {project.architecture.output && (
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '28px',
                  position: 'relative'
                }}>
                  <span style={{ fontSize: '10px', color: currentTheme.primary, fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Layer 04
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, margin: '6px 0 12px' }}>
                    Output Stream
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.architecture.output}
                  </p>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
