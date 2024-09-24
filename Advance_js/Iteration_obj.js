// constructor function 
function CreateCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log(Math.PI* radius*radius);
    }
}

const another = new CreateCircle(2);

for(let key in another){
    if(typeof another[key] !== 'function')
        console.log(key, another[key]);
}   

const keys = Object.keys(another);
console.log(keys);

if('radius' in another)
    console.log('Circle has a radius');