'use client';

import { useEffect, useState } from 'react';

/**
 * Hero section component with typing effect
 * @returns {JSX.Element} Hero section
 */
export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Initialize hero section visibility and typing effect
   */
  useEffect(() => {
    setIsVisible(true);
    
    const text = 'Senior Full Stack Developer';
    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    // Start typing effect after a delay
    const timer = setTimeout(typeWriter, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className={`hero ${isVisible ? 'visible' : ''}`}>
      {/* Design Elements */}
      <div className="design-element circle"></div>
      <div className="design-element square"></div>
      <div className="design-element triangle"></div>
      
      <div className="container">
        <h1>NAM KIM</h1>
        <p className="subtitle">
          {displayText}
          <span className="cursor"></span>
        </p>
        <div className="scroll-indicator">SCROLL DOWN</div>
      </div>
    </section>
  );
}