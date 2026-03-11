export function getDecision(ruleResults){

let failCount=0;
let total=0;

Object.values(ruleResults).forEach(result=>{
if(result===true) total++;
if(result===false){
total++;
failCount++;
}
});

if(failCount===0){
return "APPROVE";
}

if(failCount<=2){
return "REVIEW";
}

return "REJECT";

}
