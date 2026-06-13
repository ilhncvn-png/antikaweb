import { BRAND, FAQ_ITEMS } from '@/lib/constants'
import { MessageCircle } from 'lucide-react'

export default function FaqSection() {
  return (
    <section id="sss" className="section section-beige" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq-inner">
          <div>
            <p className="eyebrow">Sık Sorulan Sorular</p>
            <h2 id="faq-heading" className="section-title">
              Aklınızdaki Soruların Cevapları
            </h2>
            <p className="section-sub" style={{ marginBottom: '2rem' }}>
              Hâlâ aklınızda soru varsa Değerli Eşya Merkezi ekibi size yardımcı olmaktan memnuniyet duyar.
            </p>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Sorunuzu Sorun
            </a>
          </div>

          <div className="faq-list" role="list">
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={i}
                className="faq-item reveal"
                role="listitem"
              >
                <summary className="faq-q">
                  <span>{item.q}</span>
                  <span className="faq-q-icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-a">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
