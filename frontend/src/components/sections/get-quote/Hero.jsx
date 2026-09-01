import { Link } from "react-router-dom";
import backArrow from "../../../assets/about/back-arrow.png";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[558px] flex-col justify-end overflow-hidden bg-[#07112b] text-white">
      <img
        src="{/* hanap ko mga mga picture*/}"
        alt="fix ko pa dito"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,17,43,0.55)_0%,rgba(7,17,43,0.75)_100%)]" />

      <div className="mx-auto w-full max-w-360 px-22 pb-12">
        <span className="mb-4 block font-display text-[21px] font-medium tracking-[-0.017em]">
          REQUEST QUOTE
        </span>
        <h1 className="mb-2 font-display text-[60px] font-bold uppercase leading-[1.05] tracking-[0.03em]">
          Vision Realized
        </h1>
        <p className="font-display text-[28px] font-medium uppercase tracking-[0.02em]">
          With Ground Work
        </p>
      </div>
    </section>
  );
}
