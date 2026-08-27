import Button from "../../ui/Button";
import { ctaContent } from "../../../data/content";

const TICK_COUNT = 8;

export default function CTABanner() {
  const { eyebrow, title, body, cta, image } = ctaContent;

  return (
    <section className="bg-navy-950 bg-[radial-gradient(1000px_420px_at_15%_0%,rgba(47,95,224,0.22),transparent_60%)] py-[clamp(3rem,3rem+4vw,6.5rem)] px-6 md:px-12 lg:px-22">
      <div className="max-w-360 mx-auto flex flex-wrap items-center gap-[clamp(2rem,1.5rem+3vw,5rem)]">
        <div className="flex-[1_1_clamp(280px,45%,520px)] min-w-70">
          <div className="relative rounded-2xl overflow-hidden aspect-6/5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.5)] after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(200deg,rgba(10,25,48,0.15),transparent_55%)]">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover block" />
          </div>
        </div>

        <div className="flex-[1_1_clamp(280px,45%,520px)] min-w-70">
          <div
            className="flex items-end gap-[clamp(4px,0.6vw,8px)] h-[clamp(14px,1.8vw,22px)] mb-[clamp(1rem,0.9rem+0.5vw,1.5rem)]"
            aria-hidden="true"
          >
            {Array.from({ length: TICK_COUNT }).map((_, i) => (
              <span key={i} className="w-0.5 bg-gold rounded-[1px] odd:h-full even:h-[55%]" />
            ))}
          </div>
          <p className="text-[clamp(0.7rem,0.68rem+0.15vw,0.8rem)] tracking-[0.14em] font-bold uppercase mb-3 text-blue-300">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(1.75rem,1.3rem+2vw,2.75rem)] leading-[1.12] font-extrabold tracking-[-0.01em] mb-5 text-white">
            {title}
          </h2>
          <p className="text-[clamp(0.95rem,0.9rem+0.2vw,1.05rem)] leading-[1.7] mb-8 text-muted-on-dark">
            {body}
          </p>
          <Button>{cta}</Button>
        </div>
      </div>
    </section>
  );
}