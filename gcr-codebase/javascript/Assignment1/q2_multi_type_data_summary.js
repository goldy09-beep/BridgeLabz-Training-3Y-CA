
"use strict";

// Q2: Multi-Type Data Summary

// Declare variables of different data types
const userName = "John";                         // String
const userAge = 21;                              // Number
const isLoggedIn = true;                         // Boolean
const hobbies = ["Reading", "Coding", "Music"];  // Array
const user = { name: "John", city: "Mathura" };  // Object
const middleName = null;                         // Null
let userAddress;                                 // Undefined

// Create a helper function to identify the data type
function getDataType(value) {
    // Array.isArray() is needed because typeof [] returns "object"
    if (Array.isArray(value)) {
        return "Array";
    }

    // typeof null also returns "object", so handle null separately
    if (value === null) {
        return "Null";
    }

    if (value === undefined) {
        return "Undefined";
    }

    return typeof value;
}

// Prepare the formatted report
const dataSummary = [
    {
        Label: "User Name",
        Value: userName,
        Type: getDataType(userName)
    },
    {
        Label: "User Age",
        Value: userAge,
        Type: getDataType(userAge)
    },
    {
        Label: "Login Status",
        Value: isLoggedIn,
        Type: getDataType(isLoggedIn)
    },
    {
        Label: "Hobbies",
        Value: JSON.stringify(hobbies),
        Type: getDataType(hobbies)
    },
    {
        Label: "User Object",
        Value: JSON.stringify(user),
        Type: getDataType(user)
    },
    {
        Label: "Middle Name",
        Value: middleName,
        Type: getDataType(middleName)
    },
    {
        Label: "User Address",
        Value: userAddress,
        Type: getDataType(userAddress)
    }
];

// Print the entire report using one console.table() statement
console.table(dataSummary);
