
// Promise-based function to fetch bugs
function getBugs() {
    return new Promise((resolve, reject) => {

        // Simulating API response after 1 second
        setTimeout(() => {

            // Boolean to simulate random API success or failure
            const apiSuccess = Math.random() > 0.3;

            if (apiSuccess) {
                const bugs = [
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ];

                resolve(bugs);
            } else {
                reject("API Error: Unable to fetch bugs!");
            }

        }, 1000);
    });
}

// Calling getBugs() and handling the response
getBugs()
    .then((bugs) => {
        console.log("Bug List:");
        
        // Display bugs in tabular format
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
