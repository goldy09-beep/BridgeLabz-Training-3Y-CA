
// Function to boil water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Step 1: Water boiled successfully!");
                resolve();
            } else {
                reject("Failed to boil water!");
            }
        }, 1000);
    });
}

// Function to brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Step 2: Coffee brewed successfully!");
                resolve();
            } else {
                reject("Failed to brew coffee!");
            }
        }, 1500);
    });
}

// Function to pour coffee into a cup
function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Step 3: Coffee poured into the cup!");
                resolve();
            } else {
                reject("Failed to pour coffee!");
            }
        }, 1000);
    });
}

// Execute the coffee-making process using Promise chaining
boilWater()
    .then(() => {
        return brewCoffee();
    })
    .then(() => {
        return pourCoffee();
    })
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Coffee preparation error:", error);
    });
