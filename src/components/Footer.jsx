import React from 'react'

// ─── Global Contact Details ───
const CONTACT = {
  name: 'Zain Alsham',
  address: '22 Fifth Parklands Ave, Nairobi',
  venue: 'The Place @ 5th',
  phone: '+2547 2887 8856',
  phoneLabel: 'For Orders, Call',
  email: 'hello@zainalsham.com'
}

export default function Footer({ onNavigate }) {
  const handleNav = (page) => (e) => {
    e.preventDefault()
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="footer" style={{ backgroundColor: '#080402', color: 'var(--color-cream)', borderTop: '2px solid var(--color-gold)' }}>

      {/* Top ornament strip */}
      <div style={{ backgroundColor: 'var(--color-rust)', height: '4px', opacity: 0.4 }} />

      {/* Main footer columns */}
      <div style={{ padding: '70px 0 50px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>

            {/* Column 1: Logo & Tagline */}
            <div style={{ flex: '1 1 220px', minWidth: '200px' }}>
              <a href="#home" onClick={handleNav('home')} style={{ display: 'inline-block', marginBottom: '20px' }}>
                <img
                  src="/zeyn-alsham-LOGO-white.png"
                  alt="Zain Alsham Logo"
                  style={{ height: '64px', objectFit: 'contain' }}
                />
              </a>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                color: 'rgba(250,245,238,0.65)',
                lineHeight: '1.8',
                margin: '0 0 20px 0',
                maxWidth: '240px'
              }}>
                A sanctuary of Indian-Arabic flavours, where heritage recipes meet modern artistry.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                {[
                  { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/zainalshaam2024/?hl=en', label: 'Instagram' },
                  { icon: 'fa-brands fa-facebook-f', href: 'https://www.facebook.com/profile.php?id=100076351324705', label: 'Facebook' },
                  { icon: 'fa-brands fa-tiktok', href: 'https://www.tiktok.com/@zainalshamkenya', label: 'TikTok' }
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: '36px',
                      height: '36px',
                      border: '1px solid rgba(223,189,115,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      color: 'var(--color-cream)',
                      transition: 'var(--transition-smooth)',
                      textDecoration: 'none'
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.background = 'var(--gold-gradient)'
                      e.currentTarget.style.borderColor = 'transparent'
                      e.currentTarget.style.color = 'var(--color-dark)'
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = 'rgba(223,189,115,0.25)'
                      e.currentTarget.style.color = 'var(--color-cream)'
                    }}
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Important Links */}
            <div style={{ flex: '1 1 160px', minWidth: '160px' }}>
              <h4 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: '600',
                color: 'var(--color-gold)',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                margin: '0 0 18px 0',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(223,189,115,0.12)'
              }}>
                Explore
              </h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Home', page: 'home' },
                  { label: 'Dining & Menu', page: 'dining' },
                  { label: 'Our Story', page: 'about' },
                  { label: 'Contact', page: 'contact' }
                ].map(l => (
                  <a
                    key={l.label}
                    href={`#${l.page}`}
                    onClick={handleNav(l.page)}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      color: 'rgba(250,245,238,0.7)',
                      textDecoration: 'none',
                      letterSpacing: '0.5px',
                      transition: 'var(--transition-smooth)'
                    }}
                    onMouseOver={e => e.target.style.color = 'var(--color-gold)'}
                    onMouseOut={e => e.target.style.color = 'rgba(250,245,238,0.7)'}
                  >
                    → {l.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3: Signature Picks */}
            <div style={{ flex: '1 1 160px', minWidth: '160px' }}>
              <h4 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: '600',
                color: 'var(--color-gold)',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                margin: '0 0 18px 0',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(223,189,115,0.12)'
              }}>
                Signature Picks
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Aromatic Majboos', 'Levantine Mezze', 'Saffron Kunafeh', 'Tandoori Mixed Grill', 'Arabic Coffee', 'Rose Water Sharbat'].map(item => (
                  <a
                    key={item}
                    href="#dining"
                    onClick={handleNav('dining')}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      color: 'rgba(250,245,238,0.7)',
                      textDecoration: 'none',
                      letterSpacing: '0.5px',
                      transition: 'var(--transition-smooth)'
                    }}
                    onMouseOver={e => e.target.style.color = 'var(--color-gold)'}
                    onMouseOut={e => e.target.style.color = 'rgba(250,245,238,0.7)'}
                  >
                    ✦ {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Contact Info */}
            <div style={{ flex: '1 1 220px', minWidth: '200px' }}>
              <h4 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: '600',
                color: 'var(--color-gold)',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                margin: '0 0 18px 0',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(223,189,115,0.12)'
              }}>
                Visit Us
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-gold)', marginTop: '2px', fontSize: '14px' }}>📍</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(250,245,238,0.7)', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--color-cream)', display: 'block' }}>{CONTACT.venue}</strong>
                    {CONTACT.address}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '14px' }}>📞</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(250,245,238,0.7)', lineHeight: '1.6' }}>
                    <span style={{ display: 'block', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>{CONTACT.phoneLabel}</span>
                    <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}
                      onMouseOver={e => e.target.style.color = 'var(--color-cream)'}
                      onMouseOut={e => e.target.style.color = 'var(--color-gold)'}
                    >
                      {CONTACT.phone}
                    </a>
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '14px' }}>✉</span>
                  <a href={`mailto:${CONTACT.email}`} style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(250,245,238,0.7)', textDecoration: 'none' }}
                    onMouseOver={e => e.target.style.color = 'var(--color-gold)'}
                    onMouseOut={e => e.target.style.color = 'rgba(250,245,238,0.7)'}
                  >
                    {CONTACT.email}
                  </a>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <a href="#contact" onClick={handleNav('contact')} className="btn-gold" style={{ fontSize: '12px', padding: '10px 20px', letterSpacing: '2px' }}>
                    Reserve a Table
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(223,189,115,0.1)' }} />

      {/* Bottom copyright bar */}
      <div style={{ padding: '22px 0', textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(250,245,238,0.4)', letterSpacing: '1px' }}>
            © {new Date().getFullYear()} {CONTACT.name} Restaurant. All Rights Reserved.
          </p>
          <p style={{ margin: 0, fontFamily: 'var(--font-script)', fontSize: '20px', color: 'var(--color-gold)', opacity: 0.7 }}>
            Crafted with passion & spice ✦
          </p>
          <div style={{ display: 'flex', gap: '18px' }}>
            {['Privacy Policy', 'Terms of Use'].map(l => (
              <a
                key={l}
                href="#"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(250,245,238,0.4)', textDecoration: 'none', letterSpacing: '0.5px' }}
                onMouseOver={e => e.target.style.color = 'var(--color-gold)'}
                onMouseOut={e => e.target.style.color = 'rgba(250,245,238,0.4)'}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
