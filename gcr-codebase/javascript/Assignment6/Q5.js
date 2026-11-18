
// ======================================
// PART 1: Using Nested Callbacks
// ======================================

console.log("Starting pipeline using callbacks...");

function design(callback) {
    setTimeout(() => {
        console.log("1. Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("2. Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("3. Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("4. Deployment completed");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("5. Celebration time!");
        callback();
    }, 1000);
}

// Nested callbacks (Callback Hell)
design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Pipeline completed using callbacks!");
                });
            });
        });
    });
});


// ======================================
// PART 2: Using Async/Await
// ======================================

// Function to create a delay of 1 second
function delay() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

// Asynchronous pipeline function
async function runPipeline() {
    console.log("\nStarting pipeline using async/await...");

    await delay();
    console.log("1. Design completed");

    await delay();
    console.log("2. Build completed");

    await delay();
    console.log("3. Testing completed");

    await delay();
    console.log("4. Deployment completed");

    await delay();
    console.log("5. Celebration time!");

    console.log("Pipeline completed using async/await!");
}

// Calling the async function
runPipeline();
