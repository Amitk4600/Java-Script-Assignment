// html element 

const decrementBtn = document.getElementById("decrement");
const displayValue = document.getElementById("num")
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");


let num = 0;

// DEcrement button
decrementBtn.addEventListener("click", () => {
   
    num--;
    displayValue.textContent = num;
  
  
});

// Increment Button 

incrementBtn.addEventListener("click", () => {

    num++;
    displayValue.textContent = num;

});

// reset button

resetBtn.addEventListener("click",() => {

displayValue.textContent = 0
});


//   random 

const randombtn = document.getElementById("random");

randombtn.addEventListener("click", () =>{
num = Math.floor(Math.random () * 1000 );
displayValue.textContent = num; 

if (num % 2 == 0){
   const rondomColor = () => {
    let val = "123456789ABCDEF";
    let has  = "#";

    for (let i = 0; i < 6; i++){
        has += val [Math.floor(Math.random() * 16)];
    }
    return has;

   };
   function changeColor () {
    document.body.style.background = rondomColor();
}
changeColor();
}
else{
    alert ("odd number");
} 
});




// -------------------------         OR     -------------------------------------------------------------

// DEcrement button

// decrementBtn.addEventListener("click", () => {
    // const value = Number(displayValue.innerText);
  
    // if(value <= 0){
    //     alert("-ve value are not allowed ")
    // } 
    // else {
    //     displayValue.innerText = value - 1;
    // }
// });


// Increment Button 

// incrementBtn.addEventListener("click", () => {

//     const value = Number(displayValue.innerText);
//     value--;
//     if(value >= 100){
//         alert("value are not allowed ")
//     } 
//     else {
//         displayValue.innerText = value + 1;
//     }
// });

// reset button

// resetBtn.addEventListener("click",() => {
//     displayValue.innerText =  0;

// });