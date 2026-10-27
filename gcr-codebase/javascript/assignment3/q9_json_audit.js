
"use strict";

// Q9: JSON Audit
// Parse JSON, validate required keys, and filter users under 18.

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

// Arrays to store results
const cleanData = [];
const errors = [];
const under18Users = [];

console.log("========== JSON AUDIT REPORT ==========\n");

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;
    const rawEntry = rawData[i];

    try {
        // DEBUG: Set a breakpoint here.
        // Watch: i, lineNumber, rawEntry, cleanData, errors

        // Parse the JSON string into a JavaScript object
        const parsedData = JSON.parse(rawEntry);

        // Check required keys
        if (
            parsedData.user === undefined ||
            parsedData.age === undefined
        ) {
            throw new Error("Missing required key: user or age");
        }

        // Convert age to a number
        const age = Number(parsedData.age);

        // Validate age
        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age value");
        }

        // Store cleaned data with numeric age
        const cleanedUser = {
            user: parsedData.user,
            age: age
        };

        cleanData.push(cleanedUser);

        console.log(`Line ${lineNumber}: VALID`);
        console.log("Cleaned Data:", cleanedUser);

        // Bonus: identify users under 18
        if (age < 18) {
            under18Users.push(cleanedUser);
            console.log("Under 18: YES");
        } else {
            console.log("Under 18: NO");
        }

    } catch (error) {
        // Invalid JSON or validation errors are caught here
        const errorType =
            error instanceof SyntaxError
                ? "Invalid JSON"
                : "Validation Error";

        errors.push({
            line: lineNumber,
            type: errorType,
            message: error.message
        });

        console.log(`Line ${lineNumber}: ERROR`);
        console.log("Error Type:", errorType);
        console.log("Message:", error.message);
    }

    console.log("---------------------------------------");
}

// Final report
console.log("\n========== FINAL AUDIT REPORT ==========");

console.log("\nClean Data:");
for (let i = 0; i < cleanData.length; i++) {
    console.log(cleanData[i]);
}

console.log("\nErrors:");
for (let i = 0; i < errors.length; i++) {
    console.log(
        `Line ${errors[i].line}: ${errors[i].type} - ${errors[i].message}`
    );
}

console.log("\nUsers Under 18:");
if (under18Users.length === 0) {
    console.log("No users under 18 found.");
} else {
    for (let i = 0; i < under18Users.length; i++) {
        console.log(under18Users[i]);
    }
}

console.log("\nTotal Entries:", rawData.length);
console.log("Valid Entries:", cleanData.length);
console.log("Invalid Entries:", errors.length);
console.log("Users Under 18:", under18Users.length);

console.log("\n========== AUDIT COMPLETED ==========");
