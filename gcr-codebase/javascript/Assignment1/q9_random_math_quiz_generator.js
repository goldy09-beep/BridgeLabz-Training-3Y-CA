
"use strict";

// Q9: Random Math Quiz Generator

// Generate two random integers between 1 and 20
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator
const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

// Calculate the correct answer using switch
let answer;

switch (operator) {
    case "+":
        answer = num1 + num2;
        break;

    case "-":
        answer = num1 - num2;
        break;

    case "*":
        answer = num1 * num2;
        break;

    case "/":
        answer = (num1 / num2).toFixed(2);
        break;

    default:
        console.log("Invalid operator!");
}

// Display the question and answer
console.log("===== Random Math Quiz =====");
console.log(`Question: ${num1} ${operator} ${num2} = ?`);
console.log("Correct Answer:", answer);
