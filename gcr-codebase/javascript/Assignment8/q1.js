// Student class
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using reduce()
    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    // Return grade based on average
    getGrade() {
        let average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        } else if (average >= 60) {
            return "B";
        } else if (average >= 40) {
            return "C";
        } else {
            return "F";
        }
    }

    // Display student result
    displayResult() {
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
        console.log("Average:", this.calculateAverage().toFixed(2));
        console.log("Grade:", this.getGrade());
        console.log("---------------------");
    }
}

// Creating objects for 3 students
let student1 = new Student("Rahul", [85, 90, 78, 88]);
let student2 = new Student("Priya", [65, 70, 55, 60]);
let student3 = new Student("Aman", [30, 35, 40, 25]);

// Testing the class
student1.displayResult();
student2.displayResult();
student3.displayResult();