'use client'

import { useState } from 'react'
import { contactInfo } from '../../Constant/Data'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">05</span>
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            <span className="title-text">Contact</span>
            <span className="title-bracket">/&gt;</span>
          </h2>
          <div className="section-line"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <item.icon size={24} />
                </div>
                <div className="contact-details">
                  <h4 className="contact-label">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="contact-value">{item.value}</a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-input"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-input form-textarea"
                rows={5}
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              <span>Send Message</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
