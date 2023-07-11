function ageInDays(person){

    let fullName = person.firstName + " " + person.lastName;
    let ageInDays = person.age * 365;

    return function (){
        console.log("The person's full name is" + fullName + " their age in days is "+ ageInDays);
    }
}

let person = {
    firstName: "Mithun",
    lastName:"S",
    age: 20
}

const callback = ageInDays(person);
callback();