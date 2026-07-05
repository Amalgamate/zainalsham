import React, { useEffect, useRef } from 'react'

export default function Banner() {
  const bgRef = useRef(null)

  // Smooth JS parallax fallback (works on mobile too where CSS attachment:fixed fails)
  useEffect(() => {
    const el = bgRef.current
    if (!el) return

    const onScroll = () => {
      const rect = el.parentElement.getBoundingClientRect()
      const offset = rect.top * 0.35
      el.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      className="parallax-section"
      style={{ padding: '180px 0', minHeight: '480px' }}
      aria-label="Signature dishes banner"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1800&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="parallax-overlay" style={{
        background: 'linear-gradient(90deg, rgba(18,9,5,0.82) 0%, rgba(18,9,5,0.50) 50%, rgba(18,9,5,0.82) 100%)'
      }} />

      {/* Content */}
      <div className="parallax-content container">
        <div style={{
          border: '1px solid rgba(223,189,115,0.25)',
          padding: '48px 32px',
          maxWidth: '820px',
          margin: '0 auto',
          position: 'relative',
          textAlign: 'center'
        }}>
          {/* Gold corner ornaments */}
          {['top-left','top-right','bottom-left','bottom-right'].map((pos, i) => (
            <div key={i} style={{
              position: 'absolute',
              top: pos.includes('top') ? '-8px' : 'auto',
              bottom: pos.includes('bottom') ? '-8px' : 'auto',
              left: pos.includes('left') ? '-8px' : 'auto',
              right: pos.includes('right') ? '-8px' : 'auto',
              color: 'var(--color-gold)',
              fontSize: '14px',
              lineHeight: 1
            }}>❖</div>
          ))}

          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700,
            letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--color-gold)',
            margin: '0 0 18px'
          }}>✦ Crafted with Passion · Since 2010 ✦</p>

          <h2
            className="text-cursive"
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(56px, 8vw, 96px)',
              fontWeight: 400,
              color: '#ffffff',
              margin: '0 0 10px',
              lineHeight: 1.1,
              textTransform: 'none',
              letterSpacing: '1px',
              textShadow: '2px 4px 12px rgba(0,0,0,0.6)'
            }}
          >
            Our
            <span style={{ display: 'block', color: 'var(--color-gold)', marginTop: '6px' }}>
              Signature Dishes
            </span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(250,245,238,0.7)',
            maxWidth: '520px', margin: '20px auto 32px', lineHeight: 1.8, letterSpacing: '0.5px'
          }}>
            Our signature dishes celebrate the rich culinary heritage of Somalia and Syria, bringing together time-honored recipes, premium ingredients, and authentic spices.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#menu" style={{
              fontFamily: 'var(--font-serif)', fontSize: '12px', fontWeight: 600,
              letterSpacing: '2px', textTransform: 'uppercase',
              background: 'var(--gold-gradient)', color: 'var(--color-dark)',
              padding: '13px 28px', display: 'inline-block', transition: 'var(--transition-smooth)'
            }}>View Full Menu</a>
            <a href="https://wa.me/254728878856" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--font-serif)', fontSize: '12px', fontWeight: 600,
              letterSpacing: '2px', textTransform: 'uppercase',
              background: 'transparent', color: 'var(--color-cream)',
              border: '1px solid rgba(250,245,238,0.35)',
              padding: '13px 28px', display: 'inline-block', transition: 'var(--transition-smooth)'
            }}>Order Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
