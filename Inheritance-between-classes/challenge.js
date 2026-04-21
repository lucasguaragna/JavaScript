const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

// Creating Car's Methods
Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make}'s speed: ${this.speed} km/h`)
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make}'s speed: ${this.speed}km/h`)
}

// Creating a child 'class'
const CarEV = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
}

// linking Prototypes
CarEV.prototype = Object.create(Car.prototype);
CarEV.prototype.constructor = CarEV;

// Creating a charge method
CarEV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}

// we can overwrite a method - polymorphism
CarEV.prototype.accelerate = function(){ 
    this.speed +=20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`)
}


const tesla = new CarEV("Tesla", 120, 23);

tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.accelerate();

tesla.chargeBattery(50);
tesla.accelerate();
console.log(tesla);