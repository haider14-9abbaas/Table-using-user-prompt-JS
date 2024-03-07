document.write("JavaScript Connected")
let number = parseInt(prompt("Enter a number:"));

if (!isNaN(number)) {
    console.log("Multiplication Table of " + number + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(number + " * " + i + " = " + (number * i));
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}
