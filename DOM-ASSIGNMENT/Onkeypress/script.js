

let inputBox = document.getElementById("input-text");
let display = document.getElementById("display");

inputBox.addEventListener('keypress',function (e){
    display.innerText = "hello ,have a nice day" +e.key
});