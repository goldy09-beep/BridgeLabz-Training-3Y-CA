
"use strict";

// Q5: Weather Activity Planner

// Declare weather variables
const temperature = 12; // Temperature in Celsius
const isRaining = false;
const windSpeed = 25; // Wind speed in km/h

// Display weather information
console.log("===== Weather Activity Planner =====");
console.log("Temperature:", temperature, "°C");
console.log("Is it raining?", isRaining);
console.log("Wind speed:", windSpeed, "km/h");

// Decide the recommended activity
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}

// Combine && and || operators smartly
if (isRaining || (temperature < 15 && windSpeed > 20)) {
    console.log("Weather alert: Avoid outdoor activities.");
} else {
    console.log("Weather alert: Outdoor activities may be suitable.");
}
