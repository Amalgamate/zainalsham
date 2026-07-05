import React, { useState, useEffect } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Show preloader for 2.2 seconds, then fade out
    const timer = setTimeout(() => {
      setFadeOut(true)
      const hideTimer = setTimeout(() => {
        setLoading(false)
      }, 600) // matches transition duration
      return () => clearTimeout(hideTimer)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  // Extremely subtle gold/brown Arabic geometric star lattice pattern
  const subtleArabicPattern = `
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
      <path d="M40 0 L80 40 L40 80 L0 40 Z M0 0 L80 80 M80 0 L0 80" fill="none" stroke="#dfbd73" stroke-opacity="0.04" stroke-width="0.75" />
      <circle cx="40" cy="40" r="16" fill="none" stroke="#dfbd73" stroke-opacity="0.04" stroke-width="0.75" />
    </svg>
  `

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      backgroundColor: '#120905', // Deep premium espresso dark brown
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(subtleArabicPattern)}")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '80px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.6s',
      opacity: fadeOut ? 0 : 1,
      visibility: fadeOut ? 'hidden' : 'visible'
    }}>
      
      {/* Centered Loading Logo with soft pulse animation */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Soft Gold Halo ring */}
        <div style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '1px solid rgba(223, 189, 115, 0.15)',
          animation: 'haloPulse 3s ease-in-out infinite'
        }} />
        
        {/* White Logo image */}
        <img 
          src="/zeyn-alsham-LOGO-white.png" 
          alt="Zain Alsham Logo" 
          style={{
            height: '80px',
            width: '80px',
            objectFit: 'contain',
            animation: 'logoPulse 2.2s ease-in-out infinite',
            position: 'relative',
            zIndex: 2
          }}
        />
      </div>

      {/* Embedded CSS for smooth, subtle loading animations */}
      <style>{`
        @keyframes logoPulse {
          0%, 100% { opacity: 0.6; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        @keyframes haloPulse {
          0%, 100% { transform: scale(0.9); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}
