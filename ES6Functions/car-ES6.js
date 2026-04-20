// Creating a ES6 Classes

class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    } 

    // Methods will be linked to the prototype
    accelerate(){
        accelerate = 10;
        this.speed += accelerate;
        console.log(this.speed);
    }

    brake(){
        brake = 5;
        this.speed -= brake;
        console.log(this.speed);
    }
}

