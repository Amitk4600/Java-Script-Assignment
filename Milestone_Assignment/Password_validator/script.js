
const form = document.getElementsByClassName("box");
const passwordInput = document.getElementById("enterPassword");
const emailInput = document.getElementById("email");
const submitBtn= document.getElementById("click");
const message = document.getElementById("message")


submitBtn.addEventListener("click", () => {

    const email = emailInput.value;
    const password = passwordInput.value;

    if(email.includes("@") && password.length >= 8) {
        message.textContent = 'Valid email and password!';
        message.style.color = "green";

    }else{
        message.textContent = 'In-Valid email and password!';
        message.style.color = "red";
    }

});


    




   

