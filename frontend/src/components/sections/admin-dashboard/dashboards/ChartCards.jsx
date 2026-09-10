function ChartCard({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow">
      <div>
        <p className="text-lg font-bold text-black">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      <div className="h-44 rounded-md bg-gray-100" />
    </div>
  );
}

function ChartCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ChartCard
        title="Monthly Revenue"
        subtitle="In thousands (USD) - Last 6 Months"
      />

      <ChartCard
        title="Project Progress"
        subtitle="Aggregate progress timeline (%)"
      />
    </div>
  );
}

export default ChartCards;
