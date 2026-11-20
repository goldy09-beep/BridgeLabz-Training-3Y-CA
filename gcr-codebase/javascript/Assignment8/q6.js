// Array of product objects
let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 3 },
    { id: 3, name: "Shirt", category: "Clothing", price: 800, stock: 15 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 4 },
    { id: 5, name: "Book", category: "Stationery", price: 300, stock: 20 },
    { id: 6, name: "Pen", category: "Stationery", price: 50, stock: 2 }
];

// 1. Get low stock products using filter()
function getLowStockProducts() {
    return products.filter(product => product.stock < 5);
}

// 2. Sort products by price using sort()
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Calculate total inventory value using reduce()
function calculateTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

// 4. Group products by category using reduce()
function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

// Testing all functions
console.log("Low Stock Products:");
console.log(getLowStockProducts());

console.log("\nProducts Sorted by Price:");
console.log(sortProductsByPrice());

console.log("\nTotal Inventory Value:");
console.log("Rs.", calculateTotalInventoryValue());

console.log("\nProducts Grouped by Category:");
console.log(groupByCategory());