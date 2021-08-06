
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let sum = 0;
function getNumber(){

    readline.question("Give me a number or type s to stop ", input => {
        if(input == "s"){
            console.log("Sum = " + sum);
            readline.close();
            return null;
        }

        sum += parseInt(input);

        return getNumber();
    })
}

getNumber();