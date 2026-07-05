import React, { useState, useEffect, useRef } from 'react'

const ROOMS = [
  {
    id: 'deluxe',
    badge: 'Most Popular',
    title: 'DELUXE SUITE',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    price: 'KSh 18,500',
    period: '/ night',
    desc: 'A sumptuous boutique suite with a King bed, hand-carved arabesque headboard, private balcony overlooking Parklands, and a marble en-suite bathroom with rain shower.',
    amenities: ['King Bed', 'Private Balcony', 'Rain Shower', 'City View', '55" Smart TV', 'Nespresso Bar']
  },
  {
    id: 'hareem',
    badge: 'Signature',
    title: 'THE HAREEM SUITE',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop',
    price: 'KSh 24,000',
    period: '/ night',
    desc: 'Our premier suite — hand-crafted Indian rosewood furniture, private Jacuzzi with gold fittings, butler concierge on call 24/7, and personalised in-room dining by the Executive Chef.',
    amenities: ['Private Jacuzzi', 'Butler Service', 'Indian Rosewood', 'Champagne on Arrival', 'Dressing Room', 'Priority Dining']
  },
  {
    id: 'executive',
    badge: 'Business',
    title: 'EXECUTIVE ROOM',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
    price: 'KSh 12,000',
    period: '/ night',
    desc: 'Crafted for the discerning business traveller. High-speed fibre WiFi, a dedicated ergonomic workspace lit by Moroccan pendant lamps, luxury bedding, and early check-in.',
    amenities: ['Fast Fibre WiFi', 'Ergonomic Desk', 'Luxury Bedding', 'Early Check-in', 'Safe Box', 'Press Service']
  },
]

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

export default function RoomsPage() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <PageHero
        title="Rooms & Suites"
        subtitle="Sophisticated Comfort in Nairobi"
        bg="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="pattern-light" style={{ padding: '80px 0' }}>
        <div className="container">
          {/* intro */}
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-rust)',
              letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 12px' }}>
              Accommodation
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px,3vw,38px)', fontWeight: 600,
              color: 'var(--color-text-dark)', margin: '0 0 16px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Where Luxury Meets Serenity
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-text-mid)', lineHeight: 1.8, margin: 0 }}>
              Each room is a sanctuary — thoughtfully appointed with Arabic-inspired furnishings, Egyptian cotton linens, and curated aromas of oud and sandalwood.
            </p>
          </div>

          {/* Room cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: '28px' }}>
            {ROOMS.map((room, idx) => (
              <div key={room.id} className="reveal-scale" style={{ transitionDelay: `${idx * 0.12}s`,
                background: '#fff', border: '1px solid rgba(158,83,43,0.1)',
                boxShadow: 'var(--card-shadow)', overflow: 'hidden', cursor: 'pointer',
                transition: 'var(--transition-smooth)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--card-shadow)'}
              >
                {/* Image */}
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img src={room.image} alt={room.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(18,9,5,0.45) 100%)' }} />
                  <span style={{ position: 'absolute', top: '14px', left: '14px',
                    background: 'var(--gold-gradient)', color: 'var(--color-dark)',
                    fontFamily: 'var(--font-sans)', fontSize: '9px', fontWeight: 700,
                    letterSpacing: '2px', textTransform: 'uppercase', padding: '5px 12px' }}>
                    {room.badge}
                  </span>
                  <span style={{ position: 'absolute', bottom: '14px', right: '14px',
                    fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600,
                    color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    {room.price}<span style={{ fontSize: '12px', opacity: 0.8 }}>{room.period}</span>
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '28px 24px' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 600,
                    color: 'var(--color-text-dark)', letterSpacing: '1.5px', textTransform: 'uppercase',
                    margin: '0 0 6px' }}>
                    {room.title}
                  </h4>
                  <div style={{ width: '32px', height: '1.5px', background: 'var(--gold-gradient)', marginBottom: '14px' }} />
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-text-mid)',
                    lineHeight: 1.7, margin: '0 0 18px' }}>
                    {room.desc}
                  </p>

                  {/* Amenity pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                    {room.amenities.map((a, i) => (
                      <span key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600,
                        letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-rust)',
                        border: '1px solid rgba(158,83,43,0.25)', padding: '3px 10px' }}>
                        {a}
                      </span>
                    ))}
                  </div>

                  <a href="tel:+254728878856" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontFamily: 'var(--font-serif)', fontSize: '11px', fontWeight: 600,
                    letterSpacing: '2px', textTransform: 'uppercase',
                    background: 'var(--gold-gradient)', color: 'var(--color-dark)',
                    padding: '11px 20px', transition: 'var(--transition-smooth)' }}>
                    <i className="fa-solid fa-phone" /> Book This Room
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="reveal" style={{ textAlign: 'center', marginTop: '60px',
            padding: '32px', border: '1px solid rgba(223,189,115,0.2)',
            background: 'rgba(223,189,115,0.05)' }}>
            <p className="text-cursive" style={{ fontFamily: 'var(--font-script)', fontSize: '26px',
              color: 'var(--color-rust)', margin: '0 0 8px' }}>
              Includes complimentary breakfast &amp; airport transfer
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '2px',
              textTransform: 'uppercase', color: 'var(--color-muted)', margin: 0 }}>
              Call +254 728 878 856 to customise your stay
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
