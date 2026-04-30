// importing module
// import add, { addToCart, cart} from './shoppingCart.js';
// console.log('importing module');

// const posts = await fetch('https://jsonplaceholder.typicode.com/posts');

// const response = await posts.json();

// console.log(response.at(-1));

// add('bread', 5);
// add('rice', 1);
// add('beans', 4);
// console.log(cart);

const ShoppingCart2 = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(item, quantity) {
        cart.push({item, quantity});
        console.log(`${quantity} ${item} was added to the cart`);
    }

    const orderStock = function(item, quantity) {
        cart.push({item, quantity});
        console.log(`${quantity} ${item} ordered from supplier`);
    }

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
        orderStock,
    }
})();

ShoppingCart2.addToCart('apple',2);
ShoppingCart2.orderStock('apple', 2)