
// Parent constructor function
function Person(name) {
    this.name = name;
}

// Method of Person
Person.prototype.showPerson = function () {
    console.log("Name: " + this.name);
};


// Child constructor function inheriting Person
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

// Establishing inheritance from Person
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

// Method of Faculty
Faculty.prototype.showFaculty = function () {
    console.log("Department: " + this.department);
};


// Child constructor function inheriting Faculty
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

// Establishing inheritance from Faculty
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

// Method of Professor
Professor.prototype.showProfessor = function () {
    console.log("Subject: " + this.subject);
};


// Creating Professor object
const professor1 = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "JavaScript"
);

// Accessing methods from the entire prototype chain
professor1.showPerson();
professor1.showFaculty();
professor1.showProfessor();

// Checking inheritance
console.log(professor1 instanceof Professor);
console.log(professor1 instanceof Faculty);
console.log(professor1 instanceof Person);
