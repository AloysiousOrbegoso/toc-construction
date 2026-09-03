import { useState } from "react";
import { ChevronRightIcon } from "../../../ui/icons";

export default function ProjectPhotos({ photos = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (photos.length === 0) return null;

  const goNext = () => setActiveIndex((i) => (i + 1) % photos.length);

  return (
    <section className="bg-white px-6 py-12 font-sans text-neutral-950 sm:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Photos</h2>

        <div className="relative mt-8 flex items-center justify-center">
          <div>
            <img 
              src={photos[0]}
              alt="Project photo 1"
              className="h-40 w-56 object-cover"
            />
          </div>
          <div>
            <img
              src={photos[1]}
              alt="Project photo 2"
              className="h-56 w-80 object-cover"
            />
          </div>
          <div>
            <img
              src={photos[2]}
              alt="Project photo 3"
              className="h-40 w-56 object-cover"
            />
          </div>

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
                  index === activeIndex ? "bg-neutral-950" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
