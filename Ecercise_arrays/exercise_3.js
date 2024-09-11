const numbers = [1,2,3,4,5,1,1,1];

const output = except(numbers, [1,2,3]);

console.log(output);

function except(array, excluded){
   let filterdArray = [];
    for( let element of array)
        if(!excluded.includes(element))
            filterdArray.push(element);
    return filterdArray;
}