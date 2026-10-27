
"use strict";

// Q3: Transaction Validator
// Validate transactions and categorize valid and invalid entries.

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays to store valid transactions and categorized errors
const valid = [];
const invalid = [];

console.log("========== TRANSACTION VALIDATOR ==========\n");

for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];

    try {
        // DEBUG BREAKPOINT:
        // Set a breakpoint on the next line in VS Code.
        // Watch: i, transaction, valid, invalid.
        debugger;

        // Check for null transaction entries
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        // Check for missing ID or amount
        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new Error("MISSING_PROPERTY");
        }

        // Check for negative transaction amount
        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        // If no error occurs, transaction is valid
        valid.push(transaction);

        console.log(
            `Transaction ${transaction.id}: VALID | Amount: ₹${transaction.amount}`
        );

    } catch (error) {
        // Categorize the error based on its type
        let errorType;
        let transactionId = "Unknown";

        if (transaction !== null && transaction !== undefined) {
            transactionId = transaction.id ?? "Unknown";
        }

        switch (error.message) {
            case "NULL_ENTRY":
                errorType = "Null transaction entry";
                break;

            case "MISSING_PROPERTY":
                errorType = "Missing ID or amount";
                break;

            case "NEGATIVE_AMOUNT":
                errorType = "Negative amount";
                break;

            default:
                errorType = "Unexpected error";
        }

        // Store invalid transaction and its error category
        invalid.push({
            transaction: transaction,
            error: errorType
        });

        console.log(
            `Transaction ${transactionId}: INVALID | Error: ${errorType}`
        );
    }
}

// Print final report
console.log("\n========== FINAL REPORT ==========");

console.log("\nValid Transactions:");
for (let i = 0; i < valid.length; i++) {
    console.log(
        `ID: ${valid[i].id}, Amount: ₹${valid[i].amount}`
    );
}

console.log("\nInvalid Transactions:");
for (let i = 0; i < invalid.length; i++) {
    console.log(
        `Error: ${invalid[i].error}, Transaction:`,
        invalid[i].transaction
    );
}

console.log("\n========== SUMMARY ==========");
console.log("Total Transactions:", transactions.length);
console.log("Successful Transactions:", valid.length);
console.log("Failed Transactions:", invalid.length);
console.log("Validation Completed.");
