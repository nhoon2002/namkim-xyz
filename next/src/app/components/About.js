'use client';

import { useEffect, useState } from 'react';

/**
 * About section component with developer information and code block
 * @returns {JSX.Element} About section
 */
export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Calculate years of experience dynamically
   */
  const calculateYearsOfExperience = () => {
    const startYear = 2018;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };

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
              Innovative Full-Stack Developer with 5+ years of expertise in diverse projects. 
              Expert in modern JavaScript frameworks, adept at developing custom business 
              websites to complex web applications.
            </p>
            <br />
            <p>
              Solid foundation in mathematics and extreme attention to detail. Adaptable, 
              team-oriented, and dedicated to continuous learning and improvement.
            </p>
            <br />
            <p className="terminal-text">
              $ whoami<br />
              &gt; full_stack_developer && problem_solver
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
                <span className="keyword">this</span>.<span className="property">fullName</span> <span className="operator">=</span> <span className="string">{"Nam Hoon Kim"}</span>;
              </div>
              <div className="code-line indent2">
                <span className="keyword">this</span>.<span className="property">type</span> <span className="operator">=</span> <span className="string">{"Full-Stack Developer"}</span>;
              </div>
              <div className="code-line indent2">
                <span className="keyword">this</span>.<span className="property">location</span> <span className="operator">=</span> <span className="string">{"Los Angeles, CA"}</span>;
              </div>
              <div className="code-line indent2">
                <span className="keyword">this</span>.<span className="property">yearsOfExperience</span> <span className="operator">=</span> <span className="number">{calculateYearsOfExperience()}</span>;
              </div>
              <div className="code-line indent2">
                <span className="keyword">this</span>.<span className="property">education</span> <span className="operator">=</span> <span className="string">{"UCLA - B.S. Mathematics (Finance, Actuarial)"}</span>;
              </div>
              <div className="code-line indent2">
                <span className="keyword">this</span>.<span className="property">skills</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
              </div>
              <div className="code-line indent3">
                <span className="property">frontend</span>: <span className="bracket">[</span><span className="string">{"'React'"}</span>, <span className="string">{"'Vue.js'"}</span>, <span className="string">{"'Next.js'"}</span>, <span className="string">{"'Redux'"}</span>, <span className="string">{"'Vuex'"}</span>, <span className="string">{"'Pinia'"}</span>, <span className="string">{"'TypeScript'"}</span>, <span className="string">{"'jQuery'"}</span>, <span className="string">{"'SASS'"}</span>, <span className="string">{"'Tailwind'"}</span>, <span className="string">{"'Responsive Design'"}</span>, <span className="string">{"'Cross-browser Compatibility'"}</span><span className="bracket">]</span>,
              </div>
              <div className="code-line indent3">
                <span className="property">backend</span>: <span className="bracket">[</span><span className="string">{"'Node.js'"}</span>, <span className="string">{"'Express.js'"}</span>, <span className="string">{"'PHP 8+'"}</span>, <span className="string">{"'Laravel'"}</span>, <span className="string">{"'Lumen'"}</span>, <span className="string">{"'CodeIgniter'"}</span>, <span className="string">{"'WordPress'"}</span>, <span className="string">{"'API Development'"}</span>, <span className="string">{"'REST APIs'"}</span><span className="bracket">]</span>,
              </div>
              <div className="code-line indent3">
                <span className="property">databases</span>: <span className="bracket">[</span><span className="string">{"'MySQL'"}</span>, <span className="string">{"'PostgreSQL'"}</span>, <span className="string">{"'NoSQL'"}</span>, <span className="string">{"'Firebase'"}</span><span className="bracket">]</span>,
              </div>
              <div className="code-line indent3">
                <span className="property">devops</span>: <span className="bracket">[</span><span className="string">{"'Docker'"}</span>, <span className="string">{"'Git'"}</span>, <span className="string">{"'Jenkins'"}</span>, <span className="string">{"'CI/CD'"}</span>, <span className="string">{"'webpack'"}</span>, <span className="string">{"'AWS'"}</span><span className="bracket">]</span>,
              </div>
              <div className="code-line indent3">
                <span className="property">tools</span>: <span className="bracket">[</span><span className="string">{"'Adobe XD'"}</span>, <span className="string">{"'Zeplin'"}</span>, <span className="string">{"'Photoshop'"}</span>, <span className="string">{"'Illustrator'"}</span>, <span className="string">{"'SEO'"}</span>, <span className="string">{"'Google Analytics'"}</span>, <span className="string">{"'Google Ads'"}</span>, <span className="string">{"'CMS Development'"}</span>, <span className="string">{"'Headless CMS'"}</span><span className="bracket">]</span>
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