'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; symbol: string; left: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const codeSymbols = ['{', '}', '[', ']', '(', ')', '<', '>', '/', '*', '=', '+', '-', ';', ':', '&', '|', '%', '$', '#', '@']
    const particleCount = 20
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 10 + Math.random() * 10
    }))
    
    setParticles(newParticles)
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="code-grid-bg"></div>
        <div className="floating-particles" id="particles">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.left}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            >
              {particle.symbol}
            </div>
          ))}
        </div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-text">Hello, I'm Peter Molope</span>
            <span className="greeting-cursor">|</span>
          </div>
          
          <h1 className="hero-name" id="heroName">
            <span className="name-prefix">const</span>
            <span className="name-operator">=</span>
            <span className="name-value">Developer</span>
            <span className="name-suffix">;</span>
          </h1>
          
          <div className="hero-title">
            <span className="title-prefix">//</span>
            <span className="title-text">Full Stack Developer & UI/UX Designer</span>
          </div>
          
          <p className="hero-description">
            Passionate developer creating exceptional digital experiences with modern technologies.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <span>Get In Touch</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#projects" className="btn btn-secondary">
              <span>View Projects</span>
              <i className="fas fa-code"></i>
            </a>
          </div>
          
          <div className="hero-social">
            <a href="#" className="social-icon" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-icon" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" title="CodePen">
              <i className="fab fa-codepen"></i>
            </a>
            <a href="#" className="social-icon" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="profile-image-glow"></div>
            <div className="profile-image-frame">
              <div className="profile-image" id="profileImage">
                <div className="profile-placeholder">
                  <i className="fas fa-code"></i>
                </div>
              </div>
            </div>
            <div className="floating-badge badge-1">
              <i className="fab fa-react"></i>
              <div className="badge-content">
                <span className="badge-title">React</span>
                <span className="badge-libs">Redux, Router, Hooks</span>
              </div>
            </div>
            <div className="floating-badge badge-2">
              <i className="fab fa-node-js"></i>
              <div className="badge-content">
                <span className="badge-title">Node.js</span>
                <span className="badge-libs">Express, Socket.io, MongoDB</span>
              </div>
            </div>
            <div className="floating-badge badge-3">
              <i className="fab fa-js"></i>
              <div className="badge-content">
                <span className="badge-title">JavaScript</span>
                <span className="badge-libs">ES6+, TypeScript, jQuery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  )
}
