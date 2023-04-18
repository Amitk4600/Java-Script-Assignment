// Clothing 


const prompt =  require("prompt-sync") ({sigint:true});

const retailStore = () =>{

    let productRate = prompt("mrp : ");
    productRate = Number.parseFloat(productRate);

    let quantity = prompt("quantity pls : ");
    quantity = Number.parseInt(quantity);
 
    let totalPrice = productRate * quantity;
    if(quantity == 1){
        let discount = Math.round(totalPrice * 10/100);
        console.log("you save : Rs",discount);
    }
    else if(quantity <=3 ){
        let discount = Math.round(totalPrice * 40/100);
        console.log("you save : Rs",discount);
    }
    else if(quantity >=3 ){
        let discount = Math.round(totalPrice * 40/100  );
        let superDiscount = Math.round( (totalPrice - discount) * 10/100 )
        console.log("you save : Rs",(superDiscount + discount));
    }
    console.log("Thank you, for shopping. Have a nice day ");
console.log("............. Visit Again................   ");
    
}

retailStore();