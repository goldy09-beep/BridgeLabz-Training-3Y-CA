
"use strict";

// Step 1: Create a nested array of departments and performance scores
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Step 2: Evaluate each department using a loop
console.log("===== Departmental Employee Evaluator =====");

for (let department of departments) {
    let departmentName = department[0];
    let score = department[1];
    let performance;

    // Step 3: Use nested if-else conditions to evaluate scores
    if (score >= 90) {
        performance = "Excellent";
    } else {
        if (score >= 75) {
            performance = "Good";
        } else {
            if (score >= 60) {
                performance = "Average";
            } else {
                performance = "Needs Improvement";
            }
        }
    }

    // Step 4: Display the evaluation result
    console.log(
        `Department: ${departmentName} | Score: ${score} | Performance: ${performance}`
    );
}

console.log("===========================================");
