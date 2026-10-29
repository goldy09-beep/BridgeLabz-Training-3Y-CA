
"use strict";

// Store the input number
let x = 16.75;

// Calculate rounded value
let roundedValue = Math.round(x);

// Calculate square root
let squareRoot = Math.sqrt(x);

// Calculate cube using Math.pow()
let powerValue = Math.pow(x, 3);

// Generate a random integer between 10 and 50
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display the formatted result summary using template literals
let resultSummary = `
----- Math Utility Dashboard -----
Input Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Power (x^3): ${powerValue}
Random Number (10-50): ${randomNumber}
---------------------------------
`;

console.log(resultSummary);
