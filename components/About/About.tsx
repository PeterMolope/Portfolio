'use client'

import { useEffect, useState } from 'react'
import { stats, highlights } from '../../Constant/Data'

export default function About() {
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, years: 0, clients: 0, students: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats
            const animateValue = (start: number, end: number, duration: number, key: keyof typeof animatedStats) => {
              let startTimestamp: number | null = null
              const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp
                const progress = Math.min((timestamp - startTimestamp) / duration, 1)
                setAnimatedStats(prev => ({
                  ...prev,
                  [key]: Math.floor(progress * (end - start) + start)
                }))
                if (progress < 1) {
                  window.requestAnimationFrame(step)
                }
              }
              window.requestAnimationFrame(step)
            }

            // Extract numbers from stat values (e.g., "1+" -> 1, "50+" -> 50)
            const yearsValue = parseInt(stats[0].value.replace(/\D/g, ''))
            const projectsValue = parseInt(stats[1].value.replace(/\D/g, ''))
            const clientsValue = parseInt(stats[2].value.replace(/\D/g, ''))
            const studentsValue = parseInt(stats[3].value.replace(/\D/g, ''))

            animateValue(0, yearsValue, 2000, 'years')
            animateValue(0, projectsValue, 2000, 'projects')
            animateValue(0, clientsValue, 2000, 'clients')
            animateValue(0, studentsValue, 2000, 'students')
            
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    const statsSection = document.querySelector('.about-stats')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            <span className="title-text">About Me</span>
            <span className="title-bracket">/&gt;</span>
          </h2>
          <div className="section-line"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text-wrapper">
            <div className="about-intro">
              <p className="about-text">
                I'm a passionate Full Stack Developer with expertise in modern web technologies and a strong foundation in computer science. 
                I specialize in creating exceptional digital experiences, from enterprise applications to innovative solutions.
              </p>
            </div>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number" data-count={stat.value}>
                    {animatedStats[Object.keys(animatedStats)[index] as keyof typeof animatedStats]}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <div className="highlights-list">
                {highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <div className="highlight-icon">
                      <highlight.icon size={24} />
                    </div>
                    <div className="highlight-text">{highlight.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
