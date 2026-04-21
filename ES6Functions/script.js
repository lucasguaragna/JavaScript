// Classes

// class expression
// const personCl = class {}

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