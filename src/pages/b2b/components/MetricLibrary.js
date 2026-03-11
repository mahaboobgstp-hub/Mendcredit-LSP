export const metricLibrary=[

// BUREAU METRICS
{
id:"credit_score",
name:"Minimum Credit Score",
category:"Bureau Metrics",
type:"slider",
min:300,
max:900,
step:10,
default:720,
rule:(v)=>`credit_score >= ${v}`
},

{
id:"hard_enquiries",
name:"Hard Enquiries (6 months)",
category:"Bureau Metrics",
type:"slider",
min:0,
max:20,
step:1,
default:5,
rule:(v)=>`hard_enquiries <= ${v}`
},

{
id:"credit_utilization",
name:"Credit Utilization %",
category:"Bureau Metrics",
type:"slider",
min:0,
max:100,
step:5,
default:30,
rule:(v)=>`credit_utilization <= ${v}%`
},

{
id:"max_dpd",
name:"Max DPD",
category:"Bureau Metrics",
type:"slider",
min:0,
max:180,
step:30,
default:30,
rule:(v)=>`dpd <= ${v}`
},

{
id:"written_off_accounts",
name:"Written Off Accounts",
category:"Bureau Metrics",
type:"slider",
min:0,
max:10,
step:1,
default:0,
rule:(v)=>`written_off_accounts <= ${v}`
},

{
id:"settled_accounts",
name:"Settled Accounts",
category:"Bureau Metrics",
type:"slider",
min:0,
max:10,
step:1,
default:0,
rule:(v)=>`settled_accounts <= ${v}`
},

{
id:"active_loans",
name:"Active Loans",
category:"Bureau Metrics",
type:"slider",
min:0,
max:20,
step:1,
default:5,
rule:(v)=>`active_loans <= ${v}`
},

{
id:"credit_history_age",
name:"Credit History Age Months",
category:"Bureau Metrics",
type:"slider",
min:6,
max:240,
step:6,
default:24,
rule:(v)=>`credit_history_age >= ${v}`
},

{
id:"credit_cards",
name:"Credit Card Count",
category:"Bureau Metrics",
type:"slider",
min:0,
max:10,
step:1,
default:3,
rule:(v)=>`credit_cards <= ${v}`
},

{
id:"overdue_amount",
name:"Total Overdue Amount",
category:"Bureau Metrics",
type:"number",
default:0,
rule:(v)=>`overdue_amount <= ${v}`
},

// INCOME METRICS

{
id:"monthly_income",
name:"Minimum Monthly Income",
category:"Income Metrics",
type:"number",
default:25000,
rule:(v)=>`monthly_income >= ${v}`
},

{
id:"foir",
name:"FOIR %",
category:"Income Metrics",
type:"slider",
min:10,
max:90,
step:5,
default:50,
rule:(v)=>`foir <= ${v}`
},

{
id:"emi_income_ratio",
name:"EMI Income Ratio",
category:"Income Metrics",
type:"slider",
min:10,
max:80,
step:5,
default:40,
rule:(v)=>`emi_income_ratio <= ${v}`
},

{
id:"salary_growth",
name:"Salary Growth %",
category:"Income Metrics",
type:"slider",
min:0,
max:50,
step:5,
default:5,
rule:(v)=>`salary_growth >= ${v}`
},

{
id:"income_consistency",
name:"Income Consistency %",
category:"Income Metrics",
type:"slider",
min:50,
max:100,
step:5,
default:80,
rule:(v)=>`income_consistency >= ${v}`
},

// BANK METRICS

{
id:"avg_bank_balance",
name:"Average Bank Balance",
category:"Bank Metrics",
type:"number",
default:10000,
rule:(v)=>`avg_bank_balance >= ${v}`
},

{
id:"negative_balance_days",
name:"Negative Balance Days",
category:"Bank Metrics",
type:"slider",
min:0,
max:30,
step:1,
default:0,
rule:(v)=>`negative_balance_days <= ${v}`
},

{
id:"cheque_bounce",
name:"Cheque Bounce Count",
category:"Bank Metrics",
type:"slider",
min:0,
max:10,
step:1,
default:1,
rule:(v)=>`cheque_bounce <= ${v}`
},

{
id:"cash_deposit_ratio",
name:"Cash Deposit Ratio %",
category:"Bank Metrics",
type:"slider",
min:0,
max:100,
step:5,
default:30,
rule:(v)=>`cash_deposit_ratio <= ${v}`
},

{
id:"transaction_volume",
name:"Monthly Transaction Count",
category:"Bank Metrics",
type:"slider",
min:10,
max:500,
step:10,
default:50,
rule:(v)=>`transaction_volume >= ${v}`
},

// GST METRICS

{
id:"gst_turnover",
name:"Annual GST Turnover",
category:"GST Metrics",
type:"number",
default:1000000,
rule:(v)=>`gst_turnover >= ${v}`
},

{
id:"gst_filing_delay",
name:"GST Filing Delay Months",
category:"GST Metrics",
type:"slider",
min:0,
max:12,
step:1,
default:0,
rule:(v)=>`gst_filing_delay <= ${v}`
},

{
id:"gst_growth",
name:"GST Growth %",
category:"GST Metrics",
type:"slider",
min:-50,
max:100,
step:5,
default:5,
rule:(v)=>`gst_growth >= ${v}`
},

// PROPERTY METRICS

{
id:"ltv",
name:"Loan To Value %",
category:"Property Metrics",
type:"slider",
min:20,
max:90,
step:5,
default:70,
rule:(v)=>`ltv <= ${v}`
},

{
id:"property_age",
name:"Property Age",
category:"Property Metrics",
type:"slider",
min:0,
max:60,
step:1,
default:20,
rule:(v)=>`property_age <= ${v}`
},

{
id:"property_value",
name:"Minimum Property Value",
category:"Property Metrics",
type:"number",
default:2000000,
rule:(v)=>`property_value >= ${v}`
},

// VEHICLE

{
id:"vehicle_age",
name:"Vehicle Age",
category:"Vehicle Metrics",
type:"slider",
min:0,
max:15,
step:1,
default:5,
rule:(v)=>`vehicle_age <= ${v}`
},

// KYC

{
id:"pan_verified",
name:"PAN Verified",
category:"Compliance Metrics",
type:"toggle",
default:"true",
rule:(v)=>`pan_verified == ${v}`
},

{
id:"aadhaar_verified",
name:"Aadhaar Verified",
category:"Compliance Metrics",
type:"toggle",
default:"true",
rule:(v)=>`aadhaar_verified == ${v}`
},

{
id:"pep_check",
name:"PEP Check",
category:"Compliance Metrics",
type:"toggle",
default:"false",
rule:(v)=>`pep_flag == ${v}`
},

// DEMOGRAPHIC

{
id:"age",
name:"Minimum Age",
category:"Demographic Metrics",
type:"slider",
min:18,
max:65,
step:1,
default:21,
rule:(v)=>`age >= ${v}`
},

{
id:"residence_vintage",
name:"Residence Vintage",
category:"Demographic Metrics",
type:"slider",
min:0,
max:30,
step:1,
default:2,
rule:(v)=>`residence_vintage >= ${v}`
},

];

// NOTE
// Continue adding metrics here
// This architecture supports unlimited metrics
