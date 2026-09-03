import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsPageContent } from "../../../data/content";
import { FilterIcon } from "../../ui/icons";

const INITIAL_COUNT = 6;

export default function ProjectsGrid() {
  const { projects } = projectsPageContent;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section className="bg-white px-6 py-16 text-neutral-950 md:px-12 lg:px-22 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="font-body text-h1 font-semibold tracking-tight">
            All Projects
          </h2>
          <button
            type="button"
            className="flex items-center gap-2 font-display text-caption font-medium uppercase tracking-wider text-neutral-600 transition-colors hover:text-neutral-950"
          >
            <span>Filters</span>
            <FilterIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visibleProjects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="group block"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <p className="font-display text-caption font-medium uppercase tracking-[0.08em] text-neutral-500">
                  {project.category}
                </p>
                <h3 className="mt-1 font-display text-h3 font-semibold leading-tight">
                  {project.title}
                </h3>
                <p className="mt-0.5 font-display text-small text-neutral-500">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-neutral-300" />
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + INITIAL_COUNT)}
              className="shrink-0 rounded-md border border-neutral-950 px-6 py-2.5 font-display text-small font-medium uppercase tracking-wider transition-transform duration-200 hover:scale-105"
            >
              Load More
            </button>
            <span className="h-px flex-1 bg-neutral-300" />
          </div>
        )}
      </div>
    </section>
  );
}