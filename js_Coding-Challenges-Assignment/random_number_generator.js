let delayInSecond  = 3;
let remainingSecond = delayInSecond;

console.log('generating a random number after a delay of ',`${delayInSecond} seconds `);

let countDown = setInterval (() => {
   if (remainingSecond === 0){
    clearInterval(countDown);
    let randomNumber = Math.floor(Math.random () * 100 ) ;
    console.log(`Random number generated :  ${randomNumber}`);

   }else{
    console.log(`${remainingSecond} seconds left...`);
    remainingSecond--;
    }
},1000);


