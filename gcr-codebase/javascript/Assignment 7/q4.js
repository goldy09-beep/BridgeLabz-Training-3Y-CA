
// Select all theme buttons
const themeButtons = document.querySelectorAll(".theme-button");

// Function to apply the selected theme
function changeTheme(themeName) {

    // Apply theme class to the body using setAttribute()
    document.body.setAttribute("class", themeName + "-theme");

    // Save selected theme in custom data attribute
    document.body.setAttribute("data-theme", themeName);

    console.log("Current Theme:", document.body.getAttribute("data-theme"));
}

// Add click event to each theme button
themeButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Get selected theme from button attribute
        const selectedTheme = button.getAttribute("data-theme");

        // Apply selected theme
        changeTheme(selectedTheme);
    });

});

// Set Light theme as default
changeTheme("light");
