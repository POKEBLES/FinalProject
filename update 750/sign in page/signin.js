document.addEventListener("DOMContentLoaded", function() {

    // Function to generate a random Player ID for registration
    function generatePlayerID() {
        let id = "";
        for (let i = 0; i < 3; i++) {
            id += Math.floor(1000 + Math.random() * 9000) + " ";
        }
        return id.trim();
    }

    // Check if it's the registration page and generate Player ID
    if (document.getElementById("player-id")) {
        document.getElementById("player-id").value = generatePlayerID();
    }

    // Registration form logic
    if (document.getElementById("register-form")) {
        document.getElementById("register-form").addEventListener("submit", function(e) {
            e.preventDefault();
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirm-password").value;
            let ign = document.getElementById("ign").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
            } else if (!email.includes("@")) {
                alert("Enter a valid email address.");
            } else if (ign.trim() === "") {
                alert("IGN cannot be empty.");
            } else {
                // Simulate successful registration and set loggedIn flag
                localStorage.setItem("loggedIn", "true");
                window.location.href = "/Official Homepage/official homepage.html"; // Redirect to homepage
            }
        });
    }

    // Login buttons logic
    if (document.querySelectorAll(".btn").length > 0) {
        document.querySelectorAll(".btn").forEach(button => {
            button.addEventListener("click", function() {
                // Simulate successful login and set loggedIn flag
                localStorage.setItem("loggedIn", "true");
                window.location.href = "/Official Homepage/official homepage.html"; // Redirect to homepage
            });
        });
    }

    // Navbar visibility based on login status
    const loginLinks = document.querySelectorAll('.login-link');
    const accountLinks = document.querySelectorAll('.account-link');

    if (localStorage.getItem("loggedIn") === "true") {
        accountLinks.forEach(link => link.style.display = 'block');
        loginLinks.forEach(link => link.style.display = 'none');
    } else {
        accountLinks.forEach(link => link.style.display = 'none');
        loginLinks.forEach(link => link.style.display = 'block');
    }

});

