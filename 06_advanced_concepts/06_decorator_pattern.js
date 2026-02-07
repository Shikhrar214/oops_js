
// 06: Decorator Pattern


// Base class
class Pizza {
  getDescription() {
    return 'Plain Pizza';
  }

  getCost() {
    return 5;
  }
}

// Decorator class
class PizzaDecorator {
  constructor(pizza) {
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription();
  }

  getCost() {
    return this.pizza.getCost();
  }
}

// Concrete decorators
class CheeseDecorator extends PizzaDecorator {
  getDescription() {
    return this.pizza.getDescription() + ', Cheese';
  }

  getCost() {
    return this.pizza.getCost() + 1.5;
  }
}

class PepperoniDecorator extends PizzaDecorator {
  getDescription() {
    return this.pizza.getDescription() + ', Pepperoni';
  }

  getCost() {
    return this.pizza.getCost() + 2;
  }
}

class MushroomDecorator extends PizzaDecorator {
  getDescription() {
    return this.pizza.getDescription() + ', Mushroom';
  }

  getCost() {
    return this.pizza.getCost() + 1;
  }
}

// Usage
let pizza = new Pizza();
console.log(pizza.getDescription()); // Plain Pizza
console.log(`$${pizza.getCost()}`); // $5

pizza = new CheeseDecorator(pizza);
console.log(pizza.getDescription()); // Plain Pizza, Cheese
console.log(`$${pizza.getCost()}`); // $6.5

pizza = new PepperoniDecorator(pizza);
console.log(pizza.getDescription()); // Plain Pizza, Cheese, Pepperoni
console.log(`$${pizza.getCost()}`); // $8.5

pizza = new MushroomDecorator(pizza);
console.log(pizza.getDescription()); // Plain Pizza, Cheese, Pepperoni, Mushroom
console.log(`$${pizza.getCost()}`); // $9.5

// Another example: Function decorators
function greet(name) {
  return `Hello, ${name}!`;
}

// Decorator function
function logDecorator(fn) {
  return function(...args) {
    console.log(`Function called with arguments: ${args}`);
    const result = fn(...args);
    console.log(`Function returned: ${result}`);
    return result;
  };
}

function timeDecorator(fn) {
  return function(...args) {
    const start = Date.now();
    const result = fn(...args);
    const end = Date.now();
    console.log(`Execution time: ${end - start}ms`);
    return result;
  };
}

const greetLogged = logDecorator(greet);
const greetTimed = timeDecorator(greetLogged);

greetTimed('Alice');
// Function called with arguments: Alice
// Function returned: Hello, Alice!
// Execution time: Xms

// Coffee shop example
class Coffee {
  getCost() {
    return 2;
  }

  getDescription() {
    return 'Coffee';
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 0.5;
  }

  getDescription() {
    return this.coffee.getDescription() + ' with Milk';
  }
}

class CaramelDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 0.75;
  }

  getDescription() {
    return this.coffee.getDescription() + ' and Caramel';
  }
}

let myCoffee = new Coffee();
console.log(`${myCoffee.getDescription()} - $${myCoffee.getCost()}`);
// Coffee - $2

myCoffee = new MilkDecorator(myCoffee);
console.log(`${myCoffee.getDescription()} - $${myCoffee.getCost()}`);
// Coffee with Milk - $2.5

myCoffee = new CaramelDecorator(myCoffee);
console.log(`${myCoffee.getDescription()} - $${myCoffee.getCost()}`);
// Coffee with Milk and Caramel - $3.25
