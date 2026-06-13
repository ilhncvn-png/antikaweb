import { NextRequest, NextResponse } from 'next/server'

const RATE_LIMIT = new Map<string, { count: number; ts: number }>()
const RATE_WINDOW = 60 * 60 * 1000 // 1 hour
const RATE_MAX = 3

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = RATE_LIMIT.get(ip)
  if (!entry || now - entry.ts > RATE_WINDOW) {
    RATE_LIMIT.set(ip, { count: 1, ts: now })
    return false
  }
  if (entry.count >= RATE_MAX) return true
  entry.count++
  return false
}

function validatePhone(p: string): boolean {
  return /^(\+90|0)?[0-9]{10}$/.test(p.replace(/[\s\-()]/g, ''))
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Çok fazla istek. Lütfen daha sonra tekrar deneyin.' }, { status: 429 })
  }

  let formData: FormData
  try {
    formData = await req.formData()
  } catch {
    return NextResponse.json({ error: 'Geçersiz form verisi.' }, { status: 400 })
  }

  const name        = (formData.get('name') as string | null)?.trim() ?? ''
  const phone       = (formData.get('phone') as string | null)?.trim() ?? ''
  const category    = (formData.get('category') as string | null)?.trim() ?? ''
  const description = (formData.get('description') as string | null)?.trim().slice(0, 1000) ?? ''
  const honeypot    = (formData.get('website') as string | null) ?? ''
  const photos      = formData.getAll('photos') as File[]

  // Honeypot check
  if (honeypot) {
    return NextResponse.json({ success: true }) // Silently accept bot submissions
  }

  // Validation
  if (!name || name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: 'Geçersiz isim.' }, { status: 400 })
  }
  if (!phone || !validatePhone(phone)) {
    return NextResponse.json({ error: 'Geçersiz telefon numarası.' }, { status: 400 })
  }
  if (!category) {
    return NextResponse.json({ error: 'Kategori seçilmedi.' }, { status: 400 })
  }

  // Photo validation
  const MAX_PHOTOS = 5
  const MAX_SIZE   = 10 * 1024 * 1024
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic']

  const validPhotos = photos.filter(f => f.size > 0)
  if (validPhotos.length > MAX_PHOTOS) {
    return NextResponse.json({ error: 'Maksimum 5 fotoğraf yüklenebilir.' }, { status: 400 })
  }
  for (const photo of validPhotos) {
    if (photo.size > MAX_SIZE) {
      return NextResponse.json({ error: 'Her fotoğraf en fazla 10 MB olabilir.' }, { status: 400 })
    }
    if (!ALLOWED_TYPES.includes(photo.type)) {
      return NextResponse.json({ error: 'Sadece JPEG, PNG veya WEBP dosyası yüklenebilir.' }, { status: 400 })
    }
  }

  // Temporary log until email sending is configured — visible in Vercel logs
  console.log('[Contact Form] New lead', {
    name,
    phone: phone.slice(0, -4) + '****',
    category,
    hasDescription: description.length > 0,
    photoCount: validPhotos.length,
    ts: new Date().toISOString(),
  })

  /*
   * PLACEHOLDER: Implement real email sending.
   *
   * Option 1 — Resend:
   *   import { Resend } from 'resend'
   *   const resend = new Resend(process.env.RESEND_API_KEY)
   *   await resend.emails.send({
   *     from: 'form@degerliesyamerkezi.com',
   *     to: process.env.CONTACT_EMAIL!,
   *     subject: `Yeni Değerleme Talebi: ${name} — ${category}`,
   *     text: `Ad: ${name}\nTelefon: ${phone}\nKategori: ${category}`,
   *     attachments: await Promise.all(validPhotos.map(async f => ({
   *       filename: f.name,
   *       content: Buffer.from(await f.arrayBuffer()),
   *     }))),
   *   })
   *
   * Option 2 — Nodemailer (SMTP):
   *   See /docs for SMTP configuration.
   */

  return NextResponse.json({ success: true })
}
