/**
 * Generates public/og-image.jpg at 1200×630px using Playwright.
 * Run: node scripts/gen-og-image.mjs
 */

import { chromium } from 'playwright'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_PATH = path.resolve(__dirname, '../public/og-image.jpg')

const html = /* html */ `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@400;500&display=swap" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }

  body {
    width: 1200px;
    height: 630px;
    background: #100D09;
    overflow: hidden;
    position: relative;
    font-family: 'Cormorant Garamond', 'Palatino Linotype', Georgia, serif;
  }

  /* ── Background depth ─────────────────────── */
  .bg-depth {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 90% at 25% 50%, #1E1710 0%, transparent 65%),
      radial-gradient(ellipse 40% 60% at 75% 20%, #18130E 0%, transparent 55%),
      radial-gradient(ellipse 50% 70% at 85% 80%, #1A1410 0%, transparent 50%);
  }

  /* ── Outer double border frame ────────────── */
  .frame-outer {
    position: absolute; inset: 18px;
    border: 1px solid rgba(184,154,94,.35);
  }
  .frame-inner {
    position: absolute; inset: 24px;
    border: 1px solid rgba(184,154,94,.10);
  }

  /* ── Corner ornaments ─────────────────────── */
  .corner {
    position: absolute;
    width: 52px; height: 52px;
    z-index: 20;
  }
  .corner-tl { top: 12px;  left: 12px; }
  .corner-tr { top: 12px;  right: 12px;  transform: scaleX(-1); }
  .corner-bl { bottom: 12px; left: 12px;  transform: scaleY(-1); }
  .corner-br { bottom: 12px; right: 12px; transform: scale(-1); }

  /* ── Vertical separator between panels ───── */
  .separator {
    position: absolute;
    left: 440px; top: 40px; bottom: 40px; width: 1px;
    background: linear-gradient(to bottom, transparent, rgba(184,154,94,.3) 25%, rgba(184,154,94,.3) 75%, transparent);
    z-index: 5;
  }

  /* ── Left visual panel ────────────────────── */
  .visual {
    position: absolute;
    left: 0; top: 0; width: 440px; height: 630px;
    display: flex; align-items: center; justify-content: center;
    z-index: 10;
  }

  /* ── Right text panel ─────────────────────── */
  .text-panel {
    position: absolute;
    left: 440px; top: 0; right: 0; height: 630px;
    display: flex; flex-direction: column;
    align-items: flex-start; justify-content: center;
    padding: 56px 64px 56px 60px;
    z-index: 10;
    gap: 0;
  }

  /* Typography ─────────────────────────────── */
  .eyebrow {
    font-family: 'Cinzel', 'Palatino Linotype', serif;
    font-size: 10px; font-weight: 400;
    letter-spacing: .38em;
    color: rgba(184,154,94,.75);
    text-transform: uppercase;
    margin-bottom: 22px;
  }

  .rule {
    display: flex; align-items: center; gap: 12px;
    margin-bottom: 22px; width: 100%;
  }
  .rule-line { flex:1; height:1px; background: linear-gradient(to right, rgba(184,154,94,.5), transparent); }
  .rule-dot  { width:4px; height:4px; background:#B89A5E; transform:rotate(45deg); flex-shrink:0; }

  .headline {
    font-size: 66px; font-weight: 300;
    letter-spacing: .06em; line-height: 1.06;
    color: #F2ECE2;
    margin-bottom: 28px;
  }
  .headline em { font-style: italic; color: #D4B980; }

  .gold-divider {
    display: flex; align-items: center; gap: 14px;
    width: 100%; margin-bottom: 26px;
  }
  .gold-line { flex:1; height:1px; background: linear-gradient(to right, #B89A5E, transparent); max-width: 180px; }
  .gold-diamond { font-size: 10px; color: #B89A5E; line-height:1; }

  .subtitle {
    font-size: 20px; font-weight: 300; font-style: italic;
    color: #C8B896; letter-spacing: .02em;
    margin-bottom: 30px; line-height: 1.5;
  }

  .trust {
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 28px; flex-wrap: wrap;
  }
  .trust-item {
    font-family: 'Cinzel', serif;
    font-size: 9.5px; font-weight: 400; letter-spacing: .18em;
    color: #8A7D68; text-transform: uppercase;
  }
  .trust-sep {
    width: 3px; height: 3px; background: rgba(184,154,94,.6);
    border-radius: 50%; flex-shrink:0;
  }

  .domain {
    font-family: 'Cinzel', serif;
    font-size: 10px; letter-spacing: .25em;
    color: rgba(184,154,94,.5); text-transform: uppercase;
  }
</style>
</head>
<body>

<!-- Depth layers -->
<div class="bg-depth"></div>

<!-- Border frame -->
<div class="frame-outer"></div>
<div class="frame-inner"></div>

<!-- Corner ornaments: L-shaped with interior accent -->
<svg class="corner corner-tl" viewBox="0 0 52 52" fill="none">
  <path d="M6 46 L6 6 L46 6" stroke="rgba(184,154,94,.55)" stroke-width="1.5"/>
  <circle cx="6" cy="6" r="2.5" fill="rgba(184,154,94,.7)"/>
  <path d="M6 22 L16 12" stroke="rgba(184,154,94,.25)" stroke-width="1"/>
</svg>
<svg class="corner corner-tr" viewBox="0 0 52 52" fill="none">
  <path d="M6 46 L6 6 L46 6" stroke="rgba(184,154,94,.55)" stroke-width="1.5"/>
  <circle cx="6" cy="6" r="2.5" fill="rgba(184,154,94,.7)"/>
  <path d="M6 22 L16 12" stroke="rgba(184,154,94,.25)" stroke-width="1"/>
</svg>
<svg class="corner corner-bl" viewBox="0 0 52 52" fill="none">
  <path d="M6 46 L6 6 L46 6" stroke="rgba(184,154,94,.55)" stroke-width="1.5"/>
  <circle cx="6" cy="6" r="2.5" fill="rgba(184,154,94,.7)"/>
  <path d="M6 22 L16 12" stroke="rgba(184,154,94,.25)" stroke-width="1"/>
</svg>
<svg class="corner corner-br" viewBox="0 0 52 52" fill="none">
  <path d="M6 46 L6 6 L46 6" stroke="rgba(184,154,94,.55)" stroke-width="1.5"/>
  <circle cx="6" cy="6" r="2.5" fill="rgba(184,154,94,.7)"/>
  <path d="M6 22 L16 12" stroke="rgba(184,154,94,.25)" stroke-width="1"/>
</svg>

<!-- Panel separator -->
<div class="separator"></div>

<!-- ── Left visual panel: medallion composition ── -->
<div class="visual">
  <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">

    <!-- Outermost ring -->
    <circle cx="180" cy="180" r="168" stroke="rgba(184,154,94,.12)" stroke-width="1"/>

    <!-- Outer decorative ring -->
    <circle cx="180" cy="180" r="155" stroke="rgba(184,154,94,.18)" stroke-width="1.5"/>

    <!-- Rug-inspired border: small diamonds at 16 positions -->
    ${Array.from({length:16}, (_,i) => {
      const a = (i/16)*Math.PI*2
      const r = 155
      const x = 180 + r*Math.cos(a)
      const y = 180 + r*Math.sin(a)
      return `<rect x="${x-4}" y="${y-4}" width="8" height="8" fill="rgba(184,154,94,.25)" transform="rotate(45 ${x} ${y})"/>`
    }).join('\n    ')}

    <!-- Second ring -->
    <circle cx="180" cy="180" r="138" stroke="rgba(184,154,94,.22)" stroke-width="1"/>

    <!-- 8-pointed star: two overlapping squares (Ottoman medallion pattern) -->
    <!-- Square 1 (straight) -->
    <rect x="88" y="88" width="184" height="184"
      stroke="rgba(184,154,94,.20)" stroke-width="1" fill="rgba(184,154,94,.02)"
      transform="rotate(0 180 180)"/>
    <!-- Square 2 (rotated 45°) -->
    <rect x="88" y="88" width="184" height="184"
      stroke="rgba(184,154,94,.20)" stroke-width="1" fill="rgba(184,154,94,.02)"
      transform="rotate(45 180 180)"/>

    <!-- Cross axes -->
    <line x1="180" y1="42" x2="180" y2="318" stroke="rgba(184,154,94,.08)" stroke-width="1"/>
    <line x1="42" y1="180" x2="318" y2="180" stroke="rgba(184,154,94,.08)" stroke-width="1"/>
    <line x1="80" y1="80" x2="280" y2="280" stroke="rgba(184,154,94,.06)" stroke-width="1"/>
    <line x1="280" y1="80" x2="80" y2="280" stroke="rgba(184,154,94,.06)" stroke-width="1"/>

    <!-- Inner accent ring -->
    <circle cx="180" cy="180" r="100" stroke="rgba(184,154,94,.28)" stroke-width="1.5"/>

    <!-- Inner 8-pointed star fill (the main visible element) -->
    <path d="
      M180,90 L196,164 L268,148 L210,196
      L268,244 L196,228 L180,302
      L164,228 L92,244 L150,196
      L92,148 L164,164 Z"
      fill="rgba(184,154,94,.06)" stroke="rgba(184,154,94,.30)" stroke-width="1.2"/>

    <!-- Small inner star -->
    <path d="
      M180,138 L188,172 L222,163
      L198,183 L222,203 L188,194
      L180,228 L172,194 L138,203
      L162,183 L138,163 L172,172 Z"
      fill="rgba(184,154,94,.12)" stroke="rgba(184,154,94,.40)" stroke-width="1"/>

    <!-- Central circle with clock-face detail -->
    <circle cx="180" cy="180" r="42" stroke="rgba(184,154,94,.50)" stroke-width="2" fill="rgba(184,154,94,.05)"/>
    <circle cx="180" cy="180" r="36" stroke="rgba(184,154,94,.20)" stroke-width="1"/>

    <!-- Clock-face tick marks (12 positions) -->
    ${Array.from({length:12}, (_,i) => {
      const a = (i/12)*Math.PI*2 - Math.PI/2
      const r1 = 30, r2 = i%3===0 ? 23 : 26
      return `<line x1="${180+r1*Math.cos(a)}" y1="${180+r1*Math.sin(a)}" x2="${180+r2*Math.cos(a)}" y2="${180+r2*Math.sin(a)}" stroke="rgba(184,154,94,.55)" stroke-width="${i%3===0?1.5:0.8}"/>`
    }).join('\n    ')}

    <!-- Hour hand (pointing ~10 o'clock) -->
    <line x1="180" y1="180" x2="${180 + 16*Math.cos(-Math.PI/2 - Math.PI*2/3)}" y2="${180 + 16*Math.sin(-Math.PI/2 - Math.PI*2/3)}"
      stroke="rgba(184,154,94,.70)" stroke-width="2" stroke-linecap="round"/>

    <!-- Minute hand (pointing ~2 o'clock) -->
    <line x1="180" y1="180" x2="${180 + 24*Math.cos(-Math.PI/2 + Math.PI/6)}" y2="${180 + 24*Math.sin(-Math.PI/2 + Math.PI/6)}"
      stroke="rgba(184,154,94,.70)" stroke-width="1.5" stroke-linecap="round"/>

    <!-- Center dot -->
    <circle cx="180" cy="180" r="4" fill="rgba(184,154,94,.90)"/>
    <circle cx="180" cy="180" r="2" fill="#B89A5E"/>

    <!-- Cardinal diamonds (N S E W) -->
    <rect x="176" y="35" width="8" height="8" fill="rgba(184,154,94,.45)" transform="rotate(45 180 39)"/>
    <rect x="176" y="317" width="8" height="8" fill="rgba(184,154,94,.45)" transform="rotate(45 180 321)"/>
    <rect x="317" y="176" width="8" height="8" fill="rgba(184,154,94,.45)" transform="rotate(45 321 180)"/>
    <rect x="35" y="176" width="8" height="8" fill="rgba(184,154,94,.45)" transform="rotate(45 39 180)"/>

  </svg>
</div>

<!-- ── Right text panel ── -->
<div class="text-panel">

  <div class="eyebrow">İstanbul · Türkiye · Est. 2009</div>

  <div class="rule">
    <div class="rule-dot"></div>
    <div class="rule-line"></div>
  </div>

  <h1 class="headline">
    DEĞERLİ EŞYA<br>
    <em>MERKEZİ</em>
  </h1>

  <div class="gold-divider">
    <div class="gold-line"></div>
    <span class="gold-diamond">◆</span>
    <div class="gold-line" style="background:linear-gradient(to left,#B89A5E,transparent)"></div>
  </div>

  <p class="subtitle">
    Antika · El Dokuması Halı<br>
    ve Değerli Eşya Alımı
  </p>

  <div class="trust">
    <span class="trust-item">Ücretsiz Değerleme</span>
    <span class="trust-sep"></span>
    <span class="trust-item">Yerinde İnceleme</span>
    <span class="trust-sep"></span>
    <span class="trust-item">Aynı Gün Ödeme</span>
  </div>

  <div class="domain">degerliesyamerkezi.com</div>

</div>

</body>
</html>`

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.setViewportSize({ width: 1200, height: 630 })
  await page.setContent(html, { waitUntil: 'networkidle' })

  // Wait for web fonts to render
  await page.waitForFunction(() => document.fonts.ready)
  await page.waitForTimeout(800)

  await page.screenshot({
    path: OUT_PATH,
    type: 'jpeg',
    quality: 94,
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  })

  await browser.close()
  console.log('✓ Generated:', OUT_PATH)
})()
