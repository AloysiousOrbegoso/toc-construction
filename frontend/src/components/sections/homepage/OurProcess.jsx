import WipeButton from "../../ui/WipeButton";
import one from "../../../assets/ourproccessicon/1.png";
import two from "../../../assets/ourproccessicon/2.png";
import three from "../../../assets/ourproccessicon/3.png";
import four from "../../../assets/ourproccessicon/4.png";

const processSteps = [
  { icon: one, number: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
  { icon: two, number: "02", title: "Planning", desc: "Detailed planning and strategy development" },
  { icon: three, number: "03", title: "Construction", desc: "Expert construction with quality assurance" },
  { icon: four, number: "04", title: "Delivery", desc: "On-time delivery with satisfaction" },
];

export default function OurProcess() {
  return (
    <section className="bg-[#07112b] text-white">
      <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-[clamp(2rem,1.5rem+3vw,3rem)] max-w-360 mx-auto py-[clamp(3rem,2.5rem+4vw,6.25rem)] px-6 md:px-12 lg:px-22 font-display">
        <div className="flex-[1_1_0%] min-w-0 max-w-105">
          <span className="block text-white text-lead font-medium tracking-[0.5px] uppercase mb-[clamp(0.75rem,0.6rem+0.8vw,1rem)]">
            Our Process
          </span>
          <h2 className="font-body text-h1 font-semibold leading-[1.2] text-white mb-[clamp(1.25rem,1rem+1.4vw,1.5rem)]">
            How We Work
          </h2>
          <p className="text-lead font-normal leading-normal text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.1)] max-w-150 mb-[clamp(2rem,1.6rem+2.5vw,3.5rem)] font-display">
            A streamlined process that ensures your project is delivered on
            time, on budget, and beyond expectations.
          </p>
          <WipeButton variant="outline">Learn More</WipeButton>
        </div>

        <div className="flex-[2_1_0%] min-w-0 grid grid-cols-2 gap-[clamp(1.5rem,1.2rem+2vw,2.5rem)] sm:grid-cols-4">
          {processSteps.map((step) => (
            <div className="flex-1 min-w-0 flex flex-col gap-[clamp(1rem,0.8rem+1vw,1.5rem)]" key={step.number}>
              <div className="w-[clamp(56px,4vw+40px,74px)] h-[clamp(54px,4vw+38px,71px)] rounded-full flex items-center justify-center shrink-0">
                <img src={step.icon} alt="" />
              </div>
              <div>
                <span className="text-h3 font-semibold block mb-0.5">
                  {step.number}
                </span>
                <span className="text-h3 font-semibold block">
                  {step.title}
                </span>
              </div>
              <p className="text-body font-medium leading-[1.57] max-w-55 text-white/80 font-display">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}