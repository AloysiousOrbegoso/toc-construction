import Button from "../../ui/Button";
import { ctaContent } from "../../../data/content";
import "../styling/CTABanner.css";

const TICK_COUNT = 8;

export default function CTABanner() {
  const { eyebrow, title, body, cta, image } = ctaContent;

  return (
    <section className="cta-section section-pad">
      <div className="container-max cta-grid">
        <div className="cta-col">
          <div className="cta-art">
            <img src={image.src} alt={image.alt} />
          </div>
        </div>

        <div className="cta-col cta-text-col">
          <div className="tick-rule" aria-hidden="true">
            {Array.from({ length: TICK_COUNT }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
          <p className="eyebrow uppercase mb-3 cta-eyebrow">{eyebrow}</p>
          <h2 className="h2-display mb-5 cta-title">{title}</h2>
          <p className="body-text mb-8">{body}</p>
          <Button>{cta}</Button>
        </div>
      </div>
    </section>
  );
}