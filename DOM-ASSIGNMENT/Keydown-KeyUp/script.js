

const display = document.getElementById("num");

// key DOWN 

document.addEventListener("keydown",function (event) {
  
    display.style.color = "yellow" ;
    
    display.innerText = event.key ;
});

// key up

document.addEventListener("keyup",function (event) {
 
    display.style = "blue" ;
   
    
    display.innerText = event.key ;
});