
// Select the required HTML elements
const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

// Track mouse movement inside the box
trackingBox.addEventListener("mousemove", function (event) {
    coordinates.textContent =
        `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

// Place a red dot on double-click
trackingBox.addEventListener("dblclick", function (event) {
    // Get the box's position on the screen
    const boxPosition = trackingBox.getBoundingClientRect();

    // Calculate click position relative to the box
    const x = event.clientX - boxPosition.left;
    const y = event.clientY - boxPosition.top;

    // Create a red dot
    const redDot = document.createElement("div");
    redDot.classList.add("red-dot");

    // Position the dot at the clicked location
    redDot.style.left = `${x}px`;
    redDot.style.top = `${y}px`;

    // Add the dot inside the tracking box
    trackingBox.appendChild(redDot);
});
