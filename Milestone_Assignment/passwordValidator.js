const prompt = require("prompt-sync") ({sigint:true});
let enterPassword = prompt("Enter your password :");
let reEnterPassword = prompt("Re-Enter your password :");

function passwordValid () {
if(enterPassword === reEnterPassword){
    console.log("password matched.Password validation successful");
}
else{
   console.log("password didn't matched.Password validation unsuccessful");
}

}
passwordValid();