import React, { useState, useEffect, useRef } from 'react'
import Preloader            from './components/Preloader'
import Header               from './components/Header'
import Hero                 from './components/Hero'
import RestaurantHighlights from './components/RestaurantHighlights'
import Banner               from './components/Banner'
import About                from './components/About'
import UpcomingEvents       from './components/UpcomingEvents'
import SpecialsBoard        from './components/SpecialsBoard'
import Newsletter           from './components/Newsletter'
import Footer               from './components/Footer'

// Subpages
import DiningPage   from './components/pages/DiningPage'
import AboutPage    from './components/pages/AboutPage'
import ContactPage  from './components/pages/ContactPage'

const WA_NUMBER = '254728878856'
const WA_MSG    = encodeURIComponent('Hello Zain Alsham! I would like to place an order.')

// ── Scroll-reveal via IntersectionObserver ──────────────────────
function useScrollReveal(currentPage) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [currentPage])
}

// ── Delivery marquee strip ──────────────────────────────────────
const BADGES = [
  { icon: 'fa-clock',             text: 'Delivery in 20 – 35 Minutes' },
  { icon: 'fa-motorcycle',        text: 'Free Delivery on Orders Above KSh 3,000' },
  { icon: 'fa-fire-flame-curved', text: 'Live Kitchen · Open Until Midnight' },
  { icon: 'fa-star',              text: 'Daily Chef Specials Available Now' },
  { icon: 'fa-shield-halved',     text: 'Halal Certified · Allergen Aware Menu' },
  { icon: 'fa-mobile-screen',     text: 'PWA App — Install for Exclusive Deals' },
]

