
// 02: Hiding Implementation Details


class Database {
  #connection = null;
  #isConnected = false;

  constructor(host, port) {
    this.host = host;
    this.port = port;
  }

  // Public method - users only interact with this
  connect() {
    this.#openConnection();
    return 'Connected to database';
  }

  disconnect() {
    this.#closeConnection();
    return 'Disconnected from database';
  }

  query(sql) {
    if (!this.#isConnected) {
      throw new Error('Database is not connected');
    }
    return this.#executeQuery(sql);
  }

  // Private methods - implementation details hidden
  #openConnection() {
    this.#connection = { host: this.host, port: this.port };
    this.#isConnected = true;
    console.log('Opening connection...');
  }

  #closeConnection() {
    this.#connection = null;
    this.#isConnected = false;
    console.log('Closing connection...');
  }

  #executeQuery(sql) {
    // Complex implementation hidden from user
    const sanitized = this.#sanitizeSQL(sql);
    const result = this.#runQuery(sanitized);
    return result;
  }

  #sanitizeSQL(sql) {
    // Remove dangerous characters
    return sql.replace(/[;'"]/g, '');
  }

  #runQuery(sql) {
    return `Executed: ${sql}`;
  }
}

const db = new Database('localhost', 5432);
console.log(db.connect()); // Opening connection... Connected to database
console.log(db.query('SELECT * FROM users')); // Executed: SELECT * FROM users
console.log(db.disconnect()); // Closing connection... Disconnected from database

// User cannot access private members
// console.log(db.#connection); // SyntaxError
// console.log(db.#isConnected); // SyntaxError

// Another example: HTTP Client abstraction
class HTTPClient {
  #baseURL;
  #timeout;

  constructor(baseURL, timeout = 5000) {
    this.#baseURL = baseURL;
    this.#timeout = timeout;
  }

  async get(endpoint) {
    return this.#request('GET', endpoint);
  }

  async post(endpoint, data) {
    return this.#request('POST', endpoint, data);
  }

  async #request(method, endpoint, data = null) {
    // Hide implementation details
    const url = `${this.#baseURL}${endpoint}`;
    const options = {
      method,
      timeout: this.#timeout
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    return `[${method}] ${url} with options: ${JSON.stringify(options)}`;
  }
}

const client = new HTTPClient('https://api.example.com');
console.log(client.get('/users')); // [GET] https://api.example.com/users with options: ...
console.log(client.post('/users', { name: 'John' })); // [POST] https://api.example.com/users with options: ...
