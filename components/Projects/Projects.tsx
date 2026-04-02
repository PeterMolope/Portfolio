'use client'

interface Project {
  title: string
  description: string
  icon: string
  tags: string[]
  projectUrl?: string
  codeUrl?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A complete e-commerce platform with payment integration and advanced inventory management.',
      icon: 'fa-shopping-cart',
      tags: ['React', 'Node.js', 'MongoDB'],
      projectUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A web application for task management with real-time synchronization and modern design.',
      icon: 'fa-tasks',
      tags: ['React', 'Firebase', 'TypeScript'],
      projectUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with CMS features and beautiful UI design.',
      icon: 'fa-blog',
      tags: ['Next.js', 'Prisma', 'PostgreSQL'],
      projectUrl: '#',
      codeUrl: '#'
    }
  ]

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
                    {project.projectUrl && (
                      <a href={project.projectUrl} className="project-link" title="View Project" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                    {project.codeUrl && (
                      <a href={project.codeUrl} className="project-link" title="View Code" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-placeholder">
                  <i className={`fas ${project.icon}`}></i>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
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
