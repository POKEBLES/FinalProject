document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("player-id").innerText = generatePlayerID();
});

function generatePlayerID() {
    return `${randomDigits()} ${randomDigits()} ${randomDigits()}`;
}

function randomDigits() {
    return Math.floor(1000 + Math.random() * 9000);
}

function editProfile() {
    let newEmail = prompt("Enter new email:", document.getElementById("email").innerText);
    let newIGN = prompt("Enter new In-Game Name:", document.getElementById("ign").innerText);
    if (newEmail) document.getElementById("email").innerText = newEmail;
    if (newIGN) document.getElementById("ign").innerText = newIGN;
}
