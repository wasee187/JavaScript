const numbers = [1,2,3,4,2];

const count = countOccurrences(numbers, 2);


console.log(count);

function countOccurrences(array, searchElement){
    // let count = 0;
    // for (let i of array){
    //     if(i === searchElement)
    //         count++;
    // }
    // return count;

    return array.reduce((accumulator, current)=>{
        const occurance = (current === searchElement) ? 1 : 0;
        return accumulator + occurance;
    },0)
}
