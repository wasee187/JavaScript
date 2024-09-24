

// constructor function 
function CreateCircle(radius){
    this.radius = radius;
    let defaultLocation = { x: 0, y:0}; //for hiding remove 'this' and set to local by using let
    
    let computeOptimumLocation = function (){
        console.log('I am hiding');
    }
    this.getDefaultLocation = function (){
        return defaultLocation;
    };
    this.draw = function(){
        computeOptimumLocation();
        console.log(Math.PI* radius*radius);
    }

    Object.defineProperty(this, 'defaultLoaction',{
        //get function
        get:function(){
            
            return defaultLocation;
        },
        set:function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid Location');
            defaultLocation = value;
        }
    })
}

const circle = new CreateCircle(2);
circle.defaultLocation =1;
circle.draw();
//Abstraction 
//Hide the details and only sow the essentials
