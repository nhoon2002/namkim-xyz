'use client';

import { useEffect, useState } from 'react';

/**
 * Projects section component with project cards
 * @returns {JSX.Element} Projects section
 */
export default function Projects() {
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

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  /**
   * Project data
   */
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with real-time inventory management, payment processing, and advanced analytics dashboard.',
      techStack: 'React • Node.js • PostgreSQL • Stripe'
    },
    {
      id: 2,
      title: 'Task Management SaaS',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and automated workflows.',
      techStack: 'Next.js • Python • Redis • WebSocket'
    },
    {
      id: 3,
      title: 'Financial Analytics Tool',
      description: 'Data visualization platform for financial modeling with interactive charts and predictive algorithms.',
      techStack: 'Vue.js • FastAPI • TimescaleDB • D3.js'
    }
  ];

  return (
    <section id="projects" className={isVisible ? 'visible' : ''}>
      <div className="container">
        <div className="section-header">
          <h2>SELECTED WORK</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">{project.techStack}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 