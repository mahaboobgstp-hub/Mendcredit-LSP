import { useParams } from "react-router-dom";
import "../../../styles/b2b.css";
import { useState } from "react";




export default function CreditReportContent() {

  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("active");
  

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
    activeAccounts: 5,
    closed: 2
  };

  return (
    <div className="b2b-module-container">

      {/* CREDIT REPORT HEADER */}

<div className="credit-report-header">

  {/* Borrower Info */}
 

  {/* LEFT SIDE — Borrower Info */}
  <div className="credit-header-left">

    <p><strong>Name:</strong> {borrower.name}</p>
    <p><strong>PAN:</strong> {borrower.pan}</p>
    <p><strong>Mobile:</strong> {borrower.mobile}</p>
    <p><strong>Report Date:</strong> {borrower.reportDate}</p>

  </div>


  {/* CENTER — CREDIT SCORE */}
  <div className="credit-header-score">

    <div className="score-gauge">

      <div className="score-circle">
        {borrower.score}
      </div>

      <div className="score-label">
        Moderate Risk
      </div>

    </div>

  </div>


  {/* RIGHT SIDE — BUREAU SWITCH */}
  <div className="credit-header-right">

    <div className="bureau-switch">

      <button className="bureau-btn active">CIBIL</button>
      <button className="bureau-btn">Experian</button>
      <button className="bureau-btn">Equifax</button>
      <button className="bureau-btn">CRIF</button>

    </div>

  </div>

</div>

      {/* Account Summary */}
     <div className="credit-metrics-grid">

  {/* CARD 1 — CREDIT SUMMARY */}
  <div className="metric-card">

    <h4>Credit Summary</h4>

    <p>Total Accounts: {borrower.totalAccounts}</p>
    <p>Active Loans: {borrower.activeAccounts}</p>
    <p>Closed Loans: {borrower.closed}</p>
    <p>Secured Loans: {borrower.secured}</p>
    <p>Unsecured Loans: {borrower.unsecured}</p>

  </div>


  {/* CARD 2 — CREDIT EXPOSURE */}
  <div className="metric-card">

    <h4>Credit Exposure</h4>

    <p>Total Sanctioned: ₹58,00,000</p>
    <p>Total Outstanding: ₹41,20,000</p>
    <p>Total Overdue: ₹55,614</p>
    <p>Largest Loan: ₹25,00,000</p>

  </div>


  {/* CARD 3 — CREDIT UTILIZATION */}
  <div className="metric-card">

    <h4>Credit Utilization</h4>

    <p>Total Limit: ₹10,00,000</p>
    <p>Used Limit: ₹8,20,000</p>
    <p>Utilization: 82%</p>

  </div>


  {/* CARD 4 — CREDIT AGE */}
  <div className="metric-card">

    <h4>Credit Age</h4>

    <p>Oldest Credit Line: 8.4 yrs</p>
    <p>Average Credit Age: 3.2 yrs</p>
    <p>Newest Loan: 6 months</p>

  </div>


  {/* CARD 5 — CREDIT MIX */}
  <div className="metric-card">

    <h4>Credit Mix</h4>

    <p>Secured Loans: {borrower.secured}</p>
    <p>Unsecured Loans: {borrower.unsecured}</p>
    <p>Credit Cards: 1</p>

  </div>

</div>
      {/* Credit Data Tabs */}

<div className="credit-tabs">

  <button
    className={activeTab === "active" ? "tab active" : "tab"}
    onClick={() => setActiveTab("active")}
  >
    Active Loans
  </button>

  <button
    className={activeTab === "negative" ? "tab active" : "tab"}
    onClick={() => setActiveTab("negative")}
  >
    Negative Loans
  </button>

  <button
    className={activeTab === "dpd" ? "tab active" : "tab"}
    onClick={() => setActiveTab("dpd")}
  >
    Payment Delays
  </button>

  <button
    className={activeTab === "enquiries" ? "tab active" : "tab"}
    onClick={() => setActiveTab("enquiries")}
  >
    Enquiries
  </button>

  <button
    className={activeTab === "closed" ? "tab active" : "tab"}
    onClick={() => setActiveTab("closed")}
  >
    Closed Loans
  </button>

</div>
      {/* Active Loans */}

{activeTab === "active" && (
  <div>

    <h3>Active Loans</h3>

    <table className="b2b-table">

      <thead>
        <tr>
          <th>#</th>
          <th>Lender</th>
          <th>Loan No</th>
          <th>Type</th>
          <th>Ownership</th>
          <th>Sanctioned Date</th>
          <th>Sanctioned Amount</th>
          <th>Current Balance</th>
          <th>Last Payment Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Union Bank</td>
          <td>114125140000037</td>
          <td>Mudra Loan</td>
          <td>Guarantor</td>
          <td>02-05-2019</td>
          <td>₹10,00,000</td>
          <td>₹9,88,706</td>
          <td>09-11-2024</td>
          <td>Active</td>
        </tr>
      </tbody>

    </table>

  </div>
)}

{/* Negative Loans */}

{activeTab === "negative" && (
  <div>

    <h3 className="negative-title">
      Negative Loans impacting your credit score
    </h3>

    <table className="b2b-table negative-table">

      <thead>
        <tr>
          <th>#</th>
          <th>Lender</th>
          <th>Loan Details</th>
<th>Sanctioned Amount</th>
<th>Current Balance</th>
<th>Overdue Amount</th>
<th>Credit Status</th>
<th>Written Off Amount</th>
<th>Settlement Amount</th>
<th>Status</th>
</tr>
</thead>

      <tbody>

<tr>

<td>1</td>

<td>VASTU HFC</td>

<td>
<div className="loan-details">

<div>LP0000000193282</div>
<div>Property Loan</div>
<div>Joint</div>

</div>
</td>

<td>₹15,00,000</td>

<td>₹14,48,562</td>

<td>₹23,982</td>

<td>-</td>

<td>

<div className="wo-details">

<div>Tot: -</div>
<div>Pri: -</div>

</div>

</td>

<td>-</td>

<td>Active</td>

</tr>

</tbody>

    </table>

  </div>
)}

{/* DPD History */}

{activeTab === "dpd" && (
  <div>

    <h3>Payment Delays (Last 24 Months)</h3>

    <div className="dpd-box">
      DPD grid will appear here
    </div>

  </div>
)}

{/* Enquiries */}

{activeTab === "enquiries" && (
  <div>

    <h3>Enquiries in Last 12 Months</h3>

    <table className="b2b-table">

      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Lender</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>23-Oct-2025</td>
          <td>Bandhan Bank</td>
          <td>Personal Loan</td>
          <td>₹10,000</td>
        </tr>
      </tbody>

    </table>

  </div>
)}

{/* Closed Loans */}

{activeTab === "closed" && (
  <div>

    <h3>Closed Loans</h3>

    <table className="b2b-table">

      <thead>
        <tr>
          <th>#</th>
          <th>Lender</th>
          <th>Loan No</th>
          <th>Type</th>
          <th>Sanctioned Date</th>
          <th>Sanctioned Amount</th>
          <th>Closing Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>1</td>
          <td>CANFIN HOMES</td>
          <td>196225000173</td>
          <td>Housing Loan</td>
          <td>26-09-2022</td>
          <td>₹14,50,000</td>
          <td>15-03-2025</td>
          <td>Closed</td>
        </tr>

        <tr>
          <td>2</td>
          <td>HDFC BANK</td>
          <td>85808905</td>
          <td>Construction Equipment Loan</td>
          <td>04-10-2021</td>
          <td>₹23,65,000</td>
          <td>29-11-2022</td>
          <td>Closed</td>
        </tr>

      </tbody>

    </table>

  </div>
)}
      
{/* RISK METRICS SECTION */}

{/* RISK METRICS */}

<div className="risk-metrics-section">

<h3 className="section-title">Risk Metrics</h3>

{/* Payment Behaviour */}

<div className="risk-category">

<h4>Payment Behaviour</h4>

<div className="risk-card-grid">

<div className="risk-card">
<p className="risk-title">Max DPD</p>
<p className="risk-value">81 days</p>
</div>

<div className="risk-card">
<p className="risk-title">30+ DPD</p>
<p className="risk-value">4</p>
</div>

<div className="risk-card">
<p className="risk-title">60+ DPD</p>
<p className="risk-value">2</p>
</div>

<div className="risk-card">
<p className="risk-title">90+ DPD</p>
<p className="risk-value">0</p>
</div>

<div className="risk-card">
<p className="risk-title">Recent DPD (6M)</p>
<p className="risk-value">Yes</p>
</div>

</div>

</div>


{/* Inquiry Behaviour */}

<div className="risk-category">

<h4>Inquiry Behaviour</h4>

<div className="risk-card-grid">

<div className="risk-card">
<p className="risk-title">Enquiries (3M)</p>
<p className="risk-value">2</p>
</div>

<div className="risk-card">
<p className="risk-title">Enquiries (6M)</p>
<p className="risk-value">4</p>
</div>

<div className="risk-card">
<p className="risk-title">Enquiries (12M)</p>
<p className="risk-value">7</p>
</div>

</div>

</div>


{/* Credit Exposure */}

<div className="risk-category">

<h4>Exposure Risk</h4>

<div className="risk-card-grid">

<div className="risk-card">
<p className="risk-title">Total Outstanding</p>
<p className="risk-value">₹41,20,000</p>
</div>

<div className="risk-card">
<p className="risk-title">Largest Loan</p>
<p className="risk-value">₹25,00,000</p>
</div>

<div className="risk-card">
<p className="risk-title">Unsecured Ratio</p>
<p className="risk-value">43%</p>
</div>

<div className="risk-card">
<p className="risk-title">EMI Burden</p>
<p className="risk-value">₹42,500</p>
</div>

</div>

</div>


{/* Credit Behaviour */}

<div className="risk-category">

<h4>Credit Behaviour</h4>

<div className="risk-card-grid">

<div className="risk-card">
<p className="risk-title">Credit Age</p>
<p className="risk-value">3.2 yrs</p>
</div>

<div className="risk-card">
<p className="risk-title">Credit Utilization</p>
<p className="risk-value">82%</p>
</div>

<div className="risk-card">
<p className="risk-title">Credit Cards</p>
<p className="risk-value">1</p>
</div>

</div>

</div>


{/* Negative Signals */}

<div className="risk-category">

<h4>Negative Signals</h4>

<div className="risk-card-grid">

<div className="risk-card risk-danger">
<p className="risk-title">Written Off</p>
<p className="risk-value">1</p>
</div>

<div className="risk-card risk-warning">
<p className="risk-title">Overdue Accounts</p>
<p className="risk-value">2</p>
</div>

<div className="risk-card">
<p className="risk-title">Settled Accounts</p>
<p className="risk-value">0</p>
</div>

</div>

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
