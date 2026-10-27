
"use strict";

// Q1: Dynamic Data Parser
// Parse mixed API data into Number, Boolean, and String forms.

// Original API data
const apiData = [
    "25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined
];

// Arrays to store valid and invalid numeric data
const validNumbers = [];
const invalidNumbers = [];

// Function to check whether a value is a valid numeric input
// We explicitly reject null, undefined, booleans, and blank strings.
// Number("true") and Number("false") are NaN.
// Number("NaN") and Number("100px") are also NaN.
function isValidNumber(value) {
    if (
        value === null ||
        value === undefined ||
        typeof value === "boolean"
    ) {
        return false;
    }

    if (typeof value === "string" && value.trim() === "") {
        return false;
    }

    return !Number.isNaN(Number(value));
}

console.log("========== DYNAMIC DATA PARSER ==========\n");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    // Convert the original value into three forms
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`Record ${i + 1}`);
    console.log("Original Value:", value);
    console.log("Number Form:", numberValue);
    console.log("Boolean Form:", booleanValue);
    console.log("String Form:", stringValue);

    // Separate valid numeric values from invalid ones
    if (isValidNumber(value)) {
        validNumbers.push(numberValue);
        console.log("Status: VALID NUMBER");
    } else {
        invalidNumbers.push(value);
        console.log("Status: INVALID NUMBER");
    }

    console.log("-----------------------------------------");
}

// Print the final report
console.log("\n========== FINAL REPORT ==========");

console.log("\nValid Numeric Data:");
for (let i = 0; i < validNumbers.length; i++) {
    console.log(`${i + 1}. ${validNumbers[i]}`);
}

console.log("\nInvalid Numeric Data:");
for (let i = 0; i < invalidNumbers.length; i++) {
    console.log(`${i + 1}. ${String(invalidNumbers[i])}`);
}

console.log("\nTotal Records:", apiData.length);
console.log("Valid Numeric Records:", validNumbers.length);
console.log("Invalid Numeric Records:", invalidNumbers.length);

// Debug observation:
// Number(null) returns 0, but null is excluded intentionally.
// Number(undefined) returns NaN.
// Boolean("false") returns true because it is a non-empty string.
// Number("100px") returns NaN because the entire string is not numeric.
// No external libraries are required.
