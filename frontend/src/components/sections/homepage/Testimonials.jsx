import { testimonials } from "../../../data/content";

export default function Testimonials() {
  return (
    <section className="py-[clamp(3rem,3rem+4vw,6.5rem)] px-6 md:px-12 lg:px-22">
      <div className="max-w-360 mx-auto">
        <div className="mb-10 max-w-160">
          <p className="text-[clamp(0.7rem,0.68rem+0.15vw,0.8rem)] tracking-[0.14em] font-bold uppercase mb-3 text-blue-500">
            Client Testimonials
          </p>
          <h2 className="text-[clamp(1.75rem,1.3rem+2vw,2.75rem)] leading-[1.12] font-extrabold tracking-[-0.01em] mb-4 text-navy-950">
            What Our Client Say
          </h2>
          <p className="text-[clamp(0.95rem,0.9rem+0.2vw,1.05rem)] leading-[1.7] text-muted">
            Don&apos;t just take our word for it. Here&apos;s what our client have to say about
            working with us.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(1.25rem,1rem+1.2vw,2rem)]">
          {testimonials.map((t) => (
            <div
              className="border border-hairline rounded-[0.9rem] p-[clamp(1.5rem,1.3rem+1vw,2.25rem)] flex flex-col h-full"
              key={t.id}
            >
              <div className="font-[Georgia,serif] text-[clamp(2.25rem,1.9rem+1.5vw,3.25rem)] leading-none text-blue-300 mb-[clamp(0.5rem,0.4rem+0.4vw,0.85rem)] font-bold">
                &ldquo;
              </div>
              <p className="text-[clamp(0.88rem,0.85rem+0.15vw,0.98rem)] leading-[1.65] text-ink grow mb-[clamp(1.25rem,1.1rem+0.6vw,1.75rem)]">
                {t.quote}
              </p>
              <div
                className="text-gold text-[clamp(0.7rem,0.68rem+0.1vw,0.8rem)] tracking-widest mb-[clamp(0.6rem,0.5rem+0.4vw,0.9rem)]"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>
              <div className="flex items-center gap-[clamp(0.6rem,0.55rem+0.3vw,0.85rem)]">
                <img
                  className="w-[clamp(38px,3vw+24px,48px)] h-[clamp(38px,3vw+24px,48px)] rounded-full object-cover shrink-0"
                  src={t.avatar}
                  alt={t.name}
                />
                <div>
                  <p className="font-bold text-[clamp(0.85rem,0.83rem+0.1vw,0.92rem)] text-navy-950">
                    {t.name}
                  </p>
                  <p className="text-[clamp(0.75rem,0.73rem+0.1vw,0.82rem)] text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}