const animatedButton = document.getElementById('animatedButton');
const clickCountDisplay = document.getElementById('count');
const CLICK_COUNT_KEY = 'clickCount';

// Function to get the current click count from localStorage
function getClickCount() {
    const storedCount = localStorage.getItem(CLICK_COUNT_KEY);
    return storedCount ? parseInt(storedCount) : 0;
}

// Function to store the click count in localStorage
function saveClickCount(count) {
    localStorage.setItem(CLICK_COUNT_KEY, count);
}

// Function to trigger the animation and update the count
function handleButtonClick() {
    // Trigger CSS animation
    animatedButton.classList.add('animate-pulse');

    // Remove the animation class after it finishes
    setTimeout(() => {
        animatedButton.classList.remove('animate-pulse');
    }, 500); // Matches the animation duration

    // Update the click count
    let currentCount = getClickCount();
    currentCount++;
    clickCountDisplay.textContent = currentCount;

    // Store the updated count in localStorage
    saveClickCount(currentCount);
}

// Load the initial click count from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const initialCount = getClickCount();
    clickCountDisplay.textContent = initialCount;
});

// Event listener for the button click
animatedButton.addEventListener('click', handleButtonClick);