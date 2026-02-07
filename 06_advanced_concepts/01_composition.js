
// 01: Composition (Favor composition over inheritance)


// Component classes
class Engine {
  constructor(type) {
    this.type = type;
  }

  start() {
    return `${this.type} engine started`;
  }

  stop() {
    return `${this.type} engine stopped`;
  }
}

class Transmission {
  constructor(type) {
    this.type = type;
  }

  shift(gear) {
    return `Shifted to ${gear} using ${this.type} transmission`;
  }
}

class Wheels {
  constructor(size, count) {
    this.size = size;
    this.count = count;
  }

  rotate() {
    return `${this.count} wheels of size ${this.size} are rotating`;
  }
}

// Car composed of components
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.engine = new Engine('V8');
    this.transmission = new Transmission('Automatic');
    this.wheels = new Wheels('18 inch', 4);
  }

  start() {
    return `${this.brand} ${this.model}: ${this.engine.start()}`;
  }

  drive() {
    return `${this.transmission.shift('D')} and ${this.wheels.rotate()}`;
  }

  stop() {
    return `${this.brand} ${this.model}: ${this.engine.stop()}`;
  }
}

const car = new Car('BMW', '320i');
console.log(car.start()); // BMW 320i: V8 engine started
console.log(car.drive()); // Shifted to D using Automatic transmission and 4 wheels of size 18 inch are rotating
console.log(car.stop()); // BMW 320i: V8 engine stopped

// Another example: User with different components
class Profile {
  constructor(bio) {
    this.bio = bio;
  }

  getBio() {
    return this.bio;
  }
}

class Settings {
  constructor() {
    this.theme = 'light';
    this.notifications = true;
  }

  setTheme(theme) {
    this.theme = theme;
  }
}

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.profile = new Profile('A passionate developer');
    this.settings = new Settings();
  }

  getInfo() {
    return {
      name: this.name,
      email: this.email,
      bio: this.profile.getBio(),
      theme: this.settings.theme
    };
  }
}

const user = new User('Alice', 'alice@example.com');
console.log(user.getInfo());
// { name: 'Alice', email: 'alice@example.com', bio: 'A passionate developer', theme: 'light' }
