
"use strict";

// Q8: Employee Salary Projection

// Declare current salary and annual increment rate
let salary = 50000;
const incrementRate = 10; // 10% annual increment
const years = 5;

// Store yearly salary details
const salaryProjection = [];

// Calculate salary for each of the next 5 years
for (let year = 1; year <= years; year++) {
    // Apply annual increment using assignment operator
    salary += salary * incrementRate / 100;

    // Round salary to the nearest whole number
    salary = Math.round(salary);

    // Store year and salary
    salaryProjection.push({
        Year: year,
        "Annual Salary (₹)": salary
    });
}

// Print the projection as a formatted console table
console.log("===== 5-Year Salary Projection =====");
console.log("Starting Salary: ₹50,000");
console.log("Annual Increment: " + incrementRate + "%");
console.table(salaryProjection);
