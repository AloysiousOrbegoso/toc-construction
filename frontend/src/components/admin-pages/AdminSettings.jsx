import ComingSoon from "./ComingSoon";
import { SettingsIcon } from "../ui/admin-icons/AdminIcons";

function AdminSettings() {
  return (
    <ComingSoon
      active="settings"
      icon={SettingsIcon}
      title="Settings"
      description="Configure account and site preferences. This section is still being built."
    />
  );
}

export default AdminSettings;
