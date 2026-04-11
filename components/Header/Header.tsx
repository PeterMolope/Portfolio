'use client'

import { useState, useEffect } from 'react'
import { Navlinks } from '../../Constant/Constant'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('dark')
  const [currentLang, setCurrentLang] = useState('en')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setCurrentTheme(newTheme)
    document.body.setAttribute('data-theme', newTheme)
    localStorage.setItem('portfolio-theme', newTheme)
  }

  const toggleLang = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en'
    setCurrentLang(newLang)
    document.body.setAttribute('data-lang', newLang)
    document.body.setAttribute('data-dir', newLang === 'ar' ? 'rtl' : 'ltr')
    localStorage.setItem('portfolio-lang', newLang)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '')
    const targetSection = document.getElementById(targetId)
    
    if (targetSection) {
      const headerHeight = 80
      const targetPosition = targetSection.offsetTop - headerHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    
    setIsMenuOpen(false)
  }

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="nav-brand">
          <a href="#" className="brand-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Peter</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {Navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="nav-link"
              onClick={() => handleNavClick(link.href)}
            >
              <i className={`fas fa-${getIconForSection(link.name)}`}></i>
              <span className="nav-text">{link.name}</span>
            </a>
          ))}
        </div>
        
        <div className="nav-controls">
          <button className="lang-toggle" onClick={toggleLang} title="Toggle Language">
            <i className="fas fa-language"></i>
            <span className="lang-text">{currentLang === 'en' ? 'EN' : 'EN'}</span>
          </button>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            <i className={`fas fa-${currentTheme === 'dark' ? 'sun' : 'moon'}`}></i>
          </button>
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu} 
            title="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

function getIconForSection(sectionName: string): string {
  const iconMap: { [key: string]: string } = {
    'Home': 'home',
    'About': 'user',
    'Skills': 'code',
    'Projects': 'rocket',
    'Experience': 'briefcase',
    'Testimonials': 'quote-left',
    'Contact': 'envelope'
  }
  return iconMap[sectionName] || 'circle'
}
