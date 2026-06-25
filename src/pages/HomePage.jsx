// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { ArrowRight, Sparkles, MapPin, Mail, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Marquee from '../components/Marquee';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function HomePage({ setRoute }) {
  const { personal, stats, projects, labProjects, skills, leadership, certificates } = portfolioData;
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const renderHighlightedTagline = (text) => {
    if (!text) return null;
    const keywords = ['AI', 'project', 'product', 'systems', 'impact', 'real-world'];
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) => {
      const isKeyword = keywords.some(kw => kw.toLowerCase() === part.toLowerCase());
      if (isKeyword) {
        if (part.toLowerCase() === 'ai' || part.toLowerCase() === 'product' || part.toLowerCase() === 'impact') {
          return (
            <span key={index} style={{ textShadow: '0 0 15px var(--accent-glow)', color: 'var(--accent)' }}>
              {part}
            </span>
          );
        }
        return (
          <span key={index} style={{ color: 'var(--accent)' }}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const heroMarquees = [
    ["Builder", "Founder", "Engineer", "Innovator", "Architect"],
    ["Visionary", "Strategist", "Creator", "Leader", "Problem Solver"],
    ["AI Systems", "Full Stack", "Defense Tech", "SaaS", "Deep Learning"],
    ["Debater", "Speaker", "Thinker", "Disruptor", "Maker"]
  ];

  const projectAccents = {
    safera: '#EF4444',     // Red/Orange
    projecthub: '#0EA5E9', // Cyan/Blue
    'rogue-ai': '#10B981'  // Emerald Green
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      const element = document.getElementById(path.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setRoute(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* 1. HERO SECTION */}
      <section id="home" style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg)',
        paddingTop: '80px'
      }}>
        {/* Glow Gradients */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 50% 50% at 70% 35%, rgba(255, 106, 0, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.007) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.007) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)',
          pointerEvents: 'none'
        }} />

        {/* Backdrop Scrolling Marquees for Desktop */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '55%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '24px',
          pointerEvents: 'none',
          opacity: 0.8,
          maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)'
        }} className="hidden md:flex">
          <Marquee items={heroMarquees[0]} reverse={false} speed="45s" color="rgba(255, 255, 255, 0.015)" />
          <Marquee items={heroMarquees[1]} reverse={true} speed="50s" color="rgba(255, 106, 0, 0.025)" textShadow="0 0 12px rgba(255,106,0,0.02)" />
          <Marquee items={heroMarquees[2]} reverse={false} speed="40s" color="rgba(255, 255, 255, 0.03)" textShadow="0 0 20px rgba(16, 185, 129, 0.03)" />
          <Marquee items={heroMarquees[3]} reverse={true} speed="45s" color="rgba(255, 255, 255, 0.015)" />
        </div>

        {/* Profile Image Column (Right Panel) */}
        <div className="hidden md:flex" style={{
          position: 'absolute',
          right: '5%',
          top: '5%',
          width: '40%',
          height: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 2
        }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={personal.avatarUrl} 
              alt={personal.name} 
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"; }}
              style={{
                maxHeight: '75vh',
                maxWidth: '90%',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
              }} 
            />
            {/* Glowing background behind image */}
            <div style={{
              position: 'absolute',
              top: '25%',
              left: '25%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
              filter: 'blur(40px)'
            }} />
          </div>
        </div>

        {/* Hero Copy (Left Panel) */}
        <div className="container-main" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <div style={{ maxWidth: '580px' }}>
            
            {/* Mobile Header Banner Image */}
            <div className="md:hidden" style={{
              position: 'relative',
              width: '100%',
              height: '240px',
              marginBottom: '32px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--border)'
            }}>
              <img 
                src={personal.avatarUrl} 
                alt={personal.name} 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"; }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, var(--bg) 15%, transparent 100%)'
              }} />
            </div>

            {/* Availability status */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '28px'
            }}>
              <div className="status-dot" />
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#10B981'
              }}>{personal.statusText}</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 5vw, 54px)',
              fontWeight: 700,
              lineHeight: 1.15,
              textTransform: 'uppercase',
              marginBottom: '24px',
              color: 'var(--text)'
            }}>
              {renderHighlightedTagline(personal.tagline || personal.description)}
            </h1>

            {/* Sub-description */}
            <p style={{
              fontSize: '15px',
              lineHeight: '1.75',
              color: 'var(--text-secondary)',
              marginBottom: '32px'
            }}>
              {personal.subDescription}
            </p>

            {/* Quick About Box */}
            <div style={{
              padding: '20px',
              background: 'rgba(16, 185, 129, 0.03)',
              border: '1px solid rgba(16, 185, 129, 0.1)',
              borderRadius: '2px',
              marginBottom: '36px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>About Me</div>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {personal.aboutShort}
                  </p>
                </div>
                <a 
                  href="/about" 
                  onClick={(e) => handleNavClick(e, '/about')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    flexShrink: 0,
                    fontFamily: 'var(--font-heading)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '8px 14px',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    transition: 'var(--transition)'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-dim)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  More <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, '#projects')}
                className="btn-primary"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-outline"
              >
                Get In Touch
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROJECTS SECTION */}
      <section id="projects" style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <div style={{ marginBottom: '56px', maxWidth: '600px' }}>
            <span className="section-label">Projects</span>
            <h2 className="section-title" style={{ marginTop: '8px' }}>What I've Built</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '12px' }}>
              Battle-tested, production-ready systems integrating predictive algorithms, reinforcement loops, and edge intelligence.
            </p>
          </div>

          <div className="grid-projects">
            {projects.map((project) => {
              const projectColor = projectAccents[project.id] || 'var(--accent)';
              return (
                <div 
                  key={project.id}
                  className="project-card"
                  onClick={() => {
                    setRoute(`/projects/${project.id}`);
                    window.scrollTo(0, 0);
                  }}
                  style={{ '--project-accent': projectColor }}
                >
                  {/* Top Glowing Border */}
                  <div className="project-card-glow" />

                  {/* Card Thumbnail */}
                  <div className="image-frame">
                    <img 
                      src={`/projects/${project.id}.png`} 
                      alt={project.title}
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"; }}
                    />
                    {/* Bottom shading */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '70%',
                      background: `linear-gradient(to top, var(--bg-card) 0%, rgba(10,10,14,0.85) 40%, transparent 100%)`
                    }} />
                    {/* Floating stats year */}
                    <div style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      padding: '4px 10px',
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '2px',
                      zIndex: 2
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '9px',
                        fontWeight: 700,
                        color: 'var(--text-secondary)',
                        letterSpacing: '0.1em'
                      }}>{project.year}</span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ marginBottom: '4px' }}>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '10px',
                        fontWeight: 600,
                        color: projectColor,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase'
                      }}>{project.subtitle}</span>
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '26px',
                      fontWeight: 700,
                      color: 'var(--text)',
                      marginBottom: '12px'
                    }}>{project.title}</h3>
                    
                    <p style={{
                      fontSize: '13.5px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                      flexGrow: 1
                    }}>{project.summary}</p>

                    {/* Tag lists */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                      {(project.tags || project.techStack || []).slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>

                    {/* Metric Previews */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                      borderTop: '1px solid rgba(255,255,255,0.05)',
                      paddingTop: '16px'
                    }}>
                      <div style={{ display: 'flex', gap: '16px' }}>
                        {project.metrics && project.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx}>
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: projectColor }}>
                              {m.value}
                            </div>
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '8px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                              {m.label.split(' ')[0]} {/* Shorten label */}
                            </div>
                          </div>
                        ))}
                      </div>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '11px',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        color: projectColor,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Details <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section id="skills" style={{ padding: '120px 0', borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container-main">
          <div style={{ marginBottom: '56px', maxWidth: '600px' }}>
            <span className="section-label">Skills</span>
            <h2 className="section-title" style={{ marginTop: '8px' }}>Core Tech Stack</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '12px' }}>
              Hover over a skill block to see where it was deployed in my portfolio systems.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
            gap: '16px'
          }}>
            {skills.database.slice(0, 8).map((skill, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  aspectRatio: '1/1',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'var(--transition)',
                  borderColor: hoveredSkill === skill.name ? 'var(--accent)' : 'var(--border)'
                }}
              >
                {/* Content Swap on Hover */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  transform: hoveredSkill === skill.name ? 'translateY(-15px)' : 'translateY(0)',
                  opacity: hoveredSkill === skill.name ? 0 : 1,
                  transition: 'var(--transition)'
                }}>
                  <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700 }}>
                    {skill.name}
                  </span>
                </div>

                {/* Hover Deployed Info overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'rgba(10, 10, 15, 0.95)',
                  transform: hoveredSkill === skill.name ? 'translateY(0)' : 'translateY(100%)',
                  opacity: hoveredSkill === skill.name ? 1 : 0,
                  transition: 'var(--transition)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  lineHeight: '1.4'
                }}>
                  <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>
                    Used In:
                  </span>
                  <p style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>
                    {skill.used}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '10px', textAlign: 'center' }}>
                    {skill.realWorld}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <button 
              onClick={() => { setRoute('/skills'); window.scrollTo(0,0); }}
              className="btn-outline"
            >
              View Full Capability Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP SECTION */}
      <section id="leadership" style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <div style={{ marginBottom: '56px', maxWidth: '600px' }}>
            <span className="section-label">Leadership</span>
            <h2 className="section-title" style={{ marginTop: '8px' }}>Public Speaking & Direction</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '12px' }}>
              Applying structured logic, critical arguments, and systems-level coordination in national policy, competitive debater, and chair setups.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {leadership.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'var(--transition)'
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <Award size={18} style={{ color: 'var(--accent)' }} />
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.duration}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>
                    {item.title}
                  </h3>
                  <span style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 500, display: 'block', marginBottom: '20px' }}>
                    {item.role}
                  </span>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                    {item.bullets[0]}
                  </p>
                  {item.certificates && item.certificates.length > 0 && (
                    <div style={{ marginTop: '16px', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {item.certificates.map((cert, cIdx) => (
                          <a 
                            key={cIdx}
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '10px 14px',
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
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.15)';
                              e.currentTarget.style.background = 'rgba(16, 185, 129, 0.03)';
                            }}
                          >
                            <Award size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                            <div style={{
                              fontFamily: 'var(--font-heading)',
                              fontSize: '11px',
                              fontWeight: 700,
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                              textAlign: 'left'
                            }}>
                              {cert.name}
                            </div>
                            <span style={{ fontSize: '9px', color: 'var(--accent)', marginLeft: 'auto', flexShrink: 0 }}>[↗]</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => { setRoute('/leadership'); window.scrollTo(0,0); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                    letterSpacing: '0.05em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: '28px',
                    cursor: 'pointer',
                    alignSelf: 'flex-start'
                  }}
                >
                  Full Details <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <div style={{ marginBottom: '56px', maxWidth: '600px' }}>
            <span className="section-label">Credentials</span>
            <h2 className="section-title" style={{ marginTop: '8px' }}>Certifications</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '12px' }}>
              Verifiable academic, technical, and industrial credentials highlighting specialized training and competency achievements.
            </p>
          </div>

          {/* Grid containing two large cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {/* Card 1: Technical Certificates */}
            <div
              onClick={() => { setRoute('/certificates/technical'); window.scrollTo(0, 0); }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
                transition: 'var(--transition)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(16, 185, 129, 0.06)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Corner Glow Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.08), transparent 70%)',
                pointerEvents: 'none'
              }} />

              <div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '4px',
                  background: 'var(--accent-dim)',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Award size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>
                  Technical Certificates
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Industrial training programs, hackathons, software development and machine learning credentials.
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '32px',
                borderTop: '1px solid rgba(255,255,255,0.04)',
                paddingTop: '20px'
              }}>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  letterSpacing: '0.05em'
                }}>
                  {certificates?.technical?.length || 0} Credentials
                </span>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  Open <ArrowRight size={12} />
                </span>
              </div>
            </div>

            {/* Card 2: Others Certificates */}
            <div
              onClick={() => { setRoute('/certificates/other'); window.scrollTo(0, 0); }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
                transition: 'var(--transition)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(16, 185, 129, 0.06)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Corner Glow Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.08), transparent 70%)',
                pointerEvents: 'none'
              }} />

              <div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '4px',
                  background: 'var(--accent-dim)',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Award size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>
                  Others Certificates
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Extracurricular achievements, non-technical trainings, workshops and professional development milestones.
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '32px',
                borderTop: '1px solid rgba(255,255,255,0.04)',
                paddingTop: '20px'
              }}>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  letterSpacing: '0.05em'
                }}>
                  {certificates?.other?.length || 0} Credentials
                </span>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  Open <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IN THE LAB SECTION */}
      {labProjects && labProjects.length > 0 && (
        <section style={{ padding: '120px 0', borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
          <div className="container-main">
            <div style={{ marginBottom: '56px', maxWidth: '600px' }}>
              <span className="section-label">Research & Development</span>
              <h2 className="section-title" style={{ marginTop: '8px' }}>In the Lab</h2>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '12px' }}>
                Ongoing designs and build paths. Currently testing internal models, security overrides, and generation loops.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}>
              {labProjects.map((lab, idx) => (
                <div key={idx} className="lab-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700 }}>
                      {lab.name}
                    </span>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 700, color: 'var(--accent)' }}>
                      {lab.progress}%
                    </span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${lab.progress}%` }} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px', lineHeight: '1.5' }}>
                    {lab.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. CONTACT SECTION */}
      <section id="contact" style={{ padding: '120px 0', borderTop: '1px solid var(--border)', position: 'relative' }}>
        <div className="container-main">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center'
          }} className="md:flex md:flex-row">
            
            {/* Contact Copy */}
            <div style={{ flex: 1 }}>
              <span className="section-label">Contact</span>
              <h2 className="section-title" style={{ marginTop: '8px' }}>Get In Touch</h2>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '16px', marginBottom: '24px' }}>
                Interested in shipping high-grade AI platforms, collaborating on complex system architectures, or scheduling debating setups? Drop a connection!
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--text)' }}>
                  <MapPin size={16} style={{ color: 'var(--accent)' }} />
                  <span>{personal.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--text)' }}>
                  <Mail size={16} style={{ color: 'var(--accent)' }} />
                  <a href={`mailto:${personal.email}`} style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2px' }}>
                    {personal.email}
                  </a>
                </div>
              </div>
            </div>

             {/* Social Connection Cards Grid */}
            <div style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '16px'
            }}>
              
              {personal.github && (
                <a href={personal.github} target="_blank" rel="noopener noreferrer" style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'var(--transition)',
                  cursor: 'pointer'
                }} onMouseOver={(e) => { e.currentTarget.style.borderColor = '#fff'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  <GithubIcon size={24} />
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>GitHub</span>
                </a>
              )}

              {personal.linkedin && (
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'var(--transition)',
                  cursor: 'pointer'
                }} onMouseOver={(e) => { e.currentTarget.style.borderColor = '#0077b5'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  <LinkedinIcon size={24} style={{ color: '#0077b5' }} />
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>LinkedIn</span>
                </a>
              )}

              {personal.twitter && (
                <a href={personal.twitter} target="_blank" rel="noopener noreferrer" style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'var(--transition)',
                  cursor: 'pointer'
                }} onMouseOver={(e) => { e.currentTarget.style.borderColor = '#1da1f2'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  <TwitterIcon size={24} style={{ color: '#1da1f2' }} />
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>X (Twitter)</span>
                </a>
              )}

              {personal.instagram && (
                <a href={personal.instagram} target="_blank" rel="noopener noreferrer" style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'var(--transition)',
                  cursor: 'pointer'
                }} onMouseOver={(e) => { e.currentTarget.style.borderColor = '#e1306c'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  <InstagramIcon size={24} style={{ color: '#e1306c' }} />
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Instagram</span>
                </a>
              )}

            </div>

          </div>
        </div>
      </section>

      </div>
  );
}
