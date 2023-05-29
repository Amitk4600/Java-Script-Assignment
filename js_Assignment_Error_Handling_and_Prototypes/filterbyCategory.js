function eCommerce(products){
    
    return function(category){
        return products.filter(product => product.category === category);
    };
}

const product = [
    {name:"Shirt" ,category: "Clothing"},
    {name:"Pants" ,category: "Clothing"},
    {name:"Hat" ,category: "Accessories"},
    {name:"Sunglasses" ,category: "Accessories"}
];
const filterByCategory = eCommerce(product);
const clothingProducts = filterByCategory("Clothing");
console.log(clothingProducts);