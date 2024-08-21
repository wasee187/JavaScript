const circle = {
    radius : 1,
    draw(){
        console.log('draw');
    }
};

//coping object by for loop 
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// const another = Object.assign({
//     color : 'Yellow',
// }, circle)

const another = { ...circle}; // copying sprade operator 
console.log(another);