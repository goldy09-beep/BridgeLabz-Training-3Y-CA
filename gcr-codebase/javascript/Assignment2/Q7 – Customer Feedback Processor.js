
"use strict";

// Step 1: Store the customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Step 2: Count the words using split()
let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

// Step 3: Check whether feedback contains negative words
let lowerFeedback = feedback.toLowerCase();

let hasBad = lowerFeedback.includes("bad");
let hasPoor = lowerFeedback.includes("poor");

// Step 4: Display feedback analysis
console.log("===== Customer Feedback Report =====");
console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);

// Step 5: Print the feedback status
if (hasBad || hasPoor) {
    console.log("Status: Needs Improvement");
} else {
    console.log("Status: Positive Feedback");
}
