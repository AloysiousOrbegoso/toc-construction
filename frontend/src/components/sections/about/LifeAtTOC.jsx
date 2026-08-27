import safetyIcon from "../../../assets/about/iconsLifeSec/safteyfirst.png";
import growthIcon from "../../../assets/about/iconsLifeSec/growth.png";
import teamworkIcon from "../../../assets/about/iconsLifeSec/teamwork.png";
import innovationIcon from "../../../assets/about/iconsLifeSec/innovation.png";

// Desktop layout only for now — no responsive breakpoints.
// Icons are the pre-made 64x64 badges in assets/about/iconsLifeSec.
const allValues = [
  {
    icon: safetyIcon,
    title: "Safety First",
    desc: "We enforce rigorous safety protocols across all sites, ensuring the well-being of our workforce and partners. Zero compromise.",
    
  },
  {
    icon: growthIcon,
    title: "Growth",
    desc: "Continuous professional development and technical upskilling are mandated to maintain our leading edge in engineering.",
   
  },
  {
    icon: teamworkIcon,
    title: "Teamwork",
    desc: "Seamless collaboration between architects, engineers, and project managers guarantees efficient execution of complex scopes.",
    
  },
  {
    icon: innovationIcon,
    title: "Innovation",
    desc: "Adopting cutting-edge construction methodologies and smart technologies to deliver sustainable and modern infrastructure.",
  },
];

export default function LifeAtTOC() {
  return (
    <section className="bg-[#f6f6f6] pt-[77px] pb-24">
      <div className="mx-auto w-full max-w-360 px-22">
        <div className="mx-auto mb-16 max-w-[672px] text-center">
          <h2 className="mb-[15px] font-body text-[40px] font-semibold leading-[1.2] text-[#1a1c1c]">
            Life at TOC
          </h2>
          <p className="font-display text-[21px] leading-[1.22] text-black">
            The core values that drive our daily operations and define our corporate culture.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {allValues.map((value) => (
            <div
              key={value.title}
              className={`relative flex flex-col gap-[11px] rounded-2xl border border-[#c5c5d3] px-[41px] pt-[75px] pb-[41px] text-center `}
            >
              <img
                src={value.icon}
                alt=""
                className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full object-contain"
              />
              <h3 className="font-display text-[21px] font-semibold text-black">{value.title}</h3>
              <p className="font-display text-[21px] leading-[1.22] text-black">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
