import { useParams } from "react-router-dom";
import "../../../styles/b2b.css";
import React, { useState } from "react";


export default function ITRUnderwritingDashboard() {

const [activeTab,setActiveTab] = useState("income");

const data = {
latestIncome:1200000,
avgIncome:1050000,
incomeGrowth:"12%",
incomeVolatility:"8%",
taxPaid:150000,
complianceScore:92,
tdsMatch:"98%",
riskScore:745
};

return (

<div className="itr-dashboard">

<h2 className="page-title">ITR & Form 26AS Underwriting</h2>


{/* SUMMARY METRICS */}

<div className="summary-grid">

<div className="metric-card">
<h3>Latest Income</h3>
<p>₹{data.latestIncome.toLocaleString()}</p>
</div>

<div className="metric-card">
<h3>3 Year Avg Income</h3>
<p>₹{data.avgIncome.toLocaleString()}</p>
</div>

<div className="metric-card">
<h3>Income Growth</h3>
<p>{data.incomeGrowth}</p>
</div>

<div className="metric-card">
<h3>Income Volatility</h3>
<p>{data.incomeVolatility}</p>
</div>

<div className="metric-card">
<h3>Tax Paid</h3>
<p>₹{data.taxPaid.toLocaleString()}</p>
</div>

<div className="metric-card">
<h3>Compliance Score</h3>
<p>{data.complianceScore}</p>
</div>

<div className="metric-card">
<h3>TDS Match</h3>
<p>{data.tdsMatch}</p>
</div>

<div className="metric-card">
<h3>ITR Risk Score</h3>
<p>{data.riskScore}</p>
</div>

</div>


{/* TABS */}

<div className="tabs">

<button
className={activeTab==="income"?"tab-btn active":"tab-btn"}
onClick={()=>setActiveTab("income")}
>
Income Analysis
</button>

<button
className={activeTab==="tax"?"tab-btn active":"tab-btn"}
onClick={()=>setActiveTab("tax")}
>
Tax Compliance
</button>

<button
className={activeTab==="verification"?"tab-btn active":"tab-btn"}
onClick={()=>setActiveTab("verification")}
>
Income Verification
</button>

<button
className={activeTab==="tds"?"tab-btn active":"tab-btn"}
onClick={()=>setActiveTab("tds")}
>
TDS Analysis
</button>

<button
className={activeTab==="sft"?"tab-btn active":"tab-btn"}
onClick={()=>setActiveTab("sft")}
>
High Value Transactions
</button>

<button
className={activeTab==="risk"?"tab-btn active":"tab-btn"}
onClick={()=>setActiveTab("risk")}
>
Risk Indicators
</button>

</div>


{/* INCOME TAB */}

{activeTab==="income" && (

<div className="tab-content">

<h3>Income Breakdown</h3>

<table className="analytics-table">

<thead>
<tr>
<th>Income Source</th>
<th>Amount</th>
<th>Share</th>
</tr>
</thead>

<tbody>

<tr>
<td>Salary</td>
<td>₹500000</td>
<td>41%</td>
</tr>

<tr>
<td>Business</td>
<td>₹600000</td>
<td>50%</td>
</tr>

<tr>
<td>Capital Gains</td>
<td>₹70000</td>
<td>6%</td>
</tr>

<tr>
<td>Other Income</td>
<td>₹30000</td>
<td>3%</td>
</tr>

</tbody>

</table>

</div>

)}



{/* TAX TAB */}

{activeTab==="tax" && (

<div className="tab-content">

<h3>Tax Compliance Metrics</h3>

<table className="analytics-table">

<thead>
<tr>
<th>Metric</th>
<th>Value</th>
</tr>
</thead>

<tbody>

<tr>
<td>Total Tax Paid</td>
<td>₹150000</td>
</tr>

<tr>
<td>Tax Payable</td>
<td>₹155000</td>
</tr>

<tr>
<td>Refund</td>
<td>₹5000</td>
</tr>

<tr>
<td>Return Filing Status</td>
<td>Verified</td>
</tr>

<tr>
<td>Deduction Ratio</td>
<td>12%</td>
</tr>

</tbody>

</table>

</div>

)}



{/* VERIFICATION TAB */}

{activeTab==="verification" && (

<div className="tab-content">

<h3>Income Cross Verification</h3>

<table className="analytics-table">

<thead>
<tr>
<th>Comparison</th>
<th>Status</th>
</tr>
</thead>

<tbody>

<tr>
<td>ITR vs Bank Income</td>
<td className="safe">Matched</td>
</tr>

<tr>
<td>ITR vs GST Turnover</td>
<td className="safe">Matched</td>
</tr>

<tr>
<td>TDS vs Declared Income</td>
<td className="safe">Matched</td>
</tr>

<tr>
<td>Eligible EMI Capacity</td>
<td>₹35000</td>
</tr>

</tbody>

</table>

</div>

)}



{/* TDS TAB */}

{activeTab==="tds" && (

<div className="tab-content">

<h3>TDS Summary</h3>

<table className="analytics-table">

<thead>
<tr>
<th>Metric</th>
<th>Value</th>
</tr>
</thead>

<tbody>

<tr>
<td>Total TDS</td>
<td>₹120000</td>
</tr>

<tr>
<td>No of Deductors</td>
<td>3</td>
</tr>

<tr>
<td>Largest Deductor Share</td>
<td>60%</td>
</tr>

<tr>
<td>Recurring Deductor</td>
<td>Yes</td>
</tr>

</tbody>

</table>

</div>

)}



{/* SFT TAB */}

{activeTab==="sft" && (

<div className="tab-content">

<h3>High Value Transactions</h3>

<table className="analytics-table">

<thead>
<tr>
<th>Transaction</th>
<th>Amount</th>
</tr>
</thead>

<tbody>

<tr>
<td>Cash Deposits</td>
<td>₹400000</td>
</tr>

<tr>
<td>Property Purchase</td>
<td>₹0</td>
</tr>

<tr>
<td>Mutual Fund Investment</td>
<td>₹150000</td>
</tr>

<tr>
<td>Credit Card Spend</td>
<td>₹200000</td>
</tr>

<tr>
<td>Fixed Deposits</td>
<td>₹100000</td>
</tr>

</tbody>

</table>

</div>

)}



{/* RISK TAB */}

{activeTab==="risk" && (

<div className="tab-content">

<h3>Risk Indicators</h3>

<table className="analytics-table">

<thead>
<tr>
<th>Indicator</th>
<th>Status</th>
</tr>
</thead>

<tbody>

<tr>
<td>Income Mismatch</td>
<td className="safe">No</td>
</tr>

<tr>
<td>Late Filing</td>
<td className="safe">No</td>
</tr>

<tr>
<td>High Deductions</td>
<td className="moderate">Moderate</td>
</tr>

<tr>
<td>Suspicious Transactions</td>
<td className="safe">No</td>
</tr>

<tr>
<td>Sudden Income Spike</td>
<td className="safe">No</td>
</tr>

</tbody>

</table>

</div>

)}

</div>

);

}
