
"use strict";

// Q1: E-Commerce Product Manager
// Demonstrates classes, objects, methods, arrays, and filter().

// Create a Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply a discount to the product price
    applyDiscount(discountPercentage) {
        this.price = this.price - (this.price * discountPercentage / 100);
    }

    // Return formatted product details
    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1500, "Accessories"),
    new Product(3, "Mouse", 800, "Accessories"),
    new Product(4, "Smartphone", 25000, "Electronics"),
    new Product(5, "Keyboard", 1200, "Accessories")
];

// Display all products before discount
console.log("========== ALL PRODUCTS ==========");

products.forEach((product) => {
    console.log(product.displayDetails());
});

// Apply a 10% discount to every product
console.log("\n========== APPLYING 10% DISCOUNT ==========");

products.forEach((product) => {
    product.applyDiscount(10);
    console.log(product.displayDetails());
});

// Filter products whose discounted price is greater than ₹1000
console.log("\n========== PRODUCTS ABOVE ₹1000 ==========");

const filteredProducts = products.filter((product) => {
    return product.price > 1000;
});

filteredProducts.forEach((product) => {
    console.log(product.displayDetails());
});

console.log("\nTotal Products:", products.length);
console.log("Products Above ₹1000:", filteredProducts.length);
