import Logo from "../../../../assets/logo_clear.png";

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

function NavItem({ href, label, icon, isActive }) {
  return (
    <a
      href={href}
      className={
        "flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium " +
        (isActive ? "bg-blue-700 text-white" : "text-gray-400")
      }
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

// "active" says which link is highlighted, e.g. <Sidebar active="dashboard" />
function Sidebar({ active = "messages" }) {
  return (
    <aside className="flex min-h-screen w-64 flex-col bg-slate-900 text-white">
      <div className="px-6 py-6">
        <img src={Logo} alt="TOC Construction" className="w-40" />
      </div>

      <nav className="flex-1 px-4">
        <NavItem
          href="/admin/dashboard"
          label="Dashboard"
          icon={<DashboardIcon />}
          isActive={active === "dashboard"}
        />

        <NavItem
          href="#"
          label="Projects"
          icon={<ProjectsIcon />}
          isActive={active === "projects"}
        />

        <NavItem
          href="#"
          label="Services"
          icon={<ServicesIcon />}
          isActive={active === "services"}
        />

        <NavItem
          href="#"
          label="Careers"
          icon={<CareersIcon />}
          isActive={active === "careers"}
        />

        <NavItem
          href="/admin/messages"
          label="Messages"
          icon={<MessagesIcon />}
          isActive={active === "messages"}
        />

        <NavItem
          href="#"
          label="Users"
          icon={<SecurityIcon />}
          isActive={active === "users"}
        />

        <NavItem
          href="#"
          label="Settings"
          icon={<SettingsIcon />}
          isActive={active === "settings"}
        />
      </nav>

      <div className="px-4 pb-6">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-3 px-4 py-3 text-sm font-medium text-gray-400"
        >
          <LogoutIcon />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
