// ES6 Class Syntax
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

// Creating objects/instances
const car1 = new Car('Toyota', 'Camry', 2022);
const car2 = new Car('Honda', 'Civic', 2023);

console.log(car1.displayInfo()); // 2022 Toyota Camry
console.log(car2.displayInfo()); // 2023 Honda Civic
console.log(car1 instanceof Car); // true
