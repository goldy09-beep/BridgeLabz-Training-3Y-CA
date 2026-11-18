
// Function that applies an operation to each number
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Callback function to double each number
function doubleNumber(number) {
    return number * 2;
}

// Callback function to square each number
function squareNumber(number) {
    return number * number;
}

// Original array
let numbers = [1, 2, 3, 4];

// Apply doubling operation
let doubledNumbers = applyOperation(numbers, doubleNumber);
console.log("Doubled Numbers:", doubledNumbers);

// Apply squaring operation
let squaredNumbers = applyOperation(numbers, squareNumber);
console.log("Squared Numbers:", squaredNumbers);
