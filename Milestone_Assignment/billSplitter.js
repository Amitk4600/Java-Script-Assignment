const prompt = require("prompt-sync")({sigint:true});

function billSplitter(){

   

    let totalPrice  = [] ;

    for (let i = 1; i<=5;i++){
        let dish = prompt("order please : ");

        let dishQuantity = prompt("quantity pls : ");
   dishQuantity = Number.parseInt(dishQuantity);

    let rate = prompt("rate of item  : ")
    rate = Number.parseFloat(rate);

      let orderTotal = dishQuantity * rate;
      totalPrice[i] = orderTotal;

      console.log(`Order ${i} : ${dish} = ${dishQuantity} * ${rate} = ${orderTotal}`);
    }
   let totalBill = totalPrice.reduce((acc , val) => acc + val ,0);
   console.log(`your total bill :  ${totalill}`);
   
    return totalPrice;
 
}
console.log(billSplitter());
