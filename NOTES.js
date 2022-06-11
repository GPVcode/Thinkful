// For each of the examples, what will be logged?
// Enter your guesses before you hit run!

// One
// Does addition work?
let x = 21 + 3;
// enter your guess where the '0' is on the next line
let guessOne = 24;
console.log(x);

// Two
// What will happen when there is more than one operator?
let y = 2 * 2 + 1;
// Enter your guess on the next line, where the '0' is
let guessTwo = 5;
console.log(y);

// Three
// What does it mean to add words together?
let z = "We use repls for " + "drills, playgrounds, and prediction.";
// Enter your guess inside the "" below
// Be careful! The text has to match exactly.
let guessThree = "We use repls for drills, playgrounds, and prediction.";
console.log(z);


// if you need to see the solution:
// https://replit.com/@thinkful/What-will-be-logged-solution




// This tests your code - you can ignore it for now!
require('./test.js');(void 0);



// NEW SECTION ON CONDITIONALS
// A random number from 1 to 6
let random = Math.ceil(Math.random() * 6); //random number generator from 1-6(integers only - like dice) Math.random by default are all float numbers from 0-1. Multiply by 6 to scale the options. Use Math.ceil to round up and receive integers from 1-6.

// Try changing the equality checks below
// See the results by clicking 'run'
if (random === 1) {
  console.log("The random number was 1");
} else if (random === 2) {
  console.log("The random number was 2");
} else if (random === 6) {
  console.log("The random number was 6");
} else {
  console.log("The random number was not 1,2, or six. Unlucky.");
}
