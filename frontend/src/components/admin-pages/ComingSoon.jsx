import Sidebar from "../sections/admin-dashboard/admin-aside/Sidebar";
import HeaderBar from "../sections/admin-dashboard/admin-aside/HeaderBar";

// Shared placeholder for admin sections that are still being built.
// Swap this out for the real page once its components are ready.
function ComingSoon({ active, icon: Icon, title, description }) {
  return (
    <div className="flex min-h-screen bg-admin-background font-manrope">
      <Sidebar active={active} />

      <main className="flex-1">
        <HeaderBar />

        <section className="flex flex-col items-center justify-center gap-4 px-8 py-24 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-admin-icon-background">
            {Icon && <Icon className="h-7 w-7 text-admin-active" />}
          </div>

          <h1 className="text-h2 font-semibold text-ink">{title}</h1>

          <p className="max-w-md text-body text-admin-secondary">
            {description}
          </p>

          <span className="mt-2 rounded-full border border-admin-border bg-admin-card px-4 py-1.5 text-small font-medium text-admin-active">
            Coming soon
          </span>
        </section>
      </main>
    </div>
  );
}

export default ComingSoon;
