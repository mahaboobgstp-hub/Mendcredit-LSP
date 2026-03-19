import { useParams } from "react-router-dom";
import "../../../styles/b2b.css";
import { useState, useEffect } from "react";




export default function CreditReportContent() {

  const { id } = useParams();
  const API_BASE = "https://credit-backend-7gsz.onrender.com/api/credit";
  const [activeTab, setActiveTab] = useState("active");
  const [dpdData, setDpdData] = useState([])
  const [summary,setSummary] = useState({})
  const [exposure,setExposure] = useState({})
  const [accounts,setAccounts] = useState([])
  const [negativeLoans,setNegativeLoans] = useState([])
  const [enquiries,setEnquiries] = useState([])
  const [utilization,setUtilization] = useState({})
  const [creditAge,setCreditAge] = useState({})
  const [creditMix,setCreditMix] = useState({})
  const [risk, setRisk] = useState({})
  const [demography, setDemography] = useState({})

 useEffect(()=>{

 const customerId="CUST001"

 fetch(`${API_BASE}/report?customerId=${customerId}`)
  .then(res => res.json())
  .then(data => {

    console.log("FULL REPORT:", data)

    // TOP CARDS
    setSummary(data.summary || {})
    setExposure(data.exposure || {})
    setUtilization(data.utilization || {})
    setCreditAge(data.creditAge || {})
    setCreditMix(data.creditMix || {})

    // TABLES
    setAccounts(data.accounts || [])
    setNegativeLoans(data.negativeLoans || [])
    setEnquiries(data.enquiries || [])
    setDpdData(data.dpd || [])
    setDemography(data.demography || {})
   

    // RISK
    setRisk(data.riskMetrics || {})

  })
  .catch(err => console.error("API ERROR:", err))

},[])

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

  const getLast25Months = () => {
  const months = []
  const today = new Date()

  for (let i = 0; i < 25; i++) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1)

    const label = d.toLocaleString("default", {
      month: "short",
      year: "numeric"
    })

    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`

    months.push({ label, key })
  }

  return months
}

  const renderDPDGrid = () => {
  if (!dpdData || dpdData.length === 0) return "No DPD data"

  const months = getLast25Months()

  return (
    <div className="dpd-table-wrapper">

      <table className="dpd-table">

        {/* HEADER */}
        <thead>
          <tr>
            <th>Month</th>

            {dpdData.map((loan, idx) => (
              <th key={idx}>
                <div>{loan.bank}</div>
                <div className="loan-no">
                  ****{loan.loanNumber.slice(-4)}
                </div>
              </th>
            ))}

          </tr>
        </thead>

        {/* BODY */}
        <tbody>

          {months.map((m, i) => (
            <tr key={i}>

              <td className="month-col">{m.label}</td>

              {dpdData.map((loan, j) => {
                const value = loan.dpdHistory?.[m.key] || "000"

                const isDelay =
                  value !== "000" &&
                  value !== "STD" &&
                  value !== "XXX" &&
                  value !== "SUB"

                return (
                  <td
                    key={j}
                    className={isDelay ? "dpd-red" : ""}
                  >
                    {value}
                  </td>
                )
              })}

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}

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

    <p>Total Accounts: {summary.totalAccounts}</p>
    <p>Active Loans: {summary.activeLoans}</p>
    <p>Closed Loans: {summary.closedLoans}</p>
    <p>Negative Loans: {summary.negativeLoans}</p>

  </div>


  {/* CARD 2 — CREDIT EXPOSURE */}
  <div className="metric-card">

    <h4>Credit Exposure</h4>

    <p>Total Sanctioned: ₹{exposure.totalSanctioned}</p>
<p>Total Outstanding: ₹{exposure.totalOutstanding}</p>
<p>Total Overdue: ₹{exposure.totalOverdue}</p>
<p>Largest Loan: ₹{exposure.largestLoan}</p>

  </div>


  {/* CARD 3 — CREDIT UTILIZATION */}
<div className="metric-card">

 <h4>Credit Utilization</h4>

<p>Total OD Limit: ₹{utilization.totalLimit}</p>
<p>Used Limit: ₹{utilization.usedLimit}</p>
<p>Utilization: {utilization.utilization}%</p>

<p>Card Limit: ₹{utilization.cardLimit}</p>
<p>Card Used: ₹{utilization.cardUsed}</p>
<p>Card Utilization: {utilization.cardUtilization}%</p>

</div>


  <div className="metric-card">

 <h4>Credit Age</h4>

 <p>Oldest Credit Line: {creditAge.oldestCreditLine} yrs</p>

 <p>Average Credit Age: {creditAge.averageCreditAge} yrs</p>

 <p>Newest Loan: {creditAge.newestLoan} months</p>

</div>


  <div className="metric-card">

 <h4>Credit Mix</h4>

 <p>Secured Loans: {creditMix.securedLoans}</p>

 <p>Unsecured Loans: {creditMix.unsecuredLoans}</p>

 <p>Credit Cards: {creditMix.creditCards}</p>

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

<button
  className={activeTab === "demography" ? "tab active" : "tab"}
  onClick={() => setActiveTab("demography")}
>
  Demography
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

{accounts
  .filter(a => a.status === "Active")
  .map((a, i) => (

<tr key={i}>
<td>{i+1}</td>
<td>{a.lender}</td>
<td>{a.loanNo}</td>
<td>{a.type}</td>
<td>{a.ownership}</td>
<td>{a.sanctionedDate}</td>
<td>₹{a.sanctionedAmount}</td>
<td>₹{a.currentBalance}</td>
<td>{a.lastPaymentDate}</td>
<td>{a.status}</td>
</tr>

))}

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

{negativeLoans.map((a,i)=>(
<tr key={i}>

<td>{i+1}</td>

<td>{a.lender}</td>

<td>
<div className="loan-details">
<div>{a.loanNo}</div>
<div>{a.type}</div>
<div>{a.ownership}</div>
</div>
</td>

<td>₹{a.sanctionedAmount}</td>
<td>₹{a.currentBalance}</td>
<td>₹{a.overdue}</td>
<td>-</td>

<td>
<div className="wo-details">
<div>Tot: {a.writtenOff}</div>
<div>Settle: {a.settlement}</div>
</div>
</td>

<td>-</td>
<td>{a.status}</td>

</tr>
))}

</tbody>

    </table>

  </div>
)}

{/* DPD History */}

{activeTab === "dpd" && (
  <div>

    <h3>Payment Delays (Last 24 Months)</h3>

    <div className="dpd-box">
  {renderDPDGrid()}
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

{enquiries.map((e,i)=>(
<tr key={i}>
<td>{i+1}</td>
<td>{e.date}</td>
<td>{e.lender}</td>
<td>{e.type}</td>
<td>₹{e.amount}</td>
</tr>
))}

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

{accounts
 .filter(a => a.status === "Closed")
 .map((a,i)=>(
<tr key={i}>
<td>{i+1}</td>
<td>{a.lender}</td>
<td>{a.loanNo}</td>
<td>{a.type}</td>
<td>{a.sanctionedDate}</td>
<td>₹{a.sanctionedAmount}</td>
<td>{a.status}</td>
</tr>
))}

</tbody>

    </table>

  </div>
 
)}

{activeTab === "demography" && (
  <div>

    <h3>Demographic Details</h3>

    <table className="b2b-table">

      <tbody>

        <tr>
          <td>Name</td>
          <td>{demography.name}</td>
        </tr>

        <tr>
          <td>Date of Birth</td>
          <td>{demography.dob}</td>
        </tr>

        <tr>
          <td>Gender</td>
          <td>{demography.gender}</td>
        </tr>

        <tr>
          <td>PAN</td>
          <td>{demography.pan}</td>
        </tr>

        <tr>
          <td>CKYC</td>
          <td>{demography.ckyc || "Not Available"}</td>
        </tr>

        {/* 🔥 PHONE FLAGS */}
        <tr>
          <td>Mobile Numbers</td>
          <td>
            {demography.phones?.map((p,i)=>(
              <div key={i}>
                {p.number} {p.verified ? "✅ Verified" : "❌ Not Verified"}
              </div>
            ))}
          </td>
        </tr>

        {/* EMAIL */}
        <tr>
          <td>Email IDs</td>
          <td>
            {demography.emails?.length
              ? demography.emails.map((e,i)=><div key={i}>{e}</div>)
              : "Not Available"}
          </td>
        </tr>

        {/* 🔥 ADDRESS TIMELINE */}
        <tr>
          <td>Addresses (Latest → Old)</td>
          <td>
            {demography.addresses?.map((a,i)=>(
              <div key={i} style={{marginBottom:"10px"}}>
                <div>{a.line1}, {a.line2}</div>
                <div>{a.pincode} | State: {a.state}</div>
                <div><strong>Reported:</strong> {a.reportedDate}</div>
                <hr/>
              </div>
            ))}
          </td>
        </tr>

        {/* 🔥 KYC SCORE */}
        <tr>
          <td>KYC Score</td>
          <td>
            {demography.kycScore} / 100 ({demography.kycStatus})
          </td>
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

<p>Max DPD: <strong>{risk.payment?.maxDPD}</strong></p>
<p>30+ DPD: <strong>{risk.payment?.dpd30}</strong></p>
<p>60+ DPD: <strong>{risk.payment?.dpd60}</strong></p>
<p>90+ DPD: <strong>{risk.payment?.dpd90}</strong></p>
<p>Recent DPD (6M): <strong>{risk.payment?.recentDPD ? "Yes":"No"}</strong></p>

</div>


{/* Inquiry Behaviour */}

<div className="risk-group-card">
<h4>Inquiry Behaviour</h4>

<p>Enquiries (3M): <strong>{risk.inquiry?.m3}</strong></p>
<p>Enquiries (6M): <strong>{risk.inquiry?.m6}</strong></p>
<p>Enquiries (12M): <strong>{risk.inquiry?.m12}</strong></p>

</div>


{/* Exposure Risk */}

<div className="risk-group-card">
<h4>Exposure Risk</h4>

<p>Total Outstanding: <strong>₹{risk.exposure?.totalOutstanding}</strong></p>
<p>Largest Loan: <strong>₹{risk.exposure?.largestLoan}</strong></p>
<p>Unsecured Ratio: <strong>{risk.exposure?.unsecuredRatio}%</strong></p>
<p>EMI Burden: <strong>₹{risk.emi?.total}</strong></p>

</div>


{/* Credit Behaviour */}

<div className="risk-group-card">
<h4>Credit Behaviour</h4>

<p>Credit Age: <strong>{risk.credit?.creditAge} yrs</strong></p>
<p>Credit Utilization: <strong>{risk.credit?.utilization}%</strong></p>
<p>Credit Cards: <strong>{risk.credit?.creditCards}</strong></p>

</div>


{/* Negative Signals */}

<div className="risk-group-card risk-danger">
<h4>Negative Signals</h4>

<p>Written Off: <strong>{risk.negative?.writtenOff}</strong></p>
<p>Overdue Accounts: <strong>{risk.negative?.overdue}</strong></p>
<p>Settled Accounts: <strong>{risk.negative?.settled}</strong></p>

</div>


{/* Credit Trend */}

<div className="risk-group-card">
<h4>Credit Trend</h4>

<p>Outstanding 24M Ago: <strong>₹{risk.trend?.outstanding24M}</strong></p>
<p>Current Outstanding: <strong>₹{risk.trend?.currentOutstanding}</strong></p>
<p>Debt Trend: <strong>{risk.trend?.trend}</strong></p>

</div>


{/* Credit Concentration */}

<div className="risk-group-card">
<h4>Credit Concentration</h4>

<p>Largest Exposure: <strong>₹{risk.concentration?.largestExposure}</strong></p>
<p>Top 3 Loans Share: <strong>{risk.concentration?.top3Share}%</strong></p>

</div>


{/* Loan Purpose */}

<div className="risk-group-card">
<h4>Loan Purpose</h4>

<p>Housing Loans: <strong>{risk.purpose?.home}</strong></p>
<p>Auto Loans: <strong>{risk.purpose?.auto}</strong></p>
<p>Personal Loans: <strong>{risk.purpose?.personal}</strong></p>
<p>Business Loans: <strong>{risk.purpose?.business}</strong></p>

</div>


{/* Bureau Status */}

<div className="risk-group-card">
<h4>Bureau Status</h4>

<p>Standard Accounts: <strong>{risk.bureau?.standard}</strong></p>
<p>Substandard Accounts: <strong>{risk.bureau?.sub}</strong></p>
<p>Doubtful Accounts: <strong>{risk.bureau?.doubtful}</strong></p>
<p>Loss Accounts: <strong>{risk.bureau?.loss}</strong></p>

</div>


{/* Card Behaviour */}

<div className="risk-group-card">
<h4>Card Behaviour</h4>

<p>Card Limit: <strong>₹{risk.card?.limit}</strong></p>
<p>Card Utilization: <strong>{risk.card?.utilization}%</strong></p>
<p>Late Payments: <strong>{risk.card?.latePayments}</strong></p>

</div>

  <div className="risk-group-card risk-danger">
<h4>Risk Flags</h4>

<p>Recent DPD (6M): <strong>{risk.flags?.recentDPD ? "Yes":"No"}</strong></p>
<p>Written Off Accounts: <strong>{risk.flags?.writtenOff}</strong></p>
<p>High Credit Utilization: <strong>{risk.flags?.highUtilization}%</strong></p>
<p>Too Many Enquiries: <strong>{risk.flags?.tooManyEnquiries}</strong></p>

</div>

  <div className="risk-group-card">
<h4>Recent Credit Activity</h4>

<p>New Loans (6M): <strong>{risk.activity?.m6}</strong></p>
<p>New Loans (12M): <strong>{risk.activity?.m12}</strong></p>
<p>Recently Closed Loans: <strong>{risk.activity?.closed}</strong></p>

</div>

  <div className="risk-group-card">
<h4>Loan Pattern</h4>

<p>Repeat Personal Loans: <strong>{risk.pattern?.repeatPersonal ? "Yes":"No"}</strong></p>
<p>Loans in Last 24M: <strong>{risk.pattern?.last24M}</strong></p>
<p>NBFC Exposure: <strong>{risk.pattern?.nbfcExposure}</strong></p>

</div>

  <div className="risk-group-card">
<h4>Unsecured Exposure</h4>

<p>Total Outstanding: <strong>₹{risk.unsecured?.total}</strong></p>
<p>Unsecured Exposure: <strong>₹{risk.unsecured?.unsecured}</strong></p>
<p>Unsecured Ratio: <strong>{risk.unsecured?.ratio}%</strong></p>

</div>

  <div className="risk-group-card">
<h4>EMI Burden</h4>

<p>Total EMI: <strong>₹{risk.emi?.total}</strong></p>
<p>Largest EMI: <strong>₹{risk.emi?.largest}</strong></p>
<p>Active EMIs: <strong>{risk.emi?.count}</strong></p>

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
    </div>
 
  );
}
  
   
