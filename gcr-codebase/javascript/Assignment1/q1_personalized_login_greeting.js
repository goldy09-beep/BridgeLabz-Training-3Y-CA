
"use strict";

// Q1: Personalized Login Greeting

// Declare the user's name
const userName = "John";

// Get the current hour (0–23) from the system clock
const currentHour = new Date().getHours();

// Declare a variable to store the greeting
let greeting;

// Check the current time and select the appropriate greeting
if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

// Display the greeting and current hour
console.log(greeting);
console.log(`Current Hour: ${currentHour}`);
