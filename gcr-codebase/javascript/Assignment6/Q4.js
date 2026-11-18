
// Function to simulate Server A response
function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A deployed successfully!");
            } else {
                reject("Server A deployment failed!");
            }
        }, 2000);
    });
}

// Function to simulate Server B response
function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B deployed successfully!");
            } else {
                reject("Server B deployment failed!");
            }
        }, 3000);
    });
}

// Promise.all() - Wait for both servers to complete
Promise.all([serverA(), serverB()])
    .then((results) => {
        console.log("Deployment completed for all servers");
        results.forEach((result) => console.log(result));
    })
    .catch((error) => {
        console.log("Deployment Error:", error);
    });

// Promise.race() - Identify the first server response
Promise.race([serverA(), serverB()])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Race Error:", error);
    });
