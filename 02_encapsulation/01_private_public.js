
// 01: Private & Public Properties

// Using # for private fields (ES2022)
class BankAccount {
  #balance = 0; // Private field

  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder; // Public property
    this.#balance = initialBalance;
  }

  // Public method
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposited $${amount}. New balance: $${this.#balance}`;
    }
    return 'Invalid amount';
  }

  // Public method
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrew $${amount}. New balance: $${this.#balance}`;
    }
    return 'Invalid amount or insufficient balance';
  }

  // Public getter
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount('John Doe', 1000);
console.log(account.deposit(500)); // Deposited $500. New balance: $1500
console.log(account.withdraw(200)); // Withdrew $200. New balance: $1300
console.log(account.getBalance()); // 1300
console.log(account.accountHolder); // John Doe
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared
