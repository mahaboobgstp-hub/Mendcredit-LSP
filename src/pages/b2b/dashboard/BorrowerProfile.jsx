import { useParams, NavLink, Routes, Route } from "react-router-dom";
import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

// Import existing modules
import CreditReport from "./CreditReport";
import BankAnalysis from "./BankAnalysis";
import IncomeVerification from "./IncomeVerification";
import RiskEngine from "./RiskEngine";
import CreditDecision from "./CreditDecision";

function Summary({ id }) {
  return (
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
  );
}

export default function BorrowerProfile() {
  const { id } = useParams();

  return (
    <B2BLayout>

      <h1>Borrower Profile</h1>
      <p className="b2b-subtitle">
        Consolidated borrower overview for underwriting.
      </p>

      {/* BORROWER HEADER */}
      <div className="borrower-header">
        <strong>Application ID:</strong> {id} &nbsp;&nbsp;
        <strong>Name:</strong> Rahul Sharma &nbsp;&nbsp;
        <strong>PAN:</strong> ABCDE1234F
      </div>

      {/* TAB NAVIGATION */}
      <div className="borrower-tabs">

        <NavLink
          to=""
          end
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Summary
        </NavLink>

        <NavLink
          to="credit"
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Credit Report
        </NavLink>

        <NavLink
          to="bank"
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Bank Analysis
        </NavLink>

        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Income
        </NavLink>

        <NavLink
          to="risk"
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Risk
        </NavLink>

        <NavLink
          to="decision"
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Decision
        </NavLink>

      </div>

      {/* TAB CONTENT */}
      <div className="borrower-tab-content">

        <Routes>
          <Route path="/" element={<Summary id={id} />} />
          <Route path="credit" element={<CreditReport />} />
          <Route path="bank" element={<BankAnalysis />} />
          <Route path="income" element={<IncomeVerification />} />
          <Route path="risk" element={<RiskEngine />} />
          <Route path="decision" element={<CreditDecision />} />
        </Routes>

      </div>

    </B2BLayout>
  );
}
