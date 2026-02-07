// Constructor Function Pattern
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

// Adding methods to prototype
Person.prototype.getInfo = function() {
  return `${this.name}, ${this.age} years old, from ${this.city}`;
};

Person.prototype.birthDay = function() {
  this.age++;
  return `${this.name} is now ${this.age} years old`;
};

// Creating instances
const person1 = new Person('Alice', 25, 'New York');
const person2 = new Person('Bob', 30, 'Los Angeles');

console.log(person1.getInfo()); // Alice, 25 years old, from New York
console.log(person2.birthDay()); // Bob is now 31 years old
console.log(person1 instanceof Person); // true
