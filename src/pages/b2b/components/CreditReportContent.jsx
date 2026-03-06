import { useParams } from "react-router-dom";
import "../../../styles/b2b.css";
import { useState } from "react";




export default function CreditReportContent() {

  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("active");
  const [riskTab, setRiskTab] = useState("summary");

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
      
     <div className="risk-analytics-tabs">



<button className={riskTab === "flags" ? "tab active" : "tab"} onClick={() => setRiskTab("flags")}>
Risk Flags
</button>

<button className={riskTab === "exposure" ? "tab active" : "tab"} onClick={() => setRiskTab("exposure")}>
Credit Exposure
</button>

<button className={riskTab === "utilization" ? "tab active" : "tab"} onClick={() => setRiskTab("utilization")}>
Credit Utilization
</button>

<button className={riskTab === "delinquency" ? "tab active" : "tab"} onClick={() => setRiskTab("delinquency")}>
Delinquency Metrics
</button>

<button className={riskTab === "age" ? "tab active" : "tab"} onClick={() => setRiskTab("age")}>
Credit Age
</button>

<button className={riskTab === "mix" ? "tab active" : "tab"} onClick={() => setRiskTab("mix")}>
Credit Mix
</button>

<button className={riskTab === "inquiry" ? "tab active" : "tab"} onClick={() => setRiskTab("inquiry")}>
Inquiry Behaviour
</button>

<button className={riskTab === "pattern" ? "tab active" : "tab"} onClick={() => setRiskTab("pattern")}>
Loan Pattern
</button>

<button className={riskTab === "negative" ? "tab active" : "tab"} onClick={() => setRiskTab("negative")}>
Negative Accounts
</button>

<button className={riskTab === "activity" ? "tab active" : "tab"} onClick={() => setRiskTab("activity")}>
Recent Credit Activity
</button>

<button className={riskTab === "concentration" ? "tab active" : "tab"} onClick={() => setRiskTab("concentration")}>
Credit Concentration
</button>

<button className={riskTab === "unsecured" ? "tab active" : "tab"} onClick={() => setRiskTab("unsecured")}>
Unsecured Exposure
</button>

<button className={riskTab === "emi" ? "tab active" : "tab"} onClick={() => setRiskTab("emi")}>
EMI Burden
</button>

<button className={riskTab === "purpose" ? "tab active" : "tab"} onClick={() => setRiskTab("purpose")}>
Loan Purpose
</button>

<button className={riskTab === "bureaustatus" ? "tab active" : "tab"} onClick={() => setRiskTab("bureaustatus")}>
Bureau Status
</button>

<button className={riskTab === "trend" ? "tab active" : "tab"} onClick={() => setRiskTab("trend")}>
Credit Trend
</button>

<button className={riskTab === "card" ? "tab active" : "tab"} onClick={() => setRiskTab("card")}>
Card Behaviour
</button>

</div>

     

      {riskTab === "flags" && (
<div className="risk-box">

<span className="tag tag-warning">Recent DPD</span>
<span className="tag tag-danger">Written Off Account</span>
<span className="tag tag-danger">High Utilization</span>
<span className="tag tag-warning">Too Many Enquiries</span>

</div>
)}

      {riskTab === "exposure" && (
<div className="risk-box">
<h4>Credit Exposure</h4>

<p>Total Sanctioned Credit: ₹58,00,000</p>
<p>Total Outstanding: ₹41,20,000</p>
<p>Total Overdue: ₹55,614</p>
<p>Largest Loan: ₹25,00,000</p>

</div>
)}

      {riskTab === "utilization" && (
<div className="risk-box">

<p>Total Limit: ₹10,00,000</p>
<p>Used Limit: ₹8,20,000</p>
<p>Utilization: 82%</p>

</div>
)}

      {riskTab === "delinquency" && (
<div className="risk-box">

<p>Max DPD: 81 days</p>
<p>30+ DPD Count: 4</p>
<p>60+ DPD Count: 2</p>
<p>90+ DPD Count: 0</p>
<p>Recent DPD (6M): Yes</p>

</div>
)}

      {riskTab === "age" && (
<div className="risk-box">

<p>Oldest Credit Line: 8.4 years</p>
<p>Average Credit Age: 3.2 years</p>
<p>Newest Loan: 6 months</p>

</div>
)}
      {riskTab === "mix" && (
<div className="risk-box">

<p>Secured Loans: 2</p>
<p>Unsecured Loans: 5</p>
<p>Credit Cards: 1</p>

</div>
)}
      {riskTab === "inquiry" && (
<div className="risk-box">

<p>Enquiries (3M): 2</p>
<p>Enquiries (6M): 4</p>
<p>Enquiries (12M): 7</p>

</div>
)}

      {riskTab === "pattern" && (
<div className="risk-box">

<p>Repeat Personal Loans: Yes</p>
<p>Loans last 24M: 5</p>
<p>NBFC Exposure: High</p>

</div>
)}

      {riskTab === "negative" && (
<div className="risk-box">

<p>Written Off Accounts: 1</p>
<p>Settled Accounts: 0</p>
<p>Overdue Accounts: 2</p>

</div>
)}

      {riskTab === "activity" && (
<div className="risk-box">

<p>New Loans (6M): 2</p>
<p>New Loans (12M): 3</p>
<p>Recently Closed Loans: 1</p>

</div>
)}

      {riskTab === "concentration" && (
<div className="risk-box">

<p>Largest Loan Exposure: ₹25,00,000</p>
<p>Top 3 Loans Share: 68%</p>

</div>
)}

      {riskTab === "unsecured" && (
<div className="risk-box">

<p>Total Outstanding: ₹41,20,000</p>
<p>Unsecured Exposure: ₹18,00,000</p>
<p>Unsecured Ratio: 43%</p>

</div>
)}

      {riskTab === "emi" && (
<div className="risk-box">

<p>Total EMI Burden: ₹42,500</p>
<p>Largest EMI: ₹18,000</p>
<p>Active EMI Count: 5</p>

</div>
)}

      {riskTab === "purpose" && (
<div className="risk-box">

<p>Housing Loans: 1</p>
<p>Auto Loans: 1</p>
<p>Personal Loans: 3</p>
<p>Business Loans: 2</p>

</div>
)}

      {riskTab === "bureaustatus" && (
<div className="risk-box">

<p>Standard Accounts: 5</p>
<p>Substandard Accounts: 1</p>
<p>Doubtful Accounts: 0</p>
<p>Loss Accounts: 0</p>

</div>
)}

      {riskTab === "trend" && (
<div className="risk-box">

<p>Outstanding 24M Ago: ₹28,00,000</p>
<p>Current Outstanding: ₹41,20,000</p>
<p>Debt Trend: Increasing</p>

</div>
)}

      {riskTab === "card" && (
<div className="risk-box">

<p>Card Limit: ₹2,00,000</p>
<p>Card Utilization: 78%</p>
<p>Late Card Payments: 3</p>

</div>
)}
      
      {/* Disclaimer */}
      <div className="b2b-disclaimer">

        Credit information is sourced from bureau reports and provided
        for underwriting support. Lenders should independently verify
        borrower liabilities before taking final decisions.

      </div>

    </div>
       
  );
}
