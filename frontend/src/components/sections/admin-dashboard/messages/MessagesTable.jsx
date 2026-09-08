import messages from "../../../../data/messages";

function MessagesTable() {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Sender Name</th>
            <th>Email Address</th>
            <th>Subject</th>
            <th>Date Received</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.sender}</td>
              <td>{message.email}</td>
              <td>{message.subject}</td>
              <td>{message.date}</td>
              <td>{message.status}</td>
              <td>
                <button type="button">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default MessagesTable;