import ComingSoon from "./ComingSoon";
import { ServicesIcon } from "../ui/admin-icons/AdminIcons";

function AdminServices() {
  return (
    <ComingSoon
      active="services"
      icon={ServicesIcon}
      title="Services"
      description="Manage the services listed on the public site. This section is still being built."
    />
  );
}

export default AdminServices;
