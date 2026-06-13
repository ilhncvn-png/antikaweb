import { Camera, Search, Banknote } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const STEPS = [
  {
    num: '01',
    icon: Camera,
    title: 'Fotoğraf Gönderin',
    desc: 'Ürününüzü farklı açılardan fotoğraflayın. WhatsApp veya form üzerinden gönderin — 2 dakika yeterli.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Uzman Değerlendirmesi',
    desc: '15 yıllık deneyime sahip Değerli Eşya Merkezi ekibi fotoğraflarınızı inceler, 2 saat içinde ön değerleme gönderir.',
  },
  {
    num: '03',
    icon: Banknote,
    title: 'Yerinde Ekspertiz ve Ödeme',
    desc: 'Teklifi beğenirseniz uzmanımız size gelir. Anlaşma sağlandığında aynı gün nakit veya EFT ile ödeme yapılır.',
  },
]

export default function ProcessSection() {
  return (
    <section id="nasil-calisir" className="section section-dark process-section" aria-labelledby="process-heading">
      <div className="container">
        <p className="eyebrow">Nasıl Çalışır</p>
        <h2 id="process-heading" className="section-title" style={{ maxWidth: 480 }}>
          3 Adımda Ücretsiz Ön Değerleme
        </h2>
        <p className="section-sub">
          Eşyanızı taşımanıza, bir yere gitmenize gerek yok. Fotoğraflarınız yeterli.
        </p>

        <div className="process-grid" role="list">
          {STEPS.map(step => {
            const Icon = step.icon
            return (
              <div key={step.num} className="process-step reveal" role="listitem">
                <span className="process-num" aria-hidden="true">{step.num}</span>
                <div className="process-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            )
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Hemen Başlayın
          </a>
        </div>
      </div>
    </section>
  )
}
