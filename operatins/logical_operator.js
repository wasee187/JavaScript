//logical AND (&&) 
//returns true if both operator are TRUE

let highIncome = true;
let goodreditScore = false; 
let eligibleForLoan = highIncome && goodreditScore
console.log(eligibleForLoan);

//logical OR (||)
//returns TRUE i one of the operands is TRUE
let highIncome_1 = true;
let goodreditScore_1 = true; 
let eligibleForLoan_1 = highIncome_1 ||  goodreditScore_1
console.log(eligibleForLoan_1);

// NOT(!) operator

let highIncome_2 = true;
let goodreditScore_2 = true; 
let eligibleForLoan_2 = highIncome_2 ||  goodreditScore_2
let applicationRefusd = !eligibleForLoan_2
console.log(applicationRefus);



//Falsy (flase---> not boolean false)
//undefined
//null
//0
//false
//''
//NaN

let userColor = '';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);