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
          <h4 className="text-[#1a1c1c] text-[clamp(0.95rem,0.85rem+0.5vw,1.3125rem)] font-medium tracking-[0.5px] uppercase mb-[clamp(1rem,0.8rem+1vw,1.5rem)]">
            What we do
          </h4>
          <h1 className="font-body text-[clamp(1.75rem,1.4rem+1.8vw,2.5rem)] font-semibold leading-[1.2] text-[#1a1c1c] mb-[clamp(1.25rem,1rem+1.4vw,1.75rem)]">
            Complete Construction <br />
            Solutions
          </h1>
          <p className="font-display text-[clamp(1rem,0.9rem+0.5vw,1.3125rem)] font-extralight leading-normal text-[#1a1c1c] max-w-150">
            From concept to completion, we deliver exceptional construction
            services with quality, safety, and <br />
            innovation at the core of everything we build.
          </p>

          <div className="flex flex-col gap-[clamp(1rem,0.8rem+1vw,1.25rem)] mt-[clamp(1.5rem,1.2rem+1.5vw,2rem)] mb-[clamp(1.5rem,1.2rem+2vw,2.5rem)]">
            <div className="flex items-center gap-[clamp(0.75rem,0.6rem+0.75vw,1.25rem)] text-[clamp(1rem,0.9rem+0.5vw,1.3125rem)] font-medium text-black">
              <img
                className="w-[clamp(22px,2vw+16px,31px)] h-[clamp(20px,1.8vw+14px,28px)] shrink-0 block"
                src={checkIcon}
                alt=""
              />
              <p>Design & Build</p>
            </div>
            <div className="flex items-center gap-[clamp(0.75rem,0.6rem+0.75vw,1.25rem)] text-[clamp(1rem,0.9rem+0.5vw,1.3125rem)] font-medium text-black">
              <img
                className="w-[clamp(22px,2vw+16px,31px)] h-[clamp(20px,1.8vw+14px,28px)] shrink-0 block"
                src={checkIcon}
                alt=""
              />
              <p>Project Management</p>
            </div>
            <div className="flex items-center gap-[clamp(0.75rem,0.6rem+0.75vw,1.25rem)] text-[clamp(1rem,0.9rem+0.5vw,1.3125rem)] font-medium text-black">
              <img
                className="w-[clamp(22px,2vw+16px,31px)] h-[clamp(20px,1.8vw+14px,28px)] shrink-0 block"
                src={checkIcon}
                alt=""
              />
              <p>General Contracting</p>
            </div>
            <div className="flex items-center gap-[clamp(0.75rem,0.6rem+0.75vw,1.25rem)] text-[clamp(1rem,0.9rem+0.5vw,1.3125rem)] font-medium text-black">
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

        <div className="-m-6 flex-[1_1_500px] max-w-250">
          {/* Bulletproof aspect-ratio box: height comes from padding-bottom,
              not from an aspect-* utility, so it can't silently fail to apply */}
          <div className="relative w-full h-0 pt-[75%]">
            {/* Bottom-left image — the biggest of the three */}
            <div className="absolute left-12 bottom-0 w-[90%] h-[56%] rounded-xl overflow-hidden border-4 border-[#f6f6f6] z-0">
              <img
                src={photoBottom}
                alt="Heavy equipment on a construction site"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Top-left image */}
            <div className="absolute left-12 top-1 w-[52%] h-[40%] rounded-xl overflow-hidden border-4 border-[#f6f6f6] z-0">
              <img
                src={photoWide}
                alt="Construction site overview"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Tall right image — positioned so it only overlaps the
                TOP-RIGHT portion of the bottom-left image, not its full height */}
            <div className="absolute right-0 -top-6 w-[42%] h-[82%] overflow-hidden border-30 border-[#f6f6f6] z-10">
              <img
                src={photoTall}
                alt="Tower crane against a blue sky"
                className="overflow-hidden rounded-md w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}