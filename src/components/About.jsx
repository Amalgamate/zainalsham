import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react'

const services = [
  {
    id: 'family-dining',
    image: '/images/Somali_Family_Dining.png',
    imageAlt: 'Somali Family Dining',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'FAMILY DINING',
    description: 'Bring your loved ones together to enjoy the authentic flavors of Somalia and Syria in a warm, welcoming setting.'
  },
  {
    id: 'catering',
    image: '/images/outside catering.jpeg',
    imageAlt: 'Outside Catering Services',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
    title: 'CATERING SERVICES',
    description: 'Bring the authentic flavors of Somalia and Syria to your special occasion with our professional catering services.'
  },
  {
    id: 'celebrations',
    image: '/images/barbecue_fest.png',
    imageAlt: 'Exclusive Celebrations',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'EXCLUSIVE CELEBRATIONS',
    description: 'Host your most memorable moments in an elegant Levantine setting, where every detail is crafted to perfection for your special occasion.'
  },
  {
    id: 'delivery',
    image: '/images/levantine_mezze.png',
    imageAlt: 'Takeaway & Premium Delivery',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 5v3h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'TAKEAWAY & PREMIUM DELIVERY',
    description: 'Enjoy the authentic taste of Levantine cuisine from the comfort of your home or office. Fast, fresh, and delivered with care.'
  }
]

// Group services into pairs: [[s0,s1], [s2,s3]]
const PAIRS = [
  [services[0], services[1]],
  [services[2], services[3]],
]

// Clone last pair at start & first pair at end for seamless infinite loop
// TRACK = [pair1_clone, pair0, pair1, pair0_clone]
const TRACK = [PAIRS[PAIRS.length - 1], ...PAIRS, PAIRS[0]]

// ─── ServiceCard ────────────────────────────────────────────────────────────
const ServiceCard = ({ svc, side }) => (
  <div
    className="service-card"
    style={{ flexDirection: side === 'left' ? 'row' : 'row-reverse', flex: 1, minWidth: 0 }}
  >
    <div className="service-img-wrap" style={{ minHeight: '360px' }}>
      <img src={svc.image} alt={svc.imageAlt} />
      <div style={{ position: 'absolute', top: '16px', left: '16px', width: '30px', height: '30px', borderTop: '2px solid var(--color-gold)', borderLeft: '2px solid var(--color-gold)', opacity: 0.6 }} />
      <div style={{ position: 'absolute', bottom: '16px', right: '16px', width: '30px', height: '30px', borderBottom: '2px solid var(--color-gold)', borderRight: '2px solid var(--color-gold)', opacity: 0.6 }} />
    </div>
    <div className="service-info">
      <div className="service-icon-badge">{svc.icon}</div>
      <h5>{svc.title}</h5>
      <div style={{ width: '40px', height: '1px', background: 'var(--color-rust)', margin: '12px auto' }} />
      <p>{svc.description}</p>
      <a
        href="#"
        style={{
          marginTop: '20px', display: 'inline-block',
          fontFamily: 'var(--font-serif)', fontSize: '13px',
          fontWeight: '600', letterSpacing: '2px',
          textTransform: 'uppercase', color: 'var(--color-rust)',
          textDecoration: 'none', borderBottom: '1px solid var(--color-rust)',
          paddingBottom: '2px', transition: 'var(--transition-smooth)'
        }}
        onMouseOver={(e) => { e.target.style.color = 'var(--color-gold)'; e.target.style.borderColor = 'var(--color-gold)' }}
        onMouseOut={(e)  => { e.target.style.color = 'var(--color-rust)';  e.target.style.borderColor = 'var(--color-rust)' }}
      >
        Learn More →
      </a>
    </div>
  </div>
)

// ─── NavArrow ────────────────────────────────────────────────────────────────
const NavArrow = ({ onClick, label, dir }) => (
  <button
    onClick={onClick}
    aria-label={label}
    style={{
      position: 'absolute',
      top: '50%',
      [dir]: '-22px',
      transform: 'translateY(-50%)',
      zIndex: 10,
      width: '48px', height: '48px', borderRadius: '50%',
      border: '1px solid rgba(207,168,96,0.5)',
      background: 'rgba(18,9,5,0.75)',
      backdropFilter: 'blur(8px)',
      color: 'var(--color-gold)',
      cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '22px',
      transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.background = 'var(--color-gold)'
      e.currentTarget.style.color = 'var(--color-dark)'
      e.currentTarget.style.boxShadow = 'var(--gold-glow)'
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.background = 'rgba(18,9,5,0.75)'
      e.currentTarget.style.color = 'var(--color-gold)'
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)'
    }}
  >
    {dir === 'left' ? '‹' : '›'}
  </button>
)

