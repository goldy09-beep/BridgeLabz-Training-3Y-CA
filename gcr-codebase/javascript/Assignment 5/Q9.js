
// Parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    // Method of Person class
    showName() {
        console.log("Name: " + this.name);
    }
}

// Child class inheriting Person
class Student extends Person {
    constructor(name, branch) {

        // Calling parent class constructor
        super(name);

        this.branch = branch;
    }

    // Method of Student class
    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

// Creating student object using ES6 classes
const student1 = new Student("Goldy", "Computer Science");

// Calling inherited and own methods
console.log("Using ES6 Classes:");
student1.showName();
student1.showBranch();


// Demonstrating prototype-based inheritance
function PersonPrototype(name) {
    this.name = name;
}

PersonPrototype.prototype.showName = function () {
    console.log("Name: " + this.name);
};

function StudentPrototype(name, branch) {
    PersonPrototype.call(this, name);
    this.branch = branch;
}

StudentPrototype.prototype = Object.create(PersonPrototype.prototype);
StudentPrototype.prototype.constructor = StudentPrototype;

StudentPrototype.prototype.showBranch = function () {
    console.log("Branch: " + this.branch);
};

// Creating student object using prototypes
const student2 = new StudentPrototype("Goldy", "Computer Science");

console.log("\nUsing Prototype Inheritance:");
student2.showName();
student2.showBranch();
