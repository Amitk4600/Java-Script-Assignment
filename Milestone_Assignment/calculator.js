
function calulator (num1, num2, oprator) {
let result;

switch(oprator){
    case '+' :
    result =  num1 + num2 ;
    break;

    case '-' :
    result =  num1 - num2 ;
    break;

    case '*' :
    result =  num1 * num2 ;
    break;

    case '/' :
    result =  num1 / num2 ;
    break;
   
    default:
        console.log("invalid oprator");
        return null;
}
return result;
}
console.log(calulator(6,5,'+'));
console.log(calulator(6,5,'-'));
console.log(calulator(6,5,'*'));
console.log(calulator(6,5,'/'));
console.log(calulator(6,5,'%'));