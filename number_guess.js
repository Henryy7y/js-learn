const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let counter = 0;

function askGuess() {
    readline.question('What is the number? ', (answer) => {
        guess = parseInt(answer); //parseInt so that user input is always converted to integer
        counter++;

        if (isNaN(guess)){
            console.log("Please enter a valid number! ");
            askGuess();
        }
        if (guess > secretNumber){
            console.log("Your guess is too big!");
            askGuess();
        }
        else if (guess < secretNumber){
           console.log("Your guess is too small!");
           askGuess();
        }
        else{
            console.log("Congratulations, you have found the correct number! Tries taken: ", counter);
            readline.close();
        }
    });
}

console.log("Welcome to the number guessing game!");
askGuess();