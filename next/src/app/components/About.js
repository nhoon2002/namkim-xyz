'use client';

import { useEffect, useState } from 'react';

/**
 * About section component with developer information and code block
 * @returns {JSX.Element} About section
 */
export default function About() {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={isVisible ? 'visible' : ''}>
      <div className="container">
        <div className="section-header">
          <h2>ABOUT</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I craft digital experiences through clean code and thoughtful design. 
              With 8+ years of experience, I specialize in building scalable web 
              applications that solve real problems.
            </p>
            <br />
            <p>
              My approach combines technical expertise with user-centric thinking, 
              ensuring every line of code serves a purpose.
            </p>
            <br />
            <p className="terminal-text">
              $ whoami<br />
              &gt; problem_solver && code_architect
            </p>
          </div>
          <div className="code-block">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="filename">developer.js</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="comment">{'// About me'}</span>
              </div>
              <div className="code-line">
                <span className="keyword">class</span> <span className="class-name">SoftwareDeveloper</span> <span className="bracket">{'{'}</span>
              </div>
              <div className="code-line indent1">
                <span className="keyword">constructor</span><span className="bracket">()</span> <span className="bracket">{'{'}</span>
              </div>
              <div className="code-line indent2">
                <span className="keyword">this</span>.<span className="property">fullName</span> <span className="operator">=</span> <span className="string">{"Nam Kim"}</span>;
              </div>
              <div className="code-line indent2">
                <span className="keyword">this</span>.<span className="property">type</span> <span className="operator">=</span> <span className="string">{"Full-Stack Developer"}</span>;
              </div>
              <div className="code-line indent2">
                <span className="keyword">this</span>.<span className="property">location</span> <span className="operator">=</span> <span className="string">{"San Francisco"}</span>;
              </div>
              <div className="code-line indent2">
                <span className="keyword">this</span>.<span className="property">yearsOfExperience</span> <span className="operator">=</span> <span className="number">8</span>;
              </div>
              <div className="code-line indent2">
                <span className="keyword">this</span>.<span className="property">skills</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
              </div>
              <div className="code-line indent3">
                <span className="property">frontend</span>: <span className="bracket">[</span><span className="string">{"'React.js'"}</span>, <span className="string">{"'Vue.js'"}</span>, <span className="string">{"'TypeScript'"}</span>, <span className="comment">{'...more'}</span><span className="bracket">]</span>,
              </div>
              <div className="code-line indent3">
                <span className="property">backend</span>: <span className="bracket">[</span><span className="string">{"'Node.js'"}</span>, <span className="string">{"'Python'"}</span>, <span className="string">{"'PostgreSQL'"}</span>, <span className="comment">{'...more'}</span><span className="bracket">]</span>,
              </div>
              <div className="code-line indent3">
                <span className="property">tools</span>: <span className="bracket">[</span><span className="string">{"'Docker'"}</span>, <span className="string">{"'AWS'"}</span>, <span className="string">{"'Git'"}</span>, <span className="comment">{'...more'}</span><span className="bracket">]</span>
              </div>
              <div className="code-line indent2">
                <span className="bracket">{'};'}</span>
              </div>
              <div className="code-line indent1">
                <span className="bracket">{'}'}</span>
              </div>
              <div className="code-line">
                <span className="bracket">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 