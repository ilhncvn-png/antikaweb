'use client'

import { MessageCircle } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { trackWhatsAppClick } from '@/lib/analytics'

export default function WhatsAppButton() {
  return (
    <a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Değerli Eşya Merkezi WhatsApp hattına yaz"
      onClick={() => trackWhatsAppClick('sticky')}
    >
      <MessageCircle size={22} aria-hidden="true" />
      <span className="wa-fab-text">WhatsApp</span>
    </a>
  )
}
