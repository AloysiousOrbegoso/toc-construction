import heroImage from "../../../assets/about/hero.jpg";
import BackButton from "../../ui/BackButton";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[480px] overflow-hidden bg-[#07112b] text-white sm:min-h-[520px] lg:min-h-[554px]">
      <img
        src={heroImage}
        alt="Construction site with a tower crane at golden hour"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[rgba(7,17,43,0.42)]" />

      <BackButton />

      <div className="absolute bottom-7 left-6 right-6 md:bottom-8 md:left-12 md:right-12 lg:bottom-14 lg:left-22 lg:right-22">
        <span className="mb-4 block font-display text-lead font-medium uppercase tracking-tight">
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
