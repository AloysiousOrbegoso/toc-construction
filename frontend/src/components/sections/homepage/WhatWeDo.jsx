import checkIcon from "../../../assets/check.png";
import WipeButton from "../../ui/WipeButton";
import photoWide from "../../../assets/homepage/WhatwedoImage2.svg";
import photoTall from "../../../assets/homepage/WhatwedoImage3.svg";
import photoBottom from "../../../assets/homepage/WhatwedoImage1.svg";

export default function WhatWeDo() {
  return (
    <section className="bg-[#f6f6f6]">
      <div className="flex flex-wrap items-center gap-[clamp(2rem,1.5rem+3vw,3.75rem)] max-w-360 mx-auto py-[clamp(3rem,2.5rem+4vw,6.25rem)] px-6 md:px-12 lg:px-22 font-display">
        <div className="flex-[1_1_320px] max-w-132.5">
          <p className="text-[#1a1c1c] text-lead font-medium tracking-[0.5px] uppercase mb-[clamp(1rem,0.8rem+1vw,1.5rem)]">
            What we do
          </p>
          <h2 className="font-body text-h1 font-semibold leading-[1.2] text-[#1a1c1c] mb-[clamp(1.25rem,1rem+1.4vw,1.75rem)]">
            Complete Construction <br />
            Solutions
          </h2>
          <p className="font-display text-lead font-extralight leading-normal text-[#1a1c1c] max-w-150">
            From concept to completion, we deliver exceptional construction
            services with quality, safety, and <br />
            innovation at the core of everything we build.
          </p>

          <div className="flex flex-col gap-[clamp(1rem,0.8rem+1vw,1.25rem)] mt-[clamp(1.5rem,1.2rem+1.5vw,2rem)] mb-[clamp(1.5rem,1.2rem+2vw,2.5rem)]">
            <div className="flex items-center gap-[clamp(0.75rem,0.6rem+0.75vw,1.25rem)] text-body font-medium text-black">
              <img
                className="w-[clamp(22px,2vw+16px,31px)] h-[clamp(20px,1.8vw+14px,28px)] shrink-0 block"
                src={checkIcon}
                alt=""
              />
              <p>Design & Build</p>
            </div>
            <div className="flex items-center gap-[clamp(0.75rem,0.6rem+0.75vw,1.25rem)] text-body font-medium text-black">
              <img
                className="w-[clamp(22px,2vw+16px,31px)] h-[clamp(20px,1.8vw+14px,28px)] shrink-0 block"
                src={checkIcon}
                alt=""
              />
              <p>Project Management</p>
            </div>
            <div className="flex items-center gap-[clamp(0.75rem,0.6rem+0.75vw,1.25rem)] text-body font-medium text-black">
              <img
                className="w-[clamp(22px,2vw+16px,31px)] h-[clamp(20px,1.8vw+14px,28px)] shrink-0 block"
                src={checkIcon}
                alt=""
              />
              <p>General Contracting</p>
            </div>
            <div className="flex items-center gap-[clamp(0.75rem,0.6rem+0.75vw,1.25rem)] text-body font-medium text-black">
              <img
                className="w-[clamp(22px,2vw+16px,31px)] h-[clamp(20px,1.8vw+14px,28px)] shrink-0 block"
                src={checkIcon}
                alt=""
              />
              <p>Renovation & Remodeling</p>
            </div>
          </div>

          <WipeButton>Explore All Services</WipeButton>
        </div>

        <div className="flex-[1_1_320px] w-full max-w-125 mx-auto">
          {/* Bulletproof square box: height comes from padding-bottom, not an
              aspect-* utility, so it can't silently fail to apply. Every photo
              below is positioned in percentages (not fixed px) and stays
              inside 0-100% on both axes, so this collage keeps the exact same
              proportions — and stays contained in this one square card — at
              any width, phone through desktop. overflow-hidden is a safety
              net against sub-pixel rounding, not load-bearing. */}
          <div className="relative w-full h-0 pt-[100%] overflow-hidden">
            {/* Bottom-left image — the biggest of the three */}
            <div className="absolute left-[12%] bottom-0 w-[76%] h-[58%] rounded-xl overflow-hidden border-4 border-[#f6f6f6] z-0">
              <img
                src={photoBottom}
                alt="Heavy equipment on a construction site"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Top-left image */}
            <div className="absolute left-[12%] top-[2%] w-[46%] h-[36%] rounded-xl overflow-hidden border-4 border-[#f6f6f6] z-0">
              <img
                src={photoWide}
                alt="Construction site overview"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Tall right image — positioned so it only overlaps the
                TOP-RIGHT portion of the bottom-left image, not its full height.
                Sits flush at top/right (no negative offset), so it can never
                float outside the card. */}
            <div className="absolute right-0 top-0 w-[40%] h-[76%] rounded-xl overflow-hidden border-4 border-[#f6f6f6] z-10">
              <img
                src={photoTall}
                alt="Tower crane against a blue sky"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}