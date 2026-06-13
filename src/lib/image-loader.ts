// Custom loader used only in static export (GitHub Pages).
// next/image with unoptimized:true does not prepend basePath to src,
// so we do it explicitly here via NEXT_PUBLIC_BASE_PATH.
// Vercel builds use the default Next.js loader (loaderFile is not set there).

type ImageLoaderProps = {
  src: string
  width: number
  quality?: number
}

export default function imageLoader({ src }: ImageLoaderProps): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return `${base}${src}`
}
