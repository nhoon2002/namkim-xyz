'use client';

import { useEffect, useState } from 'react';

/**
 * Work Experience section component with timeline layout
 * @returns {JSX.Element} Work Experience section
 */
export default function WorkExperience() {
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

    const section = document.getElementById('work-experience');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  /**
   * Work experience data in chronological order (newest first)
   */
  const jobs = [
    {
      id: 1,
      company: 'Dev.xyz',
      role: 'Full-Stack Developer',
      period: '2019 - Current',
      description: 'Digital consumer finance, big data analytics, domain registry operations',
      achievements: [
        'Performance optimizations and QA for 50+ public-facing websites',
        'Built 10+ internal tools and APIs for task automation',
        'Standardized sites with modern frameworks and responsive design',
        '67% reduction in maintenance operations time',
        'Consulted with marketing and sales teams for scalable solutions'
      ],
      isCurrent: true
    },
    {
      id: 2,
      company: 'Xen Media, Inc.',
      role: 'Frontend Developer - Lead',
      period: '2018 - 2019',
      description: 'Digital media agency specializing in web and mobile app development',
      achievements: [
        'Developed customized solutions for 30+ clients (Kia, Hite Jinro, Ajinomoto)',
        'Ensured minimal downtime and data security for all clients',
        'Achieved perfect Lighthouse scores and 50% increase in organic traffic'
      ]
    },
    {
      id: 3,
      company: 'Netmarble Games, Inc.',
      role: 'Quality Assurance Associate',
      period: '2015 - 2016',
      description: 'Largest mobile games developer and publisher in Asia',
      achievements: [
        'Conducted quality assurance and localization for top-grossing mobile apps',
        'Served as liaison between HQ in Korea and global partners (Disney/Marvel)'
      ]
    },
    {
      id: 4,
      company: 'Riot Games, Inc.',
      role: 'Localization Contractor',
      period: '2015',
      description: 'Game development and publishing',
      achievements: [
        'Created and optimized translating software for streamlined processes',
        'Translated and edited "Legends: Rising" documentary series (5M+ YouTube views)'
      ]
    }
  ];

  return (
    <section id="work-experience" className={isVisible ? 'visible' : ''}>
      <div className="container">
        <div className="section-header">
          <h2>XP</h2>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {jobs.map((job, index) => (
            <div 
              key={job.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${job.isCurrent ? 'current' : ''}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className={job.isCurrent ? 'current-job' : ''}>
                    {job.isCurrent ? '>> ' : ''}{job.company}
                  </h3>
                  <span className="job-period">{job.period}</span>
                </div>
                <div className="job-role">{job.role}</div>
                <p className="job-description">{job.description}</p>
                <ul className="job-achievements">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 