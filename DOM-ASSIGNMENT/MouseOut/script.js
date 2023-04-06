const clickBtn = document.getElementById("button");
const displayValue = document.getElementById("num");

clickBtn.addEventListener ("mouseout", () =>{
    num = Math.floor(Math.random () * 100);
    displayValue.textContent = num;
});