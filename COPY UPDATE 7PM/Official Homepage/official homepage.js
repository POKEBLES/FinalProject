document.addEventListener("DOMContentLoaded", function() {
    // Check login status from localStorage
    const loginSignupLinks = document.querySelectorAll('.login-signup-links');
    const accountLinks = document.querySelectorAll('.account-links');

    // Adjust navbar visibility based on login state
    if (localStorage.getItem("loggedIn") === "true") {
        accountLinks.forEach(link => link.style.display = 'flex'); // Show account-related links
        loginSignupLinks.forEach(link => link.style.display = 'none'); // Hide login/sign up links
    } else {
        accountLinks.forEach(link => link.style.display = 'none'); // Hide account-related links
        loginSignupLinks.forEach(link => link.style.display = 'flex'); // Show login/sign up links
    }

    // Handle Log Out
    const logoutLink = document.querySelector('a[href="/logout.html"]');
    if (logoutLink) {
        logoutLink.addEventListener("click", function(e) {
            e.preventDefault();
            localStorage.removeItem("loggedIn"); // Remove logged-in status
            window.location.href = "/Official Homepage/official homepage.html"; // Redirect to homepage after logging out
        });
    }

    // Handle Log In (this is triggered when user logs in via the login form)
    const loginForm = document.querySelector('#loginForm'); // Assuming you have a form with the id `loginForm`
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            // Your login validation logic here (e.g., check username/password)
            // If login is successful, set the logged-in status
            localStorage.setItem("loggedIn", "true");

            // Redirect to homepage after login
            window.location.href = "/Official Homepage/official homepage.html"; // Change this to your homepage URL
        });
    }

    // Handle Sign Up (this is triggered when user signs up via the register form)
    const signUpForm = document.querySelector('#signUpForm'); // Assuming you have a form with the id `signUpForm`
    if (signUpForm) {
        signUpForm.addEventListener("submit", function(e) {
            e.preventDefault();
            // Your sign up logic here (e.g., create new account)
            // If sign-up is successful, set the logged-in status
            localStorage.setItem("loggedIn", "true");

            // Redirect to homepage after sign-up
            window.location.href = "/Official Homepage/official homepage.html"; // Change this to your homepage URL
        });
    }
});
