// BankAccount class
class BankAccount {
    #balance;  // Private field

    constructor(balance) {
        this.#balance = balance;
    }

    // Deposit amount
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero!");
        }

        this.#balance += amount;
        console.log("Rs.", amount, "deposited successfully.");
    }

    // Withdraw amount
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero!");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance!");
        }

        this.#balance -= amount;
        console.log("Rs.", amount, "withdrawn successfully.");
    }

    // Get current balance
    getBalance() {
        return this.#balance;
    }
}

// Creating bank account
let account = new BankAccount(5000);

// Valid deposits
account.deposit(2000);
account.deposit(1000);

console.log("Current Balance: Rs.", account.getBalance());

// Valid withdrawal
account.withdraw(1500);
console.log("Current Balance: Rs.", account.getBalance());

// Invalid withdrawal handled using try-catch
try {
    account.withdraw(10000);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Final Balance: Rs.", account.getBalance());