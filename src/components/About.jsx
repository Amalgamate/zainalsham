import React from 'react'

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
  }
]

export default function About() {
  return (
    <section className="services-section" style={{ backgroundColor: 'var(--color-dark)', padding: '90px 0' }}>
      {/* Section Header */}
      <div className="section-header" style={{ marginBottom: '55px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '10px' }}>
          <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, transparent, var(--color-gold))' }} />
          <h4 className="title_block" style={{ margin: 0, fontSize: '14px', letterSpacing: '5px', color: 'var(--color-gold)' }}>EXQUISITE SERVICES</h4>
          <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, var(--color-gold), transparent)' }} />
        </div>
        <div 
          className="sub-title-widget" 
          style={{ 
            fontFamily: 'var(--font-script)', 
            fontSize: '48px', 
            color: 'var(--color-cream)', 
            textAlign: 'center',
            marginTop: '5px'
          }}
        >
          A Complete Dining Experience
        </div>
      </div>

      {/* Two Service Cards side by side */}
      <div className="container">
        <div className="services-container">
          {services.map((svc, idx) => (
            <div key={svc.id} className="service-card" style={{ flexDirection: idx === 0 ? 'row' : 'row-reverse' }}>
              
              {/* Image Side */}
              <div className="service-img-wrap" style={{ minHeight: '360px' }}>
                <img src={svc.image} alt={svc.imageAlt} />
                {/* Decorative gold corner bracket top-left */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  width: '30px',
                  height: '30px',
                  borderTop: '2px solid var(--color-gold)',
                  borderLeft: '2px solid var(--color-gold)',
                  opacity: 0.6
                }} />
                {/* Bottom-right corner bracket */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  width: '30px',
                  height: '30px',
                  borderBottom: '2px solid var(--color-gold)',
                  borderRight: '2px solid var(--color-gold)',
                  opacity: 0.6
                }} />
              </div>

              {/* Info Side */}
              <div className="service-info">
                <div className="service-icon-badge">
                  {svc.icon}
                </div>
                <h5>{svc.title}</h5>
                <div style={{ width: '40px', height: '1px', background: 'var(--color-rust)', margin: '12px auto' }} />
                <p>{svc.description}</p>
                <a
                  href="#"
                  style={{
                    marginTop: '20px',
                    display: 'inline-block',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--color-rust)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-rust)',
                    paddingBottom: '2px',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseOver={(e) => { e.target.style.color = 'var(--color-gold)'; e.target.style.borderColor = 'var(--color-gold)' }}
                  onMouseOut={(e) => { e.target.style.color = 'var(--color-rust)'; e.target.style.borderColor = 'var(--color-rust)' }}
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
