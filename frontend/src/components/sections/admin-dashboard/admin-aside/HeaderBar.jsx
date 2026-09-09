import {
  NotificationIcon,
  DarkModeToggle,
} from "../../../ui/admin-icons/AdminIcons";

import adminAvatar from "../../../../assets/admin/adminProfile.png";

function HeaderBar() {
  return (
    <header className="h-19 bg-admin-card border-b border-admin-border flex items-center justify-between px-8 py-4">
      {/* Search Wrapper */}
      <div className="w-80 h-11">
        <input
          type="text"
          placeholder="Search resources, files..."
          className="w-full h-full px-4 border border-admin-border bg-admin-card text-caption text-admin-text outline-none"
        />
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-6 h-10">
        {/* Dark Mode */}
        <div className="flex items-center gap-2">
          <span className="text-caption text-admin-text">
            Dark Mode
          </span>

          <button
            type="button"
            className="flex items-center"
          >
            <DarkModeToggle /> 
          </button>
        </div>

        {/* Notification */}
        <button
          type="button"
          className="w-10 h-10 rounded-full bg-admin-icon-background flex items-center justify-center"
          >
        <NotificationIcon />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 h-10">
          <img
            src={adminAvatar}
            alt="Admin"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <span className="text-small font-semibold text-black">
              Alex Mercado
            </span>

            <span className="text-caption text-admin-text">
              Project Lead Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderBar;