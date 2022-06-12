//date: 6/10/2022
//I've decided to use this page to write my JS notes. So far it's been review and filling out small holes I had - which is great! From here on out, I am using this page for notes.

//Key Terms:
  // Concatenation - The process of joiining different values or pieces of text together.
  // Method - A function that is attached to an object as one of the object's attributes

//NOTE: Although there are various ways to type code such as the case with strings, consistency in code is most important. Just stick to double quotes until single quotes is necessary.

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
  let itemsInCart = 2;

  if (!itemsInCart) {
    console.log("Your cart is empty.");
  } else {
    console.log("You have at least 1 item in your cart.");
  }

  let item1 = 25;
  let item2 = 30;

  if{item1 !== item2) {
    console.log("They are different.");
  } else {
    console.log("They are the same!");
  }
  
   
// Truthy and Falsy Values:
   // false; | "" | 0 | null | undefined | Nan; all evaluate to false  when used in an if statement
   // && returns the first falsy value, of the last value if no values are falsy
   // || returns the first truthy value, or the last value if no values are truthy
   // does 7 == "7"; coerce the "7" into an integer?
// pseudo code for challenge:
   // 1. If timeOfDay is before noon (12), print "good morning!".
   // 2. Otherwise, print "good night!".
   
 
//Collecting Data with Arrays:
   //Each location in an array is an index. You can sort through this index that starts with the first elemnt of the array at 0
   // You can put arrays within arrays
   // While strings are immutable -- or not changeable, array methods, in contrary, will mutate -- or change an array.
   
// Iterating through collections:
   // The power of loops is the ability to cycle through arrays.
   // The variable "i" usually stands for "incrementor".
// The for loop: requires three expressions -- initial expression, conditional expression, and increment expression **VERY IMPORTANT**
     //for loops example
     console.log("Begin loop!");
     
     for (i=1, i<=10, i++) { //start loop at 1. As long as i<=10 increment value by 1. Otherwise, stop the lop and continue on to the next code.
       console.log(i); //i is printed and run back into for loop code until conditional expression is no longer met.
     }
     
     console.log("This is the end of our loop!"); // conditional expression is no longer true, so the for loop stopped and moved on to this code.
   
   
   
   
   
   
