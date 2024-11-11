const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeFirstAndLast(str) {
    if (str.length <= 2) {
        return ""; 
    }
    return str.slice(1, -1);
}

// Prompt the user for input using readline
rl.question("Enter a string: ", (userInput) => {
    const modifiedString = removeFirstAndLast(userInput);
    console.log("Modified string:", modifiedString);
    rl.close();
});
