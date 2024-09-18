const person = {
    firstName : 'Wasee',
    lastName : 'Sarwar',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        if(typeof value != 'string') 
            throw new Error('Value is not a String');

        const parts = value.split(' ');
        if(parts.length !=2)
            throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    person.fullName = '';
}
catch(e){
    alert(e);
}

console.log(person);