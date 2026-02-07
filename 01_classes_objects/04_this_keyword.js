class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying for grade ${this.grade}`);
  }

  // Arrow function (inherits 'this')
  arrowStudy = () => {
    console.log(`${this.name} is studying (arrow function)`);
  }

  // Regular function (has own 'this')
  regularStudy() {
    console.log(`${this.name} is studying (regular function)`);
  }
}

const student = new Student('Emma', 'A');
student.study(); // Emma is studying for grade A

// 'this' context in different scenarios
const obj = {
  value: 42,
  getValue: function() {
    return this.value;
  }
};

console.log(obj.getValue()); // 42

const getValue = obj.getValue;
console.log(getValue()); // undefined (lost context)

// Bind, Call, Apply
const boundGetValue = obj.getValue.bind(obj);
console.log(boundGetValue()); // 42

console.log(obj.getValue.call(obj)); // 42
console.log(obj.getValue.apply(obj, [])); // 42
