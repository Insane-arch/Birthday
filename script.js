// Countdown Timer
function countdown() {
    // Set the target to 12:00 AM tomorrow
    const birthdayDate = new Date();
    birthdayDate.setHours(24, 0, 0, 0); // Set the target to midnight tomorrow

    const now = new Date();
    const diff = birthdayDate - now; // Time difference in milliseconds

    if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('timer').innerHTML = `Time left: ${hours}h ${minutes}m ${seconds}s`;
    } else {
        // Calculate how long ago the birthday was
        const past = new Date(birthdayDate.getTime() - diff); // Date the birthday occurred
        const elapsed = now - birthdayDate; // Time difference in milliseconds
        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60));
        const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

        // Show the message when the countdown ends
        document.getElementById('timer').innerHTML = `The world just got luckier since ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    }
}

// Call the countdown function every second
setInterval(countdown, 1000);

// Function to generate falling hearts
function createFallingHearts() {
    const heartSymbols = ['❤️', '🩵', '🤍', '💖', '🩷', '💛'];
    const heartContainer = document.getElementById('hearts');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        // Randomize the starting position and animation duration
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random duration between 3-5 seconds

        heartContainer.appendChild(heart);

        // Remove the heart once it has finished falling
        setTimeout(() => {
            heart.remove();
        }, 5000); // Matches the duration of the fall
    }

    setInterval(createHeart, 300); // Create hearts every 300ms
}

createFallingHearts(); // Start the falling hearts animation