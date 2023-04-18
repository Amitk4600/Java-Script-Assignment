const calculateTotalCost = (items)=> {
    let totalCost = 0;

    for(let i =0 ; i < items.length; i++){
        totalCost += items[i].unitPrice * items[i].quantity;
    }
    return totalCost;

}

const items = [
    {  unitPrice: 10, quantity: 3  },
    {  unitPrice: 5 , quantity: 100 },
    {  unitPrice: 5 , quantity: 12.5 },
    {  unitPrice: 9 , quantity: 10  },
];

const totalCost  =calculateTotalCost(items);
console.log("your pay : Rs", totalCost);