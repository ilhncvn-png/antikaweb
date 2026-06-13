import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const RUG_TYPES = [
  'Hereke', 'İran', 'Uşak', 'Bünyan',
  'Milas', 'Kayseri', 'İsparta', 'Bergama', 'Gördes',
]

export default function RugSection() {
  return (
    <section id="hali" className="section section-beige" aria-labelledby="rug-heading">
      <div className="container">
        <div className="rug-inner">
          <div className="reveal-left">
            <p className="eyebrow">Uzmanlık Alanlarımız</p>
            <h2 id="rug-heading" className="section-title">
              El Dokuması Halılarda Derin Uzmanlık
            </h2>
            <div className="divider" aria-hidden="true" />
            <p className="section-sub">
              Hereke&rsquo;den İran&rsquo;a, Uşak&rsquo;tan Kayseri&rsquo;ye — tüm el dokuması halı
              türlerini değerlendiriyoruz. Değerli Eşya Merkezi uzmanları halınızın orijinalliğini,
              dokuma kalitesini ve piyasa değerini yerinde belirler.
            </p>

            <div className="rug-tags" role="list" aria-label="Halı türleri">
              {RUG_TYPES.map(t => (
                <span key={t} className="rug-tag" role="listitem">{t}</span>
              ))}
            </div>

            <div className="rug-info-box">
              <h4>Halınızın Değerini Belirleyen Faktörler</h4>
              <ul aria-label="Değer faktörleri">
                <li>Düğüm yoğunluğu (metre karede iplik sayısı)</li>
                <li>İplik türü — ipek, yün veya pamuk</li>
                <li>Boya tipi — bitkisel veya sentetik</li>
                <li>Yaş ve orijinallik belgesi</li>
                <li>Koruma ve temizlik durumu</li>
              </ul>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                aria-label="Halınızın değerini öğrenmek için WhatsApp ile ulaşın"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Halınızın Değerini Öğrenin
              </a>
            </div>
          </div>

          <div className="rug-visual reveal-right">
            <Image
              src="/images/hali.png"
              alt="El dokuması Hereke, İran, Uşak ve Kayseri halıları — Değerli Eşya Merkezi koleksiyonu"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              quality={85}
              className="rug-photo"
            />
            <div className="rug-photo-overlay" aria-hidden="true" />
            <div className="rug-photo-caption" aria-hidden="true">
              <span>Hereke · İran · Uşak · Kayseri · Milas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
