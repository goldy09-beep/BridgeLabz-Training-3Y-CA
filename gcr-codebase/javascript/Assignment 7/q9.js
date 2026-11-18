
// Select form elements
const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

// Validate all fields
function validateForm() {
    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must contain @.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate password
    if (passwordInput.value.length < 6) {
        passwordError.textContent =
            "Password must be at least 6 characters.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    return isValid;
}

// Validate form when submitted
form.addEventListener("submit", function (event) {
    // Stop default form submission
    event.preventDefault();

    successMessage.textContent = "";

    if (validateForm()) {
        successMessage.textContent =
            "Form Submitted Successfully!";
        form.reset();
    }
});

// Remove errors automatically when input is corrected
[nameInput, emailInput, passwordInput].forEach(function (input) {
    input.addEventListener("input", function () {
        validateForm();
        successMessage.textContent = "";
    });
});
