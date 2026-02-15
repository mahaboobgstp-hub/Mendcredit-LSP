import { useParams } from "react-router-dom";
import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

export default function BorrowerProfile() {
  const { id } = useParams();

  const verifyBank = () => {
    alert("Bank statement verification initiated for " + id);
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

      {/* ACTION BAR - MOVED ABOVE CARDS */}
      <div className="b2b-action-bar">
        <button className="b2b-primary-btn">
          Detailed Credit Report
        </button>

        <button className="b2b-primary-btn" onClick={verifyBank}>
          Verify Bank Statement
        </button>

        <button className="b2b-primary-btn" onClick={verifyIncome}>
          Verify Income (GST / ITR / PF)
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="b2b-profile-grid">
        <div className="b2b-card">
          <h3>Basic Details</h3>
          <p><strong>Application ID:</strong> {id}</p>
          <p><strong>Name:</strong> Rahul Sharma</p>
          <p><strong>PAN:</strong> ABCDE1234F</p>
          <p><strong>Mobile:</strong> 98XXXX321</p>
        </div>

        <div className="b2b-card">
          <h3>Credit Snapshot</h3>
          <p><strong>Credit Score:</strong> 721</p>
          <p><strong>Active Loans:</strong> 3</p>
          <p><strong>Negative Accounts:</strong> 1</p>
        </div>

        <div className="b2b-card">
          <h3>Risk Indicators</h3>
          <p><strong>Recent DPDs:</strong> Yes</p>
          <p><strong>High Utilization:</strong> Yes</p>
          <p><strong>Overall Risk:</strong> Medium</p>
        </div>
      </div>

    </B2BLayout>
  );
}
