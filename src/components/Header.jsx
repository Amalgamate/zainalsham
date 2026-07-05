import React, { useState, useEffect } from 'react'

const CONTACT = {
  name:       'Zain Al-Sham Restaurant',
  phone:      '+254 728 878 856',
  phoneLabel: 'For Orders, Call',
  venue:      'The Place @ 5th',
  address:    '5th Parklands Avenue, The Place'
}

export default function Header({ currentPage, onNavigate }) {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="header">

      {/* ── Top Bar (brown stays) ── */}
      <div className="topbar">
        <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', height:'42px' }}>

          {/* Social icons with FA */}
          <div style={{ display:'flex', gap:'18px', alignItems:'center' }}>
            {[
              { icon:'fa-brands fa-instagram', label:'Instagram', href:'https://www.instagram.com/zainalshaam2024/?hl=en' },
              { icon:'fa-brands fa-facebook-f',label:'Facebook',  href:'https://www.facebook.com/profile.php?id=100076351324705' },
              { icon:'fa-brands fa-tiktok',    label:'TikTok',    href:'https://www.tiktok.com/@zainalshamkenya' }
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="social-icon-link"
                style={{ display:'inline-flex', alignItems:'center', gap:'5px', color:'rgba(250,245,238,0.7)', fontSize:'11px', letterSpacing:'0.5px', textDecoration:'none' }}>
                <i className={s.icon} style={{ fontSize:'13px' }} />
                <span className="hide-mobile">{s.label}</span>
              </a>
            ))}
          </div>

          {/* Phone */}
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <i className="fa-solid fa-phone" style={{ color:'var(--color-gold)', fontSize:'11px' }} />
            <span style={{ color:'rgba(223,189,115,0.6)', fontSize:'10px', letterSpacing:'1.5px', textTransform:'uppercase' }}>{CONTACT.phoneLabel}:</span>
            <a href={`tel:${CONTACT.phone.replace(/\s/g,'')}`} className="phone-link"
              style={{ color:'var(--color-gold)', fontWeight:'700', fontSize:'12px', letterSpacing:'0.5px', textDecoration:'none' }}>
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation (white) ── */}
      <div className="header-main" style={{ boxShadow: scrolled ? '0 4px 30px rgba(18,9,5,0.12)' : '0 2px 20px rgba(18,9,5,0.06)', transition: 'var(--transition-smooth)' }}>
        <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:'84px' }}>

          {/* Logo and name in a single horizontal line (vertically centered) */}
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="brand-wrap" style={{ 
              display:'flex', 
              alignItems:'center', 
              textDecoration:'none',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src="/Zain-Al-Sham-Logo-Horizontal.png" alt="Zain Al Sham Restaurant" style={{ height:'60px', objectFit:'contain' }} />
            </a>
          </div>

          {/* Desktop Nav — spaced up, elegant transitions */}
          <nav className="main-nav">
            <ul style={{ gap: '28px' }}>
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
                   style={{ color: currentPage === 'home' ? 'var(--color-rust)' : '', transition: 'var(--transition-smooth)' }}>Home</a>
              </li>
              <li>
                <a href="#dining" onClick={(e) => { e.preventDefault(); onNavigate('dining'); }} 
                   style={{ color: currentPage === 'dining' ? 'var(--color-rust)' : '', transition: 'var(--transition-smooth)' }}>Dining</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} 
                   style={{ color: currentPage === 'about' ? 'var(--color-rust)' : '', transition: 'var(--transition-smooth)' }}>Our Story</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} 
                   style={{ color: currentPage === 'contact' ? 'var(--color-rust)' : '', transition: 'var(--transition-smooth)' }}>Contact</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="nav-book-btn" style={{ borderRadius: '2px', transition: 'var(--transition-smooth)' }}>
                  <i className="fa-regular fa-calendar-check" style={{ marginRight:'6px' }} />
                  Reserve Table
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile hamburger toggle */}
          <button className="mobile-toggle" aria-label="Open menu" onClick={() => setOpen(true)}>
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>

      {/* ── Offcanvas drawer ── */}
      {open && (
        <div className="offcanvas" role="dialog" aria-modal="true"
          style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', zIndex:9999, display:'flex' }}>
          <div className="panel" style={{ width:'300px', padding:'28px', display:'flex', flexDirection:'column', height:'100%', overflowY:'auto' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingBottom:'20px', borderBottom:'1px solid rgba(158,83,43,0.15)' }}>
              <img
                src="/Zain-Al-Sham-Logo-Horizontal.png"
                alt="Zain Al Sham Restaurant"
                style={{ height:'44px', objectFit:'contain' }}
              />
              <button className="close" aria-label="Close" onClick={() => setOpen(false)}>
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <nav style={{ marginTop:'24px', flex:1 }}>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'6px' }}>
                {[
                  { icon:'fa-solid fa-house',            label:'Home',            page: 'home' },
                  { icon:'fa-solid fa-utensils',          label:'Dining',          page: 'dining' },
                  { icon:'fa-solid fa-compass',           label:'Our Story',       page: 'about' },
                  { icon:'fa-solid fa-phone',             label:'Contact',         page: 'contact' }
                ].map(item => (
                  <li key={item.label}>
                    <a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); onNavigate(item.page); }}
                      style={{ display:'flex', alignItems:'center', gap:'14px', padding:'12px 0',
                               color: currentPage === item.page ? 'var(--color-rust)' : 'var(--color-text-dark)', 
                               textDecoration:'none', fontSize:'16px',
                               fontFamily:'var(--font-serif)', borderBottom:'1px solid rgba(158,83,43,0.08)',
                               transition:'color 0.3s' }}
                      onMouseOver={e => e.currentTarget.style.color='var(--color-rust)'}
                      onMouseOut={e  => e.currentTarget.style.color= currentPage === item.page ? 'var(--color-rust)' : 'var(--color-text-dark)'}
                    >
                      <i className={item.icon} style={{ width:'18px', textAlign:'center', color:'var(--color-rust)', fontSize:'14px' }} />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div style={{ paddingTop:'24px', borderTop:'1px solid rgba(158,83,43,0.1)', marginTop:'16px' }}>
              <div style={{ display:'flex', alignItems:'flex-start', gap:'8px', marginBottom:'12px', fontSize:'13px', color:'var(--color-text-mid)' }}>
                <i className="fa-solid fa-location-dot" style={{ color:'var(--color-rust)', marginTop:'2px', flexShrink:0 }} />
                <span>
                  <strong style={{ display:'block', color:'var(--color-text-dark)', fontWeight:'600' }}>{CONTACT.name}</strong>
                  {CONTACT.address}
                </span>
              </div>
              <a href={`tel:${CONTACT.phone.replace(/\s/g,'')}`}
                style={{ display:'flex', alignItems:'center', gap:'8px', color:'var(--color-rust)', fontWeight:'600', fontSize:'14px', marginBottom:'16px', textDecoration:'none' }}>
                <i className="fa-solid fa-phone" /> {CONTACT.phone}
              </a>
              <button className="btn-dark" onClick={() => { setOpen(false); onNavigate('contact'); }} style={{ width:'100%', fontSize:'13px', padding:'12px' }}>
                <i className="fa-regular fa-calendar-check" style={{ marginRight:'8px' }} />Reserve a Table
              </button>
            </div>
          </div>
          <div style={{ flex:1 }} onClick={() => setOpen(false)} />
        </div>
      )}
      {/* ── Mobile Bottom Navigation Bar ── */}
      <div className="mobile-bottom-nav">
        {[
          { icon: 'fa-house', label: 'Home', page: 'home' },
          { icon: 'fa-utensils', label: 'Dining', page: 'dining' },
          { icon: 'fa-compass', label: 'Our Story', page: 'about' },
          { icon: 'fa-phone', label: 'Contact', page: 'contact' },
          { icon: 'fa-book-open', label: 'Menu', action: 'menu' }
        ].map(item => {
          const isActive = currentPage === item.page;
          return (
            <button
              key={item.label}
              onClick={() => {
                if (item.action === 'menu') {
                  window.open('/Zain%20Al%20Sham%20Menu%202026.pdf', '_blank');
                } else {
                  onNavigate(item.page);
                }
              }}
              className="bottom-nav-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                background: 'transparent',
                border: 'none',
                color: isActive ? 'var(--color-rust)' : 'rgba(250,245,238,0.6)',
                fontSize: '11px',
                fontWeight: isActive ? '600' : '400',
                cursor: 'pointer',
                transition: 'color 0.3s',
                padding: '8px 0',
                flex: 1
              }}
            >
              <i className={`fa-solid ${item.icon}`} style={{ fontSize: '18px', color: isActive ? 'var(--color-rust)' : 'inherit' }} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </div>

      <style>{`
        .hide-mobile { display:inline; } 
        @media(max-width:700px){ 
          .hide-mobile{display:none;} 
        }
        @media (max-width: 768px) {
          /* Center the logo on mobile */
          #header .header-main .container {
            justify-content: center !important;
          }
          /* Hide the hamburger button */
          #header .mobile-toggle {
            display: none !important;
          }
          /* Lift floating buttons up on mobile so they don't overlap bottom nav */
          .floating-whatsapp {
            bottom: 80px !important;
          }
          .floating-totop {
            bottom: 80px !important;
          }
          /* Hide desktop floating menu button */
          .floating-menu-btn {
            display: none !important;
          }
          /* Mobile bottom nav */
          .mobile-bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 64px;
            background: #120905;
            border-top: 1px solid rgba(223, 189, 115, 0.15);
            display: flex;
            justify-content: space-around;
            align-items: center;
            z-index: 9999;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.5);
            padding-bottom: env(safe-area-inset-bottom);
          }
          body {
            padding-bottom: 64px;
          }
        }
        @media (min-width: 769px) {
          .mobile-bottom-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}
