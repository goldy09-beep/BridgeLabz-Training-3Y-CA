
"use strict";

// Q3: Monthly Expense Tracker

// Store expenses for five categories in an array
const expenses = [
    { category: "Food", amount: 5000 },
    { category: "Travel", amount: 2000 },
    { category: "Rent", amount: 10000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 2500 }
];

// Calculate the total monthly expenses
let totalExpenses = 0;

for (const expense of expenses) {
    totalExpenses += expense.amount; // Assignment operator
}

// Calculate the average expense across five categories
const averageExpense = totalExpenses / expenses.length;

// Add 10% tax to the total
const taxRate = 10;
const taxAmount = totalExpenses * (taxRate / 100);

let finalAmount = totalExpenses;
finalAmount += taxAmount; // Add tax using assignment operator

// Display the expense breakdown
console.log("===== MONTHLY EXPENSE TRACKER =====");

expenses.forEach(expense => {
    console.log(`${expense.category}: ₹${expense.amount.toFixed(2)}`);
});

// Display total, average, tax, and final amount
console.log("-----------------------------------");
console.log(`Total Expenses: ₹${totalExpenses.toFixed(2)}`);
console.log(`Average Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${finalAmount.toFixed(2)}`);
