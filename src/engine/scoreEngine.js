export function calculateRiskScore(borrower){

let score=0;

if(borrower.credit_score>=750) score+=40;
else if(borrower.credit_score>=700) score+=30;
else score+=10;

if(borrower.foir<=40) score+=20;
else if(borrower.foir<=50) score+=10;

if(borrower.max_dpd===0) score+=20;

if(borrower.avg_bank_balance>=20000) score+=20;

return score;

}
