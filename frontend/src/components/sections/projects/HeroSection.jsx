import { projectsPageContent } from "../../../data/content";

export default function HeroSection() {
  const { eyebrow, title, subtitle, image } = projectsPageContent.hero;

  return (
    <section
      className="relative isolate min-h-80 w-full overflow-hidden bg-[#101b2c] text-white sm:aspect-1440/554 sm:min-h-0"
      style={{
        backgroundImage: `linear-gradient(rgba(7, 17, 43, 0.55), rgba(7, 17, 43, 0.55)), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <a
        href="/"
        className="absolute left-6 top-8 font-display text-lead font-medium text-white md:left-12 md:top-11 lg:left-22"
      >
        &lt;- Back
      </a>

      <div className="absolute bottom-7 left-6 right-6 md:bottom-8 md:left-12 md:right-12 lg:bottom-14 lg:left-22 lg:right-22">
        <p className="mb-4 font-display text-lead font-medium uppercase tracking-tight">
          {eyebrow}
        </p>
        <h1 className="mb-3 font-body text-display font-bold uppercase leading-[1.05] tracking-[0.06em]">
          {title}
        </h1>
        <p className="font-display text-h2 font-medium uppercase tracking-[0.02em]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}