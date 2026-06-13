import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-wordmark">
              <span className="footer-wordmark-l1">Değerli Eşya</span>
              <span className="footer-wordmark-l2">Merkezi</span>
            </div>
            <div className="footer-brand-tagline">İstanbul&apos;un Değerli Eşya Uzmanları</div>
            <div className="footer-social">
              <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Hızlı Linkler</div>
            <nav className="footer-links" aria-label="Footer navigasyonu">
              <a href="#nasil-calisir">Nasıl Çalışır</a>
              <a href="#kategoriler">Aldığımız Ürünler</a>
              <a href="#neden-biz">Neden Biz?</a>
              <a href="#sss">Sık Sorulan Sorular</a>
              <a href="#iletisim">İletişim ve Değerleme</a>
            </nav>
          </div>

          <div>
            <div className="footer-col-title">İletişim</div>
            <div className="footer-contact-item">
              <Phone size={14} aria-hidden="true" />
              <a href={`tel:${BRAND.phoneRaw}`}>{BRAND.phone}</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} aria-hidden="true" />
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={14} aria-hidden="true" />
              <span>{BRAND.address}</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={14} aria-hidden="true" />
              <span>{BRAND.hours}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} {BRAND.name}. Tüm hakları saklıdır. · {BRAND.domain}
          </p>
          <div className="footer-legal">
            <a href="/gizlilik">Gizlilik Politikası</a>
            <a href="/kvkk">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
