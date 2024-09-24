const circle = {
    radius: 1,
    location : {
        x: 1,
        y: 1
    },
    draw (){
        console.log('Draw');
    }
};

circle.draw();
console.log(circle.radius);
console.log(circle.location);

//object literal has flaw if there is different charactaristics in function
// we need to use factory object