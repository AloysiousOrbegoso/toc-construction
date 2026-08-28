import { Link } from "react-router-dom";
import { CalendarIcon } from "../../../ui/icons";

export default function ProjectHero({ project }) {
  const { category, title, location, image } = project;

  return (
    <section
      className="relative isolate min-h-80 w-full overflow-hidden bg-[#101b2c] font-sans text-white sm:aspect-1440/554 sm:min-h-0"
      style={{
        backgroundImage: `linear-gradient(rgba(7, 17, 43, 0.55), rgba(7, 17, 43, 0.55)), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Link
        to="/projects"
        className="absolute left-5 top-8 text-xs font-normal text-white sm:left-10 sm:top-11 sm:text-base lg:left-20 lg:text-xl"
      >
        &lt;- Back
      </Link>

      <Link
        to="/contact"
        className="absolute right-5 top-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-950 shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-transform hover:scale-105 sm:right-10 sm:top-11 lg:right-20"
      >
        <CalendarIcon className="h-4 w-4" />
        Book
      </Link>

      <div className="absolute bottom-7 left-5 right-5 sm:bottom-5 sm:left-10 sm:right-auto lg:bottom-10 lg:left-20">
        <p className="text-[10px] font-normal uppercase leading-none sm:text-[11px] lg:text-xl">
          {category}
        </p>
        <h1 className="mt-1 text-2xl font-bold uppercase leading-[0.98] tracking-[0.015em] sm:text-3xl sm:leading-none lg:text-6xl">
          {title}
        </h1>
        <p className="mt-1 text-base font-normal uppercase leading-tight sm:text-xl sm:leading-none lg:text-4xl">
          {location}
        </p>
      </div>
    </section>
  );
}
