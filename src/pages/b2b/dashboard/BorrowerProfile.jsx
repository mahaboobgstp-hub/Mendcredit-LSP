import { useParams } from "react-router-dom";
import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

export default function BorrowerProfile() {
  const { id } = useParams();

  const pullBankStatement = () => {
    alert("Bank statement pull initiated for " + id);
  };

  const verifyIncome = () => {
    alert("Income verification initiated for " + id);
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

      <div style={{ marginTop: "40px" }}>
        <h3>Analysis Modules</h3>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "15px" }}>
          <button className="b2b-primary-btn">
            Detailed Credit Report
          </button>

          <button className="b2b-primary-btn">
            Detailed Bank Statement
          </button>

          <button className="b2b-primary-btn">
            Detailed Income Details
          </button>
        </div>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "15px" }}>
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
