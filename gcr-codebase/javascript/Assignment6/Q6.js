
// Q6: E-Commerce Dashboard - Product Card Fetcher

// Async function to fetch products from Fake Store API
async function fetchProducts() {

    try {
        // Fetch product data from API
        const response = await fetch("https://fakestoreapi.com/products");

        // Check API response
        if (!response.ok) {
            throw new Error("API request failed");
        }

        // Convert response into JSON
        const products = await response.json();

        console.log("Fake Store - Product Dashboard");

        // Create main product container
        const productContainer = document.createElement("div");
        productContainer.id = "product-container";

        // Apply basic styling
        productContainer.style.display = "grid";
        productContainer.style.gridTemplateColumns =
            "repeat(auto-fit, minmax(200px, 1fr))";
        productContainer.style.gap = "20px";
        productContainer.style.padding = "20px";

        // Display every product
        products.forEach((product) => {

            // Log product details in console
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("--------------------------------");

            // Create product card
            const productCard = document.createElement("div");

            productCard.style.backgroundColor = "white";
            productCard.style.padding = "15px";
            productCard.style.textAlign = "center";
            productCard.style.borderRadius = "8px";
            productCard.style.boxShadow = "0 2px 5px #ccc";

            // Create product image
            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.title;
            productImage.style.width = "120px";
            productImage.style.height = "120px";
            productImage.style.objectFit = "contain";

            // Create product title
            const productTitle = document.createElement("h3");
            productTitle.textContent = product.title;
            productTitle.style.fontSize = "14px";

            // Create product price
            const productPrice = document.createElement("p");
            productPrice.textContent = "$" + product.price;
            productPrice.style.color = "green";
            productPrice.style.fontWeight = "bold";

            // Add elements to product card
            productCard.appendChild(productImage);
            productCard.appendChild(productTitle);
            productCard.appendChild(productPrice);

            // Add card to main container
            productContainer.appendChild(productCard);
        });

        // Add dashboard heading
        const heading = document.createElement("h1");
        heading.textContent = "Fake Store - Product Dashboard";
        heading.style.textAlign = "center";

        // Display dashboard on webpage
        document.body.appendChild(heading);
        document.body.appendChild(productContainer);

    } catch (error) {

        // Handle API errors
        console.error("Failed to load products. Please try again.");

        document.body.textContent =
            "Failed to load products. Please try again.";
    }
}

// Call the function
fetchProducts();
