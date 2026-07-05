import React, { useState, useEffect, useRef } from 'react'

const MENU_CATEGORIES = {
  starters: {
    title: 'Levantine Mezze & Starters',
    items: [
      { name: 'Mezze Royal Platter', price: 'Ksh 1,800', desc: 'A curated selection of creamy garlic hummus, smoked moutabal, grape leaves, crisp falafel, and freshly baked pita bread.' },
      { name: 'Tandoori Seekh Kebabs', price: 'Ksh 1,500', desc: 'Skewers of minced lamb infused with green cardamom, cilantro, and hand-crushed spices, seared over open fire.' },
      { name: 'Somali Sambusa Basket', price: 'Ksh 950', desc: 'Crispy pastry pockets filled with minced spiced beef, sweet onions, and a touch of local green pepper, served with red chutney.' },
      { name: 'Falafel with Tahini', price: 'Ksh 850', desc: 'Crispy croquettes of fava beans and chickpeas, seasoned with garlic and coriander, drizzled with lemon tahini sauce.' }
    ]
  },
  mains: {
    title: 'Aromatic Majboos & Curries',
    items: [
      { name: 'Slow-Roasted Lamb Majboos', price: 'Ksh 2,800', desc: 'Our signature Omani dish: tender lamb shank braised in cardamom, cinnamon, and dried lime, served over saffron-scented basmati rice.' },
      { name: 'Tandoori Mixed Grill', price: 'KSh 3,200', desc: 'An indulgent collection of saffron chicken tikka, grilled fish tikka, tandoori king prawns, and skewered lamb chops.' },
      { name: 'Butter Chicken Masala', price: 'Ksh 2,100', desc: 'Barbecued chicken pieces simmered in a velvet-textured tomato cream gravy, enriched with roasted cashews and fenugreek.' },
      { name: 'Levantine Fish Sayadieh', price: 'Ksh 2,400', desc: 'Pan-seared red snapper fillet laid over spiced caramelized-onion rice, topped with toasted pine nuts and almond slivers.' }
    ]
  },
  desserts: {
    title: 'Middle-Eastern Sweet Delicacies',
    items: [
      { name: 'Saffron Kunafeh', price: 'Ksh 1,200', desc: 'Warm, crispy kataifi pastry baked over sweet Nabulsi cheese, infused with organic saffron sugar syrup and rose water.' },
      { name: 'Gulab Jamun with Rabri', price: 'Ksh 950', desc: 'Sweet milk dumplings soaked in a warm green cardamom syrup, nestled in rich, thickened rabri milk cream.' },
      { name: 'Baklava Pistachio Towers', price: 'Ksh 1,100', desc: 'Flaky layers of golden phyllo pastry filled with crushed Anatolian pistachios and honey-orange blossom glaze.' }
    ]
  },
  drinks: {
    title: 'Artisanal Mocktails & Coffee',
    items: [
      { name: 'Arabic Cardamom Gahwa', price: 'Ksh 500', desc: 'Authentic Arabic coffee lightly brewed with green cardamom pods, served in traditional finjan cups with fresh dates.' },
      { name: 'Rose & Saffron Sharbat', price: 'Ksh 650', desc: 'A cool, aromatic blend of sweet organic rose nectar, saffron threads, and fresh lime juice over crushed ice.' },
      { name: 'Mint & Lemon Levantine Cooler', price: 'Ksh 600', desc: 'Blended fresh mint leaves, lemon juice, and a splash of orange blossom water — extremely refreshing.' }
    ]
  }
}

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

export default function DiningPage() {
  const [activeTab, setActiveTab] = useState('starters')

  return (
    <div>
      <PageHero
        title="The Culinary Menu"
        subtitle="Indian-Arabic Fusion Mastery"
        bg="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="pattern-light" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Section Header */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-rust)',
              letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 12px' }}>
              Fine Dining Nairobi
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px,3vw,38px)', fontWeight: 600,
              color: 'var(--color-text-dark)', margin: '0 0 16px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Hand-Selected Flavors
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-text-mid)', lineHeight: 1.8, margin: '0 auto', maxWidth: '650px' }}>
              Experience an exquisite fusion of slow-cooked Levant heritage dishes alongside rich aromatic spices of the Indian subcontinent. Halal-certified ingredients and authentic clay oven preparations.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="reveal" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '45px',
            borderBottom: '1px solid rgba(158,83,43,0.1)',
            paddingBottom: '20px'
          }}>
            {Object.keys(MENU_CATEGORIES).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: activeTab === tab ? 'var(--color-rust)' : 'transparent',
                  color: activeTab === tab ? '#ffffff' : 'var(--color-rust)',
                  border: '1.5px solid var(--color-rust)',
                  padding: '10px 24px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseOver={(e) => {
                  if (activeTab !== tab) {
                    e.currentTarget.style.background = 'rgba(158,83,43,0.06)'
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== tab) {
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Menu Items List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h3 className="reveal" style={{
              fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600,
              color: 'var(--color-text-dark)', textTransform: 'uppercase', letterSpacing: '1px',
              borderBottom: '1px solid rgba(223,189,115,0.2)', paddingBottom: '10px', marginBottom: '10px'
            }}>
              {MENU_CATEGORIES[activeTab].title}
            </h3>

            {MENU_CATEGORIES[activeTab].items.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  borderBottom: '1px dashed rgba(158,83,43,0.12)',
                  paddingBottom: '22px',
                  gap: '20px'
                }}
                className="reveal"
              >
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '17px',
                    fontWeight: '600',
                    color: 'var(--color-text-dark)',
                    margin: '0 0 6px 0',
                    letterSpacing: '0.5px'
                  }}>
                    {item.name}
                  </h4>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    color: 'var(--color-text-mid)',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--color-rust)',
                  whiteSpace: 'nowrap'
                }}>
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          {/* Guest CTA Note */}
          <div className="reveal" style={{
            marginTop: '70px',
            textAlign: 'center',
            padding: '30px',
            border: '1px solid rgba(223,189,115,0.2)',
            background: 'var(--color-white)'
          }}>
            <p className="text-cursive" style={{ fontFamily: 'var(--font-script)', fontSize: '26px',
              color: 'var(--color-rust)', margin: '0 0 8px' }}>
              Want dining delivered straight to your door?
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '1px',
              textTransform: 'uppercase', color: 'var(--color-muted)', margin: '0 0 18px' }}>
              Available daily at The Place @ 5th
            </p>
            <a href="tel:+254728878856" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-serif)', fontSize: '11px', fontWeight: 600,
              letterSpacing: '2px', textTransform: 'uppercase',
              background: 'var(--gold-gradient)', color: 'var(--color-dark)',
              padding: '12px 24px', transition: 'var(--transition-smooth)'
            }}>
              <i className="fa-solid fa-phone" /> Call Concierge to Order
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
