"use strict";

// Q8: Strict Mode Showdown

console.log("========== Q8: STRICT MODE SHOWDOWN ==========");

// --------------------------------------------------
// PART 1: Correct ES6 version using strict mode
// --------------------------------------------------

console.log("\n1. CORRECT ES6 VERSION");

function demo(a, b) {
  let total = 10;

  console.log("First parameter:", a);
  console.log("Second parameter:", b);
  console.log("Total:", total);

  total = null;
  console.log("Total after reset:", total);
}

demo(5, 10);

// --------------------------------------------------
// PART 2: Duplicate parameters
// --------------------------------------------------

console.log("\n2. DUPLICATE PARAMETER EXPLANATION");

// Strict mode does not allow duplicate parameter names.
// function test(a, a) {} // SyntaxError

console.log("Duplicate parameters cause SyntaxError in strict mode.");

// --------------------------------------------------
// PART 3: Undeclared variable
// --------------------------------------------------

console.log("\n3. UNDECLARED VARIABLE");

try {
  function testUndeclared() {
    total = 10; // ReferenceError in strict mode
  }

  testUndeclared();
} catch (error) {
  console.log("Error Type:", error.name);
  console.log("Error Message:", error.message);
}

// --------------------------------------------------
// PART 4: Deleting a variable
// --------------------------------------------------

console.log("\n4. DELETE VARIABLE");

try {
  function testDelete() {
    let value = 10;
    eval("delete value;"); // SyntaxError in strict mode, caught below
  }

  testDelete();
} catch (error) {
  console.log("Error Type:", error.name);
  console.log("Error Message:", error.message);
}

// --------------------------------------------------
// PART 5: Correct use of delete on an object property
// --------------------------------------------------

console.log("\n5. DELETE OBJECT PROPERTY");

const employee = { name: "Amit", salary: 45000 };

delete employee.salary;

console.log("Employee after deleting salary:", employee);

// --------------------------------------------------
// PART 6: Non-strict mode comparison
// Run this part separately in another file without
// "use strict" to observe non-strict behavior.
// --------------------------------------------------

console.log("\n6. NON-STRICT MODE COMPARISON");
console.log("In a classic non-strict browser script:");
console.log("- Duplicate parameters are allowed.");
console.log("- Undeclared assignment may create a global property.");
console.log("- Deleting an identifier usually returns false.");

console.log("\n========== PROGRAM COMPLETED ==========");
