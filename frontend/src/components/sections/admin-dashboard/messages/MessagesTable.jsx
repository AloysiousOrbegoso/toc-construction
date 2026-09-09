import messages from "../../../../data/adminData/messages";

function MessagesTable() {
  return (
    <section className="bg-admin-card rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-admin-icon-background">
            <tr>
              <th className="px-4 py-3 text-left text-caption font-medium text-admin-secondary">
                Sender Name
              </th>

              <th className="px-4 py-3 text-left text-caption font-medium text-admin-secondary">
                Email Address
              </th>

              <th className="px-4 py-3 text-left text-caption font-medium text-admin-secondary">
                Subject
              </th>

              <th className="px-4 py-3 text-left text-caption font-medium text-admin-secondary">
                Date Received
              </th>

              <th className="px-4 py-3 text-left text-caption font-medium text-admin-secondary">
                Status
              </th>

              <th className="px-4 py-3 text-left text-caption font-medium text-admin-secondary">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {messages.map((message) => (
              <tr
                key={message.id}
                className="border-b border-admin-border last:border-b-0"
              >
                <td className="px-4 py-3 text-small text-admin-secondary">
                  {message.sender}
                </td>

                <td className="px-4 py-3 text-small text-admin-text">
                  {message.email}
                </td>

                <td className="px-4 py-3 text-small text-admin-secondary">
                  {message.subject}
                </td>

                <td className="px-4 py-3 text-small text-admin-text">
                  {message.date}
                </td>

                <td className="px-4 py-3">
                  <span className="text-caption">
                    {message.status}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <button
                    type="button"
                    className="text-small font-medium text-admin-active"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MessagesTable;