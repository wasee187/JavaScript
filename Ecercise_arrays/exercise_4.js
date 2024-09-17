const numbers = [1,2,3,4,5];


const output = move(numbers, 2,-3);

console.log(output);

function move(array, index, offset){
    const position = index + offset;
    if(position>=array.lenght || position < 0){
        console.error("Invalid offset.");
    }else{
        let output = [...array];
        const element = output.splice(index,1)[0];
        output.splice(position,0, element)
        return output;
    } 

}