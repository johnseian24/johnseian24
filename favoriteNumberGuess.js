// Favorite Number Calculation

// Declare a variable to hold the favorite number
let theFavNumber = 7; // Set the favorite number here

// Initialize a variable to store the user's guess
let guess;

// Use a while loop to keep asking until the user guesses correctly
while (true) {
    // Prompt the user to enter their guess
    guess = parseInt(prompt("Guess the favorite number:"));

    // Check if the guess is correct, too high, or too low
    if (guess === theFavNumber) {
        console.log("Correct! You've guessed the favorite number.");
        break; // Exit the loop if the guess is correct
    } else if (guess > theFavNumber) {
        console.log("Too high. Try again.");
    } else {
        console.log("Too low. Try again.");
    }
}
