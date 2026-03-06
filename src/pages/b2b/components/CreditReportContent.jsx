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
  <div className="credit-header-left">

    <p><strong>Name:</strong> {borrower.name}</p>
    <p><strong>PAN:</strong> {borrower.pan}</p>
    <p><strong>Mobile:</strong> {borrower.mobile}</p>

  </div>


  {/* Credit Score */}
  <div className="credit-header-score">

    <h1>{borrower.score}</h1>

  </div>


  {/* Brand + Report Info */}
  <div className="credit-header-right">

    <h2 className="brand">Mend Credit Advisory</h2>

    <p className="brand-sub">
      Explaining Every Detail. Resolving Every Issue
    </p>

    <p className="report-date">
      Report Date: {borrower.reportDate}
    </p>

  </div>

</div>


      {/* Account Summary */}
      <div className="b2b-profile-grid">

        <div className="b2b-card">
          <h4>Total Accounts</h4>
          <p className="b2b-stat">{borrower.totalAccounts}</p>
        </div>

        <div className="b2b-card">
          <h4>Secured</h4>
          <p className="b2b-stat">{borrower.secured}</p>
        </div>

        <div className="b2b-card">
          <h4>Unsecured</h4>
          <p className="b2b-stat">{borrower.unsecured}</p>
        </div>

        <div className="b2b-card">
          <h4>Active Loans</h4>
          <p className="b2b-stat">{borrower.activeAccounts}</p>
        </div>

        <div className="b2b-card">
          <h4>Closed</h4>
          <p className="b2b-stat">{borrower.closed}</p>
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
      
      <div>
        <span className="tag tag-warning">Recent DPDs</span>
        <span className="tag tag-danger">Written-Off Account</span>
        <span className="tag tag-danger">High Utilization</span>

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
