document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".store-card");
    const leftButton = document.querySelector(".left-btn");
    const rightButton = document.querySelector(".right-btn");

    function updateCarousel() {
        cards.forEach((card) => {
            const position = card.getAttribute("data-position");

            // Hide all overlays first
            card.querySelector(".card-overlay").classList.add("hidden");

            if (position === "middle") {
                card.style.transform = "translateX(0) scale(1)";
                card.style.opacity = "1";
                card.querySelector(".card-overlay").classList.remove("hidden");
            } else if (position === "left") {
                card.style.transform = "translateX(-120%) scale(0.80) rotate(-10deg)"; // Tilt left
                card.style.opacity = "0.4";
            } else if (position === "right") {
                card.style.transform = "translateX(120%) scale(0.80) rotate(10deg)"; // Tilt right
                card.style.opacity = "0.4";
            }            
        });
    }

    function shiftLeft() {
        const leftCard = document.querySelector('[data-position="left"]');
        const middleCard = document.querySelector('[data-position="middle"]');
        const rightCard = document.querySelector('[data-position="right"]');

        // Swap positions
        leftCard.setAttribute("data-position", "right");
        middleCard.setAttribute("data-position", "left");
        rightCard.setAttribute("data-position", "middle");

        updateCarousel();
    }

    function shiftRight() {
        const leftCard = document.querySelector('[data-position="left"]');
        const middleCard = document.querySelector('[data-position="middle"]');
        const rightCard = document.querySelector('[data-position="right"]');

        // Swap positions
        leftCard.setAttribute("data-position", "middle");
        middleCard.setAttribute("data-position", "right");
        rightCard.setAttribute("data-position", "left");

        updateCarousel();
    }

    leftButton.addEventListener("click", shiftLeft);
    rightButton.addEventListener("click", shiftRight);

    updateCarousel();

    
});