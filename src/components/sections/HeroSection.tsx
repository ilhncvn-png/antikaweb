'use client'

import Image from 'next/image'
import { ArrowRight, MapPin, Banknote, Clock3 } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics'

const STATS = [
  { val: '15+', label: 'Yıl Deneyim' },
  { val: '2.000+', label: 'Başarılı Alım' },
  { val: 'Aynı Gün', label: 'Ödeme Garantisi' },
  { val: 'Ücretsiz', label: 'Ev Ziyareti' },
  { val: '2 Saat', label: 'Ön Ekspertiz' },
]

const TRUST = [
  { icon: MapPin, label: 'İstanbul geneli yerinde inceleme' },
  { icon: Banknote, label: 'Nakit veya havale, aynı gün' },
  { icon: Clock3, label: '2 saat içinde ücretsiz ön değerleme' },
]

export default function HeroSection() {
  return (
    <section id="hero" className="hero-ed" aria-labelledby="hero-heading">

      {/* ── Full-bleed background ────────────────── */}
      <div className="hero-ed-bg" aria-hidden="true">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={92}
          className="hero-ed-img"
        />
        <div className="hero-ed-overlay" />
      </div>

      {/* ── Vertical accent line (editorial detail) */}
      <div className="hero-ed-vline" aria-hidden="true" />

      {/* ── Editorial content ────────────────────── */}
      <div className="hero-ed-body">
        <div className="hero-ed-content">

          <div className="hero-ed-eyebrow" aria-hidden="true">
            <span className="hero-ed-rule" />
            <span className="hero-ed-eyebrow-text">
              İstanbul&rsquo;un Değerli Eşya Uzmanları
            </span>
          </div>

          <h1 id="hero-heading" className="hero-ed-title">
            Antika ve Değerli<br />
            Eşyanızı{' '}
            <em>Gerçek<br className="hero-br-lg" />{' '}
            Değerinden</em> Satın
          </h1>

          <p className="hero-ed-sub">
            15 yılı aşkın deneyimimizle ev ve iş yeri ziyareti yapıyor,
            antika, el dokuması halı, tablo, gümüş ve koleksiyon
            ürünlerinizi yerinde değerlendiriyoruz.
          </p>

          <div className="hero-ed-trust" role="list" aria-label="Hizmet güvenceleri">
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} className="hero-ed-trust-item" role="listitem">
                <Icon size={13} strokeWidth={1.5} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="hero-ed-ctas">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-ed-cta-primary"
              onClick={() => trackWhatsAppClick('hero')}
              aria-label="WhatsApp üzerinden fotoğraf gönderin, ücretsiz değerleme alın"
            >
              <span>Fotoğrafınızı Gönderin</span>
              <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="hero-ed-cta-phone"
              onClick={() => trackPhoneClick()}
              aria-label={`Telefon: ${BRAND.phone}`}
            >
              {BRAND.phone}
            </a>
          </div>

        </div>
      </div>

      {/* ── Catalogue detail (auction house touch) ── */}
      <div className="hero-ed-catalogue" aria-hidden="true">
        Est. 2009 &middot; İstanbul
      </div>

      {/* ── Bottom stats strip ───────────────────── */}
      <div className="hero-ed-strip" role="list" aria-label="Hizmet istatistikleri">
        {STATS.map((s) => (
          <div key={s.label} className="hero-ed-stat" role="listitem">
            <span className="hero-ed-stat-val">{s.val}</span>
            <span className="hero-ed-stat-label">{s.label}</span>
          </div>
        ))}
        <div className="hero-ed-scroll" aria-hidden="true">
          <span className="hero-ed-scroll-text">Keşfedin</span>
          <span className="hero-ed-scroll-arrow">↓</span>
        </div>
      </div>

    </section>
  )
}
