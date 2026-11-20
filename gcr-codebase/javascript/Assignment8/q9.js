// FitnessAnalytics class
class FitnessAnalytics {
    constructor(data) {
        if (data.length === 0) {
            throw new Error("Fitness data is empty!");
        }

        this.data = data;
    }

    // Get active users using filter()
    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }

    // Calculate average calories using reduce()
    getAverageCalories() {
        let total = this.data.reduce((sum, user) => sum + user.calories, 0);
        return total / this.data.length;
    }

    // Generate user summary using map()
    getUserSummary() {
        return this.data.map(user => {
            return user.user + " walked " + user.steps +
                   " steps and burned " + user.calories + " calories.";
        });
    }
}

// Workout data
let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

// Testing the class
try {
    let fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.log(fitness.getActiveUsers());

    console.log("\nAverage Calories:");
    console.log(fitness.getAverageCalories());

    console.log("\nUser Summary:");
    console.log(fitness.getUserSummary());

} catch (error) {
    console.log("Error:", error.message);
}