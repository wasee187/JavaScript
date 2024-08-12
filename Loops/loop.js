//for loops

for(let i=5; i >=1 ; i--){
    if( i % 2 !=0) console.log(i);
}

//while loop

let i = 0;
while(i<=5){
    if(i%2 !=0) console.log(i);
    i++;
}

//do-while loop
do {
    if(i%2 !=0) console.log(i);
    i++;
} while(i<=5)

//for-in loop
//iterrate object or array

const person = {
    name : "Wasee",
    age : 30
};
for (let key in person)
    console.log(key, person[key]);

//for-of loop
//for array iteration from Es6
const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color);