class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`${this.make}'s speed: ${this.speed} km/h`)
        return this;
    }

    brake(){
        this.speed-= 5;
        console.log(`${this.make}'s speed: ${this.speed} km/h`)
        return this;
    }
};

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }

    accelerate(){
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}%`);
        return this;    
    }

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        console.log(`Battery charged to: ${this.#charge}%`);
        return this;
    }
}


const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);

rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .chargeBattery(100);

