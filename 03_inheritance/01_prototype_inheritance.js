
// 01: Prototype-based Inheritance


// Parent object/constructor
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.makeSound = function() {
  return `${this.name} says: ${this.sound}`;
};

Animal.prototype.move = function() {
  return `${this.name} is moving`;
};

// Child constructor
function Dog(name, sound, breed) {
  Animal.call(this, name, sound); // Call parent constructor
  this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add/Override dog-specific methods
Dog.prototype.fetch = function() {
  return `${this.name} is fetching the ball`;
};

Dog.prototype.makeSound = function() {
  return `${this.name} barks: ${this.sound}`;
};

// Create instances
const dog = new Dog('Buddy', 'Woof!', 'Golden Retriever');
console.log(dog.name); // Buddy
console.log(dog.breed); // Golden Retriever
console.log(dog.makeSound()); // Buddy barks: Woof!
console.log(dog.move()); // Buddy is moving
console.log(dog.fetch()); // Buddy is fetching the ball
