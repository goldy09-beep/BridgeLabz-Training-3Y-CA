
"use strict";

// Step 1: Declare security condition variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Step 2: Check all security conditions
let isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

// Step 3: Display the security status
console.log("===== Smart Home Security System =====");
console.log("Door Locked:", isDoorLocked);
console.log("Window Closed:", isWindowClosed);
console.log("Alarm On:", isAlarmOn);
console.log("Owner Inside:", isOwnerInside);

console.log("Security Status:", isSecure ? "Secure" : "Unsafe");

// Step 4: Test another outcome by changing values
console.log("\n===== Second Test =====");

isDoorLocked = false;

isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

console.log("Door Locked:", isDoorLocked);
console.log("Security Status:", isSecure ? "Secure" : "Unsafe");

// Step 5: Demonstrate OR (||) and NOT (!) operators
console.log("\n===== Boolean Operators =====");
console.log("Alarm or Door Locked:", isAlarmOn || isDoorLocked);
console.log("Alarm is Off:", !isAlarmOn);
