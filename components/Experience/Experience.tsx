'use client'

import { experiences } from '../../Constant/Data'

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            <span className="title-text">Experience</span>
            <span className="title-bracket">/&gt;</span>
          </h2>
          <div className="section-line"></div>
        </div>
        
        <div className="timeline">
          {experiences.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-year">{item.period}</div>
                  {item.type === 'work' && (
                    <div className="timeline-badge">Current</div>
                  )}
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-company">
                  <i className="fas fa-building"></i>
                  {item.company}
                </div>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-achievements">
                  {item.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="achievement-item">
                      <i className="fas fa-check-circle"></i>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
                <div className="timeline-tags">
                  {item.technologies.slice(0, 4).map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
