// Constructor Functions vs Classes

// # 1. Constructor Function
const Person = function(fullName, birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
}

// ## 1.1 Setting a method "calcAge"
Person.prototype.calcAge = function(){
    console.log(2026 - this.birthYear)
}

// ## 1.2 Creating a child constructor function
const Student = function(fullName, birthYear, course){
    Person.call(this, fullName, birthYear);
    this.course = course;
}
// Linking the prototypes
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

// ## 1.3 Creating a method in Student
Student.prototype.greetings = function(){
    console.log(`Hello! My name is ${this.fullName}, 
        I'm studying ${this.course}`)
}

// # 2. ES6 Classes
// They are layers of obstraction of constructor functions

class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Creating a method "calcAge":
    calcAge() {
        console.log(2026 - this.birthYear)
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course){
        super(fullName, birthYear);
        this.course = course;
    }

    greetings(){
        console.log(`Hello! My name is ${this.fullName}, 
        I'm studying ${this.course}`)
    }
}

// const martha = new StudentCl("Martha", 2012, 'Computer Science');
// martha.greetings();
// martha.calcAge();

// Object.create()

const PersonProto = {
    calcAge() {
        console.log(`${this.firstName} 
            age:`, 2026 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const lucas = Object.create(PersonProto);
//lucas.init("Lucas", 1999);

// Creating a child class
const StudentProto = Object.create(PersonProto);

StudentProto.init = function(fullName, birthYear, course){
    PersonProto.init.call(this, fullName, birthYear);
    this.course = course;
}

StudentProto.greetings = function(){
    console.log(`Hello! My name is ${this.fullName}, 
        I'm studying ${this.course}`)
}

const thais = Object.create(StudentProto);
thais.init("Thais", 1998, "Psicologia")
thais.greetings();
thais.calcAge();

// (Prototype Parent)
//          PersonProto
// (Prototype Child)
//          StudentProto
// (Prodotype Child)
//          thais