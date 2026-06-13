/** @type {import('next').NextConfig} */
const config = {
  // Deploying to Vercel / Node.js — API routes active.
  // To switch to static export (GitHub Pages, Netlify static):
  //   output: 'export', images: { unoptimized: true }
  // Note: API routes are not supported with output: 'export'
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default config
