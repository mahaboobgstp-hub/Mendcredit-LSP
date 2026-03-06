import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";
import { useParams } from "react-router-dom";


const CreditReport = () => {
  const { id } = useParams();

  console.log(id); // APP001

  return <div>Credit Report for {id}</div>;
};

export default function CreditReport() {
  return (
    <B2BLayout>
      <h1>Credit Report</h1>
      <p className="b2b-subtitle">
        Bureau-based credit information for underwriting assessment.
      </p>

      {/* BORROWER HEADER */}
      <div className="b2b-header-card">
        <div>
          <h3>Rahul Sharma</h3>
          <p>PAN: ABCDE1234F · Mobile: 98XXXX321</p>
        </div>
        <div className="b2b-meta">
          <p>Bureau: CIBIL</p>
          <p>Report Date: 12 Jan 2026</p>
        </div>
      </div>

      {/* SCORE */}
      <div className="b2b-score-card">
        <div>
          <h2>721</h2>
          <p className="score-grade medium">Medium Risk</p>
        </div>
        <div className="score-summary">
          <p>Active Loans: 3</p>
          <p>Negative Accounts: 1</p>
          <p>Recent DPDs: Yes</p>
        </div>
      </div>

      {/* RISK FLAGS */}
      <div className="b2b-risk-flags">
        <span className="flag warning">Recent DPDs</span>
        <span className="flag danger">Written-Off Account</span>
        <span className="flag warning">High Utilization</span>
      </div>

      {/* ACCOUNT SUMMARY */}
      <div className="b2b-stats">
        <div className="b2b-card">
          <h3>Total Accounts</h3>
          <p>7</p>
        </div>
        <div className="b2b-card">
          <h3>Secured</h3>
          <p>2</p>
        </div>
        <div className="b2b-card">
          <h3>Unsecured</h3>
          <p>5</p>
        </div>
        <div className="b2b-card">
          <h3>Closed</h3>
          <p>2</p>
        </div>
      </div>

      {/* NEGATIVE ACCOUNTS */}
      <h3 className="section-title">Negative / High-Risk Accounts</h3>
      <table className="b2b-table">
        <thead>
          <tr>
            <th>Bank</th>
            <th>Loan Type</th>
            <th>Status</th>
            <th>Last DPD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Axis Bank</td>
            <td>Personal Loan</td>
            <td className="status-danger">Written-Off</td>
            <td>60</td>
          </tr>
        </tbody>
      </table>

      {/* DPD SUMMARY */}
      <div className="b2b-info">
        DPDs above 30 in the last 6 months materially increase rejection risk.
        Lender discretion advised.
      </div>
    </B2BLayout>
  );
}
