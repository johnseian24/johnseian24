// User Age Categorization

// Collect user age (Replace with prompt if running in browser)
let age = 28; // Replace with actual user input or prompt if desired

// Categorize and log based on age
if (age < 4) {
    console.log("You are a Toddler.");
} else if (age >= 4 && age <= 12) {
    console.log("You are a Child.");
} else if (age >= 12 && age <= 19) {
    console.log("You are a Teenager.");
} else if (age >= 25 && age <= 35) {
    console.log("You are a Young Adult.");
} else if (age >= 39 && age <= 60) {
    console.log("You are Middle-Aged.");
} else {
    console.log("You are a Senior.");
}
