export function evaluateRules(policy, borrowerData){

let results={};

Object.keys(policy.metrics).forEach(metric=>{

const rule=policy.metrics[metric];

if(!rule.active) return;

const borrowerValue=borrowerData[metric];

if(borrowerValue===undefined){
results[metric]="NO_DATA";
return;
}

if(metric==="credit_score"){
results[metric]= borrowerValue >= rule.value;
}

else if(metric==="foir"){
results[metric]= borrowerValue <= rule.value;
}

else if(metric==="max_dpd"){
results[metric]= borrowerValue <= rule.value;
}

else{
results[metric]= borrowerValue >= rule.value;
}

});

return results;

}
