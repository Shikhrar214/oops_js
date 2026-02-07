# Object-Oriented Programming (OOP) in JavaScript

A comprehensive guide to mastering OOP concepts in JavaScript with practical examples and patterns. This repository covers all the fundamental pillars of OOP and advanced design patterns.

## 📚 Table of Contents

1. [Classes & Objects](#classes--objects)
2. [Encapsulation](#encapsulation)
3. [Inheritance](#inheritance)
4. [Polymorphism](#polymorphism)
5. [Abstraction](#abstraction)
6. [Advanced Concepts](#advanced-concepts)
7. [How to Use This Repository](#how-to-use-this-repository)

---

## Classes & Objects

### Overview
Classes and objects are the foundation of OOP. A class is a blueprint for creating objects, and an object is an instance of a class.

### Folder: `01_classes_objects/`

#### Files:
- **01_basic_class.js** - ES6 class syntax and object creation
  - Learn how to define classes with constructors and methods
  - Create and use object instances
  - Example: Simple Car class

- **02_constructor_function.js** - Pre-ES6 constructor functions (legacy)
  - Understand constructor function pattern
  - Using `prototype` for methods
  - Difference between ES6 classes and constructor functions
  - Example: Person class with prototype methods

- **03_object_literals.js** - Object literals and factory functions
  - Creating objects using object literal notation
  - Factory functions for object creation
  - Methods and properties in plain objects
  - Example: User object and Product factory

- **04_this_keyword.js** - Understanding the `this` context
  - How `this` works in different scenarios
  - Arrow functions vs regular functions
  - `bind()`, `call()`, and `apply()` methods
  - Example: Student class with different function contexts

### Key Concepts:
- Classes are syntactic sugar over JavaScript's prototype-based inheritance
- Constructors initialize object properties
- Methods define object behavior
- `instanceof` operator checks object type

---

## Encapsulation

### Overview
Encapsulation is about bundling data (properties) and methods together while hiding internal details. It protects data from unauthorized external access.

### Folder: `02_encapsulation/`

#### Files:
- **01_private_public.js** - Private and public members (ES2022)
  - Using `#` syntax for private fields
  - Protecting sensitive data
  - Public methods to interact with private data
  - Example: BankAccount class with private balance

- **02_getters_setters.js** - Getters and setters
  - Controlling property access
  - Data validation in setters
  - Computed properties
  - Example: Temperature class with Celsius/Fahrenheit conversion

- **03_closure_privacy.js** - Closure-based privacy (older approach)
  - Creating private variables using closures
  - Factory functions with private state
  - Pre-ES2022 pattern for data hiding
  - Example: Counter and User classes

### Key Concepts:
- Data hiding protects object integrity
- Getters and setters provide controlled access
- Validation can be enforced through setters
- Closures provide alternative privacy mechanism

---

## Inheritance

### Overview
Inheritance allows objects to inherit properties and methods from other objects, creating a hierarchy of classes.

### Folder: `03_inheritance/`

#### Files:
- **01_prototype_inheritance.js** - Prototype-based inheritance
  - Setting up prototype chain manually
  - Using `Object.create()` for inheritance
  - Calling parent methods with `.call()`
  - Example: Animal → Dog inheritance chain

- **02_class_inheritance.js** - ES6 class-based inheritance
  - Using `extends` keyword
  - Calling parent constructor with `super`
  - Overriding parent methods
  - Single inheritance in JavaScript
  - Example: Vehicle → Car and Motorcycle

- **03_multi_level_inheritance.js** - Multi-level inheritance
  - Creating inheritance hierarchies (grandparent → parent → child)
  - Accessing methods from multiple levels
  - Method resolution in deep chains
  - Example: LivingBeing → Animal → Dog

### Key Concepts:
- JavaScript uses prototype-based inheritance
- ES6 classes are easier to understand than prototype chains
- `super` keyword accesses parent class functionality
- Method overriding allows child classes to customize behavior

---

## Polymorphism

### Overview
Polymorphism means "many forms". It allows objects of different types to be used interchangeably, provided they share a common interface.

### Folder: `04_polymorphism/`

#### Files:
- **01_method_overriding.js** - Method overriding
  - Child classes override parent methods
  - Same method name, different implementations
  - Polymorphic behavior in arrays
  - Example: Animal → Dog, Bird, Fish with different `speak()` implementations

- **02_method_overloading.js** - Method overloading (simulated)
  - Handling different argument counts
  - Handling different argument types
  - Using rest parameters (`...args`)
  - Example: Calculator with flexible `add()` method

- **03_interface_implementation.js** - Duck typing and interface-like patterns
  - Objects with the same methods are interchangeable
  - No strict interface enforcement in JavaScript
  - Implicit interfaces based on method names
  - Example: Bird, Airplane both have `fly()` method

### Key Concepts:
- Same method name can behave differently in different classes
- Objects don't need to inherit from same class if they implement same methods
- Reduces code duplication through shared interfaces
- Enables flexible and maintainable code

---

## Abstraction

### Overview
Abstraction hides complex implementation details and exposes only what's necessary. Users interact with simple interfaces without understanding internal complexity.

### Folder: `05_abstraction/`

#### Files:
- **01_abstract_class.js** - Abstract classes and methods
  - Preventing instantiation of abstract classes
  - Defining abstract methods that must be implemented
  - Concrete methods shared by all subclasses
  - Example: Shape abstract class with Rectangle and Square

- **02_hiding_implementation.js** - Hiding implementation details
  - Using private methods for internal logic
  - Exposing only necessary public methods
  - Users focus on `what` not `how`
  - Example: Database and HTTPClient classes

### Key Concepts:
- Simplifies complex systems
- Reduces coupling between classes
- Implementation details can change without affecting users
- Improves maintainability and readability

---

## Advanced Concepts

### Overview
Beyond the four pillars of OOP, these patterns and concepts are essential for professional JavaScript development.

### Folder: `06_advanced_concepts/`

#### Files:
- **01_composition.js** - Composition pattern (favor over inheritance)
  - Building complex objects from simpler components
  - Has-a relationship instead of is-a
  - More flexible than inheritance
  - Example: Car composed of Engine, Transmission, Wheels

- **02_mixins.js** - Mixins for code reuse
  - Alternative to multiple inheritance
  - Using `Object.assign()` to mix in behaviors
  - Single class can have features from multiple mixins
  - Example: Duck, Fish, Dog with different capabilities

- **03_static_members.js** - Static methods and properties
  - Methods and properties shared across all instances
  - Creating utility classes
  - Factory methods
  - Example: Math utilities and User factory

- **04_singleton_pattern.js** - Singleton pattern
  - Ensuring only one instance of a class
  - Global access to single instance
  - Use cases: Database connections, loggers
  - Example: Database and Logger singletons

- **05_prototype_chain.js** - Prototype chain deep dive
  - Understanding how objects inherit
  - `Object.create()` for delegation
  - Property lookup mechanism
  - Example: Creating custom prototype chains

- **06_decorator_pattern.js** - Decorator pattern
  - Adding functionality to objects dynamically
  - Wrapping objects with additional behavior
  - Alternative to subclassing for extensions
  - Example: Pizza with various toppings, Coffee with additions

- **07_observable_pattern.js** - Observer/Event pattern
  - Implementing publish-subscribe model
  - Loose coupling between observers and subjects
  - Building event emitters
  - Example: Stock price notifications, Event emitter system

### Key Concepts:
- Composition is often better than inheritance
- Mixins enable code reuse across unrelated classes
- Static members are useful for utilities and factories
- Design patterns solve common architectural problems
- Observer pattern enables reactive programming

---

## How to Use This Repository

### Prerequisites
- Node.js installed (v14 or higher)
- Basic JavaScript knowledge

### Running Examples

#### Run a single file:
```bash
node 01_classes_objects/01_basic_class.js
```

<!-- #### Run all files in a folder:
```bash
for file in 01_classes_objects/*.js; do
  echo "=== Running $file ===" 
  node "$file"
done
``` -->

<!-- #### Run all files:
```bash
find . -name "*.js" -type f | sort | while read file; do
  echo "=========================================="
  echo "=== $file ==="
  echo "=========================================="
  node "$file"
  echo ""
done
``` -->

### Learning Path (Recommended Order)

**Beginner:**
1. Classes & Objects (01_classes_objects/)
2. Encapsulation (02_encapsulation/)
3. Inheritance (03_inheritance/)

**Intermediate:**
4. Polymorphism (04_polymorphism/)
5. Abstraction (05_abstraction/)

**Advanced:**
6. Advanced Concepts (06_advanced_concepts/)

### Tips for Learning

- Read the comments in each file carefully
- Run each example and modify values to see how it changes behavior
- Try to understand the "why" behind each concept
- Combine concepts to solve real-world problems
- Refer back to simpler examples when learning complex patterns

---

## OOP Pillars Summary

### 1. **Encapsulation** ✓
- Bundle data and methods
- Hide internal details
- Protect data integrity
- **File**: 02_encapsulation/

### 2. **Inheritance** ✓
- Reuse code through class hierarchies
- Create specialized classes from general ones
- Build IS-A relationships
- **File**: 03_inheritance/

### 3. **Polymorphism** ✓
- Use objects interchangeably
- Override methods in subclasses
- Write generic code
- **File**: 04_polymorphism/

### 4. **Abstraction** ✓
- Hide complexity
- Expose simple interfaces
- Focus on what, not how
- **File**: 05_abstraction/

---

## Real-World Applications

The concepts covered in this repository are used in:

- **Web Frameworks** (React, Vue, Angular)
- **Backend Development** (Node.js, Express)
- **Game Development** (Game engines)
- **Desktop Applications** (Electron)
- **Mobile Apps** (React Native)
- **Libraries & Packages** (npm packages)

---

## Common Design Patterns Covered

| Pattern | File | Use Case |
|---------|------|----------|
| Factory | `01_classes_objects/03_object_literals.js` | Creating objects flexibly |
| Singleton | `06_advanced_concepts/04_singleton_pattern.js` | Global instances |
| Observer | `06_advanced_concepts/07_observable_pattern.js` | Event systems |
| Decorator | `06_advanced_concepts/06_decorator_pattern.js` | Dynamic features |
| Composition | `06_advanced_concepts/01_composition.js` | Flexible object building |
| Mixin | `06_advanced_concepts/02_mixins.js` | Code reuse |

---

## Important Concepts Map

```
OOP in JavaScript
├── Classes & Objects
│   ├── ES6 Classes
│   ├── Constructor Functions
│   ├── Object Literals
│   └── The 'this' Keyword
│
├── Encapsulation (Data Hiding)
│   ├── Private Fields (#)
│   ├── Getters & Setters
│   └── Closures
│
├── Inheritance (Code Reuse)
│   ├── Prototype Chain
│   ├── Class Inheritance (extends)
│   └── Multi-level Inheritance
│
├── Polymorphism (Many Forms)
│   ├── Method Overriding
│   ├── Method Overloading
│   └── Duck Typing
│
├── Abstraction (Hiding Details)
│   ├── Abstract Classes
│   └── Hiding Implementation
│
└── Advanced Patterns
    ├── Composition
    ├── Mixins
    ├── Static Members
    ├── Singleton Pattern
    ├── Decorator Pattern
    ├── Observer Pattern
    └── Prototype Chain Deep Dive
```

---

## Best Practices

1. **Prefer Composition over Inheritance** - More flexible and maintainable
2. **Use Private Fields** - Protect data with `#` syntax
3. **Single Responsibility** - Each class should have one reason to change
4. **Encapsulate State** - Use getters/setters for property access
5. **Follow SOLID Principles** - Write clean, maintainable code
6. **Use Static Methods** - For utility functions and factories
7. **Implement Observer Pattern** - For event-driven architecture
8. **Document Your Code** - Clear comments help understanding

---

## Common Mistakes to Avoid

❌ **Don't:**
- Use too much inheritance (favor composition)
- Expose internal state directly
- Mix concerns in single class
- Forget to bind `this` in callbacks
- Ignore prototype pollution security issues

✅ **Do:**
- Keep classes focused and single-purpose
- Use private fields and getters/setters
- Follow naming conventions
- Use design patterns appropriately
- Write clean, readable code

---

## Resources for Further Learning

- **MDN Web Docs** - JavaScript OOP concepts
- **JavaScript.info** - Interactive JavaScript tutorials
- **Design Patterns Book** - Gang of Four patterns
- **Refactoring Guru** - Visual pattern explanations

---

## File Structure

```
oop-js/
├── 01_classes_objects/
│   ├── 01_basic_class.js
│   ├── 02_constructor_function.js
│   ├── 03_object_literals.js
│   └── 04_this_keyword.js
│
├── 02_encapsulation/
│   ├── 01_private_public.js
│   ├── 02_getters_setters.js
│   └── 03_closure_privacy.js
│
├── 03_inheritance/
│   ├── 01_prototype_inheritance.js
│   ├── 02_class_inheritance.js
│   └── 03_multi_level_inheritance.js
│
├── 04_polymorphism/
│   ├── 01_method_overriding.js
│   ├── 02_method_overloading.js
│   └── 03_interface_implementation.js
│
├── 05_abstraction/
│   ├── 01_abstract_class.js
│   └── 02_hiding_implementation.js
│
├── 06_advanced_concepts/
│   ├── 01_composition.js
│   ├── 02_mixins.js
│   ├── 03_static_members.js
│   ├── 04_singleton_pattern.js
│   ├── 05_prototype_chain.js
│   ├── 06_decorator_pattern.js
│   └── 07_observable_pattern.js
│
└── README.md (This file)
```

---

## Quick Reference

### Creating a Class
```javascript
class MyClass {
  constructor(param) {
    this.param = param;
  }
  
  method() {
    return this.param;
  }
}
```

### Inheritance
```javascript
class Child extends Parent {
  constructor(param) {
    super(param);
  }
}
```

### Private Fields
```javascript
class MyClass {
  #privateField = 'hidden';
  
  #privateMethod() {}
  
  publicMethod() {
    return this.#privateField;
  }
}
```

### Getters & Setters
```javascript
class MyClass {
  get property() {
    return this._property;
  }
  
  set property(value) {
    this._property = value;
  }
}
```

### Static Members
```javascript
class MyClass {
  static staticProp = 'shared';
  
  static staticMethod() {
    return this.staticProp;
  }
}
```

---

## License

This repository is open source and available for educational purposes.

---

## Contributing

Feel free to fork, modify, and extend these examples for your learning. Share improvements and variations!

---

## Conclusion

Object-Oriented Programming is a powerful paradigm that helps write scalable, maintainable, and organized code. Master these concepts and you'll be well-equipped to build professional JavaScript applications.

**Happy Learning! 🚀**
