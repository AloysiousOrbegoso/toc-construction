import Sidebar from "../sections/admin-dashboard/admin-aside/Sidebar";
import HeaderBar from "../sections/admin-dashboard/admin-aside/HeaderBar";
import TitleStrip from "../sections/admin-dashboard/dashboards/TitleStrip";
import KpiCards from "../sections/admin-dashboard/dashboards/KpiCards";
import ChartCards from "../sections/admin-dashboard/dashboards/ChartCards";
import RecentProjectsTable from "../sections/admin-dashboard/dashboards/RecentProjectsTable";
import SafetyChecklist from "../sections/admin-dashboard/dashboards/SafetyChecklist";
import QuickActions from "../sections/admin-dashboard/dashboards/QuickActions";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-manrope">
      <Sidebar active="dashboard" />

      <main className="flex-1">
        <HeaderBar />

        <div className="flex flex-col gap-6 p-8">
          <TitleStrip />

          <KpiCards />

          <ChartCards />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RecentProjectsTable />
            </div>

            <SafetyChecklist />
          </div>

          <QuickActions />
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
