//  price in dollar 
// $1 = 80 inr

const storeItems = [
    {name :"apple" , price:  2},
    {name :"orange", price:  1},
    {name :"banana", price:  0.5 },
    {name :"bread" , price:  5.99},
    {name :"milk"  , price: 2.5}
]


console.log('The Price In INR  = ');
const itemsInRupees = storeItems.map((items) =>{
  
    console.log(items.name, " =", items.price * 80);
})


// ***** or *****

//  price in dollar 
// $1 = 80 inr

const storeItems1 = [
    {name :"apple" , price:  2},
    {name :"orange", price:  1},
    {name :"banana", price:  0.5 },
    {name :"bread" , price:  5.99},
    {name :"milk"  , price: 2.5}
]



const itemsInInr = storeItems1.map((item) =>{
  return {
    name: item.name,
    price: item.price * 80
  }
    

})
console.log('The Price In INR  = ');
console.log(itemsInInr);


