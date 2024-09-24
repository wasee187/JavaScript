//basic of function
const circle = {
    radius : 1,
    location : {
        x: 1,
        y: 1
    },
    isVisible : true,
    draw: function(){
        console.log('draw');
    }
}

circle.draw();


//Factory function (for minimizing code error)
function createCircle(radius){
    return {
        radius,
        draw() {
            console.log('draw')
        }
    }
}

const circle_1 = createCircle(1);
console.log(circle_1);

const circle_2 = createCircle(2);
console.log(circle_2);


//javaScript advance


//factory function 
function createCircle_1(radius){
    return {
        radius,
        draw (){
            console.log(Math.PI * radius* radius);
        }
    };
}

const circle_3 = createCircle(3);

circle.draw();