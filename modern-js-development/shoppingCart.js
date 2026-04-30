//exporting module

console.log('exporting module');


// Using top-level await, we block the code here and in any import
const users = await fetch('https://jsonplaceholder.typicode.com/users');
const response = await users.json();
console.log(response);

const shippingCost = 10;
export const cart = [];

export const addToCart = function (item, quantity) {
    cart.push({item, quantity});
    console.log(`${quantity} ${item} was added to the cart`);
}

const totalPrice = 123;
const totalQuantity = 321;

export {totalPrice, totalQuantity as tq}

export default function(item, quantity) {
    cart.push({item, quantity});
    console.log(`${quantity} ${item} was added to the cart`);
}
