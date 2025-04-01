// Get all the nav links
const navLinks = document.querySelectorAll('.nav-link2');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let viewButtons = document.querySelectorAll(".viewDetails");

    viewButtons.forEach(button => {
        button.addEventListener("click", function () {
            let name = this.getAttribute("data-name");
            let description = this.getAttribute("data-description");
            let price = this.getAttribute("data-price");
            let status = this.getAttribute("data-status") || "Available";
            let quantity = this.getAttribute("data-quantity") || "N/A";

            // Update modal content
            document.getElementById("modalItemName").textContent = name;
            document.getElementById("modalItemDescription").textContent = description;
            document.getElementById("modalItemPrice").textContent = price;
            document.getElementById("modalItemStatus").textContent = status;
            document.getElementById("modalItemQuantity").textContent = quantity;

            // Apply stylish and elegant box design dynamically
            let modalContent = document.querySelector('.modal-content');
            modalContent.style.backgroundColor = '#444444'; // Dark grey background
            modalContent.style.color = 'white'; // White text color
            modalContent.style.borderRadius = '15px'; // Rounded corners for elegance
            modalContent.style.padding = '20px'; // Added padding for spacing
            modalContent.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)'; // Soft shadow for depth
            modalContent.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition effect

            // Apply color for status dynamically
            let statusElement = document.getElementById("modalItemStatus");
            statusElement.style.color = status === "Available" ? "green" : "red";

            // Make modal appear with a slight zoom-in effect for elegance
            modalContent.style.transform = 'scale(1.05)';
            setTimeout(() => {
                modalContent.style.transform = 'scale(1)';
            }, 300);

            // Change the color of the "X" button to white
            let modalCloseButton = document.querySelector(".btn-close");
            if (modalCloseButton) {
                modalCloseButton.style.color = "white"; 
                modalCloseButton.style.filter = "brightness(100%)";
            }
        });
    });
});



