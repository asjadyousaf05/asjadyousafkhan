import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Chatbot from './components/Chatbot';
import ProjectsPage from './components/ProjectsPage';
import ProjectCaseStudy from './components/ProjectCaseStudy';

function App() {
  const [pathname, setPathname] = useState(() =>
    typeof window === 'undefined' ? '/' : window.location.pathname,
  );
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const savedMode = window.localStorage.getItem('darkMode');
      return savedMode === null ? false : JSON.parse(savedMode);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleRouteChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const renderPage = () => {
    if (pathname === '/projects') {
      return <ProjectsPage />;
    }

    if (pathname.startsWith('/projects/')) {
      return <ProjectCaseStudy slug={decodeURIComponent(pathname.replace('/projects/', ''))} />;
    }

    return (
      <main className="pt-16 sm:pt-20">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    );
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <SEO pathname={pathname} />
      <div className="relative min-h-screen overflow-x-hidden">
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-drift" />
          <div className="absolute -right-20 top-[32%] h-80 w-80 rounded-full bg-amber-400/20 blur-3xl animate-drift" />
          <div className="absolute bottom-16 left-[40%] h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl animate-drift" />
        </div>

        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode((prev) => !prev)} />

        {renderPage()}

        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
