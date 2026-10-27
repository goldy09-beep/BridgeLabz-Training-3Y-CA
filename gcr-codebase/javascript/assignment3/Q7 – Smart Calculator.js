
"use strict";

// Q7: Smart Calculator

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

// Custom error class for invalid operations
class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

// Custom error class for division by zero
class DivisionByZeroError extends Error {
    constructor() {
        super("Cannot divide by zero.");
        this.name = "DivisionByZeroError";
    }
}

// Custom error class for square root of a negative number
class NegativeRootError extends Error {
    constructor() {
        super("Cannot calculate the real square root of a negative number.");
        this.name = "NegativeRootError";
    }
}

// Function to perform the requested calculation
function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "subtract":
            return a - b;

        case "divide":
            if (b === 0) {
                throw new DivisionByZeroError();
            }
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) {
                throw new NegativeRootError();
            }
            return Math.sqrt(a);

        default:
            throw new InvalidOperationError(operation);
    }
}

// Run every operation and handle errors individually
console.log("========== SMART CALCULATOR ==========\n");

for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];

    try {
        const result = calculate(operation, num1, num2);

        console.log(`Operation : ${operation}`);
        console.log(`Numbers   : ${num1}, ${num2}`);
        console.log(`Result    : ${result}`);
        console.log("Status    : SUCCESS");

    } catch (error) {
        console.log(`Operation : ${operation}`);
        console.log(`Numbers   : ${num1}, ${num2}`);
        console.log(`Error Type: ${error.name}`);
        console.log(`Message   : ${error.message}`);
        console.log("Status    : FAILED");
    }

    console.log("--------------------------------------");
}

console.log("\n========== CALCULATIONS COMPLETED ==========");
