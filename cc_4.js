const products = [
    {name: "applewatch", category: "electronics", price: 209.99, inventory: 10},
    {name: "jackets", category: "apparel", price: 30.99, inventory: 30},
    {name: "cookies", category: "groceries", price: 12.99, inventory: 9},
    {name: "mop", category: "household", price: 25.99, inventory: 15},
    {name: "apples", category: "groceries", price: 6.99, inventory: 50}
];

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
    product.promoPrice = (product.price * (1 - discount).toFixed(2));
}

const customers = [
    {customer_ID: 1, customerType: "regular", cart:[{name: "applewatch", qty: 1}, {name: "jackets", qty: 3}] },
    {customer_ID: 2, customerType: "student", cart:[{name: "cookies", qty: 2}, {name: "mop", qty: 1}] },
    {customer_ID: 3, customerType: "senior",  cart:[{name: "apples", qty: 4}, {name: "applewatch", qty: 1}] }
]

for (let customer in customers ) {
    let orderLevel_discount = 0;
    if (customer.customerType == "student") {
        orderLevel_discount = 0.05;  
    }
    else if (customer.customerType == "senior"){
        orderLevel_discount = 0.07;
    }
    else {
        orderLevel_discount = 0
    }


    for (let cartItem in customers.cart){
        let total = 0;
        let product = products.find(products => product.name === cartItem.name);
        if(product && products.inventory >= cartItem.qty){
            total += product.promoPrice * cartItem.qty;
            products.inventory -= cartItem.qty;
    }
        }


    final_total = total - (total * orderLevel_discount);

    console.log (`Customer ${customers.customer_ID} total order comes out to $${final_total}`);
}

let singleproducts = products[0];
for (let key in singleproducts) {
    console.log(`${key}: ${singleproducts[key]}`);
}

for (let product in products){
    for(let [key, value] of Object.entries(product)){
        console.log(`${key}: ${value}`);
    }
}
