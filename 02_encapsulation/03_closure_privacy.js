
// 03: Closure-based Privacy (Pre-ES2022)

function createCounter() {
  let count = 0; // Private variable in closure

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
    reset() {
      count = 0;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
console.log(counter.count); // undefined (private)

// Another example with closure
function createUser(initialName) {
  let name = initialName;

  return {
    getName() {
      return name;
    },
    setName(newName) {
      if (newName.length > 0) {
        name = newName;
        return `Name updated to ${name}`;
      }
      return 'Invalid name';
    }
  };
}

const user = createUser('Alice');
console.log(user.getName()); // Alice
console.log(user.setName('Bob')); // Name updated to Bob
console.log(user.getName()); // Bob
