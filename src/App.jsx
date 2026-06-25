// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import LeadershipPage from './pages/LeadershipPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import CertificatesPage from './pages/CertificatesPage';

export default function App() {
  const [route, _setRoute] = useState(window.location.pathname);

  // A simple history-based router function
  const setRoute = (path) => {
    window.history.pushState(null, '', path);
    _setRoute(path);
    window.scrollTo(0, 0); // Always reset scroll to top on routing
  };

  useEffect(() => {
    const handlePopState = () => {
      _setRoute(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Routing renderer logic
  const renderPage = () => {
    if (route === '/' || route === '/index.html') {
      return <HomePage setRoute={setRoute} />;
    } else if (route === '/about') {
      return <AboutPage setRoute={setRoute} />;
    } else if (route === '/skills') {
      return <SkillsPage setRoute={setRoute} />;
    } else if (route === '/leadership') {
      return <LeadershipPage setRoute={setRoute} />;
    } else if (route.startsWith('/certificates/')) {
      const category = route.split('/certificates/')[1];
      return <CertificatesPage category={category} setRoute={setRoute} />;
    } else if (route.startsWith('/projects/')) {
      const projectId = route.split('/projects/')[1];
      return <ProjectDetailsPage projectId={projectId} setRoute={setRoute} />;
    } else {
      // Fallback
      return <HomePage setRoute={setRoute} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar */}
      <Header currentRoute={route} setRoute={setRoute} />
      
      {/* Main Pages */}
      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setRoute={setRoute} />
    </div>
  );
}
