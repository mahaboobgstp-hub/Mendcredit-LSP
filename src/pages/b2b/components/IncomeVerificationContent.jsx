import { useParams } from "react-router-dom";
import "../../../styles/b2b.css";

export default function IncomeVerificationContent() {

  const { id } = useParams();

  const borrower = {
    name: "Rahul Sharma",
    pan: "ABCDE1234F",
    profile: "Salaried",
    assessmentYear: "2025-26",
    form26asIncome: "₹6,80,000",
    pfContribution: "₹3,600",
    itrIncome: "₹7,20,000",
    declaredIncome: "₹7,20,000",
    verifiedIncome: "₹6,80,000",
    variance: "₹40,000",
    consistency: "High"
  };

  return (
    <div className="b2b-module-container">

      <h2>Income Verification</h2>
      <p className="b2b-subtitle">
        Income validation using statutory and financial documents.
      </p>

      {/* Borrower Info */}
      <div className="b2b-card b2b-borrower-header">

        <div>
          <strong>{borrower.name}</strong>
          <p>PAN: {borrower.pan} · Profile: {borrower.profile}</p>
        </div>

        <div className="b2b-bureau-info">
          <p>Assessment Year</p>
          <strong>{borrower.assessmentYear}</strong>
        </div>

      </div>

      {/* Data Sources */}
      <div className="b2b-profile-grid">

        <div className="b2b-card">
          <h4>Form 26AS</h4>
          <p>Status: Connected</p>
          <p>Reported Income: {borrower.form26asIncome}</p>
          <button className="b2b-secondary-btn">Refresh</button>
        </div>

        <div className="b2b-card">
          <h4>Provident Fund</h4>
          <p>Status: Connected</p>
          <p>Monthly Contribution: {borrower.pfContribution}</p>
          <button className="b2b-secondary-btn">View Details</button>
        </div>

        <div className="b2b-card">
          <h4>IT Returns</h4>
          <p>Status: Uploaded</p>
          <p>Declared Income: {borrower.itrIncome}</p>
          <button className="b2b-secondary-btn">View ITR</button>
        </div>

        <div className="b2b-card">
          <h4>GST Returns</h4>
          <p>Status: Not Applicable</p>
          <p>Business Profile: No</p>
          <button className="b2b-secondary-btn" disabled>
            Not Required
          </button>
        </div>

      </div>

      {/* Income Comparison */}
      <div className="b2b-profile-grid">

        <div className="b2b-card">
          <h4>Declared Income</h4>
          <p className="b2b-stat">{borrower.declaredIncome}</p>
        </div>

        <div className="b2b-card">
          <h4>Verified Income</h4>
          <p className="b2b-stat">{borrower.verifiedIncome}</p>
        </div>

        <div className="b2b-card">
          <h4>Variance</h4>
          <p className="b2b-stat">{borrower.variance}</p>
        </div>

        <div className="b2b-card">
          <h4>Consistency</h4>
          <p className="b2b-stat">{borrower.consistency}</p>
        </div>

      </div>

      {/* Insights */}
      <div className="b2b-disclaimer">

        Income figures across Form 26AS, PF, and ITR are largely
        consistent. Minor variance observed within acceptable tolerance.

      </div>

      <div className="b2b-disclaimer">

        Income verification is based on documents available at the time
        of analysis. Lenders should independently validate as per
        internal credit policy.

      </div>

    </div>
  );
}
