import HeroSection from "../sections/projects/HeroSection";
import ProjectsGrid from "../sections/projects/ProjectsGrid";
import CTASection from "../sections/projects/CTASection";

export default function ProjectsPage() {
  return (
    <main>
      <HeroSection />
      <ProjectsGrid />
      <CTASection />
    </main>
  );
}