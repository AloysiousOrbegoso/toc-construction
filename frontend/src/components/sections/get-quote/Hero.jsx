import BackButton from "../../ui/BackButton";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[480px] flex-col justify-end overflow-hidden bg-[#07112b] text-white sm:min-h-[520px] lg:min-h-[558px]">
      <BackButton />
      <img
        src="{/* hanap ko mga mga picture*/}"
        alt="fix ko pa dito"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,17,43,0.55)_0%,rgba(7,17,43,0.75)_100%)]" />

      <div className="mx-auto w-full max-w-360 px-6 md:px-12 lg:px-22 pb-14">
        <span className="mb-6 block font-display text-lead font-medium tracking-tight">
          REQUEST QUOTE
        </span>
        <h1 className="mb-3 font-body text-display font-bold uppercase leading-[1.05] tracking-[0.06em]">
          Vision Realized
        </h1>
        <p className="font-display text-h2 font-medium uppercase tracking-[0.02em]">
          With Ground Work
        </p>
      </div>
    </section>
  );
}
