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