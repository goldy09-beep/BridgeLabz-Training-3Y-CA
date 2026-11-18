
// Adding custom myMap() method to Array prototype
Array.prototype.myMap = function (callback) {

    // Creating an empty array to store results
    const result = [];

    // Iterating through array elements
    for (let i = 0; i < this.length; i++) {

        // Applying callback function to each element
        result.push(callback(this[i], i, this));
    }

    // Returning the new array
    return result;
};

// Original array
const numbers = [1, 2, 3];

// Using custom myMap() method
const doubledNumbers = numbers.myMap(num => num * 2);

// Displaying the result
console.log("Original Array:", numbers);
console.log("After myMap():", doubledNumbers);
