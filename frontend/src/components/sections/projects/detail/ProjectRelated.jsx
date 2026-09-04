import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "../../../ui/icons";

function RelatedCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="group block">
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
        <h3 className="mt-1 font-display text-h3 font-semibold leading-tight">{project.title}</h3>
        <p className="mt-0.5 font-display text-small text-neutral-500">{project.location}</p>
      </div>
    </Link>
  );
}

export default function ProjectRelated({ project, prevProject, nextProject, relatedProjects }) {
  const { architect, engineers = [] } = project;

  return (
    <section className="bg-white px-6 py-12 text-neutral-950 md:px-12 lg:px-22 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 border-b border-hairline pb-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {architect && (
              <div>
                <p className="font-display text-caption font-medium uppercase tracking-[0.12em] text-neutral-500">
                  Architect
                </p>
                <p className="mt-2 font-display text-body font-semibold uppercase">{architect}</p>
              </div>
            )}
            {engineers.length > 0 && (
              <div>
                <p className="font-display text-caption font-medium uppercase tracking-[0.12em] text-neutral-500">
                  Engineers
                </p>
                <p className="mt-2 max-w-sm font-display text-body font-semibold uppercase leading-relaxed">
                  {engineers.join(", ")}
                </p>
              </div>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/projects"
              className="rounded-md border border-neutral-950 px-5 py-2.5 font-display text-small font-medium uppercase tracking-wider transition-transform duration-200 hover:scale-105"
            >
              All Projects
            </Link>
            {prevProject && (
              <Link
                to={`/projects/${prevProject.id}`}
                aria-label="Previous project"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 transition-colors hover:border-neutral-950"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Link>
            )}
            {nextProject && (
              <Link
                to={`/projects/${nextProject.id}`}
                aria-label="Next project"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 transition-colors hover:border-neutral-950"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <div className="mt-10">
            <h2 className="font-body text-h1 font-semibold tracking-tight">
              Related Projects
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {relatedProjects.map((related) => (
                <RelatedCard key={related.id} project={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
