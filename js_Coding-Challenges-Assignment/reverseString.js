const prompt = require("prompt-sync")({sigint:true});

let str = prompt ("string : ");
console.log('original String : ',str);

const string = () => {

    let reverseString = str.split("").reverse().join("");
    console.log("reverse String : ",reverseString);
} 

setTimeout(string,2000);
