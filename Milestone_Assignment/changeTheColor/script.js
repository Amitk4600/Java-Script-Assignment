const clickButton = document.getElementById("click");

const colorChange = () => {
//     let colorvalue = "0123456789ABCDEF";
//    let hashSign = "#";

const colors = [
                    "#ffffff" , //(white)
                    "#000000" , //(black)
                    "#ff0000" , //(red)
                    "#00ff00" , //(green)
                    "#0000ff" , //(blue)
                    "#ffff00" , //(yellow)
                    "#ff00ff" , //(magenta)
                    "#00ffff" , //(cyan)
                    "#ffa500" , //(orange)
                    "#800080" , //(purple)
                    "#808080" , //(gray)
                    "#c0c0c0" , //(silver)
                    "#ff7f50" , //(coral)
                    "#aqua "  , //(aqua)
                    "#f0e68c" , //(khaki)
                    "#f5f5dc" , //(beige)
                    "#b22222" , //(firebrick)
                    "#ff6347" , //(tomato)
                    "#228b22" , //(forestgreen)
                    "#f0ffff" , //(azure)
                    "#fffff0" , //(ivory)
                    "#da70d6" , //(orchid)
                    "#8fbc8f" , //(darkseagreen)
                    "#f08080" , //(lightcoral)
                    "#ff1493" , //(deeppink)
                    "#32cd32" , //(limegreen)
                    "#f5deb3" , //(wheat)
]

  
       let random =  Math.floor(Math.random () * colors.length);
    
          return colors [random];
   
    
    
    
}

function changeBackground (){
    document.body.style.background = colorChange ();
}
clickButton.addEventListener("click",changeBackground);