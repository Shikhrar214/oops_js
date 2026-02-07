
// 02: Method Overloading (Simulated)
// JS doesn't support true overloading, but we can simulate it


class Calculator {
  // Method that handles different argument counts
  add(...args) {
    if (args.length === 2) {
      return args[0] + args[1];
    } else if (args.length === 3) {
      return args[0] + args[1] + args[2];
    } else if (args.length === 0) {
      return 0;
    }
    return args.reduce((sum, num) => sum + num, 0);
  }

  // Method that handles different types
  display(value) {
    if (typeof value === 'string') {
      return `String: ${value}`;
    } else if (typeof value === 'number') {
      return `Number: ${value}`;
    } else if (Array.isArray(value)) {
      return `Array: [${value.join(', ')}]`;
    } else if (typeof value === 'object') {
      return `Object: ${JSON.stringify(value)}`;
    }
    return `Unknown type: ${value}`;
  }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8
console.log(calc.add(5, 3, 2)); // 10
console.log(calc.add(1, 2, 3, 4, 5)); // 15
console.log(calc.add()); // 0

console.log(calc.display('Hello')); // String: Hello
console.log(calc.display(42)); // Number: 42
console.log(calc.display([1, 2, 3])); // Array: [1, 2, 3]
console.log(calc.display({ name: 'John' })); // Object: {"name":"John"}

// Another approach using conditional logic
class Printer {
  print(x, y) {
    // No second argument
    if (y === undefined) {
      return `Printing single value: ${x}`;
    }
    // Two arguments
    return `Printing two values: ${x} and ${y}`;
  }
}

const printer = new Printer();
console.log(printer.print('Hello')); // Printing single value: Hello
console.log(printer.print('Hello', 'World')); // Printing two values: Hello and World
