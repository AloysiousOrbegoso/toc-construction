import {
  TotalProjectsIcon,
  ActiveProjectsIcon,
  TotalClientsIcon,
  RevenueIcon,
  TrendUpIcon,
} from "../../../ui/admin-icons/AdminIcons";

function StatCard({ label, value, trend, icon }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white p-5 shadow">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-500">{label}</span>

        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
          {icon}
        </span>
      </div>

      <p className="text-2xl font-bold text-black">{value}</p>

      <div className="flex items-center gap-1 text-green-600">
        <TrendUpIcon />
        <span className="text-xs font-semibold">{trend}</span>
      </div>
    </div>
  );
}

function KpiCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Total Projects"
        value="48"
        trend="+8% this month"
        icon={<TotalProjectsIcon />}
      />

      <StatCard
        label="Active Projects"
        value="12"
        trend="+2% this month"
        icon={<ActiveProjectsIcon />}
      />

      <StatCard
        label="Total Clients"
        value="156"
        trend="+12% overall"
        icon={<TotalClientsIcon />}
      />

      <StatCard
        label="Revenue"
        value="$2.4M"
        trend="+15% vs Q3"
        icon={<RevenueIcon />}
      />
    </div>
  );
}

export default KpiCards;
