import { BRAND, FAQ_ITEMS } from './constants'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: BRAND.name,
    description: 'İstanbul\'da antika eşya, el dokuması halı, tablo, gümüş ve koleksiyon ürünü alımı. Ücretsiz ekspertiz, aynı gün ödeme.',
    url: BRAND.url,
    telephone: BRAND.phoneRaw,
    email: BRAND.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Küçükyalı Mahallesi, Mektep Caddesi, Yıldırım Apartmanı, No: 50',
      addressLocality: 'Maltepe',
      addressRegion: 'İstanbul',
      postalCode: '34852',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.9337,
      longitude: 29.1266,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.phoneRaw,
      contactType: 'customer service',
      availableLanguage: 'Turkish',
      areaServed: 'TR-34',
    },
    priceRange: '$$',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Cash, Bank Transfer',
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'İstanbul',
    },
    areaServed: 'İstanbul',
    sameAs: [BRAND.social.instagram, BRAND.social.facebook],
    image: `${BRAND.url}/og-image.jpg`,
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    url: BRAND.url,
    logo: `${BRAND.url}/icons/icon-512.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.phoneRaw,
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: 'Turkish',
    },
    sameAs: [BRAND.social.instagram, BRAND.social.facebook],
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND.name,
    url: BRAND.url,
    inLanguage: 'tr-TR',
    publisher: {
      '@type': 'Organization',
      name: BRAND.name,
    },
  }
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}
