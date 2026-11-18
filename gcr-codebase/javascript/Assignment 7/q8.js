
// Select dropdown elements
const dropdown = document.getElementById("customDropdown");
const dropdownButton = document.getElementById("dropdownButton");
const optionsList = document.getElementById("optionsList");
const options = document.querySelectorAll(".option");

// Show or hide dropdown options
dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation();

    optionsList.classList.toggle("show");
});

// Update button text when an option is selected
options.forEach(function (option) {
    option.addEventListener("click", function (event) {
        event.stopPropagation();

        dropdownButton.textContent = option.textContent;
        optionsList.classList.remove("show");
    });
});

// Close dropdown when clicking outside
// true enables the capturing phase
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        optionsList.classList.remove("show");
    }
}, true);
