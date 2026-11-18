
// Q7: The Lazy Loader - Promise.allSettled()

// Function to load Profile
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Profile Loaded");
            } else {
                reject("Profile Failed");
            }
        }, 2000);
    });
}

// Function to load Posts
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Posts Loaded");
            } else {
                reject("Posts Failed");
            }
        }, 1500);
    });
}

// Function to load Messages
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Messages Loaded");
            } else {
                reject("Messages Failed");
            }
        }, 1000);
    });
}

// Record starting time
const startTime = Date.now();

// Execute all Promises together
Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
])
.then((results) => {

    console.log("Dashboard Loading Results:");

    // Display success or failure of each module
    results.forEach((result, index) => {

        const modules = ["Profile", "Posts", "Messages"];

        if (result.status === "fulfilled") {
            console.log(modules[index] + ": Success - " + result.value);
        } else {
            console.log(modules[index] + ": Failed - " + result.reason);
        }
    });

    // Calculate total time taken
    const endTime = Date.now();
    const totalTime = endTime - startTime;

    console.log("Total Time Taken: " + totalTime + " ms");
});
