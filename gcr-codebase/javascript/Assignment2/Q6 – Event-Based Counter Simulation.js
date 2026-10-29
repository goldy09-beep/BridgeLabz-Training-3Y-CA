
"use strict";

// Global counter variable
let count = 0;

// Function to increase the counter
function increment() {
    count++;
    console.log("After increment:", count);
}

// Function to decrease the counter
function decrement() {
    count--;
    console.log("After decrement:", count);
}

// Function demonstrating nested function scope
function counterReport() {
    // Nested function accesses the global count variable
    function showCount() {
        console.log("Current count inside nested function:", count);
    }

    showCount();
}

// Simulate button clicks by calling functions manually
console.log("Initial count:", count);

increment();  // Simulate increment click
increment();  // Simulate increment click
decrement();  // Simulate decrement click

// Display count using the nested function
counterReport();

console.log("Final count:", count);
