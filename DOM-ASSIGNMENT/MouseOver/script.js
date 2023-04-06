
const mouseButton = document.getElementById("display");

mouseButton.addEventListener("mouseover", () => {
  let fact = 1;

    for(let i =1; i<=5 ;i++){
        fact = fact * i;
    }
  alert("factorial of 5  = " + fact)
});
