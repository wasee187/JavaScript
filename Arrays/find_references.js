const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'}
]

const course = courses.find(function(course){
    return course.name === 'a';
});

const course_1 = courses.findIndex(function(course){
    return course.name === 'b';
});


//arrow function 
const course_2 = courses.find(course => course.name === 'a');

const course_3 = courses.findIndex(course => course.name === 'b');

console.log(course_1);

console.log(course);