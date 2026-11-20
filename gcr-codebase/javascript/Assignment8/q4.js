// Parent class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name, "is working in", this.department, "department.");
    }
}

// Child class
class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Overriding work() method
    work() {
        console.log(this.name, "is managing the", this.department, "department.");
    }
}

// Creating objects
let employee1 = new Employee("Rahul", "IT");
let employee2 = new Employee("Priya", "HR");
let manager1 = new Manager("Aman", "Sales");

// Calling work() method
employee1.work();
employee2.work();
manager1.work();