function DeliveryStrip() {
  const doubled = [...BADGES, ...BADGES] // seamless loop
  return (
    <div className="delivery-strip">
      <div className="delivery-strip-inner">
        {doubled.map((b, i) => (
          <span key={i} className="delivery-badge">
            <i className={`fa-solid ${b.icon}`} />
            {b.text}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── PWA Install Pop-up ──────────────────────────────────────────
function PwaBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Detect if already installed
    if (localStorage.getItem('pwa-installed') === 'true') {
      return
    }

    const handler = (e) => {
      e.preventDefault()
      
      // Check if dismissed in the last 24 hours
      const dismissedTime = localStorage.getItem('pwa-dismissed-time')
      const oneDay = 24 * 60 * 60 * 1000
      if (dismissedTime && (Date.now() - parseInt(dismissedTime, 10)) < oneDay) {
        return
      }

      setDeferredPrompt(e)
      setVisible(true)
    }

    const installHandler = () => {
      localStorage.setItem('pwa-installed', 'true')
      setVisible(false)
    }

    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', installHandler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
      window.removeEventListener('appinstalled', installHandler)
    }
  }, [])

  const install = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      localStorage.setItem('pwa-installed', 'true')
    }
    setDeferredPrompt(null)
    setVisible(false)
  }

  const dismiss = () => {
    localStorage.setItem('pwa-dismissed-time', Date.now().toString())
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="pwa-popup-overlay" onClick={dismiss}>
      <div className="pwa-popup-container" onClick={(e) => e.stopPropagation()}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'var(--gold-gradient)', margin: '0 auto 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 15px rgba(223, 189, 115, 0.3)'
        }}>
          <i className="fa-solid fa-utensils" style={{ color: '#120905', fontSize: '24px' }} />
        </div>
        
        <h4 style={{
          fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-cream)',
          margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px'
        }}>
          Add Zain Alsham
        </h4>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(250,245,238,0.7)',
          lineHeight: '1.6', margin: '0 0 24px 0'
        }}>
          Install our digital app on your home screen to order food faster, browse the menu offline, and get direct happy hour alerts.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button className="pwa-install-btn" onClick={install} style={{ width: '100%', borderRadius: '2px' }}>
            <i className="fa-solid fa-plus" style={{ marginRight: '8px' }} />
            Add to Home Screen
          </button>
          <button className="pwa-dismiss-btn" onClick={dismiss} style={{ width: '100%', borderRadius: '2px', border: 'none', background: 'transparent' }}>
            Not Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  useScrollReveal(currentPage)

  const [showQrModal, setShowQrModal] = useState(false)
  const [showMenuModal, setShowMenuModal] = useState(false)
  const [showToast,   setShowToast]   = useState(false)
  const [toastMsg,    setToastMsg]    = useState('')

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div style={{ position: 'relative' }}>
      <Preloader />

      {/* Shared Global Header */}
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Main Page Router Content */}
      <main id="page">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero */}
            <Hero />

            {/* 2. Delivery Marquee Strip — sits right below hero */}
            <DeliveryStrip />

            {/* 3. Restaurant Highlights */}
            <RestaurantHighlights />

            {/* 4. Mid-page parallax quote banner */}
            <Banner />

            {/* 5. About */}
            <About />

            {/* 6. Today's Chef Specials + Happy Hour */}
            <SpecialsBoard />

            {/* 7. Upcoming Events */}
            <UpcomingEvents />
          </>
        )}

        {currentPage === 'dining'  && <DiningPage />}
        {currentPage === 'about'   && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}

        {/* Shared Bottom Sections */}
        <Newsletter />
        <Footer onNavigate={setCurrentPage} />
      </main>

      {/* ── WhatsApp Floating Button ─────────────────────── */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Order via WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>      {/* ── Redesigned Floating Menu Button ──────────────── */}
      <div
        className="floating-menu-btn"
        title="View Menu (PDF)"
        onClick={() => {
          const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
          if (isMobile) {
            window.open('/Zain%20Al%20Sham%20Menu%202026.pdf', '_blank');
          } else {
            setShowMenuModal(true);
          }
        }}
      >
        <i className="fa-solid fa-utensils" />
        <span>Menu</span>
      </div>

      {/* ── PDF Menu Modal ──────────────────────────────── */}
      {showMenuModal && (
        <div className="pdf-modal-overlay" onClick={() => setShowMenuModal(false)}>
          <div className="pdf-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <h3 className="pdf-modal-title">
                <i className="fa-solid fa-book-open" style={{ color: 'var(--color-gold)' }} />
                <span>Zain Al Sham Menu 2026</span>
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <a 
                  href="/Zain%20Al%20Sham%20Menu%202026.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="pdf-external-link"
                  style={{
                    color: 'var(--color-gold)',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid var(--color-gold)',
                    padding: '6px 12px',
                    borderRadius: '2px',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'var(--color-gold)';
                    e.currentTarget.style.color = '#120905';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--color-gold)';
                  }}
                >
                  <i className="fa-solid fa-expand" />
                  <span>Open Fullscreen</span>
                </a>
                <button 
                  className="pdf-modal-close-btn" 
                  onClick={() => setShowMenuModal(false)}
                  aria-label="Close menu"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
            </div>
            <div className="pdf-modal-body">
              <iframe 
                src="/Zain%20Al%20Sham%20Menu%202026.pdf#toolbar=0" 
                className="pdf-iframe" 
                title="Zain Al Sham Menu 2026"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── QR Modal ────────────────────────────────────── */}
      {showQrModal && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(18, 9, 5, 0.75)', zIndex: 100000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(5px)', animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{
            background: 'var(--color-white)', border: '2px solid var(--color-gold)',
            borderRadius: '4px', padding: '40px', maxWidth: '440px', width: '90%',
            position: 'relative', textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            animation: 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <button
              onClick={() => setShowQrModal(false)}
              aria-label="Close Portal"
              style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'transparent', border: 'none',
                fontSize: '20px', color: 'var(--color-text-dark)',
                cursor: 'pointer', transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--color-rust)'}
              onMouseOut={(e) => e.target.style.color = 'var(--color-text-dark)'}
            >
              <i className="fa-solid fa-xmark" />
            </button>

            <div className="fancy-divider" style={{ margin: '0 0 16px 0' }}>
              <span style={{ fontSize: '12px' }}>❖</span>
            </div>
            <h4 style={{
              fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#4a2c11',
              margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px'
            }}>
              Guest Digital Portal
            </h4>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '13px',
              color: 'var(--color-muted)', marginBottom: '28px', lineHeight: '1.5'
            }}>
              Scan with your mobile device to access our digital menu, make table reservations, and join our loyalty club.
            </p>

            <div style={{
              margin: '0 auto 24px auto', width: '180px', height: '180px',
              background: 'var(--color-white)', border: '4px double var(--color-gold)',
              padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
            }}>
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <rect x="0" y="0" width="22" height="22" fill="#4a2c11" />
                <rect x="3" y="3" width="16" height="16" fill="#fff" />
                <rect x="6" y="6" width="10" height="10" fill="#cf7321" />
                <rect x="78" y="0" width="22" height="22" fill="#4a2c11" />
                <rect x="81" y="3" width="16" height="16" fill="#fff" />
                <rect x="84" y="6" width="10" height="10" fill="#cf7321" />
                <rect x="0" y="78" width="22" height="22" fill="#4a2c11" />
                <rect x="3" y="81" width="16" height="16" fill="#fff" />
                <rect x="6" y="84" width="10" height="10" fill="#cf7321" />
                <rect x="30" y="4" width="6" height="6" fill="#9e532b" />
                <rect x="42" y="10" width="12" height="6" fill="#4a2c11" />
                <rect x="60" y="6" width="6" height="12" fill="#dfbd73" />
                <rect x="4" y="32" width="6" height="12" fill="#cf7321" />
                <rect x="18" y="40" width="10" height="6" fill="#4a2c11" />
                <rect x="78" y="32" width="12" height="6" fill="#9e532b" />
                <rect x="90" y="44" width="6" height="12" fill="#cf7321" />
                <rect x="32" y="78" width="12" height="6" fill="#dfbd73" />
                <rect x="40" y="90" width="18" height="6" fill="#4a2c11" />
                <rect x="70" y="84" width="6" height="12" fill="#9e532b" />
                <circle cx="50" cy="50" r="16" fill="#4a2c11" />
                <polygon points="50,39 53,46 60,46 55,51 57,58 50,53 43,58 45,51 40,46 47,46" fill="#dfbd73" />
              </svg>
            </div>

            <div style={{
              fontFamily: 'var(--font-serif)', fontSize: '14px',
              fontWeight: '600', letterSpacing: '1px', color: 'var(--color-rust)'
            }}>
              THE PLACE @ 5TH ✦ NAIROBI
            </div>
          </div>
        </div>
      )}

      {/* ── Float Toast Alerts ──────────────────────────── */}
      {showToast && (
        <div style={{
          position: 'fixed', bottom: '30px', right: '90px',
          background: 'var(--color-dark)', borderLeft: '4px solid var(--color-gold)',
          color: 'var(--color-cream)', padding: '16px 24px', borderRadius: '2px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)', fontFamily: 'var(--font-sans)',
          fontSize: '13px', fontWeight: '500', letterSpacing: '0.5px',
          zIndex: 1000000, animation: 'fadeInUp 0.3s ease'
        }}>
          {toastMsg}
        </div>
      )}

      {/* ── Back to Top ─────────────────────────────────── */}
      <button className="floating-totop" aria-label="Back to top" onClick={scrollToTop}>
        <i className="fa-solid fa-angles-up" style={{ fontSize:'16px' }} />
      </button>

      {/* ── PWA Install Banner ───────────────────────────── */}
      <PwaBanner />
    </div>
  )
}
