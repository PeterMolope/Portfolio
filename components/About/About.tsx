'use client'

import { useEffect, useState } from 'react'

export default function About() {
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, years: 0, clients: 0 })

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

            animateValue(0, 50, 2000, 'projects')
            animateValue(0, 5, 2000, 'years')
            animateValue(0, 30, 2000, 'clients')
            
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
                I'm a passionate Full Stack Developer with over 5 years of experience in building modern web applications and mobile solutions. I specialize in JavaScript technologies, React, Node.js, and creating beautiful user interfaces.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number" data-count="50">{animatedStats.projects}</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-count="5">{animatedStats.years}</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-count="30">{animatedStats.clients}</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <div className="code-block">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable">developer</span>
                  <span className="code-operator">=</span>
                  <span className="code-brace">{'{'}</span>
                </div>
                <div className="code-line indent">
                  <span className="code-property">name</span>
                  <span className="code-operator">:</span>
                  <span className="code-string">'Developer'</span>
                  <span className="code-comma">,</span>
                </div>
                <div className="code-line indent">
                  <span className="code-property">skills</span>
                  <span className="code-operator">:</span>
                  <span className="code-bracket">[</span>
                  <span className="code-string">'React'</span>
                  <span className="code-comma">,</span>
                  <span className="code-string">'Node.js'</span>
                  <span className="code-comma">,</span>
                  <span className="code-string">'TypeScript'</span>
                  <span className="code-bracket">]</span>
                  <span className="code-comma">,</span>
                </div>
                <div className="code-line indent">
                  <span className="code-property">passion</span>
                  <span className="code-operator">:</span>
                  <span className="code-string">'Coding'</span>
                </div>
                <div className="code-line">
                  <span className="code-brace">{'}'}</span>
                  <span className="code-semicolon">;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
