
const prompt = require("prompt-sync")({sigint:true});



const vowels = ['a','e','i','o','u','A','E','I','O','U'];

function countVowels (name){
    let count = 0;

for(let i = 0;i <= name.length; i++){
    if(vowels.includes(name[i])){
        count++;
    }
}
return count;
}
const str = prompt ('enter name : ');
const result = countVowels(str);

console.log(result);