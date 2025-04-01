document.addEventListener("DOMContentLoaded", function() {
    function generatePlayerID() {
        let id = "";
        for (let i = 0; i < 3; i++) {
            id += Math.floor(1000 + Math.random() * 9000) + " ";
        }
        return id.trim();
    }

    let playerIdField = document.getElementById("player-id");
    if (playerIdField) {
        playerIdField.value = generatePlayerID();
    } else {
        console.error("Player ID input field not found!");
    }

    document.getElementById("player-id").value = generatePlayerID();

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
            alert("Registration successful!");
        }
    });
});


