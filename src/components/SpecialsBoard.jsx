import React, { useState, useEffect } from 'react'

// Today's chef specials — feel free to swap in real data / CMS
const CHEF_SPECIALS = [
  {
    name: 'Saffron Prawn Biryani',
    desc: 'Wild caught tiger prawns, aged basmati, caramelised onion, kewra water',
    price: 'KSh 2,400',
    img: '/images/saffron_kunafa.png',
    badge: "Chef's Pick",
  },
  {
    name: 'Slow-Roasted Lamb Majboos',
    desc: 'Omani-spiced shoulder, lemon rice, toasted pine nuts, rose-water raisin',
    price: 'KSh 3,200',
    img: '/images/majboos_dish.png',
    badge: 'New Today',
  },
  {
    name: 'Kunafeh Cheesecake',
    desc: 'Crisp kataifi, Nabulsi cheese, orange-blossom syrup, crushed pistachio',
    price: 'KSh 950',
    img: '/images/saffron_kunafa.png',
    badge: 'Dessert',
  },
  {
    name: 'Mezze Royal Platter',
    desc: 'Hummus, moutabal, kibbeh, fattoush, grilled halloumi, fresh pita',
    price: 'KSh 1,800',
    img: '/images/levantine_mezze.png',
    badge: 'Shareable',
  },
]

// Happy hour ends at 8:00 PM Nairobi time daily
function getHappyHourEnd() {
  const now = new Date()
  const end = new Date(now)
  end.setHours(20, 0, 0, 0) // 8 PM
  if (now >= end) end.setDate(end.getDate() + 1)
  return end
}

