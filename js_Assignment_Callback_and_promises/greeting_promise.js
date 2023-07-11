let  greet = function(name){
return new Promise(function(resolve,reject){
    resolve(name );
})
};
greet("Mithun").then(function(str){
console.log("Hello,"+ str+"!");

});