import { useParams } from "react-router-dom";
import B2BLayout from "../../../../layouts/B2BLayout";
import { Link } from "react-router-dom";
import "../../../styles/b2b.css";

export default function BorrowerProfile() {
  const router = useRouter();
  const { id } = router.query;

  const pullBankStatement = () => {
    alert("Bank statement pull initiated for " + id);
    // Later integrate bank API
  };

  const verifyIncome = () => {
    alert("Income verification initiated for " + id);
    // Later integrate GST / ITR / PF APIs
  };

  return (
    <B2BLayout>
      <h1>Borrower Profile</h1>
      <p className="b2b-subtitle">
        Consolidated borrower overview for underwriting.
      </p>

      <div className="b2b-profile-grid">
        <div className="b2b-card">
          <h3>Basic Details</h3>
          <p>Application ID: {id}</p>
          <p>Name: Rahul Sharma</p>
          <p>PAN: ABCDE1234F</p>
          <p>Mobile: 98XXXX321</p>
        </div>

        <div className="b2b-card">
          <h3>Credit Snapshot</h3>
          <p>Credit Score: 721</p>
          <p>Active Loans: 3</p>
          <p>Negative Accounts: 1</p>
        </div>

        <div className="b2b-card">
          <h3>Risk Indicators</h3>
          <p>Recent DPDs: Yes</p>
          <p>High Utilization: Yes</p>
          <p>Overall Risk: Medium</p>
        </div>
      </div>

      {/* ACTION SECTION */}
      <div className="b2b-analysis-section">
        <h3>Analysis Modules</h3>

        <div className="b2b-analysis-buttons">
          <Link href={`/b2b/dashboard/borrowers/${id}/credit-report`}>
            <button className="b2b-primary-btn">
              Detailed Credit Report
            </button>
          </Link>

          <Link href={`/b2b/dashboard/borrowers/${id}/bank-analysis`}>
            <button className="b2b-primary-btn">
              Detailed Bank Statement
            </button>
          </Link>

          <Link href={`/b2b/dashboard/borrowers/${id}/income-verification`}>
            <button className="b2b-primary-btn">
              Detailed Income Details
            </button>
          </Link>
        </div>

        <div className="b2b-analysis-buttons" style={{ marginTop: "15px" }}>
          <button className="b2b-secondary-btn" onClick={pullBankStatement}>
            Pull Bank Statement
          </button>

          <button className="b2b-secondary-btn" onClick={verifyIncome}>
            Verify Income (GST / ITR / PF)
          </button>
        </div>
      </div>

    </B2BLayout>
  );
}
