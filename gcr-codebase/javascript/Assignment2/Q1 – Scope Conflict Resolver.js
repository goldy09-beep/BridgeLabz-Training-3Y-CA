
"use strict";

// Global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;
    let totalSalary = salary;

    // Add bonus only if the employee is permanent
    if (isPermanent === true) {
        totalSalary += bonus;
    }

    // Print total salary
    console.log("Permanent Employee:", isPermanent);
    console.log("Base Salary:", salary);
    console.log("Global Bonus:", bonus);
    console.log("Total Salary:", totalSalary);
    console.log("--------------------");
}

// Test with different values of isPermanent
calculateSalary(true);
calculateSalary(false);

// Demonstrate global scope
console.log("Global bonus after function calls:", bonus);
