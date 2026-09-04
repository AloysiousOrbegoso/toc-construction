import { Link } from "react-router-dom";
import heroImage from "../../../assets/about/hero.jpg";
import backArrow from "../../../assets/about/back-arrow.png";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[554px] flex-col justify-between overflow-hidden bg-[#07112b] text-white">
      <img
        src={heroImage}
        alt="Construction site with a tower crane at golden hour"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[rgba(7,17,43,0.42)]" />

      <div className="mx-auto w-full max-w-360 px-6 pt-10 md:px-12 lg:px-22 lg:pt-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-display text-lead font-medium text-white"
        >
          <img src={backArrow} alt="" className="h-3.5 w-[18px] object-contain" />
          Back
        </Link>
      </div>

      <div className="mx-auto w-full max-w-360 px-6 md:px-12 lg:px-22 pb-14">
        <span className="mb-6 block font-display text-lead font-medium tracking-tight">
          ABOUT
        </span>
        <h1 className="mb-3 font-body text-display font-bold uppercase leading-[1.05] tracking-[0.06em]">
          TOC Construction
        </h1>
        <p className="font-display text-h2 font-medium uppercase tracking-[0.02em]">
          Building trust, one project at a time
        </p>
      </div>
    </section>
  );
}
