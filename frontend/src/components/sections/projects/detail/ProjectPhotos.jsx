import { useState } from "react";
import { ChevronRightIcon } from "../../../ui/icons";

export default function ProjectPhotos({ photos = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (photos.length === 0) return null;

  const goNext = () => setActiveIndex((i) => (i + 1) % photos.length);

  // Calculates the photo before the active photo
  const previousIndex =
    (activeIndex - 1 + photos.length) % photos.length;

  // Calculates the photo after the active photo
  const nextIndex =
    (activeIndex + 1) % photos.length;

  return (
    <section className="bg-white px-6 py-12 font-sans text-neutral-950 sm:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Photos
        </h2>

        <div className="relative mt-8 flex items-center justify-center gap-4">

          {/* LEFT */}
          <div className="hidden w-56 overflow-hidden rounded-lg sm:block">
            <img
              src={photos[previousIndex]}
              alt={`Project photo ${previousIndex + 1}`}
              className="h-40 w-full object-cover"
            />
          </div>

          {/* CENTER */}
          <div className="w-full max-w-2xl overflow-hidden rounded-lg">
            <img
              src={photos[activeIndex]}
              alt={`Project photo ${activeIndex + 1}`}
              className="h-56 w-full object-cover sm:h-72"
            />
          </div>

          {/* RIGHT */}
          <div className="hidden w-56 overflow-hidden rounded-lg sm:block">
            <img
              src={photos[nextIndex]}
              alt={`Project photo ${nextIndex + 1}`}
              className="h-40 w-full object-cover"
            />
          </div>

          {/* NEXT BUTTON */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={goNext}
              aria-label="Next photo"
              className="absolute right-0 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_4px_16px_rgba(47,95,224,0.35)] transition-transform hover:scale-105 sm:right-4 lg:-right-6"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* DOTS */}
        {photos.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {photos.map((photo, index) => (
              <button
                key={photo + index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={index === activeIndex}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-neutral-950"
                    : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}