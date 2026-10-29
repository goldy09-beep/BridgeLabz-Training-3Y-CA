
"use strict";

// Step 1: Create an array of 8 random scores between 30 and 100
let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Step 2: Use map() to display scores with student names
let studentScores = scores.map(
    (score, index) => `Student ${index + 1}: ${score}`
);

// Step 3: Find the highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Step 4: Calculate the total using reduce()
let totalScore = scores.reduce(
    (sum, score) => sum + score,
    0
);

// Step 5: Calculate the average score
let averageScore = totalScore / scores.length;

// Step 6: Use filter() to count students who passed
let passedStudents = scores.filter(score => score >= 50);
let passCount = passedStudents.length;

// Step 7: Display the formatted summary using a template literal
let summary = `
===== Array Performance Analyzer =====

Student Scores:
${studentScores.join("\n")}

Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Students Passed: ${passCount}
Students Failed: ${scores.length - passCount}

======================================
`;

console.log(summary);
