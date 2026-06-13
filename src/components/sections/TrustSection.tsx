import { TESTIMONIALS } from '@/lib/constants'

export default function TrustSection() {
  return (
    <>
      {/* Stats Band */}
      <section className="stats-strip" aria-labelledby="stats-heading">
        <div className="container">
          <h2 id="stats-heading" className="sr-only">İstatistiklerimiz</h2>
          <div className="stats-grid" role="list">
            {[
              { val: '500+', lbl: 'Mutlu Müşteri' },
              { val: '15+', lbl: 'Yıl Deneyim' },
              { val: '%98', lbl: 'Memnuniyet' },
              { val: '2 Saat', lbl: 'Yanıt Süresi' },
            ].map(s => (
              <div key={s.lbl} className="reveal" role="listitem">
                <span className="stat-val">{s.val}</span>
                <span className="stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" aria-labelledby="reviews-heading">
        <div className="container">
          <p className="eyebrow">Müşteri Yorumları</p>
          <h2 id="reviews-heading" className="section-title">
            Müşterilerimiz Ne Diyor?
          </h2>

          {/* Featured first testimonial */}
          <article className="testimonial-featured reveal" aria-label={`${TESTIMONIALS[0].name} yorumu`}>
            <div className="testimonial-featured-stars" aria-label="5 yıldız puanlama">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="star" aria-hidden="true">★</span>
              ))}
            </div>
            <blockquote>
              <p className="testimonial-featured-quote">{TESTIMONIALS[0].quote}</p>
            </blockquote>
            <footer className="testimonial-featured-footer">
              <p className="testimonial-author">{TESTIMONIALS[0].name}</p>
              <p className="testimonial-loc">{TESTIMONIALS[0].location}</p>
            </footer>
          </article>

          {/* Smaller testimonials */}
          <div className="testimonials-sub-grid" role="list">
            {TESTIMONIALS.slice(1).map(t => (
              <article key={t.name} className="testimonial-card-sm reveal" role="listitem">
                <div className="stars" aria-label="5 yıldız puanlama">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="star" aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote>
                  <p className="testimonial-quote">{t.quote}</p>
                </blockquote>
                <footer>
                  <p className="testimonial-author">{t.name}</p>
                  <p className="testimonial-loc">{t.location}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
