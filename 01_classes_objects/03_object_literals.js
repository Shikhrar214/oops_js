// Object Literal
const user = {
  name: 'John',
  email: 'john@example.com',
  age: 28,
  greet: function() {
    return `Hello, I'm ${this.name}`;
  }
};

console.log(user.greet()); // Hello, I'm John

// Factory Function (returns objects)
function createProduct(name, price, inStock) {
  return {
    name,
    price,
    inStock,
    describe() {
      return `${this.name} - $${this.price} (${this.inStock ? 'In Stock' : 'Out of Stock'})`;
    },
    applyDiscount(discount) {
      return this.price * (1 - discount);
    }
  };
}

const product1 = createProduct('Laptop', 999.99, true);
const product2 = createProduct('Phone', 499.99, false);

console.log(product1.describe()); // Laptop - $999.99 (In Stock)
console.log(product2.applyDiscount(0.1)); // 449.991
