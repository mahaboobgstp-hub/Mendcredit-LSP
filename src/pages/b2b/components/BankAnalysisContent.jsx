import { useParams } from "react-router-dom";
import "../../../styles/b2b.css";

export default function BankAnalysisContent() {

  const { id } = useParams();

  const borrower = {
    name: "Rahul Sharma",
    accountNumber: "XXXX1234",
    bank: "HDFC Bank",
    period: "Jan 2025 - Dec 2025",
    avgBalance: "₹1,25,000",
    totalCredits: "₹8,40,000",
    totalDebits: "₹7,60,000",
    emiDetected: "₹12,500",
    bounceCount: 1,
    cashDeposits: "₹65,000",
    riskLevel: "Moderate"
  };

  return (
    <div className="b2b-module-container">

      <h2>Bank Statement Analysis</h2>
      <p className="b2b-subtitle">
        Transaction-level financial analysis for repayment capacity assessment.
      </p>

      {/* Borrower Info */}
      <div className="b2b-card b2b-borrower-header">

        <div>
          <strong>{borrower.name}</strong>
          <p>Account: {borrower.accountNumber} · Bank: {borrower.bank}</p>
        </div>

        <div className="b2b-bureau-info">
          <p>Statement Period</p>
          <strong>{borrower.period}</strong>
        </div>

      </div>

      {/* Financial Summary */}
      <div className="b2b-profile-grid">

        <div className="b2b-card">
          <h4>Average Balance</h4>
          <p className="b2b-stat">{borrower.avgBalance}</p>
        </div>

        <div className="b2b-card">
          <h4>Total Credits</h4>
          <p className="b2b-stat">{borrower.totalCredits}</p>
        </div>

        <div className="b2b-card">
          <h4>Total Debits</h4>
          <p className="b2b-stat">{borrower.totalDebits}</p>
        </div>

        <div className="b2b-card">
          <h4>Detected EMI</h4>
          <p className="b2b-stat">{borrower.emiDetected}</p>
        </div>

      </div>

      {/* Risk Indicators */}
      <div className="b2b-credit-score-card">

        <div className="b2b-credit-score-main">
          <h3>Risk Level</h3>
          <p className="b2b-risk">{borrower.riskLevel}</p>
        </div>

        <div className="b2b-credit-summary">
          <p><strong>Cheque Bounces:</strong> {borrower.bounceCount}</p>
          <p><strong>Cash Deposits:</strong> {borrower.cashDeposits}</p>
          <p><strong>EMI Detected:</strong> {borrower.emiDetected}</p>
        </div>

      </div>

      {/* Risk Flags */}
      <div className="b2b-risk-tags">

        <span className="tag tag-warning">Cheque Bounce Detected</span>
        <span className="tag tag-warning">High Cash Deposits</span>

      </div>

      {/* Transaction Insights */}
      <div className="b2b-card">

        <h3>Transaction Insights</h3>

        <ul className="b2b-insights-list">
          <li>Regular salary credits detected on the 5th of each month.</li>
          <li>EMI repayment pattern observed for housing loan.</li>
          <li>Occasional high-value cash deposits detected.</li>
          <li>No prolonged negative balance periods.</li>
        </ul>

      </div>

      {/* Disclaimer */}
      <div className="b2b-disclaimer">

        Bank statement insights are generated through automated
        transaction categorization. Lenders should independently
        validate borrower financial behaviour before making
        final underwriting decisions.

      </div>

    </div>
  );
}
