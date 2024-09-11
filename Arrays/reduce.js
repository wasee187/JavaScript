const numbers = [2,1,-1, 4,3];

const sum = numbers.reduce(
    (accumulator, currentvalue)=> accumulator + currentvalue
);

console.log(sum);