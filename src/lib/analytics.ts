'use client'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

export function trackWhatsAppClick(source: string) {
  gtag('event', 'whatsapp_click', {
    event_category: 'engagement',
    event_label: source,
  })
  if (ADS_ID) {
    gtag('event', 'conversion', { send_to: `${ADS_ID}/whatsapp` })
  }
}

export function trackFormSubmit() {
  gtag('event', 'generate_lead', { currency: 'TRY' })
  if (ADS_ID) {
    gtag('event', 'conversion', { send_to: `${ADS_ID}/form` })
  }
}

export function trackPhoneClick() {
  gtag('event', 'phone_click', { event_category: 'engagement' })
  if (ADS_ID) {
    gtag('event', 'conversion', { send_to: `${ADS_ID}/phone` })
  }
}
