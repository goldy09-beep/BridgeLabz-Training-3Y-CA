
// Parent constructor function
function Person(name) {
    this.name = name;
}

// Adding a method to Person prototype
Person.prototype.showName = function () {
    console.log("Name: " + this.name);
};

// Child constructor function
function Student(name, branch) {
    // Calling parent constructor
    Person.call(this, name);

    // Adding child property
    this.branch = branch;
}

// Inheriting Person prototype
Student.prototype = Object.create(Person.prototype);

// Restoring the constructor reference
Student.prototype.constructor = Student;

// Adding a method to Student prototype
Student.prototype.showBranch = function () {
    console.log("Branch: " + this.branch);
};

// Creating a student object
const student1 = new Student("Goldy", "Computer Science");

// Calling inherited and own prototype methods
student1.showName();
student1.showBranch();

// Demonstrating prototype chain
console.log(student1 instanceof Student);
console.log(student1 instanceof Person);
