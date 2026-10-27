
"use strict";

// Q6: Progressive Discount System

// Input total purchase amount
const total = 12000;

// Initialize discount percentage
let discountPercentage;

// Apply discount based on purchase amount
if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount and final price
const discountAmount = Math.round(total * discountPercentage / 100);
const finalPrice = Math.round(total - discountAmount);

// Display results
console.log("===== Progressive Discount System =====");
console.log("Original Total: ₹" + total);
console.log("Discount Percentage: " + discountPercentage + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("Final Price After Discount: ₹" + finalPrice);
