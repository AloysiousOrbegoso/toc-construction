import { useEffect, useState } from "react";
import Concrete from "../../../assets/ConcreteBatchingPlant.png";
import Provinces from "../../../assets/Provines.png";
import Equipment from "../../../assets/Equipments.png";
import WipeButton from "../../ui/WipeButton";
import slide1 from "../../../assets/homepage/slide1.avif";
import slide2 from "../../../assets/homepage/Projects_1.png";
import slide3 from "../../../assets/homepage/Projects_2.png";
import slide4 from "../../../assets/homepage/Projects_3.png";

// Swap/add real hero photography here later — plain rectangular photos only,
// the curved edge is applied in CSS below, not baked into any image file.
const SLIDES = [slide1, slide2, slide3, slide4];

const SLIDE_HOLD_MS = 3000; // how long each slide stays fully visible
const TRANSITION_MS = 500; // crossfade duration between slides

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_HOLD_MS + TRANSITION_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#07112B] text-white overflow-hidden min-h-[calc(100dvh-72px)] md:min-h-[calc(100dvh-81px)]">
      <div className="max-w-360 mx-auto flex flex-wrap items-start min-h-[calc(100dvh-72px)] md:min-h-[calc(100dvh-81px)] relative z-10 pointer-events-none">
        <div className="pointer-events-auto flex-[1_1_320px] max-w-200 pt-[clamp(2.5rem,2rem+4vw,7.5rem)] pr-6 md:pr-12 lg:pr-22 pb-[clamp(2rem,1.5rem+3vw,3.75rem)] pl-6 md:pl-12 lg:pl-22 relative z-2">
          <h1 className="font-body text-[clamp(2.25rem,1.5rem+5vw,5rem)] font-bold leading-[0.99] tracking-[clamp(0.05rem,0.15vw,0.2325rem)] mb-[clamp(1.25rem,1rem+1.5vw,2rem)]">
            We Build
            <br />
            The Future
          </h1>

          <p className="font-display text-[clamp(1rem,0.9rem+0.6vw,1.3125rem)] font-medium leading-[1.36] mb-[clamp(1.5rem,1.2rem+2vw,2.5rem)] text-white">
            Setting new standards in high-rise living
            <br />
            with precision engineering and
            <br />
            sustainable design.
          </p>

          <div className="flex flex-wrap gap-16 mb-[clamp(2rem,1.5rem+3vw,5rem)]">
            <WipeButton className="text-xl">Get a Quote</WipeButton>
            <WipeButton variant="outline" className="text-xl">
              View Projects
            </WipeButton>
          </div>

          <div className="flex flex-wrap gap-[clamp(1.5rem,1rem+3vw,4rem)]">
            <div className="flex flex-row items-center gap-3">
              <img
                className="w-[clamp(28px,2vw+20px,36px)] h-[clamp(29px,2vw+21px,37px)] shrink-0 block"
                src={Concrete}
                alt=""
              />
              <div>
                <p className="font-body text-[clamp(1.75rem,1.5rem+1.5vw,2.5rem)] font-semibold leading-none">
                  20
                </p>
                <p className="font-display text-[clamp(0.75rem,0.7rem+0.2vw,0.875rem)] font-normal text-white tracking-[-0.28px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.1)] mt-0">
                  Concrete Batching Plants
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3">
              <img
                className="w-[clamp(28px,2vw+20px,36px)] h-[clamp(29px,2vw+21px,37px)] shrink-0 block"
                src={Provinces}
                alt=""
              />
              <div>
                <p className="font-body text-[clamp(1.75rem,1.5rem+1.5vw,2.5rem)] font-semibold leading-none">
                  40
                </p>
                <p className="font-display text-[clamp(0.75rem,0.7rem+0.2vw,0.875rem)] font-normal text-white tracking-[-0.28px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.1)] mt-0">
                  Provinces
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3">
              <img
                className="w-[clamp(28px,2vw+20px,36px)] h-[clamp(29px,2vw+21px,37px)] shrink-0 block"
                src={Equipment}
                alt=""
              />
              <div>
                <p className="font-body text-[clamp(1.75rem,1.5rem+1.5vw,2.5rem)] font-semibold leading-none">
                  1500
                </p>
                <p className="font-display text-[clamp(0.75rem,0.7rem+0.2vw,0.875rem)] font-normal text-white tracking-[-0.28px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.1)] mt-0">
                  Equipment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#07112B]">
        {SLIDES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            style={{ transitionDuration: `${TRANSITION_MS}ms` }}
            className={`absolute inset-0 h-full w-full object-cover ease-in-out ${
              index === activeIndex
                ? "opacity-100 transition-opacity"
                : "opacity-0 transition-opacity"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,43,0.96)_0%,rgba(7,17,43,0.78)_38%,rgba(7,17,43,0.32)_100%)]" />
        <div className="absolute inset-0 bg-linear-to-t from-[#07112B]/80 via-transparent to-[#07112B]/20" />

        <div className="pointer-events-auto absolute bottom-6 right-6 left-6 z-10 ml-auto max-w-xl sm:bottom-10 sm:right-10 sm:left-auto">

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => setActiveIndex((index) => (index - 1 + SLIDES.length) % SLIDES.length)}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/20 text-lg leading-none text-white/75 transition-colors hover:bg-white/15 hover:text-white"
            >
              &lt;
            </button>

            <div className="flex min-w-0 items-center gap-3 overflow-hidden">
              {[-1, 0, 1].map((offset) => {
                const index = (activeIndex + offset + SLIDES.length) % SLIDES.length;
                const isActive = offset === 0;

                return (
                  <button
                    key={`${index}-${offset}`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-16 shrink-0 overflow-hidden rounded-[3px] border-0 p-0 transition-all duration-500 ease-in-out sm:h-20 ${
                      isActive ? "w-28 opacity-100 sm:w-36" : "w-20 opacity-70 hover:opacity-100 sm:w-24"
                    }`}
                  >
                    <img src={SLIDES[index]} alt="" className="h-full w-full object-cover" />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              aria-label="Next slide"
              onClick={() => setActiveIndex((index) => (index + 1) % SLIDES.length)}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/20 text-lg leading-none text-white/75 transition-colors hover:bg-white/15 hover:text-white"
            >
              &gt;
            </button>
          </div>

          <div className="mt-3 flex justify-center gap-2">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full border-0 cursor-pointer transition-all duration-300 ease-in-out ${
                  index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}