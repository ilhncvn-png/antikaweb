import { Eye, MapPin, Zap, Truck, ShieldCheck, Lock } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const FEATURES = [
  {
    icon: Eye,
    title: 'Şeffaf Değerleme',
    desc: 'Fiyatlandırma kriterlerimizi açıkça paylaşırız. Gizli kesinti, belirsiz süreç yoktur.',
  },
  {
    icon: MapPin,
    title: 'Yerinde Ekspertiz',
    desc: 'İstanbul içi ücretsiz yerinde inceleme. Ağır ya da kırılgan eşyalarınızı taşımanıza gerek yok.',
  },
  {
    icon: Zap,
    title: 'Aynı Gün Ödeme',
    desc: 'Anlaşma sağlandığında nakit veya EFT ile aynı gün ödeme yapılır. Belge düzenlenir.',
  },
  {
    icon: Truck,
    title: 'Ücretsiz Taşıma',
    desc: 'Mobilya, halı, avize gibi büyük parçalar için ücretsiz taşıma hizmeti sunulur.',
  },
  {
    icon: ShieldCheck,
    title: '15+ Yıl Deneyim',
    desc: 'Yüzlerce koleksiyon değerlendirmiş uzman kadromuz her türlü eşyayı tanır ve doğru fiyatı bilir.',
  },
  {
    icon: Lock,
    title: 'Gizlilik Garantisi',
    desc: 'Tüm görüşmeler ve işlemler gizlilik ilkeleri çerçevesinde yürütülür. Bilgileriniz paylaşılmaz.',
  },
]

export default function WhyUsSection() {
  return (
    <section id="neden-biz" className="section section-dark whyus-section" aria-labelledby="why-heading">
      <div className="container">
        <p className="eyebrow">Neden Değerli Eşya Merkezi?</p>
        <h2 id="why-heading" className="section-title">
          Güvenle Satın, Aynı Gün Öde
        </h2>

        <div className="why-list" role="list">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            const num = String(i + 1).padStart(2, '0')
            return (
              <div key={f.title} className="why-item reveal" role="listitem">
                <span className="why-item-num" aria-hidden="true">{num}</span>
                <div className="why-item-head">
                  <Icon size={20} strokeWidth={1.5} className="why-item-icon" aria-hidden="true" />
                  <h3 className="why-item-title">{f.title}</h3>
                </div>
                <p className="why-item-desc">{f.desc}</p>
              </div>
            )
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-inv btn-lg"
          >
            Uzmanımıza Danışın
          </a>
        </div>
      </div>
    </section>
  )
}
