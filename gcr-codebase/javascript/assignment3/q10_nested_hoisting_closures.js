
"use strict";

// Q10: Nested Hoisting and Closures

// ==================================================
// PART 1: ORIGINAL NESTED FUNCTION
// ==================================================

console.log("========== PART 1: ORIGINAL FUNCTION ==========");

function outer() {
    // DEBUG: Set a breakpoint here.
    // Watch variable: count

    console.log("Outer count before declaration:", count);

    var count = 5;

    console.log("Outer count after assignment:", count);

    function inner() {
        // DEBUG: Set another breakpoint here.
        // Watch variable: count

        console.log("Inner count before declaration:", count);

        var count = 10;

        console.log("Inner count after assignment:", count);
    }

    inner();

    console.log("Outer count after inner():", count);
}

outer();

// Expected output:
// Outer count before declaration: undefined
// Outer count after assignment: 5
// Inner count before declaration: undefined
// Inner count after assignment: 10
// Outer count after inner(): 5


// ==================================================
// PART 2: INNER ARROW FUNCTION
// ==================================================

console.log("\n========== PART 2: ARROW FUNCTION ==========");

function outerArrow() {
    console.log("Outer count before declaration:", count);

    var count = 5;

    console.log("Outer count after assignment:", count);

    // Arrow function reads count from the outer scope.
    const inner = () => {
        // DEBUG: Watch variable: count
        debugger;

        console.log("Arrow inner count:", count);
    };

    inner();

    console.log("Outer count after arrow:", count);
}

outerArrow();

// Expected output:
// Outer count before declaration: undefined
// Outer count after assignment: 5
// Arrow inner count: 5
// Outer count after arrow: 5


// ==================================================
// PART 3: CLOSURE EXAMPLE
// ==================================================

console.log("\n========== PART 3: CLOSURE EXAMPLE ==========");

function outerClosure() {
    let count = 5;

    const inner = () => {
        console.log("Closure count:", count);
    };

    inner();
}

outerClosure();

// Expected output:
// Closure count: 5


// ==================================================
// PART 4: DEBUGGING SUMMARY
// ==================================================

console.log("\n========== DEBUGGING SUMMARY ==========");
console.log("1. Global code calls outer().");
console.log("2. outer() creates its local count variable.");
console.log("3. outer() calls inner(), adding it to the call stack.");
console.log("4. inner() uses its own count variable.");
console.log("5. inner() finishes and returns to outer().");
console.log("6. outer() finishes and returns to global code.");

console.log("\n========== PROGRAM COMPLETED ==========");
