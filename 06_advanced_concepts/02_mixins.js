
// 02: Mixins (Multiple Inheritance Alternative)


// Mixin for flight capabilities
const Flyable = {
  fly() {
    return `${this.name} is flying`;
  },
  land() {
    return `${this.name} has landed`;
  }
};

// Mixin for swimming capabilities
const Swimmable = {
  swim() {
    return `${this.name} is swimming`;
  },
  dive() {
    return `${this.name} is diving`;
  }
};

// Mixin for running capabilities
const Runnable = {
  run() {
    return `${this.name} is running`;
  },
  walk() {
    return `${this.name} is walking`;
  }
};

// Mixin for eating capabilities
const Eatable = {
  eat(food) {
    return `${this.name} is eating ${food}`;
  }
};

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Duck: can fly, swim, and eat
class Duck extends Animal {}
Object.assign(Duck.prototype, Flyable, Swimmable, Eatable);

// Fish: can swim and eat
class Fish extends Animal {}
Object.assign(Fish.prototype, Swimmable, Eatable);

// Dog: can run and eat
class Dog extends Animal {}
Object.assign(Dog.prototype, Runnable, Eatable);

// Human: can run, walk, and eat
class Human extends Animal {}
Object.assign(Human.prototype, Runnable, Eatable);

const duck = new Duck('Donald');
console.log(duck.fly()); // Donald is flying
console.log(duck.swim()); // Donald is swimming
console.log(duck.eat('bread')); // Donald is eating bread

const fish = new Fish('Nemo');
console.log(fish.swim()); // Nemo is swimming
console.log(fish.eat('plankton')); // Nemo is eating plankton

const dog = new Dog('Buddy');
console.log(dog.run()); // Buddy is running
console.log(dog.eat('bone')); // Buddy is eating bone

const human = new Human('John');
console.log(human.run()); // John is running
console.log(human.walk()); // John is walking
console.log(human.eat('pizza')); // John is eating pizza

// Another example: Mixin for logger functionality
const Logger = {
  log(message) {
    console.log(`[${this.name}] ${message}`);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, Logger);

const user = new User('Alice');
user.log('User created'); // [Alice] User created
