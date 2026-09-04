import { projectsPageContent } from "../../../data/content";
import BackButton from "../../ui/BackButton";

export default function HeroSection() {
  const { eyebrow, title, subtitle, image } = projectsPageContent.hero;

  return (
    <section
      className="relative isolate min-h-[480px] w-full overflow-hidden bg-[#101b2c] text-white sm:min-h-[520px] lg:aspect-1440/554 lg:min-h-0"
      style={{
        backgroundImage: `linear-gradient(rgba(7, 17, 43, 0.55), rgba(7, 17, 43, 0.55)), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <BackButton />

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