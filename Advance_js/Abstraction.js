

// constructor function 
function CreateCircle(radius){
    this.radius = radius;
    let defaultLocaton = { x: 0, y:0}; //for hiding remove 'this' and set to local by using let
    let computeOptimumLocation = function (){
        console.log('I am hiding');
    }
    this.draw = function(){
        computeOptimumLocation();
        console.log(Math.PI* radius*radius);
    }
}

const another = new CreateCircle(2);
another.draw();
//Abstraction 
//Hide the details and only sow the essentials