// ─── Main Component ──────────────────────────────────────────────────────────
export default function About() {
  // trackIdx: 0 = clone-last, 1..PAIRS.length = real slides, PAIRS.length+1 = clone-first
  const [trackIdx, setTrackIdx]   = useState(1)
  const [animated, setAnimated]   = useState(false)
  const [slideWidth, setSlideWidth] = useState(0)
  const containerRef = useRef(null)
  const isPaused     = useRef(false)
  const intervalRef  = useRef(null)

  // Measure slide width on mount and on resize
  useLayoutEffect(() => {
    const measure = () => {
      if (containerRef.current) setSlideWidth(containerRef.current.clientWidth)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Enable transition after first paint (prevents initial jump animation)
  useEffect(() => { setAnimated(true) }, [])

  // Dot indicator: which real page are we on?
  const pageIdx = ((trackIdx - 1) % PAIRS.length + PAIRS.length) % PAIRS.length

  const goNext = useCallback(() => {
    setAnimated(true)
    setTrackIdx(prev => prev + 1)
  }, [])

  const goPrev = useCallback(() => {
    setAnimated(true)
    setTrackIdx(prev => prev - 1)
  }, [])

  // After sliding to a clone, silently jump to the real counterpart
  const handleTransitionEnd = useCallback(() => {
    if (trackIdx >= TRACK.length - 1) {
      // Arrived at clone of first pair → jump to real first
      setAnimated(false)
      setTrackIdx(1)
    } else if (trackIdx <= 0) {
      // Arrived at clone of last pair → jump to real last
      setAnimated(false)
      setTrackIdx(PAIRS.length)
    }
  }, [trackIdx])

  // Auto-advance every 4 s, pause on hover
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) goNext()
    }, 4000)
    return () => clearInterval(intervalRef.current)
  }, [goNext])

  return (
    <section className="services-section" style={{ backgroundColor: 'var(--color-dark)', padding: '90px 0' }}>

      {/* ── Section Header ── */}
      <div className="section-header" style={{ marginBottom: '55px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '10px' }}>
          <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, transparent, var(--color-gold))' }} />
          <h4 className="title_block" style={{ margin: 0, fontSize: '14px', letterSpacing: '5px', color: 'var(--color-gold)' }}>EXQUISITE SERVICES</h4>
          <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, var(--color-gold), transparent)' }} />
        </div>
        <div
          className="sub-title-widget"
          style={{ fontFamily: 'var(--font-script)', fontSize: '48px', color: 'var(--color-cream)', textAlign: 'center', marginTop: '5px' }}
        >
          A Complete Dining Experience
        </div>
      </div>

      {/* ── Slider ── */}
      <div className="container">
        {/* Outer wrapper: relative so arrows can be positioned absolutely */}
        <div
          style={{ position: 'relative', padding: '0 30px' }}
          onMouseEnter={() => { isPaused.current = true }}
          onMouseLeave={() => { isPaused.current = false }}
        >
          {/* Side Arrows */}
          <NavArrow onClick={goPrev} label="Previous slide" dir="left" />
          <NavArrow onClick={goNext} label="Next slide"     dir="right" />

          {/* Viewport — clips overflow */}
          <div ref={containerRef} style={{ overflow: 'hidden' }}>
            {/* Track — all cloned + real slides laid out horizontally */}
            <div
              style={{
                display: 'flex',
                transform: slideWidth ? `translateX(${-trackIdx * slideWidth}px)` : undefined,
                transition: animated && slideWidth ? 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
                willChange: 'transform',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {TRACK.map((pair, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', gap: '24px', flex: '0 0 100%', minWidth: '100%' }}
                >
                  <ServiceCard svc={pair[0]} side="left"  />
                  <ServiceCard svc={pair[1]} side="right" />
                </div>
              ))}
            </div>
          </div>

          {/* ── Dot Indicators only ── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '36px' }}>
            {PAIRS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAnimated(true); setTrackIdx(i + 1) }}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === pageIdx ? '28px' : '8px',
                  height: '3px',
                  background: i === pageIdx ? 'var(--color-gold)' : 'rgba(207,168,96,0.3)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  boxShadow: i === pageIdx ? 'var(--gold-glow)' : 'none',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
