const numbers = [2,1,4,3];

numbers.sort();

console.log(numbers);

numbers.reverse();

console.log(numbers);

//but when we have objects than we need to set up it different way.

const courses = [
    {id: 1, name: 'Node.js'},
    {id:2, name: 'javaScript.js'}
]

courses.sort((a,b)=>{
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
});
console.log(courses);