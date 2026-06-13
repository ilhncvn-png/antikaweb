/** @type {import('next').NextConfig} */
const isStatic = process.env.DEPLOY_TARGET === 'static'

const config = {
  // Static export for GitHub Pages; omit for Vercel/Node.js (API routes require server mode)
  ...(isStatic && { output: 'export' }),

  // GitHub Pages serves under /<repo-name>/ — set BASE_PATH env var in the workflow.
  // Empty string (default) is correct for Vercel and custom-domain GitHub Pages.
  basePath: process.env.BASE_PATH ?? '',

  images: isStatic
    ? {
        // Custom loader prepends NEXT_PUBLIC_BASE_PATH to every image src.
        // unoptimized:true alone does NOT prepend basePath — the loader does.
        loaderFile: './src/lib/image-loader.ts',
      }
    : { formats: ['image/avif', 'image/webp'], remotePatterns: [] },

  // GitHub Pages cannot serve custom response headers, so the function is omitted entirely
  // for static builds to avoid the "headers not applied" build warning.
  ...(!isStatic && {
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
  }),
}

export default config
