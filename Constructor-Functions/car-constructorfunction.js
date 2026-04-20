// Creating a Constructor function

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    accelerate = 10;
    this.speed += accelerate;
    console.log(`${this.make}'s speed = ${this.speed}km/h (accelerated by ${accelerate}km/h)`)    
};

Car.prototype.brake = function() {
    brake = 5;
    this.speed -= brake;
    console.log(`${this.make}'s speed = ${this.speed}km/h (brake by ${brake}km/h)`)
};

const bmw = new Car('bmw', 120);
const mercedes = new Car('mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();