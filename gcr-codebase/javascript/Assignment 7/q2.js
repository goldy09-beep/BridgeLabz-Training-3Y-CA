
// Select HTML elements
const textArea = document.getElementById("message");
const characterCounter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

// Set maximum character limit
const maxCharacters = 100;

// Function to update the character counter
function updateCounter() {
    const enteredCharacters = textArea.value.length;
    const remainingCharacters = maxCharacters - enteredCharacters;

    characterCounter.textContent =
        `Remaining characters: ${remainingCharacters}`;

    // Change counter color based on remaining characters
    if (remainingCharacters === 0) {
        characterCounter.style.color = "red";
    } else if (remainingCharacters <= 20) {
        characterCounter.style.color = "orange";
    } else {
        characterCounter.style.color = "green";
    }
}

// Prevent typing when the limit is reached
textArea.addEventListener("keydown", function (event) {
    const isControlKey =
        event.ctrlKey || event.metaKey || event.key === "Backspace" ||
        event.key === "Delete" || event.key.startsWith("Arrow") ||
        event.key === "Tab";

    // Allow control keys, but prevent new characters at the limit
    if (textArea.value.length >= maxCharacters && !isControlKey) {
        event.preventDefault();
    }
});

// Update counter whenever text changes
textArea.addEventListener("input", updateCounter);

// Reset button functionality
resetButton.addEventListener("click", function () {
    textArea.value = "";
    updateCounter();
});

// Initialize counter when page loads
updateCounter();
