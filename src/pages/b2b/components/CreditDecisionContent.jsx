import { useParams } from "react-router-dom";
import "../../../styles/b2b.css";

export default function CreditDecisionContent() {

  const { id } = useParams();

  const borrower = {
    name: "Rahul Sharma",
    pan: "ABCDE1234F",
    creditScore: 721,
    verifiedIncome: "₹56,000 / month",
    foir: "22%",
    riskLevel: "Medium",
    recommendedLoan: "₹5,00,000",
    maxEligibleEMI: "₹18,000"
  };

  return (
    <div className="b2b-module-container">

      <h2>Credit Decision</h2>
      <p className="b2b-subtitle">
        Final underwriting decision based on risk engine evaluation.
      </p>

      {/* Borrower Header */}
      <div className="b2b-card b2b-borrower-header">

        <div>
          <strong>{borrower.name}</strong>
          <p>PAN: {borrower.pan}</p>
        </div>

        <div className="b2b-bureau-info">
          <p>Credit Score</p>
          <strong>{borrower.creditScore}</strong>
        </div>

      </div>

      {/* Risk Summary */}
      <div className="b2b-credit-score-card">

        <div className="b2b-credit-score-main">
          <h3>Risk Level</h3>
          <p className="b2b-risk">{borrower.riskLevel}</p>
        </div>

        <div className="b2b-credit-summary">
          <p><strong>Verified Income:</strong> {borrower.verifiedIncome}</p>
          <p><strong>FOIR:</strong> {borrower.foir}</p>
          <p><strong>Eligible EMI:</strong> {borrower.maxEligibleEMI}</p>
        </div>

      </div>

      {/* Loan Offer */}
      <div className="b2b-card">

        <h3>Proposed Loan Terms</h3>

        <div className="b2b-form-grid">

          <div>
            <label>Loan Amount</label>
            <input
              type="text"
              defaultValue={borrower.recommendedLoan}
              className="b2b-input"
            />
          </div>

          <div>
            <label>Interest Rate (%)</label>
            <input
              type="number"
              defaultValue="14"
              className="b2b-input"
            />
          </div>

          <div>
            <label>Tenure (Months)</label>
            <input
              type="number"
              defaultValue="36"
              className="b2b-input"
            />
          </div>

          <div>
            <label>Monthly EMI</label>
            <input
              type="text"
              defaultValue="₹16,900"
              className="b2b-input"
            />
          </div>

        </div>

      </div>

      {/* Underwriter Notes */}
      <div className="b2b-card">

        <h3>Underwriter Notes</h3>

        <textarea
          className="b2b-textarea"
          placeholder="Add decision rationale or underwriting remarks..."
        ></textarea>

      </div>

      {/* Decision Buttons */}
      <div className="b2b-action-bar">

        <button className="b2b-primary-btn approve">
          Approve
        </button>

        <button className="b2b-primary-btn review">
          Send for Review
        </button>

        <button className="b2b-primary-btn reject">
          Reject
        </button>

      </div>

      {/* Disclaimer */}
      <div className="b2b-disclaimer">

        Final credit approval should comply with lender's credit policy
        and internal risk governance guidelines.

      </div>

    </div>
  );
}
