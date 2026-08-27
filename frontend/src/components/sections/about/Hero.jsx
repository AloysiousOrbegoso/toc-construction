import { Link } from "react-router-dom";
import heroImage from "../../../assets/about/hero.jpg";
import backArrow from "../../../assets/about/back-arrow.png";

// Desktop layout only for now — no responsive breakpoints.
// Back link sits at the top of the band, the heading block at the bottom;
// `justify-between` spreads them apart with no magic spacing.
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[554px] flex-col justify-between overflow-hidden bg-[#07112b] text-white">
      <img
        src={heroImage}
        alt="Construction site with a tower crane at golden hour"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[rgba(7,17,43,0.42)]" />

      {/* BACK CONTAINER */}
      <div className="mx-auto w-full max-w-360 px-22 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-display text-xl font-medium text-white"
        >
          <img src={backArrow} alt="" className="h-3.5 w-[18px] object-contain" />
          Back
        </Link>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="mx-auto w-full max-w-360 px-22 pb-14">
        <span className="mb-6 block font-display text-[21px] font-medium tracking-tight">
          ABOUT
        </span>
        <h1 className="mb-3 font-display text-[60px] font-bold uppercase leading-[1.05] tracking-[0.06em]">
          TOC Construction
        </h1>
        <p className="font-display text-[28px] font-medium uppercase tracking-[0.02em]">
          Building trust, one project at a time
        </p>
      </div>
    </section>
  );
}
