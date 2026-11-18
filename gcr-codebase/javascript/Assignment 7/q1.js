
// Select HTML elements
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Add a new product
function addProduct() {
    const productName = productInput.value.trim();

    // Check if input is empty
    if (productName === "") {
        alert("Please enter a product name.");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.className = "product-item";

    // Create product name
    const productText = document.createElement("span");
    productText.className = "product-name";
    productText.textContent = productName;

    // Create Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    // Add elements to list item
    listItem.append(productText, editButton, deleteButton);

    // Add list item to the parent UL
    productList.appendChild(listItem);

    // Clear input field
    productInput.value = "";
}

// Handle Add button click
addButton.addEventListener("click", addProduct);

// Event delegation for Edit and Delete buttons
productList.addEventListener("click", function (event) {
    const clickedItem = event.target;
    const listItem = clickedItem.closest(".product-item");

    if (!listItem) return;

    // Delete product
    if (clickedItem.classList.contains("delete-button")) {
        listItem.remove();
    }

    // Edit product
    if (clickedItem.classList.contains("edit-button")) {
        startEditing(listItem);
    }
});

// Start inline editing
function startEditing(listItem) {
    // Prevent multiple edit fields in the same item
    if (listItem.querySelector("input")) return;

    const productText = listItem.querySelector(".product-name");
    const editInput = document.createElement("input");

    editInput.type = "text";
    editInput.value = productText.textContent;

    // Hide original product name
    productText.style.display = "none";

    // Insert input field before the Edit button
    listItem.insertBefore(editInput, listItem.querySelector(".edit-button"));

    editInput.focus();
    editInput.select();

    // Save edited product
    function saveEdit() {
        if (!listItem.contains(editInput)) return;

        const updatedName = editInput.value.trim();

        // Save only if the input is not empty
        if (updatedName !== "") {
            productText.textContent = updatedName;
        }

        // Remove input and show product name
        editInput.remove();
        productText.style.display = "";
    }

    // Save when Enter is pressed
    editInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            saveEdit();
        }
    });

    // Auto-save when user clicks outside the edited item
    function handleOutsideClick(event) {
        if (!listItem.contains(event.target)) {
            saveEdit();
            document.removeEventListener("click", handleOutsideClick);
        }
    }

    // Delay listener so the current Edit click doesn't trigger it
    setTimeout(function () {
        document.addEventListener("click", handleOutsideClick);
    }, 0);

    // Save when input loses focus
    editInput.addEventListener("blur", saveEdit);
}
