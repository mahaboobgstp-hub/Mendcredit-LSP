import "../../../styles/b2b.css";

export default function AuditTrailContent() {

  const logs = [
    {
      time: "12 Jan 2026 10:21",
      user: "Underwriter1",
      action: "Credit Report Pulled",
      borrower: "APP001",
      source: "CIBIL"
    },
    {
      time: "12 Jan 2026 10:25",
      user: "System",
      action: "Bank Statement Verified",
      borrower: "APP001",
      source: "Account Aggregator"
    },
    {
      time: "12 Jan 2026 10:40",
      user: "Underwriter1",
      action: "Loan Approved",
      borrower: "APP001",
      source: "Credit Decision"
    }
  ];

  return (
    <div className="b2b-module-container">

      <h2>Audit Trail</h2>

      <p className="b2b-subtitle">
        Centralized system activity logs for compliance and audit purposes.
      </p>

      <div className="b2b-card">

        <table className="b2b-table">

          <thead>
            <tr>
              <th>Timestamp</th>
              <th>User</th>
              <th>Borrower</th>
              <th>Action</th>
              <th>Source</th>
            </tr>
          </thead>

          <tbody>

            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.time}</td>
                <td>{log.user}</td>
                <td>{log.borrower}</td>
                <td>{log.action}</td>
                <td>{log.source}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="b2b-disclaimer">

        All actions performed within the underwriting platform are recorded
        for regulatory compliance, internal audits, and security monitoring.

      </div>

    </div>
  );
}
