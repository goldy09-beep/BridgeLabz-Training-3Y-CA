
// Outer function
function makeMultiplier(multiplier) {

    // Inner function
    function multiply(number) {
        return number * multiplier;
    }

    // Returning the inner function
    return multiply;
}

// Creating a function to triple a number
const triple = makeMultiplier(3);

// Creating a function to double a number
const double = makeMultiplier(2);

// Calling the returned functions
console.log("Triple of 5:", triple(5));
console.log("Double of 5:", double(5));
