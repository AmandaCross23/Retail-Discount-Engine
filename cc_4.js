//This is the products that will be used during the code
const products = [
    {name: "applewatch", category: "electronics", price: 209.99, inventory: 10},
    {name: "jackets", category: "apparel", price: 30.99, inventory: 30},
    {name: "cookies", category: "groceries", price: 12.99, inventory: 9},
    {name: "mop", category: "household", price: 25.99, inventory: 15},
    {name: "apples", category: "groceries", price: 6.99, inventory: 50}
];
// This show the switch being used to give the discounts
for(let product of products) {
    let discount = 0;
    switch (product.category) {
        case "electronics":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "groceries":
        case "household":
            discount = 0.1;
            break;
        default:
            discount = 0;
            break;
    }
    product.promoPrice = (product.price * (1 - discount));
}
// This is the 3 customers and there cart
const customers = [
    {customer_ID: 1, customerType: "regular", cart:[{name: "applewatch", qty: 1}, {name: "jackets", qty: 3}] },
    {customer_ID: 2, customerType: "student", cart:[{name: "cookies", qty: 2}, {name: "mop", qty: 1}] },
    {customer_ID: 3, customerType: "senior",  cart:[{name: "apples", qty: 4}, {name: "applewatch", qty: 1}] }
]
// This shows step 4 and 5 showing the customers purchases and final total
for (let customer of customers) {
    let extraDiscount = 0;
    if (customer.customerType === "student") {extraDiscount = 0.05;}
    else if (customer.customerType === "senior") {extraDiscount = 0.07;}
    else {extraDiscount = 0;}

    let subtotal = 0;

    for (let item of customer.cart) {
        let product = products.find(product => product.name === item.name);
        if (product && product.inventory >= item.qty) {
            subtotal += product.promoPrice * item.qty;
            product.inventory -= item.qty;
        }
        else {
            subtotal = 0;
        }
    }
    let finalTotal = subtotal * (1 - extraDiscount);

    console.log(`Customer ${customer.customer_ID}: $${finalTotal.toFixed(2)}`);
}
// Shows the key/value pair for a single product after discounts are applied
console.log(`\nSingle product after discounts are applied:`)
let singleproducts = products[0];
for (let key in singleproducts) {
    console.log(`${key}: ${singleproducts[key]}`);
}
// This shows the updated inventory after the customers purchased the products
console.log(`\nAll product inventory:`)
for (let product of products){
    console.log(`\nProduct:`);
    for(let [key, value] of Object.entries(product)){
        console.log(` ${key}: ${value}`);
    }
}

