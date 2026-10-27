
"use strict";

// Q10: Citizen Eligibility Validator

// Input: age and citizenship status
const age = 19;
const isCitizen = true;

// Display input details
console.log("===== Citizen Eligibility Validator =====");
console.log("Age:", age);
console.log("Is Citizen:", isCitizen);

// Check eligibility using nested if-else and logical operators
if (isCitizen === true) {
    if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else if (age >= 21) {
        console.log("Eligible for all services.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
