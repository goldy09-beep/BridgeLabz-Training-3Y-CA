
// Select HTML elements
const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const studentRows = studentTable.querySelectorAll("tbody tr");
const noResultsMessage = document.getElementById("noResults");

// Listen for input changes in the search box
searchInput.addEventListener("input", function () {

    // Get search text and convert it to lowercase
    const searchText = searchInput.value.trim().toLowerCase();

    let matchingRows = 0;

    // Check every student row
    studentRows.forEach(row => {

        // Get complete row text in lowercase
        const rowText = row.textContent.toLowerCase();

        // Check whether row contains the search text
        if (rowText.includes(searchText)) {
            row.style.display = "";
            matchingRows++;
        } else {
            row.style.display = "none";
        }
    });

    // Display message if no matching rows are found
    if (matchingRows === 0) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
});
