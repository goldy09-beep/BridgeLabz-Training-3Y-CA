
// Step 1: Synchronous execution starts
console.log("Start");

// Step 2: Schedule a macrotask using setTimeout()
setTimeout(() => {
    console.log("Macrotask: setTimeout callback");
}, 0);

// Step 3: Schedule a microtask using Promise
Promise.resolve().then(() => {
    console.log("Microtask: Promise callback");
});

// Step 4: Synchronous execution
console.log("Synchronous log");

// Step 5: End of synchronous execution
console.log("End");

// Explanation:
// 1. Synchronous code executes first.
// 2. Promise.then() creates a microtask.
// 3. setTimeout() schedules a macrotask.
// 4. After synchronous execution finishes, the Event Loop
//    executes all available microtasks before macrotasks.
// 5. Therefore, the Promise callback runs before setTimeout().
