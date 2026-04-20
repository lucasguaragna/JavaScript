// Studing constructor functions in JavaScript

// Declaring a construct function "Person"
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;


}

// Creating an object using the construct function "Person" 
// also called "instantiating an object"
const lucas = new Person('Lucas', 1999);
console.log('lucas object:', lucas);

// proving that lucas is an instance of the Person constructor function
console.log('is lucas an instanceof Person?', lucas instanceof Person); // true

// Process of creating an instance using NEW:
// 1. A new empty object is created {}
// 2. The function is called, and the "this" keyword is set 
// to the new empty object
// 3. The new object is linked to the prototype of the constructor function
// 4. The function automatically returns the new object


// Prototypes
// Above, we created a new object using the Person constructor function, 
// but we can also add methods to the prototype of the constructor function, 
// so that all instances of the constructor function can access those methods.

// Person.prototype.calcAge = function(){
//     console.log(`${this.firstName} age:`, 2026 - this.birthYear);
// }

// lucas.calcAge(); // Lucas age: 27

// Person.hey() = function(){
//     console.log('Hey there!');
// }

// Person.hey(); // Hey there!

// Understanding the __proto__ property
// The __proto__ property is a reference to the prototype of the 
// constructor function, and it is automatically created when we 
// create an instance of the constructor function.

console.log('lucas.__proto__ === Person.prototype:', 
    lucas.__proto__ === Person.prototype); // true
console.log('Person.prototype.isPrototypeOf(lucas):', 
    Person.prototype.isPrototypeOf(lucas)); // true
console.log('Person.prototype.isPrototypeOf(Person):', 
    Person.prototype.isPrototypeOf(Person)); // false

// We can also add properties to the prototype of the constructor function,
// and all instances of the constructor function can access those properties.

Person.prototype.species = 'Homo Sapiens';
console.log('lucas.species:', lucas.species); // 'Homo Sapiens'

// Beware: species are not a property of the instance itself, 
// but of its prototype
console.log("lucas.hasOwnProperty('species'):"
    , lucas.hasOwnProperty('species')); // false
console.log("lucas.hasOwnProperty('firstName'):"
    , lucas.hasOwnProperty('firstName')); // true

// Analyzing the prototype chain:
console.log("lucas.__proto__:", lucas.__proto__);
console.log("lucas.__proto__.__proto__:", lucas.__proto__.__proto__);
console.log("lucas.__proto__.__proto__.__proto__:"
    , lucas.__proto__.__proto__.__proto__);

console.dir("Person.prototype.constructor:", Person.prototype.constructor);


// Classes

// class expression
//const personCl = class {}

// class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    
    // methods will be added to the prototype property
    calcAge() {
        console.log(`${this.firstName} age:`, 2026 - this.birthYear);
    }
}

const thais = new PersonCl("Thais", 1998);

thais.calcAge();


// Object.create
const PersonProto = {
    calcAge() {
        console.log(`${this.firstName} age:`, 2026 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const lucas2 = Object.create(PersonProto);
lucas2.name = 'Lucas';
lucas2.birthYear = 1999;
lucas2.calcAge();

const thais2 = Object.create(PersonProto);
thais2.init('Thais', 1998);
thais2.calcAge();

const nala = Object.create(PersonProto, {
    firstName: { value: 'Nala' },
    birthYear: { value: 2020 }
});

nala.calcAge();