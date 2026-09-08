import Sidebar from "../sections/admin-dashboard/Sidebar";
import HeaderBar from "../sections/admin-dashboard/HeaderBar";
import MessageFilters from "../sections/admin-dashboard/messages/MessageFilters";
import MessagesTable from "../sections/admin-dashboard/messages/MessagesTable";

function AdminMessages() {
  return (
    <div className="flex min-h-screen bg-[#F4F4F4]">
      <Sidebar />

      <main className="flex-1">
        <HeaderBar />

        <section className="p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-black">
              Client Inquiries
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage corporate inquiries, project bids, and incoming contact requests
            </p>
          </div>

          <MessageFilters />

          <MessagesTable />
        </section>
      </main>
    </div>
  );
}

export default AdminMessages;