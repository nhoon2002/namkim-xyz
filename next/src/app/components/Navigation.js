'use client';

import { useState } from 'react';

/**
 * Navigation component with theme toggle and mobile menu
 * @param {Object} props - Component props
 * @param {string} props.theme - Current theme ('dark' or 'light')
 * @param {Function} props.onThemeToggle - Theme toggle handler
 * @returns {JSX.Element} Navigation component
 */
export default function Navigation({ theme, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Handle smooth scrolling to sections
   * @param {string} sectionId - Target section ID
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
    setIsMenuOpen(false);
  };

  /**
   * Close mobile menu
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <button 
        className="theme-toggle" 
        onClick={onThemeToggle}
        title="Toggle theme"
      >
        {theme === 'dark' ? '☀' : '🌙'}
      </button>
      
      {/* <button 
        className="nav-toggle" 
        onClick={() => setIsMenuOpen(true)}
      >
        MENU
      </button> */}
      
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <button className="close-nav" onClick={closeMenu}>
          &times;
        </button>
        <a href="#hero" onClick={() => scrollToSection('hero')}>
          Home
        </a>
        <a href="#about" onClick={() => scrollToSection('about')}>
          About
        </a>
        <a href="#work-experience" onClick={() => scrollToSection('work-experience')}>
          Experience
        </a>
        <a href="#contact" onClick={() => scrollToSection('contact')}>
          Contact
        </a>
      </div>
    </nav>
  );
} 