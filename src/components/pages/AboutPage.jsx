import React, { useEffect, useRef } from 'react'

function PageHero({ title, subtitle, bg }) {
  const bgRef = useRef(null)
  useEffect(() => {
    const el = bgRef.current
    if (!el) return
    const onScroll = () => {
      const rect = el.parentElement.getBoundingClientRect()
      el.style.transform = `translateY(${rect.top * 0.3}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="parallax-section" style={{ height: '380px' }}>
      <div ref={bgRef} className="parallax-bg" style={{ backgroundImage: `url(${bg})` }} />
      <div className="parallax-overlay" style={{
        background: 'linear-gradient(180deg, rgba(18,9,5,0.55) 0%, rgba(18,9,5,0.85) 100%)'
      }} />
      <div className="parallax-content" style={{
        height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '50px'
      }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700,
            letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--color-gold)', margin: '0 0 10px' }}>
            ✦ Zain Alsham · The Place @ 5th ✦
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px,4vw,54px)', fontWeight: 600,
            color: 'var(--color-cream)', margin: '0 0 10px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-cursive" style={{ fontFamily: 'var(--font-script)', fontSize: '28px', color: 'rgba(250,245,238,0.8)', margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="Our Story"
        subtitle="Heritage, Spice &amp; Hospitality"
        bg="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="pattern-light" style={{ padding: '90px 0' }}>
        <div className="container">
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '50px'
          }}>
            
            {/* Left Side: Overlapping Images */}
            <div className="reveal-left" style={{
              flex: '1 1 500px',
              position: 'relative',
              height: '560px',
              maxWidth: '560px'
            }}>
              
              {/* Image 1: Main vertical seating area image */}
              <div style={{
                width: '320px',
                height: '480px',
                borderRadius: '2px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" 
                  alt="Dining Room and Lounge" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Image 2: Overlapping square food plate image (placed bottom right) */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '300px',
                height: '300px',
                border: '12px solid #ffffff',
                borderRadius: '2px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                overflow: 'hidden'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=600&auto=format&fit=crop" 
                  alt="Signature Plate Plating" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Center Geometric Ornament in copper/rust */}
              <div style={{
                position: 'absolute',
                top: '40%',
                left: '320px',
                transform: 'translate(-50%, -50%)',
                zIndex: 10
              }}>
                <svg width="46" height="110" viewBox="0 0 46 110" fill="none">
                  <circle cx="23" cy="23" r="12" stroke="#9e532b" strokeWidth="1.5" />
                  <line x1="23" y1="35" x2="23" y2="50" stroke="#9e532b" strokeWidth="1.5" />
                  <rect x="13" y="50" width="20" height="20" stroke="#9e532b" strokeWidth="1.5" />
                  <path d="M13,60 L23,50 L33,60 L23,70 Z" stroke="#9e532b" strokeWidth="1" />
                  <line x1="23" y1="70" x2="23" y2="85" stroke="#9e532b" strokeWidth="1.5" />
                  <circle cx="23" cy="97" r="12" stroke="#9e532b" strokeWidth="1.5" />
                  <line x1="17" y1="97" x2="29" y2="97" stroke="#9e532b" strokeWidth="1" />
                  <line x1="23" y1="91" x2="23" y2="103" stroke="#9e532b" strokeWidth="1" />
                </svg>
              </div>
              
            </div>

            {/* Right Side: Header & Text block */}
            <div className="reveal-right" style={{ flex: '1 1 450px', maxWidth: '520px' }}>
              
              {/* Cursive Eyebrow */}
              <div style={{
                fontFamily: 'var(--font-script)',
                fontSize: '34px',
                color: 'var(--color-rust)',
                marginBottom: '10px',
                lineHeight: '1'
              }}>
                Heritage
              </div>

              {/* Main Bold Display Heading */}
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '40px',
                fontWeight: '600',
                color: 'var(--color-text-dark)',
                lineHeight: '1.2',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                margin: '0 0 24px 0'
              }}>
                Good Food, Drinks &amp; Company.
              </h2>

              {/* Paragraph body */}
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'var(--color-text-mid)',
                lineHeight: '1.8',
                margin: '0 0 22px 0'
              }}>
                At Zain Alsham, we bring you an exquisite blend of Levantine heritage and Indian spices, located in the heart of Nairobi at The Place @ 5th. Our kitchens merge authentic recipes passed down through generations, crafting dishes that tell a story of geographical journeys, trade route seasonings, and warm hospitality.
              </p>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'var(--color-text-mid)',
                lineHeight: '1.8',
                margin: '0 0 35px 0'
              }}>
                Whether you're dining in our restaurant, or relaxing in the Saffron Lounge listening to the live Oud, we aim to provide an unforgettable international experience with a vibrant local Nairobi touch.
              </p>

              {/* Rectangular Outline Button */}
              <a 
                href="#dining"
                style={{
                  display: 'inline-block',
                  border: '1.5px solid var(--color-rust)',
                  padding: '14px 28px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'var(--color-rust)',
                  textDecoration: 'none',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--color-rust)'
                  e.currentTarget.style.color = '#ffffff'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--color-rust)'
                }}
              >
                Explore Dining Options →
              </a>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
