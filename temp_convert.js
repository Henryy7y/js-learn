const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertTemp(){
    showMenu();
    readline.question('Choose your Option (1-3): ', (answer) => {
        const opt = parseInt(answer);

        if (isNaN(opt) || opt > 3 || opt < 1) {
            console.log("Please enter a valid option!");
            convertTemp();
        } 
        else if (opt === 3) {
            console.log("Thanks for using the Temperature Converter! We hope to see you again!");
            readline.close();
            process.exit();
        } 
        else if (opt === 1) {
            readline.question('Temperature in Celsius: ', (answer) => {
                const tempC = parseFloat(answer);
                if (isNaN(tempC)) {
                    console.log("Please enter a valid number!");
                    convertTemp();
                    return;
                }
                const tempF = (tempC * 9/5) + 32;
                console.log(`${tempC}°C is equal to ${tempF.toFixed(2)}°F`);
                convertTemp();
            });
        } else if (opt === 2) {
            readline.question('Temperature in Fahrenheit: ', (answer) => {
                const tempF = parseFloat(answer);
                if (isNaN(tempF)) {
                    console.log("Please enter a valid number!");
                    convertTemp();
                    return;
                }
                const tempC = (tempF - 32) * 5/9;
                console.log(`${tempF}°F is equal to ${tempC.toFixed(2)}°C`);
                convertTemp();
            });
        }
    });
}

function showMenu(){
    console.log("\nMenu\n1. Celcius to Farenheit\n2. Farenheit to Celsius\n3. Exit\n");
}

console.log("Welcome to Temperature Converter!")
convertTemp();