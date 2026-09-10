import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { fetchProjects } from "../../lib/api";
import ProjectHero from "../sections/projects/detail/ProjectHero";
import ProjectInfo from "../sections/projects/detail/ProjectInfo";
import ProjectPhotos from "../sections/projects/detail/ProjectPhotos";
import ProjectRelated from "../sections/projects/detail/ProjectRelated";
import CTASection from "../sections/projects/CTASection";

const RELATED_COUNT = 3;

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [projects, setProjects] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    fetchProjects()
      .then((data) => {
        if (cancelled) return;
        setProjects(data);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return <main className="px-6 py-24 text-center text-neutral-500">Loading project…</main>;
  }

  if (status === "error") {
    return (
      <main className="px-6 py-24 text-center text-neutral-500">
        We couldn't load this project right now. Please try again later.
      </main>
    );
  }

  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) {
    return <Navigate to="/projects" replace />;
  }

  const project = projects[index];
  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  const relatedCount = Math.min(RELATED_COUNT, projects.length - 1);
  const relatedProjects = Array.from({ length: relatedCount }, (_, i) =>
    projects[(index + 1 + i) % projects.length]
  );

  return (
    <main>
      <ProjectHero project={project} />
      <ProjectInfo project={project} />
      <ProjectPhotos photos={project.photos} />
      <ProjectRelated
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
        relatedProjects={relatedProjects}
      />
      <CTASection />
    </main>
  );
}
