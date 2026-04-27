const input = require('readline-sync');

let name = input.question("What is your name? ");
console.log("Hello " + name + "!");

// Questions
let q1 = input.question("Is '5' a string or a number? ");
let q2 = input.questionInt("Enter any whole number: ");

// Showing the answers back
console.log("Your answers: " + q1 + " and " + q2);