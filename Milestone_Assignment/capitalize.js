const prompt = require("prompt-sync")({sigint:true})
const name = prompt("enter name ");

const capitalized = name.charAt(0).toUpperCase()+name.slice(1);

let result = name.charAt(0) === name.charAt(0).toLowerCase() ? capitalized : name;

console.log(result);