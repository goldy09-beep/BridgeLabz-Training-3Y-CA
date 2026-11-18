
// Q9: Debugging the Event Loop

// Predicted Output:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

// Macrotask using setTimeout()
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Microtask using Promise
Promise.resolve().then(() => {
    console.log("Promise callback");
});

// Synchronous statement
console.log("Script end");

// Actual Output:
// Script start
// Script end
// Promise callback
// Timeout callback
