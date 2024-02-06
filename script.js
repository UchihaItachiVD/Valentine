document.addEventListener("DOMContentLoaded", function () {
    // Date for each day
    const dates = [
        new Date("February 7, 2024"),
        new Date("February 8, 2024"),
        new Date("February 9, 2024"),
        new Date("February 10, 2024"),
        new Date("February 11, 2024"),
        new Date("February 12, 2024"),
        new Date("February 13, 2024")
    ];

    // Function to update the remaining days for each link
    function updateRemainingDays() {
        const today = new Date();

        dates.forEach((date, index) => {
            const remainingDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
            const dayElement = document.getElementById(`day${index + 1}`);

            if (remainingDays > 0) {
                dayElement.innerHTML += ` - ${remainingDays} days remaining`;
            } else if (remainingDays === 0) {
                dayElement.innerHTML += ` - Today is the day!`;
            } else {
                dayElement.innerHTML += ` - ${Math.abs(remainingDays)} days ago`;
            }
        });
    }

    // Trigger the update on page load
    updateRemainingDays();

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
