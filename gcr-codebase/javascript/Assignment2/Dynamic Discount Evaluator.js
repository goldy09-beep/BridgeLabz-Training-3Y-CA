
"use strict";

// Step 1: Create an array of cart objects
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Step 2: Calculate the original total using reduce()
let originalTotal = cart.reduce(
    (total, product) => total + product.price,
    0
);

// Step 3: Calculate category-wise discounts using a loop
let totalDiscount = 0;

console.log("===== Dynamic Discount Evaluator =====");

for (let product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10; // 10% discount
    } else if (product.category === "fashion") {
        discountRate = 0.05; // 5% discount
    }

    let discountAmount = product.price * discountRate;
    totalDiscount += discountAmount;

    console.log(
        `${product.item}: Price = ₹${product.price}, ` +
        `Discount = ₹${discountAmount}`
    );
}

// Step 4: Calculate the total after category discounts
let discountedTotal = originalTotal - totalDiscount;

// Step 5: Apply an extra 5% discount if original cart value exceeds ₹50,000
let extraDiscount = 0;

if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
}

// Step 6: Calculate the final payable amount
let finalTotal = discountedTotal - extraDiscount;

// Step 7: Display the final report
console.log("--------------------------------------");
console.log("Original Cart Total: ₹" + originalTotal);
console.log("Category Discounts: ₹" + totalDiscount);
console.log("Extra Discount: ₹" + extraDiscount);
console.log("Final Payable Amount: ₹" + finalTotal);
console.log("======================================");
