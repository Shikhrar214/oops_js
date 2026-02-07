
// 02: Getters & Setters

class Temperature {
  #celsius = 0;

  constructor(celsius = 0) {
    this.#celsius = celsius;
  }

  // Getter
  get celsius() {
    return this.#celsius;
  }

  // Setter with validation
  set celsius(value) {
    if (typeof value === 'number') {
      this.#celsius = value;
    } else {
      console.log('Invalid value. Must be a number.');
    }
  }

  // Getter for fahrenheit
  get fahrenheit() {
    return (this.#celsius * 9/5) + 32;
  }

  // Setter for fahrenheit
  set fahrenheit(value) {
    this.#celsius = (value - 32) * 5/9;
  }
}

const temp = new Temperature(0);
console.log(temp.celsius); // 0
console.log(temp.fahrenheit); // 32

temp.celsius = 25;
console.log(temp.celsius); // 25
console.log(temp.fahrenheit); // 77

temp.fahrenheit = 98.6;
console.log(temp.celsius); // 37
console.log(temp.fahrenheit); // 98.6

temp.celsius = 'invalid'; // Invalid value. Must be a number.
