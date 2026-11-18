
// Q10: The Final Delivery - Async Pipeline Debugger

// Function to simulate an asynchronous delivery step
function deliveryStep(stepMessage) {

    return new Promise((resolve, reject) => {

        // Generate a random delay between 1 and 2 seconds
        const delay = Math.floor(Math.random() * 1000) + 1000;

        // Simulate asynchronous execution
        setTimeout(() => {

            // Generate random success or failure
            const success = Math.random() > 0.2;

            if (success) {
                resolve(stepMessage);
            } else {
                reject("Step failed: " + stepMessage);
            }

        }, delay);
    });
}

// Asynchronous function to execute the complete pipeline
async function runPipeline() {

    console.log("Start Pipeline");

    try {

        // Step 1: Take Order
        await deliveryStep("Step 1: Order taken");
        console.log("Step 1: Order taken");

        // Step 2: Prepare Food
        await deliveryStep("Step 2: Food prepared");
        console.log("Step 2: Food prepared");

        // Step 3: Pack Food
        await deliveryStep("Step 3: Package ready");
        console.log("Step 3: Package ready");

        // Step 4: Dispatch Order
        await deliveryStep("Step 4: Out for delivery");
        console.log("Step 4: Out for delivery");

        // Step 5: Deliver Order
        await deliveryStep("Delivery completed!");
        console.log("Delivery completed!");

    } catch (error) {

        // Handle failure of any delivery step
        console.log("Pipeline failed!");
        console.log(error);
    }
}

// Start the delivery pipeline
runPipeline();


// EVENT LOOP EXPLANATION:
//
// 1. runPipeline() starts executing synchronously.
// 2. Each deliveryStep() returns a Promise.
// 3. setTimeout() schedules a callback for later execution.
// 4. await pauses runPipeline() until the current Promise settles.
// 5. When the Promise resolves, execution continues
//    from the next statement inside runPipeline().
// 6. If a Promise rejects, control moves to the catch block.
// 7. The remaining delivery steps are skipped after failure.
// 8. The JavaScript Event Loop manages these asynchronous
//    operations without blocking the main thread.
