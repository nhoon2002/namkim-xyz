'use client';

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/Projects';
import Contact from './components/Contact';

/**
 * Main portfolio page component
 * @returns {JSX.Element} The complete portfolio page
 */
export default function Home() {
  const [theme, setTheme] = useState('dark');

  /**
   * Initialize theme from localStorage on component mount
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  /**
   * Handle theme toggle
   */
  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      {/* Grid Overlay */}
      <div className="grid-overlay"></div>
      
      {/* Navigation */}
      <Navigation theme={theme} onThemeToggle={handleThemeToggle} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Work Experience Section */}
      <WorkExperience />
      
      {/* Contact Section */}
      <Contact />
    </>
  );
}