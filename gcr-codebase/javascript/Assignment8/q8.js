// Parent class
class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Adding method to MovieTicket prototype
MovieTicket.prototype.printTicket = function() {
    console.log("Movie Name:", this.movieName);
    console.log("Seat Number:", this.seatNo);
    console.log("Ticket Price: Rs.", this.price);
};

// Child class
class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    // Calculate total amount
    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

// Creating OnlineTicket objects
let ticket1 = new OnlineTicket("Avengers", "A1", 250, 30);
let ticket2 = new OnlineTicket("Inception", "B5", 300, 40);

// Printing ticket details
ticket1.printTicket();
console.log("Convenience Fee: Rs.", ticket1.convenienceFee);
console.log("Total Amount: Rs.", ticket1.getTotalAmount());

console.log("----------------------");

ticket2.printTicket();
console.log("Convenience Fee: Rs.", ticket2.convenienceFee);
console.log("Total Amount: Rs.", ticket2.getTotalAmount());