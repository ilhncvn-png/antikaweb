'use client'

import { useEffect, useState } from 'react'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const NAV_LINKS = [
  { label: 'Nasıl Çalışır', href: '#nasil-calisir' },
  { label: 'Aldığımız Ürünler', href: '#kategoriler' },
  { label: 'El Halıları', mobileLabel: 'El Dokuması Halılar', href: '#hali' },
  { label: 'SSS', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function SiteHeader() {
  const [atHero, setAtHero] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const update = () => {
      const y = window.scrollY
      setAtHero(y < window.innerHeight * 0.72)
      setScrolled(y > 40)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const cls = ['header', atHero || menuOpen ? 'at-hero' : '', scrolled && !atHero && !menuOpen ? 'scrolled' : '']
    .filter(Boolean).join(' ')

  return (
    <>
      <header className={cls}>
        <div className="header-inner">

          <a href={`${BASE}/`} className="brand-wordmark" aria-label="Değerli Eşya Merkezi — Ana Sayfa">
            <span className="brand-wordmark-l1">Değerli Eşya</span>
            <span className="brand-wordmark-l2">Merkezi</span>
          </a>

          <nav className="header-nav" aria-label="Site navigasyonu">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="header-phone"
              aria-label={`Telefon: ${BRAND.phone}`}
              onClick={() => trackPhoneClick()}
            >
              <Phone size={13} strokeWidth={1.5} aria-hidden="true" />
              <span className="header-phone-text">{BRAND.phone}</span>
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="header-consult"
              aria-label="WhatsApp ile değerleme alın"
              onClick={() => trackWhatsAppClick('header')}
            >
              Değerleme Alın
            </a>

            <button
              className="header-hamburger"
              aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(prev => !prev)}
            >
              {menuOpen
                ? <X size={22} strokeWidth={1.5} aria-hidden="true" />
                : <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
              }
            </button>
          </div>

        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Site menüsü"
      >
        <nav className="mobile-menu-nav" aria-label="Mobil navigasyon">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu-link"
              style={{ transitionDelay: menuOpen ? `${i * 55 + 60}ms` : '0ms' }}
              onClick={closeMenu}
            >
              <span className="mobile-menu-num">0{i + 1}</span>
              <span>{link.mobileLabel ?? link.label}</span>
            </a>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-wa"
            onClick={() => { trackWhatsAppClick('mobile-menu'); closeMenu() }}
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span>WhatsApp&rsquo;tan Mesaj Gönderin</span>
          </a>
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="mobile-menu-tel"
            onClick={() => { trackPhoneClick(); closeMenu() }}
          >
            {BRAND.phone}
          </a>
        </div>
      </div>
    </>
  )
}
