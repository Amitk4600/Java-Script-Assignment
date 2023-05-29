
function numberChecker(array){
   return function(num){
    return array.includes(num);

   }
 
}
const arr = [1,2,3,4,5];
const checkNum = numberChecker(arr);
console.log(checkNum(3));
console.log(checkNum(6));