import { useParams } from "react-router-dom";
import "../../../styles/b2b.css";
import React, { useState } from "react";


export default function GstUnderwritingDashboard() {

const [activeTab,setActiveTab] = useState("revenue")

const data = {

gstin:"29ABCDE1234F1Z5",
legal_name:"ABC Traders Pvt Ltd",
trade_name:"ABC Traders",
registration_date:"2019-06-12",
constitution:"Proprietorship",
business_type:"Regular",
status:"Active",
location:"Hyderabad",

annual_turnover:"₹1.8 Cr",
avg_monthly_turnover:"₹15 L",
peak_month:"₹22 L",
min_month:"₹9 L",

yoy_growth:"18%",
quarter_growth:"6%",
monthly_growth:"2.3%",

volatility:"Low",
consistent_months:"10",
seasonality_index:"Moderate",

returns_filed:"12/12",
late_filings:"1",
tax_paid:"₹18 L",
tax_liability:"₹18.2 L",

itc_claimed:"₹9 L",
itc_utilization:"49%",
itc_volatility:"Low",

buyers:"42",
suppliers:"25",
top_customer_share:"22%",
top_supplier_share:"17%",

avg_invoice:"₹35k",
invoice_frequency:"420 / year",
large_invoice_ratio:"9%",

estimated_income:"₹27 L",
tax_burden:"10%",
working_capital:"₹35 L",

risk_late_filing:"Low",
risk_turnover_drop:"None",
risk_itc_mismatch:"None",

gst_vs_bank:"Matched",
gst_vs_itr:"Matched",
invoice_vs_bank:"Matched",

profit_estimate:"₹27 L",
eligible_emi:"₹90k",
loan_capacity:"₹40 L",

risk_score:"742",
risk_level:"Medium Risk"

}

const Card = ({title,value}) => (
<div className="card">
<div className="card-title">{title}</div>
<div className="card-value">{value}</div>
</div>
)

return (

<div className="container">

<h1>GST Underwriting Dashboard</h1>

{/* BUSINESS PROFILE */}

<section>

<h2>Business Profile</h2>

<div className="grid">

<Card title="GSTIN" value={data.gstin}/>
<Card title="Legal Name" value={data.legal_name}/>
<Card title="Trade Name" value={data.trade_name}/>
<Card title="Registration Date" value={data.registration_date}/>
<Card title="Business Constitution" value={data.constitution}/>
<Card title="Business Type" value={data.business_type}/>
<Card title="Business Status" value={data.status}/>
<Card title="Location" value={data.location}/>

</div>

</section>

{/* TURNOVER */}

<section>

<h2>Turnover Metrics</h2>

<div className="grid">

<Card title="Annual Turnover" value={data.annual_turnover}/>
<Card title="Average Monthly Turnover" value={data.avg_monthly_turnover}/>
<Card title="Peak Month Turnover" value={data.peak_month}/>
<Card title="Minimum Month Turnover" value={data.min_month}/>

</div>

</section>

{/* TABS */}

<section>

<div className="tabs">

<button onClick={()=>setActiveTab("revenue")} className={activeTab==="revenue"?"active":""}>Revenue Growth</button>

<button onClick={()=>setActiveTab("stability")} className={activeTab==="stability"?"active":""}>Sales Stability</button>

<button onClick={()=>setActiveTab("compliance")} className={activeTab==="compliance"?"active":""}>Compliance</button>

<button onClick={()=>setActiveTab("network")} className={activeTab==="network"?"active":""}>Business Network</button>

<button onClick={()=>setActiveTab("invoice")} className={activeTab==="invoice"?"active":""}>Invoice Behaviour</button>

<button onClick={()=>setActiveTab("cashflow")} className={activeTab==="cashflow"?"active":""}>Cash Flow</button>

<button onClick={()=>setActiveTab("risk")} className={activeTab==="risk"?"active":""}>Risk Indicators</button>

<button onClick={()=>setActiveTab("loan")} className={activeTab==="loan"?"active":""}>Loan Eligibility</button>

</div>

<div className="tabContent">

{activeTab==="revenue" && (

<div className="grid">

<Card title="Year over Year Growth" value={data.yoy_growth}/>
<Card title="Quarter Growth" value={data.quarter_growth}/>
<Card title="Monthly Growth Rate" value={data.monthly_growth}/>

</div>

)}

{activeTab==="stability" && (

<div className="grid">

<Card title="Turnover Volatility" value={data.volatility}/>
<Card title="Consistent Months" value={data.consistent_months}/>
<Card title="Seasonality Index" value={data.seasonality_index}/>

</div>

)}

{activeTab==="compliance" && (

<div className="grid">

<Card title="Returns Filed" value={data.returns_filed}/>
<Card title="Late Filings" value={data.late_filings}/>
<Card title="Tax Paid" value={data.tax_paid}/>
<Card title="Tax Liability" value={data.tax_liability}/>
<Card title="ITC Claimed" value={data.itc_claimed}/>
<Card title="ITC Utilization Ratio" value={data.itc_utilization}/>
<Card title="ITC Volatility" value={data.itc_volatility}/>

</div>

)}

{activeTab==="network" && (

<div className="grid">

<Card title="Number of Buyers" value={data.buyers}/>
<Card title="Number of Suppliers" value={data.suppliers}/>
<Card title="Top Customer Share" value={data.top_customer_share}/>
<Card title="Top Supplier Share" value={data.top_supplier_share}/>

</div>

)}

{activeTab==="invoice" && (

<div className="grid">

<Card title="Average Invoice Value" value={data.avg_invoice}/>
<Card title="Invoice Frequency" value={data.invoice_frequency}/>
<Card title="Large Invoice Ratio" value={data.large_invoice_ratio}/>

</div>

)}

{activeTab==="cashflow" && (

<div className="grid">

<Card title="Estimated Business Income" value={data.estimated_income}/>
<Card title="Estimated Tax Burden" value={data.tax_burden}/>
<Card title="Working Capital Requirement" value={data.working_capital}/>

</div>

)}

{activeTab==="risk" && (

<div className="grid">

<Card title="Late Filing Risk" value={data.risk_late_filing}/>
<Card title="Turnover Drop Risk" value={data.risk_turnover_drop}/>
<Card title="ITC Mismatch Risk" value={data.risk_itc_mismatch}/>
<Card title="GST vs Bank Credits" value={data.gst_vs_bank}/>
<Card title="GST vs ITR Income" value={data.gst_vs_itr}/>
<Card title="Invoice vs Bank" value={data.invoice_vs_bank}/>
<Card title="Risk Score" value={data.risk_score}/>
<Card title="Risk Level" value={data.risk_level}/>

</div>

)}

{activeTab==="loan" && (

<div className="grid">

<Card title="Estimated Profit" value={data.profit_estimate}/>
<Card title="Eligible EMI" value={data.eligible_emi}/>
<Card title="Loan Capacity" value={data.loan_capacity}/>

</div>

)}

</div>

</section>



</div>

)

}
