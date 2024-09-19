const numbers = [1,2,3,4,2];

try{
    const count = countOccurrences(null, 2);
    console.log(count);
}catch(e){
    console.log(e.message);
}

function countOccurrences(array, searchElement){
    if(!Array.isArray(array))
        throw new Error('Enter an Array!');
    return array.reduce((accumulator, current)=>{
        const occurance = (current === searchElement) ? 1 : 0;
        return accumulator + occurance;
    },0)
}