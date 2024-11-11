const readline = require("readline");

// Set up the readline interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to remove the first and last character of a string
function removeFirstAndLast(str) {
    if (str.length <= 2) {
        return ""; // Return an empty string if the length is 2 or less
    }
    return str.slice(1, -1);
}

// Prompt the user for input
rl.question("Enter a string: ", (userInput) => {
    const modifiedString = removeFirstAndLast(userInput);
    console.log("Modified string:", modifiedString);
    rl.close();
});

