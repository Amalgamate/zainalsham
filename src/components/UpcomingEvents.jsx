import React from 'react'

const events = [
  {
    theme: 'dark-theme',
    eyebrow: 'EVERY FRIDAY NIGHT',
    title: 'Spiced Kebab Night',
    image: '/images/spiced_kebabs.png',
    ctaType: 'btn-full',
    ctaText: 'BOOK SEAT NOW →',
    href: '#'
  },
  {
    theme: 'light-theme',
    eyebrow: 'OUR EVENTS',
    title: 'Upcoming Souk Food Events',
    image: null,
    ctaType: 'btn-inline',
    ctaText: 'VIEW OUR MENU →',
    href: '#',
    lightFoodImg: '/images/levantine_mezze.png'
  },
  {
    theme: 'dark-theme',
    eyebrow: 'EVERY SATURDAY',
    title: 'Tandoori Festival',
    image: '/images/barbecue_fest.png',
    ctaType: 'btn-full',
    ctaText: 'BOOK SEAT NOW →',
    href: '#'
  },
  {
    theme: 'pattern-theme',
    eyebrow: 'EVERY SATURDAY',
    title: 'Saffron Cooking Night',
    image: '/images/chef_fire_grill.png',
    ctaType: 'btn-inline',
    ctaText: 'VIEW OUR MENU →',
    href: '#'
  }
]

function EventCard({ ev }) {
  const isLight = ev.theme === 'light-theme'

  return (
    <div
      className={`event-card ${ev.theme}`}
      style={isLight ? { backgroundColor: 'var(--color-cream)' } : {}}
    >
      {/* Background image */}
      {ev.image && (
        <div
          className="event-card-bg"
          style={{ backgroundImage: `url(${ev.image})` }}
        />
      )}
      {/* Overlay gradient */}
      {!isLight && <div className="event-overlay" />}

      {/* Light theme: floating food image */}
      {isLight && ev.lightFoodImg && (
        <div style={{
          position: 'absolute',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid rgba(158,83,43,0.2)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}>
          <img src={ev.lightFoodImg} alt="event food" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}

      {/* Content */}
      <div className="event-content">
        <div className="event-eyebrow">{ev.eyebrow}</div>

        <div>
          <div className="event-title">{ev.title}</div>
          {isLight && (
            <div style={{
              width: '40px',
              height: '2px',
              background: 'var(--color-rust)',
              margin: '0 auto 20px auto'
            }} />
          )}
        </div>

        <div style={{ marginTop: 'auto' }}>
          {ev.ctaType === 'btn-full' ? (
            <a href={ev.href} className="event-btn-full">{ev.ctaText}</a>
          ) : (
            <a href={ev.href} className="event-btn">{ev.ctaText}</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function UpcomingEvents() {
  return (
    <section className="events-section" style={{ padding: '0', overflow: 'hidden' }}>
      {/* Section Header */}
      <div style={{ backgroundColor: 'var(--color-dark)', padding: '70px 0 50px 0', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '10px' }}>
          <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, transparent, var(--color-gold))' }} />
          <p style={{ margin: 0, fontSize: '13px', fontFamily: 'var(--font-sans)', fontWeight: '600', letterSpacing: '4px', color: 'var(--color-gold)', textTransform: 'uppercase' }}>UPCOMING</p>
          <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, var(--color-gold), transparent)' }} />
        </div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '56px',
          fontWeight: '500',
          color: 'var(--color-cream)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          margin: '0'
        }}>
          Food Events & Experiences
        </h2>
        <div
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '36px',
            color: 'var(--color-gold)',
            marginTop: '8px'
          }}
        >
          Reserve your seat tonight
        </div>
      </div>

      {/* 4-column grid */}
      <div className="events-grid" style={{ gap: '0' }}>
        {events.map((ev, i) => (
          <EventCard key={i} ev={ev} />
        ))}
      </div>
    </section>
  )
}
