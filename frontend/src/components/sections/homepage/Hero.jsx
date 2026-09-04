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
          <h1 className="font-body text-display font-bold leading-[0.99] tracking-[clamp(0.05rem,0.15vw,0.2325rem)] mb-[clamp(1.25rem,1rem+1.5vw,2rem)]">
            We Build
            <br />
            The Future
          </h1>

          <p className="font-display text-lead font-medium leading-[1.36] mb-[clamp(1.5rem,1.2rem+2vw,2.5rem)] text-white">
            Setting new standards in high-rise living
            <br />
            with precision engineering and
            <br />
            sustainable design.
          </p>

          <div className="flex flex-wrap gap-16 mb-[clamp(2rem,1.5rem+3vw,5rem)]">
            <WipeButton>Get a Quote</WipeButton>
            <WipeButton variant="outline">
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
                <p className="font-body text-h1 font-semibold leading-none">
                  20
                </p>
                <p className="font-display text-small font-normal text-white tracking-[-0.28px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.1)] mt-0">
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
                <p className="font-body text-h1 font-semibold leading-none">
                  40
                </p>
                <p className="font-display text-small font-normal text-white tracking-[-0.28px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.1)] mt-0">
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
                <p className="font-body text-h1 font-semibold leading-none">
                  1500
                </p>
                <p className="font-display text-small font-normal text-white tracking-[-0.28px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.1)] mt-0">
                  Equipment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image carousel — curved edge is applied via CSS clip-path below,
          not baked into the photos, so any image can be dropped into SLIDES.
          Sits at section level (not inside the centered container) so it
          reaches the viewport's right edge on wide screens. */}
      <div className="absolute top-0 right-0 bottom-0 w-[min(1690px,100%)] z-0">
          <svg width="0" height="0" aria-hidden="true">
            <defs>
              {/* Approximation of the original curve. Coordinates are in a
                  0–1 box relative to the image container (objectBoundingBox),
                  so it scales with the container automatically.
                  Tweak the two control points below if the curve needs to
                  bulge more/less or shift left/right. */}
              <clipPath id="heroCurveClip" clipPathUnits="objectBoundingBox">
                <path d="M0.67,0 C0.39,0.22 0.29,0.6 0.62,1 L1,1 L1,0 Z" />
                  </clipPath>
            </defs>
          </svg>

          <div className="relative w-full h-full [clip-path:url(#heroCurveClip)]">
            {SLIDES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                style={{ transitionDuration: `${TRANSITION_MS}ms` }}
                className={`absolute inset-0 w-full h-full object-cover ease-in-out ${
                  i === activeIndex
                    ? "opacity-100 transition-opacity"
                    : "opacity-0 transition-opacity"
                }`}
              />
            ))}
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full border-0 cursor-pointer transition-all duration-300 ease-in-out ${
                  i === activeIndex ? "w-6 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
    </section>
  );
}