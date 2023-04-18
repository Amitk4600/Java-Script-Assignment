 const prompt = require ("prompt-sync") ({sigint:true});


let addItem = [];
for(let i = 1; i <= 10; i++){
    const item = prompt ("add item in cart ");
    addItem.push (item);
}
console.log("list of item : " ,addItem);

const unique = [...new Set (addItem)]

console.log(unique); 
 


 
