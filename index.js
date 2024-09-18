const numbers = [1,2,3,4,2];

const max = getMax(numbers);

console.log(max);

function getMax(array){
    // let element = array[0];
    // for(let i of array){
    //     if( array[i] > element)
    //         element = array[i];
    //         console.log(element);
    // }
    // return element;
    return array.reduce((accumulator, current)=>{
        const first_number = 0;
        const element  = (current>first_number) ? current : '';
        console.log(element, current, first_number);
        return accumulator = element;
    },0);
}