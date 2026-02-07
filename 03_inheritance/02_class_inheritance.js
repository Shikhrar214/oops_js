
// 02: Class-based Inheritance (ES6)


// Parent class
class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }

  accelerate(amount) {
    this.speed += amount;
    return `${this.brand} ${this.model} accelerated to ${this.speed} km/h`;
  }

  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
    return `${this.brand} ${this.model} slowed down to ${this.speed} km/h`;
  }

  getInfo() {
    return `${this.brand} ${this.model}`;
  }
}

// Child class 1
class Car extends Vehicle {
  constructor(brand, model, doors) {
    super(brand, model); // Call parent constructor
    this.doors = doors;
  }

  openTrunk() {
    return `${this.brand} ${this.model} trunk is open`;
  }
}

// Child class 2
class Motorcycle extends Vehicle {
  constructor(brand, model, hasSidecar) {
    super(brand, model);
    this.hasSidecar = hasSidecar;
  }

  wheelie() {
    return `${this.brand} ${this.model} is doing a wheelie!`;
  }
}

const car = new Car('Tesla', 'Model 3', 4);
const bike = new Motorcycle('Harley-Davidson', 'Street 750', false);

console.log(car.getInfo()); // Tesla Model 3
console.log(car.accelerate(100)); // Tesla Model 3 accelerated to 100 km/h
console.log(car.openTrunk()); // Tesla Model 3 trunk is open

console.log(bike.wheelie()); // Harley-Davidson Street 750 is doing a wheelie!
console.log(bike.brake(20)); // Harley-Davidson Street 750 slowed down to 80 km/h
