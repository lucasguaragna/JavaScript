// importing module
import add, { addToCart, cart} from './shoppingCart.js';
console.log('importing module');

const posts = await fetch('https://jsonplaceholder.typicode.com/posts');

const response = await posts.json();

console.log(response.at(-1));

add('bread', 5);
add('rice', 1);
add('beans', 4);
console.log(cart);