const numbers = [1,2,3,4,5];

console.log(includes(numbers, 6));
function includes(array, searchElment){
    for(let number of array){
        if (number === searchElment)
            return true;
        return false;
    }
}