function useCountdown(target) {
  const [remaining, setRemaining] = useState(target - Date.now())
  useEffect(() => {
    const id = setInterval(() => setRemaining(getHappyHourEnd() - Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  const totalSec = Math.max(0, Math.floor(remaining / 1000))
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0')
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0')
  const s = String(totalSec % 60).padStart(2, '0')
  return { h, m, s }
}

export default function SpecialsBoard() {
  const { h, m, s } = useCountdown(getHappyHourEnd())
  const [activeDay] = useState(() => {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    return days[new Date().getDay()]
  })

  return (
    <section className="specials-board reveal">
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p className="text-cursive gold-text" style={{ fontSize: '28px', margin: '0 0 6px' }}>
            Today's Selection
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px,3vw,40px)',
            fontWeight: 600, color: 'var(--color-cream)', margin: '0 0 14px',
            letterSpacing: '2px', textTransform: 'uppercase'
          }}>
            Chef's Table &amp; Happy Hour
          </h2>
          <div style={{
            width: '60px', height: '1px',
            background: 'var(--gold-gradient)',
            margin: '0 auto 12px'
          }} />
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            color: 'rgba(250,245,238,0.5)', letterSpacing: '2px',
            textTransform: 'uppercase', margin: 0
          }}>
            {activeDay} · Curated by Executive Chef Arif Al-Khalidi
          </p>
        </div>

        {/* Two-panel grid */}
        <div className="specials-grid">

          {/* LEFT — Chef Specials */}
          <div className="chef-panel reveal-left">
            <div style={{ marginBottom: '24px' }}>
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 700,
                letterSpacing: '3px', textTransform: 'uppercase',
                color: 'var(--color-gold)', borderBottom: '1px solid rgba(223,189,115,0.3)',
                paddingBottom: '6px', display: 'inline-block'
              }}>Today's Chef Menu</span>
            </div>

            {CHEF_SPECIALS.map((dish, i) => (
              <div className="dish-card" key={i}>
                <img className="dish-card-img" src={dish.img} alt={dish.name} />
                <div className="dish-card-info">
                  <p className="dish-card-name">{dish.name}</p>
                  <p className="dish-card-desc">{dish.desc}</p>
                  <span style={{
                    fontFamily: 'var(--font-sans)', fontSize: '9px', fontWeight: 700,
                    letterSpacing: '2px', textTransform: 'uppercase',
                    color: 'var(--color-rust)', border: '1px solid rgba(158,83,43,0.35)',
                    padding: '2px 8px', display: 'inline-block', marginTop: '4px'
                  }}>{dish.badge}</span>
                </div>
                <div className="dish-card-price">{dish.price}</div>
              </div>
            ))}

            <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#restaurant" style={{
                fontFamily: 'var(--font-serif)', fontSize: '12px', letterSpacing: '2px',
                textTransform: 'uppercase', fontWeight: 600,
                background: 'var(--gold-gradient)', color: 'var(--color-dark)',
                padding: '11px 22px', display: 'inline-block', transition: 'var(--transition-smooth)'
              }}>Reserve a Table</a>
              <a href="#menu" style={{
                fontFamily: 'var(--font-serif)', fontSize: '12px', letterSpacing: '2px',
                textTransform: 'uppercase', fontWeight: 600,
                background: 'transparent', color: 'var(--color-gold)',
                border: '1px solid rgba(223,189,115,0.4)',
                padding: '11px 22px', display: 'inline-block', transition: 'var(--transition-smooth)'
              }}>Full Menu</a>
            </div>
          </div>

          {/* RIGHT — Happy Hour countdown */}
          <div className="happy-hour-panel reveal-right">
            {/* Happy hour badge */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'var(--gold-gradient)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i className="fa-solid fa-martini-glass-citrus" style={{ color: '#120905', fontSize: '16px' }} />
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 700,
                    letterSpacing: '3px', textTransform: 'uppercase',
                    color: 'var(--color-gold)', margin: 0
                  }}>Happy Hour</p>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontSize: '11px',
                    color: 'rgba(250,245,238,0.5)', margin: '2px 0 0'
                  }}>5:00 PM – 8:00 PM · Daily · Saffron Lounge</p>
                </div>
              </div>

              <p className="text-cursive gold-shimmer" style={{ fontSize: '36px', margin: '0 0 8px' }}>
                Ends In
              </p>
              <div className="countdown-wrap" style={{ marginBottom: '28px' }}>
                <div className="countdown-unit">
                  <div className="countdown-digit">{h}</div>
                  <div className="countdown-label">Hours</div>
                </div>
                <div className="countdown-sep">:</div>
                <div className="countdown-unit">
                  <div className="countdown-digit">{m}</div>
                  <div className="countdown-label">Mins</div>
                </div>
                <div className="countdown-sep">:</div>
                <div className="countdown-unit">
                  <div className="countdown-digit">{s}</div>
                  <div className="countdown-label">Secs</div>
                </div>
              </div>

              {/* Offers */}
              {[
                { icon: 'fa-wine-glass', text: '50% off premium cocktails & mocktails' },
                { icon: 'fa-utensils', text: 'Complimentary mezze with any main' },
                { icon: 'fa-music', text: 'Live Oud performance — no cover charge' },
              ].map((o, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <i className={`fa-solid ${o.icon}`} style={{ color: 'var(--color-gold)', fontSize: '14px', width: '18px', textAlign: 'center' }} />
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-cream)', margin: 0, opacity: 0.85 }}>{o.text}</p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div>
              <div style={{ height: '1px', background: 'rgba(223,189,115,0.12)', marginBottom: '24px' }} />
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '1px',
                color: 'rgba(250,245,238,0.4)', margin: '0 0 16px', textTransform: 'uppercase'
              }}>Deliver to your door or collect from the Lounge</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="https://wa.me/254728878856" target="_blank" rel="noreferrer" style={{
                  background: '#25d366', color: '#fff',
                  fontFamily: 'var(--font-serif)', fontSize: '12px', fontWeight: 600,
                  letterSpacing: '1.5px', textTransform: 'uppercase',
                  padding: '11px 20px', display: 'inline-flex', alignItems: 'center', gap: '8px',
                  transition: 'var(--transition-smooth)'
                }}>
                  <i className="fa-brands fa-whatsapp" /> Order Now
                </a>
                <a href="tel:+254728878856" style={{
                  background: 'transparent', color: 'var(--color-gold)',
                  border: '1px solid rgba(223,189,115,0.35)',
                  fontFamily: 'var(--font-serif)', fontSize: '12px', fontWeight: 600,
                  letterSpacing: '1.5px', textTransform: 'uppercase',
                  padding: '11px 20px', display: 'inline-flex', alignItems: 'center', gap: '8px',
                  transition: 'var(--transition-smooth)'
                }}>
                  <i className="fa-solid fa-phone" /> Call Reception
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
