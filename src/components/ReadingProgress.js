'use client'

import { useState, useEffect } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div 
      className="reading-progress-bar" 
      role="progressbar" 
      aria-valuenow={Math.round(progress)} 
      aria-valuemin="0" 
      aria-valuemax="100"
      aria-label="Reading progress"
    >
      <div 
        className="reading-progress-fill" 
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
