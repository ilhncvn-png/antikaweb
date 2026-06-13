'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics'

export default function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar" role="complementary" aria-label="Hızlı iletişim">
      <a
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta-wa"
        aria-label="WhatsApp ile değerleme alın"
        onClick={() => trackWhatsAppClick('mobile-bar')}
      >
        <MessageCircle size={16} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <a
        href={`tel:${BRAND.phoneRaw}`}
        className="mobile-cta-tel"
        aria-label={`Arayın: ${BRAND.phone}`}
        onClick={() => trackPhoneClick()}
      >
        <Phone size={16} aria-hidden="true" />
        <span>Ara</span>
      </a>
    </div>
  )
}
