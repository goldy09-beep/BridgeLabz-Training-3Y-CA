
"use strict";

// Q4: Academic Performance Evaluator

// Store marks of 5 subjects in an array (each out of 100)
const marks = [90, 85, 78, 92, 88];

// Validate that exactly 5 marks are provided
if (
    marks.length !== 5 ||
    marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)
) {
    console.log("Invalid marks! Enter marks between 0 and 100 for all 5 subjects.");
} else {
    // Calculate total marks
    let totalMarks = 0;

    for (const mark of marks) {
        totalMarks += mark;
    }

    // Calculate average and overall percentage
    const average = totalMarks / marks.length;
    const percentage = (totalMarks / (marks.length * 100)) * 100;

    // Check whether any subject has marks below 35
    const failedSubject = marks.some(mark => mark < 35);

    // Determine the student's result using logical operators
    let result;

    if (failedSubject || percentage < 50) {
        result = "Detained";
    } else if (percentage >= 85) {
        result = "Promoted with Distinction";
    } else if (percentage >= 50 && percentage < 85) {
        result = "Promoted";
    }

    // Display the academic report
    console.log("===== ACADEMIC PERFORMANCE REPORT =====");
    console.log(`Subject Marks: ${marks.join(", ")}`);
    console.log(`Total Marks: ${totalMarks} / 500`);
    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);
    console.log(`Result: ${result}`);

    if (failedSubject) {
        console.log("Reason: One or more subjects have marks below 35.");
    }
}
