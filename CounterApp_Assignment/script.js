// html element 

const decrementBtn = document.getElementById("decrement");
const displayValue = document.getElementById("num")
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");


// DEcrement button
decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value <= 0){
        alert("-ve value are not allowed ")
    } 
    else {
        displayValue.innerText = value - 1;
    }
});

// Increment Button 

incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value >= 100){
        alert("value are not allowed ")
    } 
    else {
        displayValue.innerText = value + 1;
    }
});

// reset button

resetBtn.addEventListener("click",() => {
    displayValue.innerText =  0;
});