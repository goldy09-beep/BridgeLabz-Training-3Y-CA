
"use strict";

// Q6: Employee Management System (Classes + Object Methods)

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus to monthly salary
    applyBonus(percent) {
        if (percent < 0) {
            console.log("Bonus percentage cannot be negative.");
            return;
        }

        this.salary += this.salary * (percent / 100);
    }

    // Display employee details
    displayDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
        console.log(`Monthly Salary: ₹${this.salary.toFixed(2)}`);
        console.log(`Annual Salary: ₹${this.getAnnualSalary().toFixed(2)}`);
        console.log("-----------------------------");
    }
}

// Create 5 employee objects
const employees = [
    new Employee(101, "Aarav", "IT", 50000),
    new Employee(102, "Priya", "HR", 40000),
    new Employee(103, "Rahul", "Finance", 45000),
    new Employee(104, "Sneha", "Marketing", 35000),
    new Employee(105, "Vikram", "IT", 60000)
];

// Apply a 10% bonus to the first employee
employees[0].applyBonus(10);

console.log("===== EMPLOYEE DETAILS =====");

// Calculate and display annual salary for each employee
employees.forEach(employee => {
    employee.displayDetails();
});

// Calculate total annual payout using reduce()
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(
    `Total Annual Payout of the Company: ₹${totalAnnualPayout.toFixed(2)}`
);
