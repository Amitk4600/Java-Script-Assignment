
const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area .",
        city: " Sector 62, Noida",
        state: "Uttar Pradesh",
    }
}

function personAdd ( {address: add }){
    return add

}

console.log(personAdd(person));