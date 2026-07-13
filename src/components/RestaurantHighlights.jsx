import React from 'react'

const items = [
  {
    title: 'AROMATIC LAMB MANDI',
    img: '/images/majboos_dish.png',
    text: 'Slow-cooked tender lamb served with traditional mandi rice',
    shapeClass: 'left-arch'
  },
  {
    title: 'LEVANTINE MEZZE',
    img: '/images/levantine_mezze.png',
    text: 'Handcrafted selection of hummus, golden falafel, and vine leaves in a shared platter.',
    shapeClass: 'center-pointed-arch'
  },
  {
    title: 'HALAWIYAT',
    img: '/images/saffron_kunafa.png',
    text: 'Savour the finest collection of authentic Arabic Sweets, featuring delicate pastries & aromatic syrups inspired by generations of culinary tradition.',
    shapeClass: 'right-arch'
  }
]

export default function RestaurantHighlights() {
  return (
    <section className="restaurant-highlights" style={{ backgroundColor: 'var(--color-dark)', paddingTop: '60px' }}>
      
      {/* SVG Pointed Arch ClipPath definition (Globally accessible to all components) */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="pointed-arch" clipPathUnits="objectBoundingBox">
            <path d="M 0,1 L 0,0.4 C 0,0.2 0.25,0.08 0.5,0 C 0.75,0.08 1,0.2 1,0.4 L 1,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="section-header">
        <h4 className="title_block light" style={{ color: 'var(--color-cream)' }}>OUR RESTAURANT</h4>
        <div className="sub-title-widget" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-script)', fontStyle: 'normal' }}>Quality Cuisine</div>
      </div>

      {/* Rust Pattern Background Area for Images */}
      <div className="pattern-bg" style={{ padding: '80px 0 60px 0', borderTop: '1px solid rgba(223, 189, 115, 0.15)', borderBottom: '1px solid rgba(223, 189, 115, 0.15)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            
            {/* Card 1: Left rounded arch */}
            <div style={{ flex: '1 1 300px', maxWidth: '340px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', borderRadius: '150px 150px 0 0', overflow: 'hidden', border: '2px solid var(--color-gold)', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', transition: 'var(--transition-smooth)' }}>
                <img 
                  src={items[0].img} 
                  alt={items[0].title} 
                  style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block', transition: 'var(--transition-smooth)' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>

            {/* Card 2: Center Pointed Arch (Overlap & Taller) */}
            <div style={{ flex: '1 1 300px', maxWidth: '360px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', top: '-30px', zIndex: 10 }}>
              <div className="pointed-arch-border" style={{ width: '100%' }}>
                <div className="pointed-arch-frame" style={{ width: '100%' }}>
                  <img 
                    src={items[1].img} 
                    alt={items[1].title} 
                    style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} 
                  />
                </div>
              </div>
            </div>

            {/* Card 3: Right rounded arch */}
            <div style={{ flex: '1 1 300px', maxWidth: '340px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', borderRadius: '150px 150px 0 0', overflow: 'hidden', border: '2px solid var(--color-gold)', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', transition: 'var(--transition-smooth)' }}>
                <img 
                  src={items[2].img} 
                  alt={items[2].title} 
                  style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block', transition: 'var(--transition-smooth)' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Description Area (Dark background) */}
      <div style={{ padding: '60px 0 80px 0', backgroundColor: '#0d0705' }}>
        <div className="container">
          <div className="menu-grid">
            
            {/* Description 1 */}
            <div className="menu-card">
              <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, var(--color-gold), transparent)', marginBottom: '10px' }} />
              <h5>{items[0].title}</h5>
              <p>{items[0].text}</p>
            </div>

            <div className="vertical-divider-line" />

            {/* Description 2 */}
            <div className="menu-card">
              <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, var(--color-gold), transparent)', marginBottom: '10px' }} />
              <h5>{items[1].title}</h5>
              <p>{items[1].text}</p>
            </div>

            <div className="vertical-divider-line" />

            {/* Description 3 */}
            <div className="menu-card">
              <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, var(--color-gold), transparent)', marginBottom: '10px' }} />
              <h5>{items[2].title}</h5>
              <p>{items[2].text}</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
