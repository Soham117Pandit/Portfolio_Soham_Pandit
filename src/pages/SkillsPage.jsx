// src/pages/SkillsPage.jsx
import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsPage({ setRoute }) {
  const { skills } = portfolioData;
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSkill, setExpandedSkill] = useState(null);

  // Filter skills based on category and search term
  const filteredSkills = useMemo(() => {
    return skills.database.filter((skill) => {
      const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [skills.database, activeCategory, searchTerm]);

  const toggleSkillExpand = (name) => {
    if (expandedSkill === name) {
      setExpandedSkill(null);
    } else {
      setExpandedSkill(name);
    }
  };

  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Background glow overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: '15%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, transparent 70%)',
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
        <div style={{ marginBottom: '48px' }}>
          <span className="section-label">Capability Inventory</span>
          <h1 className="section-title" style={{ marginTop: '8px' }}>Skills Dashboard</h1>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '12px', maxWidth: '600px' }}>
            Battle-tested systems require deep language competency. Search and click to expand specific details.
          </p>
        </div>

        {/* Filter controls: Search and Tabs */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {/* Search Input */}
          <div style={{
            position: 'relative',
            maxWidth: '480px',
            width: '100%'
          }}>
            <Search 
              size={18} 
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }} 
            />
            <input 
              type="text"
              placeholder="Search skill (e.g. Python, YOLO, React)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                padding: '14px 16px 14px 48px',
                color: 'var(--text)',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                outline: 'none',
                transition: 'var(--transition)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            />
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '16px'
          }}>
            {skills.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setExpandedSkill(null); }}
                style={{
                  background: activeCategory === cat.id ? 'var(--accent)' : 'transparent',
                  color: activeCategory === cat.id ? '#000' : 'var(--text-secondary)',
                  border: activeCategory === cat.id ? '1px solid var(--accent)' : '1px solid var(--border)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '6px 14px',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
                onMouseOver={(e) => {
                  if (activeCategory !== cat.id) e.currentTarget.style.borderColor = 'var(--text-secondary)';
                }}
                onMouseOut={(e) => {
                  if (activeCategory !== cat.id) e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 24px',
            border: '1px dashed var(--border)',
            color: 'var(--text-secondary)'
          }}>
            <p>No capabilities matched your filter or search query.</p>
          </div>
        )}

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '16px'
        }}>
          {filteredSkills.map((skill, idx) => {
            const isExpanded = expandedSkill === skill.name;
            return (
              <div 
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderColor: isExpanded ? 'var(--accent)' : 'var(--border)',
                  transition: 'border-color 0.3s ease'
                }}
              >
                {/* Header Row (Always Visible) */}
                <div 
                  onClick={() => toggleSkillExpand(skill.name)}
                  style={{
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, display: 'inline-block', marginRight: '12px' }}>
                        {skill.name}
                      </h3>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '9px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        background: 'var(--accent-dim)',
                        padding: '2px 6px',
                        border: '1px solid rgba(16, 185, 129, 0.2)'
                      }}>
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    {/* Visual Strength Meter */}
                    <div className="hidden md:flex" style={{ alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '100px', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: skill.strength, height: '100%', background: 'var(--accent)' }} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', color: 'var(--text-secondary)' }}>
                        {skill.strength}
                      </span>
                    </div>

                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                {/* Expanded Details section */}
                {isExpanded && (
                  <div style={{
                    padding: '0 24px 24px',
                    borderTop: '1px solid rgba(255,255,255,0.03)',
                    marginTop: '0'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '24px',
                      paddingTop: '24px'
                    }} className="md:flex md:flex-row">
                      
                      <div style={{ flex: 3 }}>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: 'var(--text)' }}>
                          Capability Profile
                        </h4>
                        <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                          {skill.description}
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                          <div>
                            <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                              First Integrated
                            </span>
                            <span style={{ fontSize: '12.5px', color: 'var(--text)', fontWeight: 500 }}>
                              {skill.learned}
                            </span>
                          </div>
                          <div>
                            <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                              Target Implementations
                            </span>
                            <span style={{ fontSize: '12.5px', color: 'var(--text)', fontWeight: 500 }}>
                              {skill.projects}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div style={{
                        flex: 2,
                        background: 'rgba(255,255,255,0.01)',
                        border: '1px solid rgba(255,255,255,0.04)',
                        padding: '20px'
                      }}>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700, marginBottom: '12px', color: 'var(--accent)', textTransform: 'uppercase' }}>
                          Real-world Deployment
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <CheckCircle size={14} style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }} />
                          <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                            {skill.realWorld}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
