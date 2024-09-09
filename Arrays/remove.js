const number = [1,2,3,4];

//removing array 
//end
const last = number.pop();
console.log(last);
// console.log(number);

// //beginning
const first = number.shift();
console.log(first);
console.log(number); 

//middle 
number.splice(2,1);
console.log(number);