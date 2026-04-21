// Creating a ES6 Classes

class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    } 

    // Methods will added to the prototype property
    accelerate(){
        const accelerate = 10;
        this.speed += accelerate;
        console.log(`${this.make}'s speed = ${this.speed}km/h (accelerated by ${accelerate}km/h)`);
    }

    brake(){
        const brake = 5;
        this.speed -= brake;
        console.log(`${this.make}'s speed = ${this.speed}km/h (brake by ${brake}km/h)`);
    }

    // new property
    get speedUS(){
        return `${this.speed / 1.6}mi/h`;
    }

    set speedUS(num){
        this.speed = num * 1.6;
    }
}

const ford = new CarCl('ford', 120)

ford.accelerate()
ford.accelerate()
ford.brake()
ford.accelerate()

ford.speedUS = 50;
console.log(ford)


