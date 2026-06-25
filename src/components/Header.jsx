// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Header({ currentRoute, setRoute }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { name, initial } = portfolioData.personal;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (path.startsWith('#')) {
      if (currentRoute === '/') {
        const element = document.getElementById(path.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home first, then scroll
        setRoute('/');
        setTimeout(() => {
          const element = document.getElementById(path.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      setRoute(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className={isScrolled ? 'header-glass' : 'header-transparent'}>
      <div className="container-main" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px'
      }}>
        {/* Brand / Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none'
          }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--accent-dim), transparent)',
            position: 'relative'
          }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              color: 'var(--accent)',
              fontSize: '16px'
            }}>{initial}</span>
          </div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '16px',
            color: 'var(--text)',
            letterSpacing: '-0.02em'
          }}>{name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav style={{
          alignItems: 'center',
          gap: '36px'
        }} className="hidden md:flex">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              transition: 'color 0.2s'
            }}
          >
            Projects
          </a>
          <a
            href="/skills"
            onClick={(e) => handleNavClick(e, '/skills')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 500,
              color: currentRoute === '/skills' ? 'var(--accent)' : 'var(--text-secondary)',
              transition: 'color 0.2s'
            }}
          >
            Skills
          </a>
          <a
            href="#leadership"
            onClick={(e) => handleNavClick(e, '#leadership')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              transition: 'color 0.2s'
            }}
          >
            Leadership
          </a>
          <a
            href="#certificates"
            onClick={(e) => handleNavClick(e, '#certificates')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              transition: 'color 0.2s'
            }}
          >
            Certificates
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              transition: 'color 0.2s'
            }}
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-outline"
            style={{ padding: '8px 20px', fontSize: '11px' }}
          >
            Hire Me
          </a>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            zIndex: 110
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(5, 5, 8, 0.98)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          zIndex: 105,
          borderBottom: '1px solid var(--border)'
        }}>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--text)'
            }}
          >
            Projects
          </a>
          <a
            href="/skills"
            onClick={(e) => handleNavClick(e, '/skills')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: 600,
              color: currentRoute === '/skills' ? 'var(--accent)' : 'var(--text)'
            }}
          >
            Skills
          </a>
          <a
            href="#leadership"
            onClick={(e) => handleNavClick(e, '#leadership')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--text)'
            }}
          >
            Leadership
          </a>
          <a
            href="#certificates"
            onClick={(e) => handleNavClick(e, '#certificates')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--text)'
            }}
          >
            Certificates
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--text)'
            }}
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary"
            style={{ fontSize: '12px' }}
          >
            Hire Me <ArrowRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
