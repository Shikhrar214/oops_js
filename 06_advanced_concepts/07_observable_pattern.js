
// 07: Observer Pattern (Event System)


// Subject/Observable
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

// Observer interface
class Observer {
  update(data) {
    throw new Error('update() must be implemented');
  }
}

// Concrete observers
class EmailObserver extends Observer {
  update(data) {
    console.log(`[Email] Notification: ${data.message}`);
  }
}

class SMSObserver extends Observer {
  update(data) {
    console.log(`[SMS] Alert: ${data.message}`);
  }
}

class LogObserver extends Observer {
  update(data) {
    console.log(`[Log] Event recorded: ${data.message} at ${new Date().toISOString()}`);
  }
}

// Usage
const newsChannel = new Subject();

const emailObserver = new EmailObserver();
const smsObserver = new SMSObserver();
const logObserver = new LogObserver();

newsChannel.addObserver(emailObserver);
newsChannel.addObserver(smsObserver);
newsChannel.addObserver(logObserver);

newsChannel.notifyObservers({ message: 'Breaking News!' });
// [Email] Notification: Breaking News!
// [SMS] Alert: Breaking News!
// [Log] Event recorded: Breaking News! at ...

newsChannel.removeObserver(smsObserver);
console.log('--- SMS removed ---');
newsChannel.notifyObservers({ message: 'Another update' });
// [Email] Notification: Another update
// [Log] Event recorded: Another update at ...

// Another example: Stock price observer
class StockPrice extends Subject {
  constructor(symbol, price) {
    super();
    this.symbol = symbol;
    this.price = price;
  }

  setPrice(newPrice) {
    if (newPrice !== this.price) {
      this.price = newPrice;
      this.notifyObservers({
        symbol: this.symbol,
        price: newPrice
      });
    }
  }
}

class StockInvestor {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received update: ${data.symbol} is now $${data.price}`);
  }
}

const apple = new StockPrice('AAPL', 150);

const investor1 = new StockInvestor('Alice');
const investor2 = new StockInvestor('Bob');

apple.addObserver(investor1);
apple.addObserver(investor2);

apple.setPrice(155);
// Alice received update: AAPL is now $155
// Bob received update: AAPL is now $155

apple.setPrice(152);
// Alice received update: AAPL is now $152
// Bob received update: AAPL is now $152

// Event Emitter pattern (Common in Node.js)
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    }
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(...args));
    }
  }

  once(eventName, callback) {
    const onceCallback = (...args) => {
      callback(...args);
      this.off(eventName, onceCallback);
    };
    this.on(eventName, onceCallback);
  }
}

const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.on('greet', (name) => {
  console.log(`Welcome, ${name}!`);
});

emitter.emit('greet', 'Alice');
// Hello, Alice!
// Welcome, Alice!

emitter.once('farewell', (name) => {
  console.log(`Goodbye, ${name}!`);
});

emitter.emit('farewell', 'Bob');
// Goodbye, Bob!

emitter.emit('farewell', 'Charlie'); // No output (once only)
