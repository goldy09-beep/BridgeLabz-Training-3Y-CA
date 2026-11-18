
// Creating an object with an arrow function
const user = {
    name: "Goldy",

    // Arrow function as a method
    showName: () => {
        console.log("Name:", this.name);
    }
};

// Calling the arrow function
user.showName();

// Fixing the issue using a normal function
const updatedUser = {
    name: "Goldy",

    // Normal function as a method
    showName: function () {
        console.log("Name:", this.name);
    }
};

// Calling the normal function
updatedUser.showName();
