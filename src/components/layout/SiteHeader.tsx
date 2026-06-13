'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const NAV_LINKS = [
  { label: 'Nasıl Çalışır', href: '#nasil-calisir' },
  { label: 'Aldığımız Ürünler', href: '#kategoriler' },
  { label: 'El Halıları', href: '#hali' },
  { label: 'SSS', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function SiteHeader() {
  const [atHero, setAtHero] = useState(true)
  const [scrolled, setScrolled] = useState(false)

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

  const cls = ['header', atHero ? 'at-hero' : '', scrolled && !atHero ? 'scrolled' : '']
    .filter(Boolean).join(' ')

  return (
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
        </div>

      </div>
    </header>
  )
}
