
//factory function 
function createCircle(radius){
    return {
        radius,
        draw (){
            console.log(Math.PI * radius* radius);
        }
    };
}

const circle = createCircle(3);

// constructor function 
function CreateCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log(Math.PI* radius*radius);
    }
}

const another = new CreateCircle(2);

another.draw();