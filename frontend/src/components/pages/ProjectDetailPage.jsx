import { useParams, Navigate } from "react-router-dom";
import { projectsPageContent } from "../../data/content";
import ProjectHero from "../sections/projects/detail/ProjectHero";
import ProjectInfo from "../sections/projects/detail/ProjectInfo";
import ProjectPhotos from "../sections/projects/detail/ProjectPhotos";
import ProjectRelated from "../sections/projects/detail/ProjectRelated";
import CTASection from "../sections/projects/CTASection";

const RELATED_COUNT = 3;

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { projects } = projectsPageContent;
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
