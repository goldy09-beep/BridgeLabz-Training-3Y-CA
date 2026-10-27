
"use strict";

// Q2: Employee Bonus Calculator
// Strict mode prevents accidental creation of global variables.

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("========== EMPLOYEE BONUS REPORT ==========\n");

for (let i = 0; i < employees.length; i++) {
    try {
        const employee = employees[i];

        // Validate employee object and required properties
        if (
            !employee ||
            employee.name == null ||
            employee.salary == null ||
            employee.years == null
        ) {
            throw new Error("Missing employee data or required property.");
        }

        // Convert string values into numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Validate numeric conversions
        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error("Invalid salary or years value.");
        }

        // Calculate bonus based on years of service
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10; // 10% bonus
        } else {
            bonus = salary * 0.05; // 5% bonus
        }

        // Calculate total salary after bonus
        const totalSalary = salary + bonus;

        // Print formatted employee details using template strings
        console.log(`Employee Name : ${employee.name}`);
        console.log(`Base Salary   : ₹${salary.toFixed(2)}`);
        console.log(`Years of Work : ${years}`);
        console.log(`Bonus         : ₹${bonus.toFixed(2)}`);
        console.log(`Total Salary  : ₹${totalSalary.toFixed(2)}`);
        console.log("-------------------------------------------");

    } catch (error) {
        // Handle conversion and missing-property errors
        console.log(`Error for employee ${i + 1}: ${error.message}`);
        console.log("-------------------------------------------");
    }
}

console.log("\n========== REPORT COMPLETED ==========");
