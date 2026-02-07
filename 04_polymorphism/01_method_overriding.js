
// 01: Method Overriding (Compile-time)


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }

  move() {
    return `${this.name} is moving`;
  }
}

class Dog extends Animal {
  // Override speak method
  speak() {
    return `${this.name} barks: Woof!`;
  }

  // Override move method
  move() {
    return `${this.name} is running on four legs`;
  }
}

class Bird extends Animal {
  // Override speak method
  speak() {
    return `${this.name} chirps: Tweet! Tweet!`;
  }

  // Override move method
  move() {
    return `${this.name} is flying`;
  }
}

class Fish extends Animal {
  // Override speak method
  speak() {
    return `${this.name} is silent`;
  }

  // Override move method
  move() {
    return `${this.name} is swimming`;
  }
}

// Polymorphic behavior
const animals = [
  new Dog('Rex'),
  new Bird('Tweety'),
  new Fish('Nemo')
];

animals.forEach(animal => {
  console.log(animal.speak());
  console.log(animal.move());
  console.log('---');
});
