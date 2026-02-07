
// 03: Duck Typing & Interface-like Pattern


// Duck typing: If it quacks like a duck, it's a duck
// In JS, we don't enforce interfaces, but we can follow patterns

class Bird {
  fly() {
    return 'Flying in the sky';
  }

  eat() {
    return 'Eating seeds';
  }
}

class Airplane {
  fly() {
    return 'Flying with jet engines';
  }

  eat() {
    return 'Fuel consumption';
  }
}

class Car {
  drive() {
    return 'Driving on road';
  }
}

// Function that works with anything that has a fly method
function makeItFly(creature) {
  return creature.fly();
}

const bird = new Bird();
const plane = new Airplane();

console.log(makeItFly(bird)); // Flying in the sky
console.log(makeItFly(plane)); // Flying with jet engines

// Polymorphic array - different types, same interface
const flyers = [bird, plane];

flyers.forEach(flyer => {
  console.log(flyer.fly());
  console.log(flyer.eat());
});

// Interface-like pattern with validation
class Shape {
  constructor() {
    if (!this.area || !this.perimeter) {
      throw new Error('Shape must implement area() and perimeter() methods');
    }
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const rect = new Rectangle(5, 10);
const circle = new Circle(7);

console.log(`Rectangle area: ${rect.area()}`); // Rectangle area: 50
console.log(`Rectangle perimeter: ${rect.perimeter()}`); // Rectangle perimeter: 30
console.log(`Circle area: ${circle.area()}`); // Circle area: 153.93804002589985
console.log(`Circle perimeter: ${circle.perimeter()}`); // Circle perimeter: 43.982297150257104
