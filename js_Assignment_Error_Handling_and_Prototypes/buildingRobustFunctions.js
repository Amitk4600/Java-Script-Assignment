function getPerson (person) {
    try{ 
        if
        (typeof person === 'object' &&  person !== null && person.hasOwnProperty('name')   && person.hasOwnProperty('age' )) {
            return `Name: ${person.name}, Age: ${person.age}`;
        }
        else{
            throw new Error('Invalid parameter type');
        }
    }catch(error){
        return error.message;
    }
}

console.log(getPerson({name: "Amit", age: 20}));
console.log(getPerson({name: "Amit"}));