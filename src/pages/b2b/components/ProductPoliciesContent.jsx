import React, { useState } from "react";
import "../../../styles/b2b.css";
import { MetricLibrary } from "./MetricLibrary";

const loanProducts = [
"Personal Loan",
"Business Loan",
"Housing Loan",
"Loan Against Property",
"Car Loan"
];

export default function CreditPolicyPage(){

const [activeTab,setActiveTab]=useState("Personal Loan");

const initializePolicy=()=>{
let policy={};

loanProducts.forEach(product=>{
policy[product]={};

metricLibrary.forEach(metric=>{
policy[product][metric.id]={
value:metric.default,
active:false
};
});
});

return policy;
};

const [policies,setPolicies]=useState(initializePolicy());

const updateValue=(metric,value)=>{
setPolicies({
...policies,
[activeTab]:{
...policies[activeTab],
[metric]:{
...policies[activeTab][metric],
value:value
}
}
});
};

const toggleMetric=(metric)=>{
setPolicies({
...policies,
[activeTab]:{
...policies[activeTab],
[metric]:{
...policies[activeTab][metric],
active:!policies[activeTab][metric].active
}
}
});
};

return(

<div className="policyPage">

<h2>Credit Policy Engine</h2>

<div className="tabs">
{loanProducts.map(tab=>(
<button
key={tab}
className={activeTab===tab?"activeTab":""}
onClick={()=>setActiveTab(tab)}
>
{tab}
</button>
))}
</div>

{Object.entries(groupMetrics()).map(([category,metrics])=>(
<div key={category} className="category">

<h3>{category}</h3>

<div className="metricsGrid">

{metrics.map(metric=>{

const policy=policies[activeTab][metric.id];

return(

<div key={metric.id} className="metricCard">

<div className="metricHeader">

<span>{metric.name}</span>

<input
type="checkbox"
checked={policy.active}
onChange={()=>toggleMetric(metric.id)}
/>

</div>

{metric.type==="slider" && (

<input
type="range"
min={metric.min}
max={metric.max}
step={metric.step}
value={policy.value}
onChange={(e)=>updateValue(metric.id,e.target.value)}
/>

)}

{metric.type==="number" && (

<input
type="number"
value={policy.value}
onChange={(e)=>updateValue(metric.id,e.target.value)}
/>

)}

{metric.type==="toggle" && (

<select
value={policy.value}
onChange={(e)=>updateValue(metric.id,e.target.value)}
>
<option value="true">Yes</option>
<option value="false">No</option>
</select>

)}

<div className="metricValue">
Value: {policy.value}
</div>

<div className="rule">
Rule: {metric.rule(policy.value)}
</div>

</div>

);

})}

</div>

</div>

))}

</div>

);
}

function groupMetrics(){

const grouped={};

metricLibrary.forEach(metric=>{
if(!grouped[metric.category]){
grouped[metric.category]=[];
}
grouped[metric.category].push(metric);
});

return grouped;

}
