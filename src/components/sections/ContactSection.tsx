'use client'

import { useState, useRef } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Upload, CheckCircle2 } from 'lucide-react'
import { BRAND, PRODUCT_CATEGORIES } from '@/lib/constants'
import { trackFormSubmit, trackWhatsAppClick } from '@/lib/analytics'

interface FormData {
  name: string
  phone: string
  category: string
  description: string
  photos: FileList | null
}

interface FormErrors {
  name?: string
  phone?: string
  category?: string
}

function validatePhone(p: string) {
  return /^(\+90|0)?[0-9]{10}$/.test(p.replace(/[\s\-()]/g, ''))
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', category: '', description: '', photos: null })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [photoNames, setPhotoNames] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Ad Soyad en az 2 karakter olmalı'
    if (!form.phone.trim() || !validatePhone(form.phone)) e.phone = 'Geçerli bir telefon numarası girin'
    if (!form.category) e.category = 'Ürün kategorisi seçin'
    return e
  }

  const handleChange = (field: keyof Omit<FormData, 'photos'>, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    setForm(prev => ({ ...prev, photos: files }))
    setPhotoNames(Array.from(files).map(f => f.name))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Honeypot check
    const honeypot = (e.target as HTMLFormElement).elements.namedItem('website') as HTMLInputElement
    if (honeypot?.value) return

    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)
    try {
      const fd = new FormData()
      fd.append('name', form.name)
      fd.append('phone', form.phone)
      fd.append('category', form.category)
      fd.append('description', form.description)
      if (form.photos) {
        Array.from(form.photos).forEach(f => fd.append('photos', f))
      }

      const res = await fetch('/api/contact', { method: 'POST', body: fd })
      if (!res.ok) throw new Error('Server error')

      setSuccess(true)
      trackFormSubmit()
    } catch {
      setErrors({ name: 'Gönderim sırasında hata oluştu. Lütfen WhatsApp ile ulaşın.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="iletisim" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <p className="eyebrow">İletişim ve Değerleme</p>
        <h2 id="contact-heading" className="section-title" style={{ marginBottom: '3rem' }}>
          Ürününüzü Değerlendirmeye Hazır Mısınız?
        </h2>

        <div className="contact-inner">
          {/* Form */}
          <div className="contact-form-wrap">
            {success ? (
              <div className="form-success">
                <CheckCircle2 size={48} color="var(--color-gold)" strokeWidth={1.5} aria-hidden="true" />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 300, margin: '1rem 0 .5rem' }}>
                  Teşekkürler!
                </h3>
                <p>
                  Değerli Eşya Merkezi ekibi <strong>2 saat içinde</strong> sizi arayacak.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Değerleme formu">
                <h3 className="form-title">Fotoğraf Gönder, Teklif Al</h3>

                {/* Honeypot */}
                <div className="form-honeypot" aria-hidden="true">
                  <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="name">Ad Soyad *</label>
                  <input
                    id="name" name="name" type="text"
                    className={`form-input${errors.name ? ' error' : ''}`}
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    placeholder="Adınız ve soyadınız"
                    required
                    autoComplete="name"
                  />
                  {errors.name && <p className="form-error" role="alert">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Telefon *</label>
                  <input
                    id="phone" name="phone" type="tel"
                    className={`form-input${errors.phone ? ' error' : ''}`}
                    value={form.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    placeholder="0 5XX XXX XX XX"
                    required
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="form-error" role="alert">{errors.phone}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="category">Ürün Kategorisi *</label>
                  <div className="form-select-wrap">
                    <select
                      id="category" name="category"
                      className={`form-select${errors.category ? ' error' : ''}`}
                      value={form.category}
                      onChange={e => handleChange('category', e.target.value)}
                      required
                    >
                      <option value="">Kategori seçin…</option>
                      {PRODUCT_CATEGORIES.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  {errors.category && <p className="form-error" role="alert">{errors.category}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="description">
                    Açıklama <span style={{ color: 'var(--color-text-3)', fontWeight: 400 }}>(opsiyonel)</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-input"
                    rows={3}
                    value={form.description}
                    onChange={e => handleChange('description', e.target.value)}
                    placeholder="Ürün hakkında bilgi verin: yaş tahmini, nereden alındığı, boyutlar…"
                    style={{ resize: 'vertical', minHeight: '80px' }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="photos">
                    Fotoğraf Yükle <span style={{ color: 'var(--color-text-3)', fontWeight: 400 }}>(opsiyonel)</span>
                  </label>
                  <label
                    className="form-upload"
                    htmlFor="photos"
                    onDragOver={e => e.preventDefault()}
                    onDrop={e => {
                      e.preventDefault()
                      const dt = e.dataTransfer
                      if (dt.files && fileInputRef.current) {
                        fileInputRef.current.files = dt.files
                        handleFiles({ target: fileInputRef.current } as React.ChangeEvent<HTMLInputElement>)
                      }
                    }}
                  >
                    <Upload size={24} color="var(--color-gold)" aria-hidden="true" />
                    <p className="form-upload-text">
                      {photoNames.length > 0
                        ? photoNames.join(', ')
                        : 'Fotoğraf seçin veya buraya sürükleyin'}
                    </p>
                    <p className="form-upload-hint">Maks. 5 fotoğraf · JPEG, PNG, WEBP · 10 MB/dosya</p>
                    <input
                      ref={fileInputRef}
                      id="photos" name="photos" type="file"
                      accept="image/jpeg,image/png,image/webp,image/heic"
                      multiple
                      onChange={handleFiles}
                    />
                  </label>
                </div>

                <div className="form-submit-wrap">
                  <button
                    type="submit"
                    className="btn btn-primary btn-full btn-lg"
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {loading ? 'Gönderiliyor…' : 'Fotoğraf Gönder, Teklif Al'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">
              Hızlı İletişim
            </h3>
            <p className="contact-info-sub">
              WhatsApp ile anlık iletişime geçin veya bizi arayın.
              Değerli Eşya Merkezi ekibi her sorunuzu yanıtlar.
            </p>

            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-wa-btn"
              onClick={() => trackWhatsAppClick('contact')}
            >
              <MessageCircle size={22} aria-hidden="true" />
              <div>
                <div style={{ fontSize: '.75rem', opacity: .8, marginBottom: '.1rem' }}>Hemen ulaşın</div>
                <div>WhatsApp&rsquo;tan Mesaj Gönderin</div>
              </div>
            </a>

            <div style={{ marginTop: '1.5rem' }}>
              {[
                { icon: Phone, label: 'Telefon', value: BRAND.phone, href: `tel:${BRAND.phoneRaw}` },
                { icon: Mail, label: 'E-posta', value: BRAND.email, href: `mailto:${BRAND.email}` },
                { icon: MapPin, label: 'Konum', value: BRAND.address, href: BRAND.mapUrl },
                { icon: Clock, label: 'Çalışma Saatleri', value: BRAND.hours, href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="contact-card-label">{label}</div>
                    {href
                      ? <a href={href} className="contact-card-value" {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{value}</a>
                      : <div className="contact-card-value">{value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
