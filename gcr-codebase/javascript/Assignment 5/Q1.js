
// Function to display the greeting and execute the callback
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Execute the callback function
    callback();
}

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Calling greetUser and passing showEndMessage as a callback
greetUser("Goldy", showEndMessage);
