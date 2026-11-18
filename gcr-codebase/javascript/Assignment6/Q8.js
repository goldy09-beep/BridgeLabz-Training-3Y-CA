
// Q8: Order Processing Flow - Async Retry Mechanism

// Function to submit an order
function submitOrder() {
    return new Promise((resolve, reject) => {

        // Simulate random API success or failure
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Order submitted successfully!");
            } else {
                reject("Order submission failed!");
            }
        }, 1000);

    });
}

// Async function to process order with retry mechanism
async function processOrder() {

    // Try submitting the order up to 3 times
    for (let attempt = 1; attempt <= 3; attempt++) {

        try {
            // Wait for order submission result
            const result = await submitOrder();

            console.log("Attempt " + attempt + ": Success");
            console.log(result);

            // Stop retrying after success
            return;

        } catch (error) {
            console.log("Attempt " + attempt + ": Failed");
        }
    }

    // Throw error if all three attempts fail
    throw new Error("Order could not be processed");
}

// Handle final success or failure
async function main() {
    try {
        await processOrder();
    } catch (error) {
        console.log(error.message);
    }
}

// Start order processing
main();
