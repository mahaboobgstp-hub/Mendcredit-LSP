import { useParams } from "react-router-dom";
import "../../../styles/b2b.css";

export default function RiskEngineContent() {

  const { id } = useParams();

  const borrower = {
    name: "Rahul Sharma",
    pan: "ABCDE1234F",
    creditScore: 721,
    verifiedIncome: "₹56,000 / month",
    emiObligation: "₹12,500",
    foir: "22%",
    repaymentCapacity: "Strong",
    behaviorRisk: "Moderate",
    overallRisk: "Medium",
    recommendedLoan: "₹5,00,000",
    maxEligibleEMI: "₹18,000"
  };

  return (
    <div className="b2b-module-container">

      <h2>Risk Engine Assessment</h2>
      <p className="b2b-subtitle">
        Consolidated risk evaluation based on credit, income, and banking analysis.
      </p>

      {/* Borrower Info */}
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

      {/* Risk Score Card */}
      <div className="b2b-credit-score-card">

        <div className="b2b-credit-score-main">
          <h3>Overall Risk</h3>
          <p className="b2b-risk">{borrower.overallRisk}</p>
        </div>

        <div className="b2b-credit-summary">
          <p><strong>Repayment Capacity:</strong> {borrower.repaymentCapacity}</p>
          <p><strong>Behavior Risk:</strong> {borrower.behaviorRisk}</p>
          <p><strong>FOIR:</strong> {borrower.foir}</p>
        </div>

      </div>

      {/* Financial Eligibility */}
      <div className="b2b-profile-grid">

        <div className="b2b-card">
          <h4>Verified Monthly Income</h4>
          <p className="b2b-stat">{borrower.verifiedIncome}</p>
        </div>

        <div className="b2b-card">
          <h4>Existing EMI Obligations</h4>
          <p className="b2b-stat">{borrower.emiObligation}</p>
        </div>

        <div className="b2b-card">
          <h4>FOIR</h4>
          <p className="b2b-stat">{borrower.foir}</p>
        </div>

        <div className="b2b-card">
          <h4>Max Eligible EMI</h4>
          <p className="b2b-stat">{borrower.maxEligibleEMI}</p>
        </div>

      </div>

      {/* Loan Recommendation */}
      <div className="b2b-card">

        <h3>Loan Recommendation</h3>

        <p>
          Based on verified income, banking behaviour, and bureau
          obligations, the borrower can safely service an EMI of
          <strong> {borrower.maxEligibleEMI}</strong>.
        </p>

        <p>
          Recommended loan eligibility:
          <strong> {borrower.recommendedLoan}</strong>
        </p>

      </div>

      {/* Risk Flags */}
      <div className="b2b-risk-tags">

        <span className="tag tag-warning">Recent DPD Detected</span>
        <span className="tag tag-warning">High Credit Utilization</span>

      </div>

      {/* Disclaimer */}
      <div className="b2b-disclaimer">

        Risk engine output is an analytical recommendation based on
        available financial data. Final underwriting decision should
        follow lender's internal credit policy and manual review.

      </div>

    </div>
  );
}
