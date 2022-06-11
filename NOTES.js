//date: 6/10/2022
//I've decided to use this page to write my JS notes. So far it's been review and filling out small holes I had - which is great! From here on out, I am using this page for notes.

//Key Terms:
//concatenation - 
  //The process of joiining different values or pieces of text together.
//Method -
 //A function that is attached to an object as one of the object's attributes


//Although there are various ways to ype code such as the case with strings, consistency in code is most important. Just stick to double quotes until single quotes is necessary.

//date: 6/11/2022
//Control Flow: The main idea of control flow aka "flow of execution" is that it conditionally determins which set of instructions runs.
  //-Conditional Statements: Perform different tasks based off certain information.
  //-order of operations: collection of rules that govern the order at which operators are evaluated.
  //-Truthy values: Values that an if statement will treat as true.
  //-Falsy Values: values that an if statement will treat as false.
  //-Logical operators: Operators that test whether a given conditions is met.
  //-Comparison operators: Math symbols that compare two values



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


//Below is code for conditional situation to find out whether a User has anything in their online cart and how to interact with user base on the the activity in their cart.
let itemsInCart =
