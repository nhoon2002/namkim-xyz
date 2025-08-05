'use client';

import { useEffect, useState } from 'react';

/**
 * Contact section component with contact form
 * @returns {JSX.Element} Contact section
 */
export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('idle');

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
   * Handle form input changes
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSubmitStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 2000);
    }, 1500);
  };

  /**
   * Get submit button text based on status
   * @returns {string} Button text
   */
  const getSubmitButtonText = () => {
    switch (submitStatus) {
      case 'sending':
        return 'SENDING...';
      case 'sent':
        return 'MESSAGE SENT';
      default:
        return 'SEND MESSAGE';
    }
  };

  return (
    <section id="contact" className={isVisible ? 'visible' : ''}>
      <div className="container">
        <div className="section-header">
          <h2>LET&apos;S CONNECT</h2>
        </div>
        <div className="contact-content">
          <p>Ready to build something amazing together?</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={submitStatus === 'sending'}
            >
              {getSubmitButtonText()}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 