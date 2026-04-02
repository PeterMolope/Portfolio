'use client'

import { useEffect, useState } from 'react'
import { skillCategories } from '../../Constant/Data'

export default function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill bars
            skillCategories.forEach((category) => {
              category.skills.forEach((skill) => {
                const key = `${category.title}-${skill.name}`
                setAnimatedSkills(prev => ({ ...prev, [key]: 100 })) // Show full skill level
              })
            })
            
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    const skillsSection = document.querySelector('.skills-section')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            <span className="title-text">Skills</span>
            <span className="title-bracket">/&gt;</span>
          </h2>
          <div className="section-line"></div>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => {
                  const key = `${category.title}-${skill.name}`
                  const animatedPercent = animatedSkills[key] || 0
                  
                  return (
                    <div key={skillIndex} className="skill-item" data-skill={skill.name} data-percent="100">
                      <div className="skill-header">
                        <div className="skill-info">
                          <skill.icon size={16} className="skill-icon" />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percent">{animatedPercent}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${animatedPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
