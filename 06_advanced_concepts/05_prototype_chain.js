
// 05: Prototype Chain & Object Creation


// Understanding prototype chain
const animal = {
  type: 'Animal',
  describe() {
    return `I am a ${this.type}`;
  }
};

const dog = Object.create(animal);
dog.type = 'Dog';
dog.breed = 'Labrador';

console.log(dog.describe()); // I am a Dog
console.log(dog.breed); // Labrador
console.log(dog.type); // Dog
console.log(dog.toString()); // Inherited from Object.prototype

// Checking the prototype chain
console.log(Object.getPrototypeOf(dog) === animal); // true
console.log(Object.getPrototypeOf(animal) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype) === null); // true

// Creating a prototype chain manually
const Person = {
  initialize(name, age) {
    this.name = name;
    this.age = age;
    return this;
  },
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};

const Developer = Object.create(Person);
Developer.code = function() {
  return `${this.name} is coding`;
};

const Developer2 = Object.create(Developer);
Developer2.deploy = function() {
  return `${this.name} is deploying`;
};

const dev = Object.create(Developer2);
dev.initialize('Alice', 28);

console.log(dev.name); // Alice
console.log(dev.greet()); // Hello, I'm Alice
console.log(dev.code()); // Alice is coding
console.log(dev.deploy()); // Alice is deploying

// Using Object.create with property descriptors
const Vehicle = {
  wheels: 4,
  start() {
    return 'Engine started';
  }
};

const car = Object.create(Vehicle, {
  brand: { value: 'Toyota', enumerable: true },
  model: { value: 'Camry', enumerable: true },
  speed: { value: 0, writable: true, enumerable: true }
});

console.log(car.brand); // Toyota
console.log(car.wheels); // 4
console.log(car.start()); // Engine started

// Checking own properties vs inherited
console.log(car.hasOwnProperty('brand')); // true
console.log(car.hasOwnProperty('wheels')); // false (inherited)
console.log('wheels' in car); // true (checks entire chain)

// Getting all properties (own + inherited)
console.log(Object.getOwnPropertyNames(car)); // ['brand', 'model', 'speed']
console.log(Object.keys(car)); // ['brand', 'model', 'speed']

// Listing all inherited properties
for (const key in car) {
  console.log(`${key}: ${car[key]}`);
  // brand: Toyota
  // model: Camry
  // speed: 0
  // wheels: 4
  // start: function
}
