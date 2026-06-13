import {
  Layers, Clock, Paintbrush, Trophy, Lamp, Gem, Watch, Sparkles
} from 'lucide-react'
import { BRAND } from '@/lib/constants'

const CATEGORIES = [
  {
    icon: Layers,
    name: 'El Dokuması Halılar',
    examples: 'Hereke, İran, Uşak, Bünyan, Milas, Kayseri, İsparta',
    featured: true,
    deco: '01',
  },
  {
    icon: Sparkles,
    name: 'Osmanlı ve Antika Eşyalar',
    examples: 'Osmanlı antikaları, Avrupa antikaları, Antika mobilyalar',
    featured: true,
    deco: '02',
  },
  {
    icon: Paintbrush,
    name: 'Sanat Eserleri',
    examples: 'Yağlı boya tablolar, Heykeller, Sanat objeleri',
    featured: false,
    deco: '03',
  },
  {
    icon: Gem,
    name: 'Gümüş & Porselen',
    examples: 'Gümüş takım, Porselen, Seramik',
    featured: false,
    deco: '04',
  },
  {
    icon: Clock,
    name: 'Eski Saatler',
    examples: 'Duvar, masa, cep saatleri',
    featured: false,
    deco: '05',
  },
  {
    icon: Trophy,
    name: 'Koleksiyon Ürünleri',
    examples: 'Madalyalar, nadir objeler, koleksiyon setleri',
    featured: false,
    deco: '06',
  },
  {
    icon: Lamp,
    name: 'Avize & Ayna',
    examples: 'Kristal avizeler, antika aynalar',
    featured: false,
    deco: '07',
  },
  {
    icon: Watch,
    name: 'Değerli Takılar',
    examples: 'Altın, gümüş, antika takılar',
    featured: false,
    deco: '08',
  },
]

export default function CategoriesSection() {
  return (
    <section id="kategoriler" className="section" aria-labelledby="cat-heading">
      <div className="container">
        <p className="eyebrow">Alım Kategorileri</p>
        <h2 id="cat-heading" className="section-title">
          Her Değerli Eşyayı Alıyoruz
        </h2>
        <p className="section-sub">
          Evinizde ne olduğundan emin değil misiniz? Fotoğraf gönderin, biz değerlendirelim.
        </p>

        <div className="categories-grid" role="list">
          {CATEGORIES.map(cat => {
            const Icon = cat.icon
            return (
              <article
                key={cat.name}
                className={`cat-card reveal${cat.featured ? ' featured' : ''}`}
                role="listitem"
              >
                <span className="cat-deco" aria-hidden="true">{cat.deco}</span>
                <div className="cat-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-examples">{cat.examples}</p>
              </article>
            )
          })}
        </div>

        <p className="categories-note">
          Yukarıda listelenmemiş bir eşyanız mı var?{' '}
          <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">
            Yine de gönderin
          </a>{' '}
          — her değerli objeyi değerlendiririz.
        </p>
      </div>
    </section>
  )
}
