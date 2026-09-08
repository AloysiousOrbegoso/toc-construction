function MessageFilters() {
  return (
    <section className="flex items-center justify-between mb-6">
      {/* Filter Buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-admin-active text-white rounded-md text-small font-medium"
        >
          <span>All Inquiries</span>
          <span>48</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-admin-card border border-admin-border text-admin-secondary rounded-md text-small font-medium"
        >
          <span>Unread</span>
          <span>12</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-admin-card border border-admin-border text-admin-secondary rounded-md text-small font-medium"
        >
          <span>Read</span>
          <span>24</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-admin-card border border-admin-border text-admin-secondary rounded-md text-small font-medium"
        >
          <span>Replied</span>
          <span>12</span>
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