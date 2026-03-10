import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/b2b.css";


export default function PropertyUnderwritingDashboard() {

const [activeTab,setActiveTab] = useState("valuation");

const propertyOverview = {
propertyType:"Residential",
location:"Hyderabad",
area:"1500 sqft",
propertyAge:"8 years"
};

const valuation = {
marketValue:"₹90,00,000",
circleRateValue:"₹78,00,000",
pricePerSqft:"₹6000",
valuationVariance:"15%"
};

const loanMetrics = {
requestedLoan:"₹60,00,000",
maxEligibleLoan:"₹72,00,000",
ltvRatio:"66%"
};

const legal = {
encumbrance:"Clear",
ownership:"Verified",
legalDisputes:"None"
};

const riskFlags = [
"High LTV",
"Legal Risk",
"Low Liquidity"
];

const ownershipMetrics = {
ownershipMatch:"Yes",
ownershipType:"Joint",
ownershipTenure:"12 years",
ownershipTransfers:"1"
};

const liquidityMetrics = {
demandIndex:"High",
absorptionRate:"75%",
avgSellingTime:"60 days",
locationRating:"A"
};

const rentalMetrics = {
monthlyRent:"₹25,000",
rentalYield:"3.5%",
rentStability:"Stable"
};

const transactionMetrics = {
previousSalePrice:"₹70,00,000",
appreciationRate:"6% CAGR",
transactionFrequency:"2"
};

const borrowerExposure = {
propertyCount:"3",
mortgageExposure:"₹1.2 Cr",
propertyConcentration:"Moderate"
};

const collateralScore = {
score:"720",
riskLevel:"Medium Risk"
};

return (

<div className="dashboard">

<h1 className="pageTitle">Property Underwriting Dashboard</h1>

{/* SUMMARY CARDS */}

<div className="summaryGrid">

<div className="summaryCard">
<h3>Property Type</h3>
<p>{propertyOverview.propertyType}</p>
</div>

<div className="summaryCard">
<h3>Location</h3>
<p>{propertyOverview.location}</p>
</div>

<div className="summaryCard">
<h3>Area</h3>
<p>{propertyOverview.area}</p>
</div>

<div className="summaryCard">
<h3>Property Age</h3>
<p>{propertyOverview.propertyAge}</p>
</div>

</div>

{/* GRID CARDS */}

<div className="gridSection">

<div className="card">

<h3>Valuation Summary</h3>

<table>

<tbody>

<tr>
<td>Market Value</td>
<td>{valuation.marketValue}</td>
</tr>

<tr>
<td>Circle Rate Value</td>
<td>{valuation.circleRateValue}</td>
</tr>

<tr>
<td>Price / Sqft</td>
<td>{valuation.pricePerSqft}</td>
</tr>

<tr>
<td>Variance</td>
<td>{valuation.valuationVariance}</td>
</tr>

</tbody>

</table>

</div>

<div className="card">

<h3>Loan Metrics</h3>

<table>

<tbody>

<tr>
<td>Requested Loan</td>
<td>{loanMetrics.requestedLoan}</td>
</tr>

<tr>
<td>Max Eligible Loan</td>
<td>{loanMetrics.maxEligibleLoan}</td>
</tr>

<tr>
<td>LTV Ratio</td>
<td>{loanMetrics.ltvRatio}</td>
</tr>

</tbody>

</table>

</div>

<div className="card">

<h3>Legal Status</h3>

<table>

<tbody>

<tr>
<td>Encumbrance</td>
<td>{legal.encumbrance}</td>
</tr>

<tr>
<td>Ownership Verification</td>
<td>{legal.ownership}</td>
</tr>

<tr>
<td>Legal Disputes</td>
<td>{legal.legalDisputes}</td>
</tr>

</tbody>

</table>

</div>

<div className="card riskCard">

<h3>Risk Flags</h3>

<ul>

{riskFlags.map((risk,index)=>(
<li key={index}>{risk}</li>
))}

</ul>

</div>

</div>

{/* TABS */}

<div className="tabs">

<button
className={activeTab==="valuation"?"active":""}
onClick={()=>setActiveTab("valuation")}
>
Ownership
</button>

<button
className={activeTab==="liquidity"?"active":""}
onClick={()=>setActiveTab("liquidity")}
>
Liquidity
</button>

<button
className={activeTab==="rental"?"active":""}
onClick={()=>setActiveTab("rental")}
>
Rental
</button>

<button
className={activeTab==="transactions"?"active":""}
onClick={()=>setActiveTab("transactions")}
>
Transactions
</button>

<button
className={activeTab==="borrower"?"active":""}
onClick={()=>setActiveTab("borrower")}
>
Borrower Exposure
</button>

</div>

{/* TAB CONTENT */}

<div className="tabContent">

{activeTab==="valuation" && (

<table>

<tbody>

<tr>
<td>Ownership Match</td>
<td>{ownershipMetrics.ownershipMatch}</td>
</tr>

<tr>
<td>Ownership Type</td>
<td>{ownershipMetrics.ownershipType}</td>
</tr>

<tr>
<td>Ownership Tenure</td>
<td>{ownershipMetrics.ownershipTenure}</td>
</tr>

<tr>
<td>Ownership Transfers</td>
<td>{ownershipMetrics.ownershipTransfers}</td>
</tr>

</tbody>

</table>

)}

{activeTab==="liquidity" && (

<table>

<tbody>

<tr>
<td>Demand Index</td>
<td>{liquidityMetrics.demandIndex}</td>
</tr>

<tr>
<td>Absorption Rate</td>
<td>{liquidityMetrics.absorptionRate}</td>
</tr>

<tr>
<td>Average Selling Time</td>
<td>{liquidityMetrics.avgSellingTime}</td>
</tr>

<tr>
<td>Location Rating</td>
<td>{liquidityMetrics.locationRating}</td>
</tr>

</tbody>

</table>

)}

{activeTab==="rental" && (

<table>

<tbody>

<tr>
<td>Monthly Rent</td>
<td>{rentalMetrics.monthlyRent}</td>
</tr>

<tr>
<td>Rental Yield</td>
<td>{rentalMetrics.rentalYield}</td>
</tr>

<tr>
<td>Rent Stability</td>
<td>{rentalMetrics.rentStability}</td>
</tr>

</tbody>

</table>

)}

{activeTab==="transactions" && (

<table>

<tbody>

<tr>
<td>Previous Sale Price</td>
<td>{transactionMetrics.previousSalePrice}</td>
</tr>

<tr>
<td>Price Appreciation</td>
<td>{transactionMetrics.appreciationRate}</td>
</tr>

<tr>
<td>Transaction Frequency</td>
<td>{transactionMetrics.transactionFrequency}</td>
</tr>

</tbody>

</table>

)}

{activeTab==="borrower" && (

<table>

<tbody>

<tr>
<td>Borrower Property Count</td>
<td>{borrowerExposure.propertyCount}</td>
</tr>

<tr>
<td>Mortgage Exposure</td>
<td>{borrowerExposure.mortgageExposure}</td>
</tr>

<tr>
<td>Property Concentration</td>
<td>{borrowerExposure.propertyConcentration}</td>
</tr>

</tbody>

</table>

)}

</div>

{/* COLLATERAL SCORE */}

<div className="scoreCard">

<h2>Collateral Score</h2>

<h1>{collateralScore.score}</h1>

<p>{collateralScore.riskLevel}</p>

</div>

</div>

);

}
