
// Select all form elements
const steps = document.querySelectorAll(".form-step");
const nextButtons = document.querySelectorAll(".next-button");
const backButtons = document.querySelectorAll(".back-button");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const errorMessage = document.getElementById("errorMessage");
const summary = document.getElementById("summary");
const formContainer = document.getElementById("formContainer");

// Store current step
let currentStep = 0;

// Display the required step
function showStep(stepIndex) {
    steps.forEach((step, index) => {
        step.style.display = index === stepIndex ? "block" : "none";
    });

    errorMessage.textContent = "";
}

// Validate the current step
function validateStep() {
    const currentInput = [
        nameInput,
        emailInput,
        passwordInput
    ][currentStep];

    const inputValue = currentInput.value.trim();

    if (inputValue === "") {
        errorMessage.textContent = "This field is required.";
        return false;
    }

    // Validate email format
    if (currentStep === 1) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(inputValue)) {
            errorMessage.textContent = "Please enter a valid email.";
            return false;
        }
    }

    // Validate password length
    if (currentStep === 2 && inputValue.length < 6) {
        errorMessage.textContent =
            "Password must contain at least 6 characters.";
        return false;
    }

    return true;
}

// Handle Next button
nextButtons.forEach(button => {
    button.addEventListener("click", function () {

        // Move forward only if validation succeeds
        if (!validateStep()) {
            return;
        }

        currentStep++;

        if (currentStep < steps.length) {
            showStep(currentStep);
        } else {
            showSummary();
        }
    });
});

// Handle Back button
backButtons.forEach(button => {
    button.addEventListener("click", function () {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});

// Display final summary
function showSummary() {
    formContainer.style.display = "none";

    summary.style.display = "block";

    summary.innerHTML = `
        <h3>Form Completed Successfully!</h3>
        <p><strong>Name:</strong> ${escapeHTML(nameInput.value.trim())}</p>
        <p><strong>Email:</strong> ${escapeHTML(emailInput.value.trim())}</p>
        <p><strong>Password:</strong> ${"*".repeat(passwordInput.value.length)}</p>
    `;
}

// Safely display user-entered text in HTML
function escapeHTML(value) {
    return value.replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

// Display the first step initially
showStep(currentStep);
