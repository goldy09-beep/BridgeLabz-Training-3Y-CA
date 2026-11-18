
// Select gallery and modal elements
const imageGallery = document.getElementById("imageGallery");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalContent = document.getElementById("modalContent");

// Handle image clicks using event delegation
imageGallery.addEventListener("click", function (event) {

    // Check whether the clicked element is an image
    if (event.target.tagName === "IMG") {

        // Display clicked image in larger size
        modalImage.src = event.target.src;
        modalImage.alt = event.target.alt;

        // Show the modal
        imageModal.style.display = "flex";
    }
});

// Close modal when clicking outside the image
imageModal.addEventListener("click", function () {
    imageModal.style.display = "none";
});

// Prevent modal from closing when clicking inside it
modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
});
