import { Link } from "react-router-dom";
import { CalendarIcon } from "../../../ui/icons";

export default function ProjectHero({ project }) {
  const { category, title, location, image } = project;

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
      <Link
        to="/projects"
        className="absolute left-6 top-8 font-display text-lead font-medium text-white md:left-12 md:top-11 lg:left-22 lg:top-24"
      >
        &lt;- Back
      </Link>

      <Link
        to="/contact"
        className="absolute right-6 top-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 font-display text-small font-semibold text-neutral-950 shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-transform hover:scale-105 md:right-12 md:top-11 lg:right-20 lg:top-24"
      >
        <CalendarIcon className="h-4 w-4" />
        Book
      </Link>

      <div className="absolute bottom-7 left-6 right-6 md:bottom-8 md:left-12 md:right-12 lg:bottom-14 lg:left-22 lg:right-22">
        <p className="mb-4 font-display text-lead font-medium uppercase tracking-tight">
          {category}
        </p>
        <h1 className="mb-3 font-body text-display font-bold uppercase leading-[1.05] tracking-[0.06em]">
          {title}
        </h1>
        <p className="font-display text-h2 font-medium uppercase tracking-[0.02em]">
          {location}
        </p>
      </div>
    </section>
  );
}
