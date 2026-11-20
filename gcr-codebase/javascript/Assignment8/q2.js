// Menu items with prices
let menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 },
    { name: "Fries", price: 80 }
];

// Function to calculate bill
function calculateBill(orderItems) {
    // Check for invalid items
    let orderedItems = orderItems.map(item => {
        let menuItem = menu.find(food => food.name === item);

        if (!menuItem) {
            throw new Error(item + " is not available on the menu!");
        }

        return menuItem.price;
    });

    // Calculate total using reduce()
    let total = orderedItems.reduce((sum, price) => sum + price, 0);

    return total;
}

// Valid order
try {
    let order1 = ["Pizza", "Burger", "Fries"];
    let bill = calculateBill(order1);

    console.log("Order Items:", order1);
    console.log("Total Bill: Rs.", bill);
} catch (error) {
    console.log("Error:", error.message);
}

// Invalid order
try {
    let order2 = ["Pizza", "Sushi", "Burger"];
    let bill = calculateBill(order2);

    console.log("Order Items:", order2);
    console.log("Total Bill: Rs.", bill);
} catch (error) {
    console.log("Error:", error.message);
}