import {
  AddProjectIcon,
  ManageTeamIcon,
  ViewReportsIcon,
} from "../../../ui/admin-icons/AdminIcons";

function ActionCard({ title, description, icon }) {
  return (
    <button
      type="button"
      className="flex cursor-pointer items-center gap-4 rounded-lg bg-white p-5 text-left shadow hover:shadow-md"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
        {icon}
      </span>

      <span>
        <p className="font-bold text-black">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </span>
    </button>
  );
}

function QuickActions() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <ActionCard
        title="Add New Project"
        description="Initialize construction profile"
        icon={<AddProjectIcon />}
      />

      <ActionCard
        title="Manage Team"
        description="Assign engineers & foremen"
        icon={<ManageTeamIcon />}
      />

      <ActionCard
        title="View Reports"
        description="Download audit logs & progress slips"
        icon={<ViewReportsIcon />}
      />
    </div>
  );
}

export default QuickActions;
