'use client'

import { projects } from '../../Constant/Data'

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            <span className="title-text">Projects</span>
            <span className="title-bracket">/&gt;</span>
          </h2>
          <div className="section-line"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="project-link" title="View Project" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="project-link" title="View Code" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-placeholder">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      opacity: 0.8 
                    }}
                  />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.techStack.map((tag, tagIndex) => (
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
