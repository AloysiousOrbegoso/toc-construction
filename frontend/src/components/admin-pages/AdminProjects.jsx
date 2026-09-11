import ComingSoon from "./ComingSoon";
import { ProjectsIcon } from "../ui/admin-icons/AdminIcons";

function AdminProjects() {
  return (
    <ComingSoon
      active="projects"
      icon={ProjectsIcon}
      title="Projects"
      description="Track and manage every active and completed project from one place. This section is still being built."
    />
  );
}

export default AdminProjects;
