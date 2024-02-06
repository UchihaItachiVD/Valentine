document.addEventListener("DOMContentLoaded", function () {
    // Function to create a falling heart element
    function createFallingHeart() {
        const heart = document.createElement("div");
        heart.className = "falling-heart";
        document.body.appendChild(heart);

        // Set initial position
        const initialX = Math.random() * window.innerWidth;
        heart.style.left = `${initialX}px`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random duration for variety

        // Remove the heart element after animation completes
        heart.addEventListener("animationend", function () {
            document.body.removeChild(heart);
        });
    }

    // Function to create falling hearts at regular intervals
    function createHeartsInterval() {
        setInterval(createFallingHeart, 1000); // Adjust the interval as needed (milliseconds)
    }

    // Start creating falling hearts
    createHeartsInterval();
});
