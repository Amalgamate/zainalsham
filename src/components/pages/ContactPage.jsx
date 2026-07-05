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

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact &amp; Reservations"
        subtitle="We Welcome You to Nairobi"
        bg="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="pattern-light" style={{ padding: '90px 0' }}>
        <div className="container">
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '50px'
          }}>
            
            {/* Left Column: Details */}
            <div className="reveal-left" style={{ flex: '1 1 400px', maxWidth: '500px' }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '28px',
                fontWeight: '600',
                color: 'var(--color-text-dark)',
                marginBottom: '20px',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                The Place @ 5th
              </h3>
              
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'var(--color-text-mid)',
                lineHeight: '1.8',
                marginBottom: '35px'
              }}>
                Located along the exclusive 5th Parklands Avenue, Zain Alsham offers a unique blend of heritage and hospitality. Contact our reception for table reservations, private banquets, corporate meetings, or food delivery.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'rgba(158,83,43,0.08)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', color: 'var(--color-rust)',
                    flexShrink: 0
                  }}>
                    <i className="fa-solid fa-map-pin" />
                  </div>
                  <div>
                    <strong style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-text-dark)', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>Address</strong>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-text-mid)' }}>
                      <strong style={{ display: 'block', color: 'var(--color-text-dark)' }}>Zain Al-Sham Restaurant</strong>
                      5th Parklands Avenue, The Place
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'rgba(158,83,43,0.08)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', color: 'var(--color-rust)',
                    flexShrink: 0
                  }}>
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div>
                    <strong style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-text-dark)', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>Call Front Desk</strong>
                    <a href="tel:+254728878856" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-rust)', textDecoration: 'none', fontWeight: '600' }}>
                      +254 728 878 856
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'rgba(158,83,43,0.08)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', color: 'var(--color-rust)',
                    flexShrink: 0
                  }}>
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div>
                    <strong style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-text-dark)', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>Email Address</strong>
                    <a href="mailto:hello@zainalsham.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-rust)', textDecoration: 'none', fontWeight: '600' }}>
                      hello@zainalsham.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Form Card */}
            <div className="reveal-right" style={{
              flex: '1 1 450px',
              background: '#ffffff',
              padding: '40px',
              border: '1px solid rgba(158,83,43,0.1)',
              boxShadow: 'var(--card-shadow)',
              borderRadius: '2px'
            }}>
              <h4 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--color-text-dark)',
                marginBottom: '20px',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Send A Message
              </h4>
              
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  style={{
                    padding: '14px',
                    border: '1px solid rgba(158,83,43,0.2)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    outline: 'none',
                    background: '#ffffff'
                  }}
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  style={{
                    padding: '14px',
                    border: '1px solid rgba(158,83,43,0.2)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    outline: 'none',
                    background: '#ffffff'
                  }}
                />
                <textarea 
                  rows="4" 
                  placeholder="Your Message / Booking Query" 
                  required
                  style={{
                    padding: '14px',
                    border: '1px solid rgba(158,83,43,0.2)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    outline: 'none',
                    background: '#ffffff',
                    resize: 'none'
                  }}
                />
                <button 
                  type="submit"
                  style={{
                    background: 'var(--color-rust)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '14px',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'var(--gold-gradient)'
                    e.currentTarget.style.color = 'var(--color-dark)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'var(--color-rust)'
                    e.currentTarget.style.color = '#ffffff'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
