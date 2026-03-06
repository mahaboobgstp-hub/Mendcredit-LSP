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
      
<div className="loan-section">

<h2 className="loan-section-title">Loan Accounts</h2>
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

{/* RISK METRICS */}

<div className="risk-metrics-section">

<h3 className="section-title">Risk Metrics</h3>

<div className="risk-metrics-grid">

{/* Payment Behaviour */}

<div className="risk-group-card">
<h4>Payment Behaviour</h4>

<p>Max DPD: <strong>81 days</strong></p>
<p>30+ DPD: <strong>4</strong></p>
<p>60+ DPD: <strong>2</strong></p>
<p>90+ DPD: <strong>0</strong></p>
<p>Recent DPD (6M): <strong>Yes</strong></p>

</div>


{/* Inquiry Behaviour */}

<div className="risk-group-card">
<h4>Inquiry Behaviour</h4>

<p>Enquiries (3M): <strong>2</strong></p>
<p>Enquiries (6M): <strong>4</strong></p>
<p>Enquiries (12M): <strong>7</strong></p>

</div>


{/* Exposure Risk */}

<div className="risk-group-card">
<h4>Exposure Risk</h4>

<p>Total Outstanding: <strong>₹41,20,000</strong></p>
<p>Largest Loan: <strong>₹25,00,000</strong></p>
<p>Unsecured Ratio: <strong>43%</strong></p>
<p>EMI Burden: <strong>₹42,500</strong></p>

</div>


{/* Credit Behaviour */}

<div className="risk-group-card">
<h4>Credit Behaviour</h4>

<p>Credit Age: <strong>3.2 yrs</strong></p>
<p>Credit Utilization: <strong>82%</strong></p>
<p>Credit Cards: <strong>1</strong></p>

</div>


{/* Negative Signals */}

<div className="risk-group-card risk-danger">
<h4>Negative Signals</h4>

<p>Written Off: <strong>1</strong></p>
<p>Overdue Accounts: <strong>2</strong></p>
<p>Settled Accounts: <strong>0</strong></p>

</div>


{/* Credit Trend */}

<div className="risk-group-card">
<h4>Credit Trend</h4>

<p>Outstanding 24M Ago: <strong>₹28,00,000</strong></p>
<p>Current Outstanding: <strong>₹41,20,000</strong></p>
<p>Debt Trend: <strong>Increasing</strong></p>

</div>


{/* Credit Concentration */}

<div className="risk-group-card">
<h4>Credit Concentration</h4>

<p>Largest Exposure: <strong>₹25,00,000</strong></p>
<p>Top 3 Loans Share: <strong>68%</strong></p>

</div>


{/* Loan Purpose */}

<div className="risk-group-card">
<h4>Loan Purpose</h4>

<p>Housing Loans: <strong>1</strong></p>
<p>Auto Loans: <strong>1</strong></p>
<p>Personal Loans: <strong>3</strong></p>
<p>Business Loans: <strong>2</strong></p>

</div>


{/* Bureau Status */}

<div className="risk-group-card">
<h4>Bureau Status</h4>

<p>Standard Accounts: <strong>5</strong></p>
<p>Substandard Accounts: <strong>1</strong></p>
<p>Doubtful Accounts: <strong>0</strong></p>
<p>Loss Accounts: <strong>0</strong></p>

</div>


{/* Card Behaviour */}

<div className="risk-group-card">
<h4>Card Behaviour</h4>

<p>Card Limit: <strong>₹2,00,000</strong></p>
<p>Card Utilization: <strong>78%</strong></p>
<p>Late Payments: <strong>3</strong></p>

</div>

  <div className="risk-group-card risk-danger">
<h4>Risk Flags</h4>

<p>Recent DPD (6M): <strong>Yes</strong></p>
<p>Written Off Accounts: <strong>1</strong></p>
<p>High Credit Utilization: <strong>82%</strong></p>
<p>Too Many Enquiries: <strong>7</strong></p>

</div>

  <div className="risk-group-card">
<h4>Recent Credit Activity</h4>

<p>New Loans (6M): <strong>2</strong></p>
<p>New Loans (12M): <strong>3</strong></p>
<p>Recently Closed Loans: <strong>1</strong></p>

</div>

  <div className="risk-group-card">
<h4>Loan Pattern</h4>

<p>Repeat Personal Loans: <strong>Yes</strong></p>
<p>Loans in Last 24M: <strong>5</strong></p>
<p>NBFC Exposure: <strong>High</strong></p>

</div>

  <div className="risk-group-card">
<h4>Unsecured Exposure</h4>

<p>Total Outstanding: <strong>₹41,20,000</strong></p>
<p>Unsecured Exposure: <strong>₹18,00,000</strong></p>
<p>Unsecured Ratio: <strong>43%</strong></p>

</div>

  <div className="risk-group-card">
<h4>EMI Burden</h4>

<p>Total EMI: <strong>₹42,500</strong></p>
<p>Largest EMI: <strong>₹18,000</strong></p>
<p>Active EMIs: <strong>5</strong></p>

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
  
   
