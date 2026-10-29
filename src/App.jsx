import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeView } from './views/HomeView';
import { StateDetailView } from './views/StateDetailView';
import { WeaveDetailView } from './views/WeaveDetailView';

export default function App() {
  // Navigation State: 'home' | 'state' | 'weave'
  const [currentView, setCurrentView] = useState({ page: 'home', id: null });

  // Dark Mode Theme State (saved in localStorage; defaults to false for Light Mode)
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('sutraviz_theme');
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
      return false; // Pristine Light Mode by default
    } catch (e) {
      return false;
    }
  });

  const handleSetTheme = (isDark) => {
    setDarkMode(isDark);
  };

  useEffect(() => {
    try {
      const root = document.documentElement;
      const body = document.body;

      if (darkMode) {
        root.classList.add('dark');
        body.classList.add('dark');
        root.style.colorScheme = 'dark';
        root.style.backgroundColor = '#070B14';
        body.style.backgroundColor = '#070B14';
        body.style.color = '#F8FAFC';
        localStorage.setItem('sutraviz_theme', 'dark');
      } else {
        root.classList.remove('dark');
        body.classList.remove('dark');
        root.style.colorScheme = 'light';
        root.style.backgroundColor = '#FAF8F5';
        body.style.backgroundColor = '#FAF8F5';
        body.style.color = '#1C1917';
        localStorage.setItem('sutraviz_theme', 'light');
      }
    } catch (e) {
      // ignore
    }
  }, [darkMode]);

  const handleSelectState = (stateId) => {
    setCurrentView({ page: 'state', id: stateId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectWeave = (weaveId) => {
    setCurrentView({ page: 'weave', id: weaveId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setCurrentView({ page: 'home', id: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      style={{
        backgroundColor: darkMode ? '#070B14' : '#FAF8F5',
        color: darkMode ? '#F8FAFC' : '#1C1917',
      }}
      className={`${darkMode ? 'dark' : ''} min-h-screen flex flex-col font-sans transition-colors duration-300 selection:bg-amber-200 selection:text-amber-950 dark:selection:bg-amber-500/30 dark:selection:text-amber-200`}
    >
      <Header 
        onGoHome={handleGoHome} 
        darkMode={darkMode} 
        onSetTheme={handleSetTheme} 
      />

      <main className="flex-1 transition-colors duration-300">
        {currentView.page === 'home' && (
          <HomeView 
            onSelectState={handleSelectState} 
            onSelectWeave={handleSelectWeave} 
            darkMode={darkMode}
          />
        )}

        {currentView.page === 'state' && (
          <StateDetailView 
            stateId={currentView.id} 
            onBack={handleGoHome} 
            darkMode={darkMode}
          />
        )}

        {currentView.page === 'weave' && (
          <WeaveDetailView 
            weaveId={currentView.id} 
            onBack={handleGoHome} 
            darkMode={darkMode}
          />
        )}
      </main>
    </div>
  );
}
