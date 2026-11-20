// Product constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method to apply discount
Product.prototype.applyDiscount = function(percent) {
    let discount = (this.price * percent) / 100;
    let newPrice = this.price - discount;
    return newPrice;
};

// Creating 3 products
let product1 = new Product("Laptop", 50000);
let product2 = new Product("Mobile", 20000);
let product3 = new Product("Headphones", 5000);

// Applying different discounts
console.log(product1.name, "Original Price:", product1.price);
console.log("After 10% discount:", product1.applyDiscount(10));

console.log("------------------------");

console.log(product2.name, "Original Price:", product2.price);
console.log("After 15% discount:", product2.applyDiscount(15));

console.log("------------------------");

console.log(product3.name, "Original Price:", product3.price);
console.log("After 20% discount:", product3.applyDiscount(20));