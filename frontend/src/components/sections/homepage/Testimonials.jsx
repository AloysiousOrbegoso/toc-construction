import { testimonials } from "../../../data/content";
import "../styling/Testimonials.css";

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <div className="mb-10 testimonials-heading">
          <p className="eyebrow uppercase mb-3 testimonials-eyebrow">Client Testimonials</p>
          <h2 className="h2-display mb-4 testimonials-title">What Our Client Say</h2>
          <p className="body-text testimonials-subtitle">
            Don&apos;t just take our word for it. Here&apos;s what our client have to say about
            working with us.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <div className="quote-mark">&ldquo;</div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <div className="testimonial-person">
                <img className="testimonial-avatar" src={t.avatar} alt={t.name} />
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}