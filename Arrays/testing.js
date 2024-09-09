const numbers = [2,1,-1, 4,3];


const allPositive = numbers.every( (value)=>{
    return value >= 0;
});//check every element to satisfy the criteria
const atLeastOnePositive = numbers.some( (value)=>{
    return value >= 0;
});//check at least one element to satisfy the criteria

console.log(allPositive);
console.log(atLeastOnePositive);