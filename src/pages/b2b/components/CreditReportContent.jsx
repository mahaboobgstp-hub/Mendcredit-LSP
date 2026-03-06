import { useParams } from "react-router-dom";
import "../../../styles/b2b.css";

export default function CreditReportContent() {

  const { id } = useParams();

  const borrower = {
    name: "Rahul Sharma",
    pan: "ABCDE1234F",
    mobile: "98XXXX321",
    bureau: "CIBIL",
    reportDate: "12 Jan 2026",
    score: 721,
    risk: "Medium Risk",
    activeLoans: 3,
    negativeAccounts: 1,
    recentDPD: "Yes",
    totalAccounts: 7,
    secured: 2,
    unsecured: 5,
    closed: 2
  };

  return (
    <div className="b2b-module-container">

      <h2>Credit Report</h2>
      <p className="b2b-subtitle">
        Bureau-based credit information for underwriting assessment.
      </p>

      {/* Borrower Info */}
      <div className="b2b-card b2b-borrower-header">

        <div>
          <strong>{borrower.name}</strong>
          <p>PAN: {borrower.pan} · Mobile: {borrower.mobile}</p>
        </div>

        <div className="b2b-bureau-info">
          <p>Bureau: {borrower.bureau}</p>
          <p>Report Date: {borrower.reportDate}</p>
        </div>

      </div>

      {/* Credit Score Card */}
      <div className="b2b-credit-score-card">

        <div className="b2b-credit-score-main">
          <h1>{borrower.score}</h1>
          <p className="b2b-risk">{borrower.risk}</p>
        </div>

        <div className="b2b-credit-summary">
          <p><strong>Active Loans:</strong> {borrower.activeLoans}</p>
          <p><strong>Negative Accounts:</strong> {borrower.negativeAccounts}</p>
          <p><strong>Recent DPDs:</strong> {borrower.recentDPD}</p>
        </div>

      </div>

      {/* Risk Tags */}
      <div className="b2b-risk-tags">

        <span className="tag tag-warning">Recent DPDs</span>
        <span className="tag tag-danger">Written-Off Account</span>
        <span className="tag tag-danger">High Utilization</span>

      </div>

      {/* Account Summary */}
      <div className="b2b-profile-grid">

        <div className="b2b-card">
          <h4>Total Accounts</h4>
          <p className="b2b-stat">{borrower.totalAccounts}</p>
        </div>

        <div className="b2b-card">
          <h4>Secured</h4>
          <p className="b2b-stat">{borrower.secured}</p>
        </div>

        <div className="b2b-card">
          <h4>Unsecured</h4>
          <p className="b2b-stat">{borrower.unsecured}</p>
        </div>

        <div className="b2b-card">
          <h4>Closed</h4>
          <p className="b2b-stat">{borrower.closed}</p>
        </div>

      </div>

      {/* Disclaimer */}
      <div className="b2b-disclaimer">

        Credit information is sourced from bureau reports and provided
        for underwriting support. Lenders should independently verify
        borrower liabilities before taking final decisions.

      </div>

    </div>
  );
}
