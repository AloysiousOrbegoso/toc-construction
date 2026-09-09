import Logo from "../../../../assets/Logo.png";

import {
  DashboardIcon,
  ProjectsIcon,
  ServicesIcon,
  CareersIcon,
  MessagesIcon,
  SecurityIcon,
  SettingsIcon,
  LogoutIcon,
} from "../../../ui/admin-icons/AdminIcons";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-admin-sidebar text-white flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6">
        <img
          src={Logo}
          alt="TOC Construction"
          className="w-40 h-auto"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-admin-text"
        >
          <DashboardIcon />
          <span>Dashboard</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-admin-text"
        >
          <ProjectsIcon />
          <span>Projects</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-admin-text"
        >
          <ServicesIcon />
          <span>Services</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-admin-text"
        >
          <CareersIcon />
          <span>Careers</span>
        </a>

        {/* Active */}
        <a
          href="/admin/messages"
          className="flex items-center gap-3 px-4 py-3 rounded-md bg-admin-active text-sm font-medium text-white"
        >
          <MessagesIcon />
          <span>Messages</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-admin-text"
        >
          <SecurityIcon />
          <span>Users</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-admin-text"
        >
          <SettingsIcon />
          <span>Settings</span>
        </a>
      </nav>

      {/* Logout */}
      <div className="px-4 pb-6">
        <button
          type="button"
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-admin-text"
        >
          <LogoutIcon />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;