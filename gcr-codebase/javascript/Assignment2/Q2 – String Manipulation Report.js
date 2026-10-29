
"use strict";

// Store the product name with extra spaces
let productName = " wireless headphones PRO ";

// Step 1: Remove extra spaces from the beginning and end
let cleanedName = productName.trim();

// Step 2: Convert the string to lowercase
cleanedName = cleanedName.toLowerCase();

// Step 3: Capitalize the first letter of each word
cleanedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Step 4: Replace "Pro" with "Pro Edition"
cleanedName = cleanedName.replace("Pro", "Pro Edition");

// Step 5: Display the cleaned title and its length
console.log("Cleaned Product Title:", cleanedName);
console.log("Title Length:", cleanedName.length);
