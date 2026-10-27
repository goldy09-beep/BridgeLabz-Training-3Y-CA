
"use strict";

// Q6: Pyramid Pattern Generator

// Read user input from command-line arguments.
// Example: node q6_pyramid_pattern.js 4
// Default limit is 5 if no input is provided.
const input = process.argv[2];
let limit = input === undefined ? 5 : Number(input);

// Validate user input
if (!Number.isInteger(limit) || limit < 1) {
    console.log("Please enter a positive integer.");
} else {
    console.log(`Pyramid Pattern (${limit} rows):\n`);

    // Outer loop controls the number of rows
    for (let i = 1; i <= limit; i++) {
        let pattern = "";

        // Inner loop adds stars to the current row
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trimEnd());

        // DEBUG: Set a breakpoint here.
        // Watch variables: i, j, pattern
    }
}
