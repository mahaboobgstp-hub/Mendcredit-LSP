import { useParams, NavLink, Routes, Route } from "react-router-dom";
import B2BLayout from "../../../layouts/B2BLayout";
import CreditReportContent from "../components/CreditReportContent";
import BankAnalysisContent from "../components/BankAnalysisContent";
import IncomeVerificationContent from "../components/IncomeVerificationContent";
import GstVerificationContent from "../components/GstVerificationContent";
import ProvidentFundContent from "../components/ProvidentFundContent";
import PropertyVerificationContent from "../components/PropertyVerificationContent";
import RiskEngineContent from "../components/RiskEngineContent";
import CreditDecisionContent from "../components/CreditDecisionContent";
import "../../../styles/b2b.css";

// Import existing modules
import CreditReport from "./CreditReport";
import BankAnalysis from "./BankAnalysis";
import IncomeVerification from "./IncomeVerification";
import GstVerification from "./GstVerification";
import ProvidentFund from "./ProvidentFund";
import PropertyVerification from "./PropertyVerification";
import RiskEngine from "./RiskEngine";
import CreditDecision from "./CreditDecision";

function Summary({ id }) {
  return (
    <div className="b2b-profile-grid">
      <div className="b2b-card">
        <h3>Basic Details</h3>
        <p><strong>Application ID:</strong> {id}</p>
        <p><strong>Name:</strong> Rahul Sharma</p>
        <p><strong>S/o:</strong> Kunal Sharma</p>
        <p><strong>Age:</strong> 36</p>
        <p><strong>Employment Type:</strong> Salaried</p>
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
        <h3>Bank Statement Overview</h3>
        <p><strong>Avg Income:</strong> 120,000</p>
        <p><strong>Avg Expenses:</strong> 78,000</p>
        <p><strong>Surplus:</strong> 42,000</p>
      </div>

      <div className="b2b-card">
        <h3>Income Tax</h3>
        <p><strong>Annual Income:</strong> 12,00,000</p>
        <p><strong>Tax Paid:</strong> 150,000</p>
        <p><strong>Last Filing Period:</strong> AY 2025-26</p>
      </div>

      <div className="b2b-card">
        <h3>Gst Overview</h3>
        <p><strong>Legal Name:</strong> ABC Traders Pvt Ltd</p>
        <p><strong>Business Constitution:</strong> Proprietorship</p>
        <p><strong>Annual Turnover:</strong> 1.8cr</p>
      </div>

      <div className="b2b-card">
        <h3>PF Details</h3>
        <p><strong>Monthly Salary:</strong> 50,000</p>
        <p><strong>Employment Tenure:</strong> 3.5 years</p>
        <p><strong>Current Employer:</strong> MendCredit pvt ltd</p>
      </div>
  
      <div className="b2b-card">
        <h3>Property Details</h3>
        <p><strong>Property Type:</strong> Residential</p>
        <p><strong>Property Age:</strong> 8 years</p>
        <p><strong>Market Value:</strong> 90,00,000</p>
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
        <strong>PAN:</strong> ABCDE1234F &nbsp;&nbsp;
        <strong>Aadhar:</strong> 52345678910 &nbsp;&nbsp;
        <strong>Udyam:</strong> AP0836000125 &nbsp;&nbsp;
        <strong>SE:</strong> AP000264456
        
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
          to="gst"
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          GST
        </NavLink>

        <NavLink
          to="pf"
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          PF
        </NavLink>

        <NavLink
          to="property"
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Property Verification
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
          <Route path="credit" element={<CreditReportContent />} />
         <Route path="bank" element={<BankAnalysisContent />} />
         <Route path="income" element={<IncomeVerificationContent />} />
         <Route path="gst" element={<GstVerificationContent />} />
         <Route path="pf" element={<ProvidentFundContent />} /> 
         <Route path="property" element={<PropertyVerificationContent />} /> 
         <Route path="risk" element={<RiskEngineContent />} />
         <Route path="decision" element={<CreditDecisionContent />} />
        </Routes>

      </div>

    </B2BLayout>
  );
}
