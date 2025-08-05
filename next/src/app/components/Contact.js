'use client';

import { useEffect, useState } from 'react';

/**
 * Contact section component with 3D business card
 * @returns {JSX.Element} Contact section
 */
export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Initialize section visibility on mount
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  /**
   * Handle phone click
   */
  const handlePhoneClick = () => {
    window.open('tel:+17144032020', '_self');
  };

  /**
   * Handle email click
   */
  const handleEmailClick = () => {
    window.open('mailto:alex.nh.kim@gmail.com', '_self');
  };

  /**
   * Handle LinkedIn click
   */
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/alex-nam-kim-04388070/', '_blank');
  };

  /**
   * Handle website click
   */
  const handleWebsiteClick = () => {
    window.open('https://www.namkim.xyz', '_blank');
  };

  return (
    <section id="contact" className={isVisible ? 'visible' : ''}>
      <div className="container">
        <div className="section-header">
          <h2>LET&apos;S CONNECT</h2>
        </div>
        <div className="contact-content">
          <p>Ready to build something amazing together?</p>
          
          <div 
            className={`business-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="card-front">
              <div className="card-header">
                <h3 className="card-name">Nam Hoon Kim</h3>
                <div className="card-title">Full-Stack Developer</div>
                <p className="card-location">Los Angeles, CA</p>
              </div>
              
              <div className="card-contact">
                <div className="contact-item" onClick={handlePhoneClick}>
                  <span className="contact-icon">📞</span>
                  <span className="contact-text">+1 (714) 403-2020</span>
                </div>
                
                <div className="contact-item" onClick={handleEmailClick}>
                  <span className="contact-icon">✉️</span>
                  <span className="contact-text">alex.nh.kim@gmail.com</span>
                </div>
                
                <div className="contact-item" onClick={handleLinkedInClick}>
                  <span className="contact-icon">💼</span>
                  <span className="contact-text">LinkedIn Profile</span>
                </div>
                
                <div className="contact-item" onClick={handleWebsiteClick}>
                  <span className="contact-icon">🌐</span>
                  <span className="contact-text">www.namkim.xyz</span>
                </div>
              </div>
              
              <div className="card-footer">
                <div className="card-tagline">Building digital experiences with clean code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 