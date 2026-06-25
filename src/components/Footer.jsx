// src/components/Footer.jsx
import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ setRoute }) {
  const { name, initial } = portfolioData.personal;

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
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'rgba(5, 5, 8, 0.6)',
      padding: '60px 0 40px',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container-main">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '24px'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, var(--accent-dim), transparent)'
            }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: 'var(--accent)',
                fontSize: '14px'
              }}>{initial}</span>
            </div>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '15px',
              color: 'var(--text)',
              letterSpacing: '-0.02em'
            }}>{name}</span>
          </div>

          {/* Quick Links */}
          <div style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            fontFamily: 'var(--font-heading)',
            fontSize: '12px',
            color: 'var(--text-secondary)'
          }}>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Projects</a>
            <a href="/skills" onClick={(e) => handleNavClick(e, '/skills')} style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Skills</a>
            <a href="#leadership" onClick={(e) => handleNavClick(e, '#leadership')} style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Leadership</a>
            <a href="#certificates" onClick={(e) => handleNavClick(e, '#certificates')} style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Certificates</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Contact</a>
          </div>

          {/* Credits & Copyright */}
          <div style={{
            marginTop: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            color: 'var(--text-muted)'
          }}>
            <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
            <p style={{ letterSpacing: '0.05em' }}>Built with React + Vanilla CSS + Antigravity AI</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
