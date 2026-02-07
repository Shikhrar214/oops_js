
// 03: Multi-level Inheritance

// Grandparent class
class LivingBeing {
  constructor(name) {
    this.name = name;
  }

  breathe() {
    return `${this.name} is breathing`;
  }

  eat(food) {
    return `${this.name} is eating ${food}`;
  }
}

// Parent class
class Animal extends LivingBeing {
  constructor(name, species) {
    super(name);
    this.species = species;
  }

  makeSound() {
    return `${this.name} makes a sound`;
  }

  sleep() {
    return `${this.name} is sleeping`;
  }
}

// Child class
class Dog extends Animal {
  constructor(name, species, breed) {
    super(name, species);
    this.breed = breed;
  }

  bark() {
    return `${this.name} barks: Woof! Woof!`;
  }

  play() {
    return `${this.name} is playing with a ball`;
  }

  getFullInfo() {
    return `Name: ${this.name}, Species: ${this.species}, Breed: ${this.breed}`;
  }
}

// Create instance
const dog = new Dog('Max', 'Canine', 'Labrador');

console.log(dog.breathe()); // Max is breathing
console.log(dog.eat('meat')); // Max is eating meat
console.log(dog.makeSound()); // Max makes a sound
console.log(dog.sleep()); // Max is sleeping
console.log(dog.bark()); // Max barks: Woof! Woof!
console.log(dog.play()); // Max is playing with a ball
console.log(dog.getFullInfo()); // Name: Max, Species: Canine, Breed: Labrador
