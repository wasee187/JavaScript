const numbers = [1,2,3,4,2];

const max = getMax([]);

console.log(max);

function getMax(array){
    if(array.lenght === 0)
        return undefined;
    // else{
    //     let element = array[0];
    //     for(let i of array){
    //         if( array[i] > element)
    //             element = array[i];
    //     }
    //     return element;
    // }
        
    return array.reduce((accumulator, current)=>{
        return (current>accumulator) ? current : accumulator;
    });
    //if we do not initial any number for accumulator at the end of the 
    //call back function than it will automatically indicate the first 
    //element of the array
}