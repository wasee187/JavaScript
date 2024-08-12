// primitives/value types - Stirng, Number, boolean, undefined, null
// reference ---- objects, arrays, functions
let name_t = 'wasee' //string Literal 
let age = 30; // number Literal
let isApproved = true; //boolean Literal
let firstName = undefined;
let lastName = null;


checkSpeed(130 );

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed < speedLimit + kmPerPoint){
        console.log('OK');
        return;
    } 
  
    const point = Math.floor(overSpeed = (speed - 70)/kmPerPoint);
       
    if(point<12)
        console.log("Point: ",point);
    else 
        console.log("License suspended")


}