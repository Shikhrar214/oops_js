
// 04: Singleton Pattern


// Singleton using closure
const Singleton = (() => {
  let instance;

  class SingletonClass {
    constructor(name) {
      this.name = name;
      this.id = Math.random();
    }

    getName() {
      return this.name;
    }
  }

  return {
    getInstance: (name) => {
      if (!instance) {
        instance = new SingletonClass(name);
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance('App');
const instance2 = Singleton.getInstance('App2');

console.log(instance1 === instance2); // true
console.log(instance1.name); // App
console.log(instance2.name); // App (still same instance)
console.log(instance1.id === instance2.id); // true

// Another approach: Static method with private field
class Database {
  #host;
  #port;

  constructor(host, port) {
    if (Database._instance) {
      return Database._instance;
    }
    this.#host = host;
    this.#port = port;
    Database._instance = this;
  }

  static getInstance(host = 'localhost', port = 5432) {
    if (!Database._instance) {
      new Database(host, port);
    }
    return Database._instance;
  }

  connect() {
    return `Connected to ${this.#host}:${this.#port}`;
  }
}

const db1 = Database.getInstance('localhost', 5432);
const db2 = Database.getInstance('localhost', 5432);

console.log(db1 === db2); // true
console.log(db1.connect()); // Connected to localhost:5432

// Logger singleton
class Logger {
  #logs = [];

  constructor() {
    if (Logger._instance) {
      return Logger._instance;
    }
    Logger._instance = this;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}`;
    this.#logs.push(logEntry);
    console.log(logEntry);
  }

  getLogs() {
    return this.#logs;
  }

  clearLogs() {
    this.#logs = [];
  }
}

const logger1 = new Logger();
const logger2 = new Logger();

console.log(logger1 === logger2); // true

logger1.log('First log');
logger2.log('Second log');

console.log(logger1.getLogs().length); // 2 (both loggers share same logs)
console.log(logger2.getLogs().length); // 2
