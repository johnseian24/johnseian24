// Color Preferences Collection

// Initialize an array to store three colors
let favoriteColors = [];

// Loop to get three colors from the user
for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter color ${i + 1}:`);
    favoriteColors.push(color); // Add the color to the array
    console.log("Updated color list:", favoriteColors); // Print updated array
}

// Optionally, allow the user to add additional colors
let addMore = true;
while (addMore) {
    let newColor = prompt("Enter another color (or type 'stop' to finish):");

    if (newColor.toLowerCase() === 'stop') {
        addMore = false; // Exit the loop if user types 'stop'
    } else {
        favoriteColors.push(newColor); // Add the new color to the array
        console.log("Updated color list:", favoriteColors); // Print updated array
    }
}
