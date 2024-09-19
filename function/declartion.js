//function declaration 
function walk(){
    console.log('walk');
}

//anonymous function expression
const run = function(){
    console.log('run');
};

let move = run;
run();
move();


//what is hoisting 
//hoisting is the process of moving function declarations to the top of the file and it is done automatically by javacript engine that is executing this code. 