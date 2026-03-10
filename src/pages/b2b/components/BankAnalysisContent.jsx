import React,{useState} from "react"

export default function BankAnalysisPage(){

const [tab,setTab] = useState("overview")

/* ---------------- SNAPSHOT ---------------- */

const snapshot={
avgIncome:"₹1,20,000",
avgExpense:"₹78,000",
surplus:"₹42,000",
emiBurden:"₹18,000",
cashFlowScore:"742",
loanCapacity:"₹12,00,000"
}

/* ---------------- ACCOUNT OVERVIEW ---------------- */

const overview={
accountAge:"5 Years",
accountType:"Current",
avgBalance:"₹1,80,000",
minBalance:"₹12,000",
maxBalance:"₹3,40,000",
monthlyCredits:"₹1,25,000",
monthlyDebits:"₹82,000",
totalCredits:"₹15,00,000",
totalDebits:"₹9,80,000",
monthsAnalyzed:"12"
}

/* ---------------- INCOME ---------------- */

const income={
salaryDetected:"Yes",
businessIncome:"Yes",
incomeFrequency:"Monthly",
avgIncome:"₹1,20,000",
incomeVariance:"18%",
highestIncomeMonth:"₹1,60,000",
lowestIncomeMonth:"₹95,000",
incomeTrend:"Stable",
topIncomeSource:"ABC Pvt Ltd",
secondaryIncome:"Freelance"
}

/* ---------------- EXPENSE ---------------- */

const expense={
emi:"₹18,000",
rent:"₹15,000",
utilities:"₹6,500",
insurance:"₹3,200",
lifestyle:"₹12,000",
shopping:"₹8,000",
travel:"₹4,200",
food:"₹6,100",
healthcare:"₹1,800",
others:"₹2,500"
}

/* ---------------- CASHFLOW ---------------- */

const cashflow={
netMonthlyFlow:"₹42,000",
avgMonthlySurplus:"₹39,000",
positiveMonths:"10",
negativeMonths:"2",
cashflowVolatility:"15%",
highestSurplus:"₹65,000",
lowestSurplus:"₹5,000",
medianBalance:"₹1,50,000",
balanceStdDev:"₹28,000",
liquidityScore:"82"
}

/* ---------------- DEBT ---------------- */

const debt={
activeLoans:"3",
lenders:"HDFC,Bajaj,ICICI",
totalEMI:"₹18,000",
debtIncomeRatio:"15%",
largestEMI:"₹9,000",
smallestEMI:"₹3,000",
creditCardPayments:"₹6,000",
loanPrepayment:"₹20,000"
}

/* ---------------- DISCIPLINE ---------------- */

const discipline={
chequeBounce:"0",
nachReturn:"1",
failedUPI:"0",
negativeBalanceEvents:"2",
lowBalanceDays:"4",
overdraftUsage:"0",
lateEMI:"1",
irregularIncomeMonths:"1"
}

/* ---------------- FRAUD ---------------- */

const fraud={
circularTransactions:"No",
selfTransfers:"Yes",
cashHeavyDeposits:"No",
suddenIncomeSpike:"No",
roundTransactions:"2",
sameDayCreditDebit:"3",
highValueCash:"No",
suspiciousCounterparty:"None"
}

/* ---------------- RISK ---------------- */

const risk={
score:"742",
category:"LOW RISK",
decision:"APPROVE",
debtCapacity:"₹22,000 EMI",
recommendedLoan:"₹12L",
confidence:"87%"
}

/* -------- METRIC CARD -------- */

const Card = ({title,value})=>(
<div className="bg-white shadow rounded-xl border p-4">
<p className="text-gray-500 text-sm">{title}</p>
<p className="text-xl font-semibold mt-1">{value}</p>
</div>
)

const Grid = ({data})=>(
<div className="grid grid-cols-4 gap-4">
{Object.entries(data).map(([k,v])=>(
<Card key={k} title={k} value={v}/>
))}
</div>
)

return(

<div className="p-8 bg-gray-100 min-h-screen">

<h1 className="text-2xl font-bold mb-6">Bank Statement Underwriting Analysis</h1>

{/* Borrower Snapshot */}

<div className="grid grid-cols-6 gap-4 mb-8">
{Object.entries(snapshot).map(([k,v])=>(
<Card key={k} title={k} value={v}/>
))}
</div>


{/* Tabs */}

<div className="flex space-x-6 border-b pb-2 mb-6">

{["overview","income","expense","cashflow","debt","discipline","fraud","risk"].map(t=>(
<button
key={t}
onClick={()=>setTab(t)}
className={`capitalize pb-2 ${tab===t ? "border-b-2 border-blue-600 font-semibold":"text-gray-500"}`}
>
{t}
</button>
))}

</div>


{/* OVERVIEW */}
{tab==="overview" && <Grid data={overview}/>}

{/* INCOME */}
{tab==="income" && <Grid data={income}/>}

{/* EXPENSE */}
{tab==="expense" && <Grid data={expense}/>}

{/* CASHFLOW */}
{tab==="cashflow" && <Grid data={cashflow}/>}

{/* DEBT */}
{tab==="debt" && <Grid data={debt}/>}

{/* DISCIPLINE */}
{tab==="discipline" && <Grid data={discipline}/>}

{/* FRAUD */}
{tab==="fraud" && <Grid data={fraud}/>}

{/* RISK */}
{tab==="risk" && <Grid data={risk}/>}

</div>

)

}
