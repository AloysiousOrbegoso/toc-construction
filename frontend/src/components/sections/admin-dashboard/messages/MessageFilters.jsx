function MessageFilters() {
  return (
    <section className="flex items-center justify-between mb-6">
      {/* Filter Buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-2 h-9 px-4 bg-admin-active text-white rounded-md text-small font-medium"
        >
          <span>All Inquiries</span>
          <span className="flex items-center justify-center w-7 h-5 rounded bg-white/15 text-white text-caption">
            48
          </span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 h-9 px-4 bg-admin-card border border-admin-border text-admin-secondary rounded-md text-small font-medium"
        >
          <span>Unread</span>
          <span className="flex items-center justify-center w-7 h-5 rounded bg-admin-icon-background text-admin-secondary text-caption">
            12
          </span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 h-9 px-4 bg-admin-card border border-admin-border text-admin-secondary rounded-md text-small font-medium"
        >
          <span>Read</span>
          <span className="flex items-center justify-center w-7 h-5 rounded bg-admin-icon-background text-admin-secondary text-caption">
            24
          </span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 h-9 px-4 bg-admin-card border border-admin-border text-admin-secondary rounded-md text-small font-medium"
        >
          <span>Replied</span>
          <span className="flex items-center justify-center w-7 h-5 rounded bg-admin-icon-background text-admin-secondary text-caption">
            12
          </span>
        </button>
      </div>

      {/* Search */}
      <div className="w-80 h-10">
        <input
          type="text"
          placeholder="Search sender or subject..."
          className="w-full h-full px-4 bg-admin-card border border-admin-border rounded-md text-small text-black outline-none"
        />
      </div>
    </section>
  );
}

export default MessageFilters;