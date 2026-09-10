import recentProjects from "../../../../data/adminData/recentProjects";

import { ArrowRightIcon } from "../../../ui/admin-icons/AdminIcons";

function getStatusClasses(status) {
  if (status === "Active") {
    return "bg-green-100 text-green-700";
  }

  if (status === "Completed") {
    return "bg-blue-100 text-blue-700";
  }

  if (status === "Pending") {
    return "bg-yellow-100 text-yellow-700";
  }

  return "bg-gray-100 text-gray-600";
}

function RecentProjectsTable() {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-lg font-bold text-black">Recent Projects</p>

        <a
          href="/admin/projects"
          className="flex items-center gap-2 text-xs font-semibold text-blue-700"
        >
          <span>View All Projects</span>
          <ArrowRightIcon />
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-black">
                Project Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-black">
                Client
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-black">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-black">
                Start Date
              </th>
              <th className="px-4 py-3 text-right text-xs font-bold text-black">
                Budget
              </th>
            </tr>
          </thead>

          <tbody>
            {recentProjects.map((project) => (
              <tr key={project.id} className="border-b border-gray-200">
                <td className="px-4 py-4 text-sm font-semibold text-black">
                  {project.name}
                </td>

                <td className="px-4 py-4 text-sm text-gray-500">
                  {project.client}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={
                      "rounded px-2 py-1 text-xs font-bold " +
                      getStatusClasses(project.status)
                    }
                  >
                    {project.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-sm text-gray-500">
                  {project.startDate}
                </td>

                <td className="px-4 py-4 text-right text-sm font-semibold text-black">
                  {project.budget}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentProjectsTable;
