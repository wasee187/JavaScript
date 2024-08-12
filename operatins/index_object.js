let person = {
    firstName : 'Wasee',
    age :  30
};
//Dot notation---default choice
person.firstName = 'John';
// //Bracket Notation
person['firstName'] = 'Marry';
//select the bracket notation in dynamic way 
let selection = 'name';
person[selection] = 'Wasee';

console.log(person.firstName);