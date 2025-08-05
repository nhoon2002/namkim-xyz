'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

/**
 * Hero section component with typing effect and QR code
 * @returns {JSX.Element} Hero section
 */
export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [qrOpacity, setQrOpacity] = useState(1);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');

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

  /**
   * Generate QR code
   */
  useEffect(() => {
    const generateQR = async () => {
      try {
        const url = 'https://drive.google.com/file/d/1mBHunGzk2JWkDfo7hvG0bFBg00dxhYIW/view?usp=sharing';
        const qrDataUrl = await QRCode.toDataURL(url, {
          width: 120,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeDataUrl(qrDataUrl);
      } catch (err) {
        console.error('Error generating QR code:', err);
      }
    };

    generateQR();
  }, []);

  /**
   * QR code fade in/fade out effect
   */
  // useEffect(() => {
  //   const fadeInterval = setInterval(() => {
  //     setQrOpacity(prev => {
  //       if (prev >= 1) return 0.3;
  //       return prev + 0.02;
  //     });
  //   }, 50);

  //   return () => clearInterval(fadeInterval);
  // }, []);

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
        
        {/* QR Code Section */}
        <div className="qr-section">
          <div 
            className="qr-container"
            style={{ opacity: qrOpacity }}
            onClick={() => window.open('https://docs.google.com/document/d/1zTxFSpPPCmfsUygOeUXhHGxyTMh8zuq-E7vCXz7o06c/edit?usp=sharing', '_blank')}
          >
            {qrCodeDataUrl && (
              <img 
                src={qrCodeDataUrl} 
                alt="QR Code for Resume" 
                className="qr-code"
              />
            )}
            <p className="qr-label">Scan for Resume</p>
          </div>
        </div>
        
        <div className="scroll-indicator">SCROLL DOWN</div>
      </div>
    </section>
  );
}