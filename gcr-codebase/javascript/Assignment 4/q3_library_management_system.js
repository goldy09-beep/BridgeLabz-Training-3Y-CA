
"use strict";

// Q3: Library Management System (Classes + Objects)

// Create the Book class
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue a book if it is available
    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`"${this.title}" has been issued successfully.`);
        }
    }

    // Return a book if it has been issued
    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" is already available.`);
        } else {
            this.isIssued = false;
            console.log(`"${this.title}" has been returned successfully.`);
        }
    }

    // Display book details
    displayDetails() {
        console.log(
            `Title: ${this.title} | Author: ${this.author} | ISBN: ${this.ISBN} | Status: ${
                this.isIssued ? "Issued" : "Available"
            }`
        );
    }
}

// Create an array of Book objects
const books = [
    new Book("The Alchemist", "Paulo Coelho", "101"),
    new Book("Wings of Fire", "A.P.J. Abdul Kalam", "102"),
    new Book("Atomic Habits", "James Clear", "103", true),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "104")
];

// Display all available books
function displayAvailableBooks() {
    console.log("\n--- Available Books ---");

    const availableBooks = books.filter(book => !book.isIssued);

    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
        return;
    }

    availableBooks.forEach(book => book.displayDetails());
}

// Search for a book using ISBN
function searchBookByISBN(ISBN) {
    return books.find(book => book.ISBN === ISBN);
}

// Issue a book using its ISBN
function issueBookByISBN(ISBN) {
    const book = searchBookByISBN(ISBN);

    if (book) {
        book.issueBook();
    } else {
        console.log(`No book found with ISBN ${ISBN}.`);
    }
}

// Return a book using its ISBN
function returnBookByISBN(ISBN) {
    const book = searchBookByISBN(ISBN);

    if (book) {
        book.returnBook();
    } else {
        console.log(`No book found with ISBN ${ISBN}.`);
    }
}

// Display all books at the beginning
console.log("--- All Books ---");
books.forEach(book => book.displayDetails());

// Display only available books
displayAvailableBooks();

// Issue a book by ISBN
console.log("\n--- Issue Book ---");
issueBookByISBN("102");

// Try issuing the same book again
issueBookByISBN("102");

// Try issuing a book with an invalid ISBN
issueBookByISBN("999");

// Display available books after issuing
displayAvailableBooks();

// Return the issued book
console.log("\n--- Return Book ---");
returnBookByISBN("102");

// Display available books after returning
displayAvailableBooks();
