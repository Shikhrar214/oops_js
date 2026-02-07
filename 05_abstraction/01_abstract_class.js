
// 01: Abstract Class Pattern


// Abstract class (not directly instantiated)
class Shape {
  constructor(name) {
    // Prevent instantiation of abstract class
    if (new.target === Shape) {
      throw new Error('Cannot instantiate abstract class Shape');
    }
    this.name = name;
  }

  // Abstract method (must be implemented by subclasses)
  getArea() {
    throw new Error('getArea() must be implemented');
  }

  // Abstract method
  getPerimeter() {
    throw new Error('getPerimeter() must be implemented');
  }

  // Concrete method (shared by all shapes)
  describe() {
    return `${this.name}: Area = ${this.getArea()}, Perimeter = ${this.getPerimeter()}`;
  }
}

class Square extends Shape {
  constructor(side) {
    super('Square');
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }

  getPerimeter() {
    return 4 * this.side;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle');
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Create instances
const square = new Square(5);
const rectangle = new Rectangle(4, 6);

console.log(square.describe());
// Square: Area = 25, Perimeter = 20
console.log(rectangle.describe());
// Rectangle: Area = 24, Perimeter = 20

// Try to instantiate abstract class
try {
  const shape = new Shape('Generic');
} catch (error) {
  console.log(error.message); // Cannot instantiate abstract class Shape
}
