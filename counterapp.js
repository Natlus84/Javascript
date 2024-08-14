// Get references to the counter display and buttons
const counterDisplay = document.getElementById('counter');
const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');
const resetButton = document.querySelector('.reset');

// Initialize counter value
let counterValue = 0;

// Function to update the counter display
function updateDisplay() {
    counterDisplay.textContent = counterValue;
}

// Function to handle increment
function increment() {
    counterValue++;
    updateDisplay();
}

// Function to handle decrement
function decrement() {
    counterValue--;
    updateDisplay();
}

// Function to handle reset
function reset() {
    counterValue = 0;
    updateDisplay();
}

// Add event listeners to buttons
incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
resetButton.addEventListener('click', reset);

// Initialize the display
updateDisplay();
