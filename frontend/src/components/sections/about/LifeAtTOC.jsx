import safetyIcon from "../../../assets/about/iconsLifeSec/safteyfirst.png";
import growthIcon from "../../../assets/about/iconsLifeSec/growth.png";
import teamworkIcon from "../../../assets/about/iconsLifeSec/teamwork.png";
import innovationIcon from "../../../assets/about/iconsLifeSec/innovation.png";

export default function LifeAtTOC() {
  return (
    <section className="bg-[#f6f6f6] pt-[77px] pb-24">
      <div className="mx-auto w-full max-w-360 px-6 md:px-12 lg:px-22">
        <div className="mx-auto mb-16 max-w-[672px] text-center">
          <h2 className="mb-[15px] font-body text-h1 font-semibold leading-[1.2] text-[#1a1c1c]">
            Life at TOC
          </h2>
          <p className="font-display text-lead text-black">
            The core values that drive our daily operations and define our corporate culture.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-5 gap-y-14">
          <div className="relative flex flex-col gap-[11px] rounded-2xl border border-[#c5c5d3] px-[clamp(1.25rem,1rem+2vw,2.5rem)] pt-[75px] pb-[clamp(1.5rem,1.25rem+1.5vw,2.5rem)] text-center">
            <img
              src={safetyIcon}
              alt=""
              className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full object-contain"
            />
            <h3 className="font-display text-h3 font-semibold text-black">Safety First</h3>
            <p className="font-display text-body text-black">
              We enforce rigorous safety protocols across all sites, ensuring the well-being of our
              workforce and partners. Zero compromise.
            </p>
          </div>

          <div className="relative flex flex-col gap-[11px] rounded-2xl border border-[#c5c5d3] px-[clamp(1.25rem,1rem+2vw,2.5rem)] pt-[75px] pb-[clamp(1.5rem,1.25rem+1.5vw,2.5rem)] text-center">
            <img
              src={growthIcon}
              alt=""
              className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full object-contain"
            />
            <h3 className="font-display text-h3 font-semibold text-black">Growth</h3>
            <p className="font-display text-body text-black">
              Continuous professional development and technical upskilling are mandated to maintain our
              leading edge in engineering.
            </p>
          </div>

          <div className="relative flex flex-col gap-[11px] rounded-2xl border border-[#c5c5d3] px-[clamp(1.25rem,1rem+2vw,2.5rem)] pt-[75px] pb-[clamp(1.5rem,1.25rem+1.5vw,2.5rem)] text-center">
            <img
              src={teamworkIcon}
              alt=""
              className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full object-contain"
            />
            <h3 className="font-display text-h3 font-semibold text-black">Teamwork</h3>
            <p className="font-display text-body text-black">
              Seamless collaboration between architects, engineers, and project managers guarantees
              efficient execution of complex scopes.
            </p>
          </div>

          <div className="relative flex flex-col gap-[11px] rounded-2xl border border-[#c5c5d3] px-[clamp(1.25rem,1rem+2vw,2.5rem)] pt-[75px] pb-[clamp(1.5rem,1.25rem+1.5vw,2.5rem)] text-center">
            <img
              src={innovationIcon}
              alt=""
              className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full object-contain"
            />
            <h3 className="font-display text-h3 font-semibold text-black">Innovation</h3>
            <p className="font-display text-body text-black">
              Adopting cutting-edge construction methodologies and smart technologies to deliver
              sustainable and modern infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
