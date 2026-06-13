import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { BRAND } from '@/lib/constants'
import { localBusinessSchema, organizationSchema, webSiteSchema, faqSchema } from '@/lib/schema'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif-loaded',
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sans-loaded',
})

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: 'Değerli Eşya Merkezi | İstanbul Antika, Halı ve Değerli Eşya Alımı',
    template: '%s | Değerli Eşya Merkezi',
  },
  description:
    'İstanbul\'da antika eşya, el dokuması halı, tablo, gümüş, koleksiyon ürünü ve değerli objeleriniz için ücretsiz ön değerleme alın. Fotoğraf gönderin, hızlı teklif alın.',
  keywords: [
    'antika alan yerler istanbul',
    'antika eşya alanlar',
    'el dokuması halı alanlar',
    'halı alan yerler istanbul',
    'değerli eşya alanlar',
    'eski eşya alanlar',
    'koleksiyon ürünü alanlar',
    'tablo alan yerler',
    'gümüş alan yerler',
    'antika mobilya alanlar',
    'değerli eşya merkezi',
    'antika satmak istiyorum',
    'antika ekspertiz istanbul',
  ],
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: BRAND.url,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: BRAND.url,
    siteName: BRAND.name,
    title: 'Değerli Eşya Merkezi | İstanbul Antika, Halı ve Değerli Eşya Alımı',
    description:
      'İstanbul\'da antika eşya, el dokuması halı, tablo, gümüş, koleksiyon ürünü ve değerli objeleriniz için ücretsiz ön değerleme alın. Fotoğraf gönderin, hızlı teklif alın.',
    images: [
      {
        url: `${BRAND.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Değerli Eşya Merkezi — İstanbul Antika ve Değerli Eşya Alımı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Değerli Eşya Merkezi | İstanbul Antika, Halı ve Değerli Eşya Alımı',
    description: 'İstanbul\'da antika eşya, halı, tablo, gümüş için ücretsiz ön değerleme. 2 saat içinde teklif. Aynı gün ödeme.',
    images: [`${BRAND.url}/og-image.jpg`],
  },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* CSS font variable override */}
        <style suppressHydrationWarning>{`
          :root {
            --font-serif: var(--font-serif-loaded, 'Cormorant Garamond', Georgia, serif);
            --font-sans: var(--font-sans-loaded, 'Inter', system-ui, sans-serif);
          }
        `}</style>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">İçeriğe geç</a>

        {children}

        {/* Google Analytics — only when ID is set */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
              ${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ? `gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');` : ''}
            `}</Script>
          </>
        )}
      </body>
    </html>
  )
}
