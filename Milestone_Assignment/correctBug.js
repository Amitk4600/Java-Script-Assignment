function doubleCartQuantities(cart) {
    for(let i = 0; i < cart.length; i++){
        cart[i].quantity *= 2;
        
    }
    return cart;
}

const cart = [
    {id: 1, name:'headphone', price: 299, quantity:10},
    {id: 2, name:'Samsung a23', price: 12999, quantity:11},
    {id: 3, name:'Iphone', price: 84299, quantity:5}
];
console.log(doubleCartQuantities(cart)) ;

