
// 03: Static Methods & Properties


class Counter {
  static count = 0; // Static property

  constructor(name) {
    this.name = name;
    Counter.count++; // Increment static counter
  }

  // Static method
  static getTotal() {
    return `Total counters created: ${Counter.count}`;
  }

  // Instance method
  getName() {
    return this.name;
  }
}

const c1 = new Counter('Counter 1');
const c2 = new Counter('Counter 2');
const c3 = new Counter('Counter 3');

console.log(Counter.getTotal()); // Total counters created: 3
console.log(Counter.count); // 3
console.log(c1.getName()); // Counter 1

// Static properties and methods are shared across all instances
console.log(c1.getName()); // Counter 1
console.log(c2.getName()); // Counter 2
console.log(Counter.getTotal()); // Total counters created: 3

// Another example: Utility class with static methods
class Math2 {
  static PI = 3.14159;

  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  static square(n) {
    return n * n;
  }

  static squareRoot(n) {
    if (n < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(n);
  }
}

console.log(Math2.add(10, 5)); // 15
console.log(Math2.subtract(10, 5)); // 5
console.log(Math2.multiply(10, 5)); // 50
console.log(Math2.divide(10, 5)); // 2
console.log(Math2.square(5)); // 25
console.log(Math2.squareRoot(25)); // 5
console.log(Math2.PI); // 3.14159

// Static factory method
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static createFromObject(obj) {
    return new User(obj.id, obj.name, obj.email);
  }

  static createGuest() {
    return new User(0, 'Guest', 'guest@example.com');
  }

  getInfo() {
    return `User: ${this.name} (${this.email})`;
  }
}

const user1 = User.createFromObject({ id: 1, name: 'John', email: 'john@example.com' });
const user2 = User.createGuest();

console.log(user1.getInfo()); // User: John (john@example.com)
console.log(user2.getInfo()); // User: Guest (guest@example.com)
