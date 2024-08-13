// primitives/value types - Stirng, Number, boolean, undefined, null
// reference ---- objects, arrays, functions
let name_t = 'wasee' //string Literal 
let age = 30; // number Literal
let isApproved = true; //boolean Literal
let firstName = undefined;
let lastName = null;

 showPrimes(20);

 function showPrimes(limit){
    for(let number=2; number<=limit; number++){
        
        let isPrime = true;
        for(let factor = 2; factor < number; factor++){
            if(number % factor === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime) console.log(number);
    }
 }