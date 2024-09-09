const first = [1,2,3,4];
const second = [5,6,7,8];


const combined = first.concat(second);

const slice = combined.slice(2,4);

//spread operator 
const combined_1 = [...first, ...second];

//we can add any data while using spread operator 
const combined_2 = [...first, 'a', ...second, 'b'];

console.log(combined);
console.log(slice);