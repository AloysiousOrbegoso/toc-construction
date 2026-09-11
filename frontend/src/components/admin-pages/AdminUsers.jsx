import ComingSoon from "./ComingSoon";
import { SecurityIcon } from "../ui/admin-icons/AdminIcons";

function AdminUsers() {
  return (
    <ComingSoon
      active="users"
      icon={SecurityIcon}
      title="Users"
      description="Manage admin accounts and permissions. This section is still being built."
    />
  );
}

export default AdminUsers;
