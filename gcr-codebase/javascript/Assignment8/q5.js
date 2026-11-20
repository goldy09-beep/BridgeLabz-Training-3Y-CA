// User class
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Driver class inherits User
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

// Trip class
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    // Calculate fare based on distance
    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Distance is not provided!");
        }

        if (this.distance < 0) {
            throw new Error("Distance cannot be negative!");
        }

        let farePerKm = 15;
        let fare = this.distance * farePerKm;

        return fare;
    }
}

// Creating user and driver objects
let user1 = new User("Rahul", 4.8);
let driver1 = new Driver("Aman", 4.9, "Swift Dzire");

// Creating a valid trip
try {
    let trip1 = new Trip("Mathura", "Agra", 60);

    console.log("User:", user1.name);
    console.log("Driver:", driver1.name);
    console.log("Vehicle:", driver1.vehicle);
    console.log("From:", trip1.fromLocation);
    console.log("To:", trip1.toLocation);
    console.log("Distance:", trip1.distance, "km");
    console.log("Total Fare: Rs.", trip1.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}

// Testing invalid distance
try {
    let trip2 = new Trip("Delhi", "Noida", -10);
    console.log("Total Fare: Rs.", trip2.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}

// Testing missing distance
try {
    let trip3 = new Trip("Agra", "Delhi");
    console.log("Total Fare: Rs.", trip3.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}