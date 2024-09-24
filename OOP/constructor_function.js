//constructor function (naming must follow Pascal notation: OneTwoThree)
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
       console.log('draw');
    }
}

const circle = new Circle(1);

//advace 
// constructor function 
function CreateCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log(Math.PI* radius*radius);
    }
}

const another = new CreateCircle(2);

another.draw();