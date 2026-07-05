import React, { useEffect, useState } from 'react'

const slides = [
  {
    image: '/images/chef_fire_grill.png',
    small: 'WELCOME TO ZAIN ALSHAM',
    title: 'Where Somali & Syrian<br/>Culinary Heritage Meets',
    subtitle: 'Experience a luxurious fusion of flavors, served in a breathtaking palace-inspired setting.',
    cta: 'Discover Our Story'
  },
  {
    image: '/images/majboos_dish.png',
    small: 'EXQUISITE CULINARY ARTISTRY',
    title: 'Slow-Cooked Aromas &<br/>Hand-Crushed Spices',
    subtitle: 'Taste handcrafted mezze, slow-cooked royal majboos, and signature saffron desserts.',
    cta: 'Explore The Menu'
  }
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" style={{ position: 'relative', height: '80vh', overflow: 'hidden', backgroundColor: 'var(--color-dark)' }}>
      {/* Slides Container for Cross-fade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="hero-slide"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${s.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1.5s cubic-bezier(0.25, 1, 0.5, 1)',
            zIndex: i === index ? 1 : 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Elegant dark vignette overlay with gold/bronze tint */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(18, 9, 5, 0.4) 0%, rgba(18, 9, 5, 0.8) 100%)',
              zIndex: 0
            }}
          />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-content" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto', padding: '0 20px' }}>
              <div 
                className="eyebrow" 
                style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: 'clamp(11px, 2vw, 14px)', 
                  fontWeight: '600', 
                  letterSpacing: 'clamp(2px, 3vw, 4px)', 
                  color: 'var(--color-gold)', 
                  textTransform: 'uppercase',
                  marginBottom: '15px'
                }}
              >
                ✦ {s.small} ✦
              </div>
              <h1 
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: 'clamp(32px, 6vw, 64px)', 
                  fontWeight: '500', 
                  lineHeight: '1.15', 
                  color: 'var(--color-cream)', 
                  textTransform: 'uppercase', 
                  margin: '12px 0 20px 0' 
                }}
                dangerouslySetInnerHTML={{ __html: s.title }}
              />
              {/* Cursive subtitle */}
              <p 
                className="text-cursive" 
                style={{ 
                  fontFamily: 'var(--font-script)', 
                  fontSize: 'clamp(20px, 4vw, 32px)', 
                  color: '#fff', 
                  opacity: 0.9, 
                  margin: '0 auto 30px auto', 
                  maxWidth: '650px',
                  textTransform: 'none'
                }}
              >
                {s.subtitle}
              </p>
              <div style={{ marginTop: '20px' }}>
                <a className="btn-gold" href="#">{s.cta}</a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Elegant slide indicators (dots) with gold glow */}
      <div style={{ position: 'absolute', right: '30px', bottom: '30px', display: 'flex', gap: '12px', zIndex: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: '28px',
              height: '3px',
              background: i === index ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.25)',
              border: 'none',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
              boxShadow: i === index ? 'var(--gold-glow)' : 'none'
            }}
          />
        ))}
      </div>

      {/* Mughal-inspired bottom border ornament */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          width: '100%', 
          height: '12px', 
          background: 'var(--gold-gradient)', 
          zIndex: 5,
          opacity: 0.8
        }} 
      />
    </section>
  )
}
