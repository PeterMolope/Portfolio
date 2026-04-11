'use client'

import { useState, useEffect } from 'react'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loader-screen" id="loader">
      <div className="loader-content">
        <div className="loader-code-text">
          <div className="code-line" data-line="1">const portfolio = {'{'}</div>
          <div className="code-line" data-line="2">  loading: true,</div>
          <div className="code-line" data-line="3">  status: 'initializing...'</div>
          <div className="code-line" data-line="4">{'};'}</div>
        </div>
        <div className="loader-spinner-wrapper">
          <div className="loader-spinner"></div>
        </div>
        <div className="loader-progress-wrapper">
          <div 
            className="loader-progress-bar" 
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <div className="loader-percentage" id="loaderPercent">
          {Math.floor(Math.min(progress, 100))}%
        </div>
      </div>
    </div>
  )
}
