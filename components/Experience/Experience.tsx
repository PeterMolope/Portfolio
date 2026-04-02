'use client'

interface TimelineItem {
  year: string
  badge?: string
  title: string
  company: string
  description: string
  achievements: string[]
  tags: string[]
}

export default function Experience() {
  const timelineItems: TimelineItem[] = [
    {
      year: '2022 - Present',
      badge: 'Current',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      description: 'Leading a team of developers in building complex web applications using React and Node.js. Developing advanced user interfaces and optimizing performance. Implementing microservices architecture and CI/CD pipelines.',
      achievements: [
        'Led team of 5 developers',
        'Improved performance by 40%',
        'Deployed 20+ production apps'
      ],
      tags: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'AWS']
    },
    {
      year: '2020 - 2022',
      title: 'Frontend Developer',
      company: 'Digital Solutions',
      description: 'Developed interactive user interfaces using React and Vue.js. Worked on improving user experience and performance optimization. Collaborated with designers to implement pixel-perfect designs.',
      achievements: [
        'Built 15+ responsive websites',
        'Reduced load time by 50%'
      ],
      tags: ['React', 'Vue.js', 'JavaScript', 'SASS', 'Webpack']
    },
    {
      year: '2018 - 2020',
      title: 'Junior Developer',
      company: 'Creative Studio',
      description: 'Developed websites using HTML, CSS, and JavaScript. Learned best practices in web development. Worked on various client projects and gained experience in modern web technologies.',
      achievements: [
        'Completed 30+ projects',
        'Learned modern frameworks'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
    }
  ]

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
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-year">{item.year}</div>
                  {item.badge && <div className="timeline-badge">{item.badge}</div>}
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-company">
                  <i className="fas fa-building"></i>
                  {item.company}
                </div>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-achievements">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="achievement-item">
                      <i className="fas fa-check-circle"></i>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
                <div className="timeline-tags">
                  {item.tags.map((tag, tagIndex) => (
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
