//1. Celsius to Fahrenheit
//2. fahrenheit to celsius

const prompt = require("prompt-sync") ({sigint:true});
let choice = prompt("choose choice :")

choice = Number.parseInt(choice)

switch(choice){
    case 1:
        let celsiusTemp = prompt("enter celsius temp :");
        temp = Number.parseFloat(celsiusTemp);

        const fahrTemp = (temp * 1.8) + 32;
        console.log("the temperature in fahrenheit" , fahrTemp , "°F");
        break;


    case 2:
        let fahrenheitTemp = prompt("enter fahrenheit temp :");
        temp = Number.parseFloat(fahrenheitTemp);

        const celTemp = (temp - 32) * (5.0/9.0) ;
        console.log("the temperature in celsius"  ,celTemp," °C");
        break;

}