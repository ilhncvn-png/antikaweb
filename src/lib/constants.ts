export const BRAND = {
  name: 'Değerli Eşya Merkezi',
  tagline: 'İstanbul\'un Değerli Eşya Uzmanları',
  domain: 'degerliesyamerkezi.com',
  url: 'https://degerliesyamerkezi.com',
  email: 'info@degerliesyamerkezi.com',
  phone: '+90 (533) 559 41 02',
  phoneRaw: '+905335594102',
  whatsappNumber: '905335594102',
  whatsappMessage: 'Merhaba, satmak istediğim antika/değerli eşya için ön değerlendirme almak istiyorum.',
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`
  },
  address: 'Küçükyalı Mah., Mektep Cad., Yıldırım Apt. No: 50, Maltepe / İstanbul',
  addressFull: 'Küçükyalı Mahallesi, Mektep Caddesi, Yıldırım Apartmanı, No: 50, Maltepe / İstanbul',
  mapUrl: 'https://maps.google.com/?q=Küçükyalı+Mahallesi+Mektep+Caddesi+No+50+Maltepe+İstanbul',
  hours: 'Pazartesi–Cumartesi, 09:00–19:00',
  social: {
    instagram: 'https://instagram.com/degerliesyamerkezi',
    facebook: 'https://facebook.com/degerliesyamerkezi',
  },
}

export const PRODUCT_CATEGORIES = [
  'El Dokuması Halı',
  'Antika Eşya',
  'Osmanlı Antikası',
  'Tablo / Sanat Eseri',
  'Eski Saat',
  'Gümüş / Porselen',
  'Koleksiyon Ürünü',
  'Antika Mobilya',
  'Avize / Ayna',
  'Değerli Takı',
  'Diğer',
] as const

export const TESTIMONIALS = [
  {
    quote: 'Annemin antika takımları için çok endişeliydim. Değerli Eşya Merkezi uzmanı geldi, her şeyi sabırla anlattı ve gerçek değerinden sattım. Çok teşekkürler.',
    name: 'Ayşe H.',
    location: 'Kadıköy, İstanbul',
  },
  {
    quote: 'İran halılarım için 3 farklı yere gittim. Değerli Eşya Merkezi en yüksek teklifi verdi ve yerinde ödeme yaptı. Kesinlikle tavsiye ederim.',
    name: 'Murat B.',
    location: 'Şişli, İstanbul',
  },
  {
    quote: 'Dedemden kalan antika saatler için ne yapacağımı bilmiyordum. Fotoğraf gönderdim, 2 saat içinde arandım. Son derece profesyonel bir hizmet.',
    name: 'Fatma K.',
    location: 'Beşiktaş, İstanbul',
  },
]

export const FAQ_ITEMS = [
  {
    q: 'Değerleme hizmeti ücretsiz mi?',
    a: 'Evet. Fotoğraf üzerinden yapılan ön değerleme ve sonrasındaki yerinde ekspertiz tamamen ücretsizdir. Hiçbir ücret alınmaz.',
  },
  {
    q: 'Ürünümü nasıl göndereceğim?',
    a: 'Ürününüzü taşımanıza gerek yoktur. WhatsApp veya form üzerinden fotoğraf gönderin; Değerli Eşya Merkezi ekibi sizi arayarak randevu ayarlar ve size gelir.',
  },
  {
    q: 'Teklifi beğenmezsem ne olur?',
    a: 'Hiçbir yükümlülüğünüz yoktur. Teklifi reddedebilir, ürününüzü dilediğiniz gibi değerlendirebilirsiniz. Herhangi bir baskı söz konusu değildir.',
  },
  {
    q: 'Ödeme nasıl yapılır?',
    a: 'Anlaşma sağlandığında nakit veya banka havalesi ile aynı gün ödeme yapılır. Belge düzenlenir.',
  },
  {
    q: 'Ne kadar sürer?',
    a: 'Fotoğraf göndermenizden itibaren 2 saat içinde ön değerleme ulaşır. Yerinde ekspertiz, mutabık kalınan gün ve saatte gerçekleştirilir.',
  },
  {
    q: 'İstanbul dışından ürün satabilir miyim?',
    a: 'Şu an yalnızca İstanbul içi hizmet vermekteyiz. Yüksek değerli ürünler için istisnai durumları görüşebiliriz.',
  },
  {
    q: 'Hangi ürünleri almıyorsunuz?',
    a: 'Orijinalliği doğrulanamayan ürünleri, standart ev aletlerini (buzdolabı, çamaşır makinesi vb.) ve yasal kısıtlaması olan objeleri almıyoruz.',
  },
]
