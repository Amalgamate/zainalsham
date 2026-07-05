import React from 'react'

export default function Newsletter() {
  return (
    <section className="newsletter pattern-light reveal-scale" style={{ padding: '90px 0', borderTop: '1px solid rgba(158,83,43,0.08)' }}>
      <div className="container">
        
        {/* Invitation-style card layout */}
        <div style={{
          maxWidth: '760px',
          margin: '0 auto',
          background: 'var(--color-white)',
          padding: '50px 40px',
          borderRadius: '4px',
          border: '1px solid rgba(207,168,96,0.3)',
          boxShadow: '0 12px 40px rgba(18, 9, 5, 0.05)',
          position: 'relative',
          textAlign: 'center'
        }}>
          
          {/* Internal corner gold frames */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            width: '24px',
            height: '24px',
            borderTop: '1.5px solid var(--color-gold)',
            borderLeft: '1.5px solid var(--color-gold)',
            opacity: 0.7
          }} />
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '24px',
            height: '24px',
            borderTop: '1.5px solid var(--color-gold)',
            borderRight: '1.5px solid var(--color-gold)',
            opacity: 0.7
          }} />
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            width: '24px',
            height: '24px',
            borderBottom: '1.5px solid var(--color-gold)',
            borderLeft: '1.5px solid var(--color-gold)',
            opacity: 0.7
          }} />
          <div style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            width: '24px',
            height: '24px',
            borderBottom: '1.5px solid var(--color-gold)',
            borderRight: '1.5px solid var(--color-gold)',
            opacity: 0.7
          }} />

          {/* Decorative Top Ornament */}
          <div className="fancy-divider" style={{ margin: '0 0 20px 0' }}>
            <span style={{ fontSize: '14px' }}>❖</span>
          </div>

          {/* Section Header */}
          <h4 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '34px',
            fontWeight: '600',
            color: '#4a2c11', /* Deep warm brown */
            margin: '0 0 10px 0',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Join Our Inner Circle
          </h4>

          <p style={{
            fontFamily: 'var(--font-script)',
            fontSize: '30px',
            color: 'var(--color-rust)', /* Warm copper */
            margin: '0 0 35px 0',
            lineHeight: '1.2'
          }}>
            Receive exclusive event invitations &amp; seasonal culinary menus
          </p>

          {/* Email Subscription Form */}
          <form
            style={{
              display: 'flex',
              maxWidth: '520px',
              margin: '0 auto',
              boxShadow: '0 4px 15px rgba(18, 9, 5, 0.04)',
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid rgba(158,83,43,0.2)'
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              id="newsletter-email"
              aria-label="Email address for newsletter"
              required
              style={{
                flex: 1,
                padding: '16px 20px',
                border: 'none',
                background: 'var(--color-white)',
                color: 'var(--color-text-dark)',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                outline: 'none',
                minWidth: 0
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--color-rust)',
                color: 'var(--color-white)',
                border: 'none',
                padding: '0 28px',
                fontFamily: 'var(--font-serif)',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'var(--gold-gradient)'
                e.currentTarget.style.color = 'var(--color-dark)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'var(--color-rust)'
                e.currentTarget.style.color = 'var(--color-white)'
              }}
            >
              Subscribe
              <i className="fa-regular fa-paper-plane" style={{ fontSize: '11px' }} />
            </button>
          </form>

          {/* Disclaimer Text */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            color: 'var(--color-muted)',
            marginTop: '20px',
            letterSpacing: '0.5px',
            marginBottom: 0
          }}>
            ❖ We respect your privacy. Unsubscribe at any time.
          </p>

        </div>
      </div>
    </section>
  )
}
