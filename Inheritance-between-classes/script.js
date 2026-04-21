// Inheritance Between Classes
// Constructor Function
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

// calcAge method
Person.prototype.calcAge = function(){
    console.log(2026 - this.birthYear)
};

// creating a child Constructor function
const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear); //Inheritance
    this.course = course;
}

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);
// Setting the constructor - If we don't do it, Student.prototype.constructor = Person.--
Student.prototype.constructor = Student;

Student.prototype.introduce = function(){
    console.log(`Hi! My name is ${this.firstName} and I study ${this.course}`)
}

// Creating a new Student Object
const lucas = new Student("Lucas", 1999, "Biomedical Engineering")

lucas.introduce();
lucas.calcAge();
console.log(lucas);

console.log(
    lucas instanceof Student, 
    lucas instanceof Person,
    lucas instanceof Object,
);


