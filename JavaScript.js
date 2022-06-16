//I've decided to use this page to write my JS notes. So far it's been review and filling out small holes I had - which is great! From here on out, I am using this page for notes.

//Key Terms:
  // Concatenation - The process of joiining different values or pieces of text together.
  // Method - A function that is attached to an object as one of the object's attributes

//NOTE: Although there are various ways to type code such as the case with strings, consistency in code is most important. Just stick to double quotes until single quotes is necessary.

  // Comparison operators: Math symbols that compare two values

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
   // The variable "i" usually stands for "incrementor". **Just read another piece that says i stands for index** (MUST FIND TRUTH) **UDPATE**It seems like index is the right answer. **New thought** What if I was the one reading the documents incorrectly and that in the particular section I was reading, they were referring to the third expression in a for loop(i++)In other words, they were referring to the i in i++ as the incrementor. The i's in initial and conditional expression are then referred to as index values.
// The for loop: requires three expressions -- initial expression, conditional expression, and increment operater expression **VERY IMPORTANT**
     //for loops example
     console.log("Begin loop!");
     
     for (i=1, i<=10, i++) { //start loop at 1. As long as i<=10 increment value by 1. Otherwise, stop the lop and continue on to the next code.
       console.log(i); //i is printed and run back into for loop code until conditional expression is no longer met.
     }
     
     console.log("This is the end of our loop!"); // conditional expression is no longer true, so the for loop stopped and moved on to this code.

     //for loops exanmple 2:
     let numberOfGuests = 20; 
     for (let index = 1; index <= numberOfGuest; index++) { //start at index 1, check if conditional expression is true, and if so, print that index number. Once the computer gets to the end parenthesis, index increments by the set increment(1). The new number runs by conditional expression, and if true, gets printed as such below.
       console.log("Here is a burger for guest #:" + index); // This print is more interactive. We preset string sentance that goes with any number our concatenated index variable returns.
     }
     for (let index = 1; index <= numberOfGuest; index++) { //start at index 1, check if conditional expression is true, and if so, print that index number. Once the computer gets to the end parenthesis, index increments by the set increment(1). The new number runs by conditional expression, and if true, gets printed as such below.
       console.log("Here is a burger for guest #:" + index); // This print is more interactive. We preset string sentance that goes with any number our concatenated index variable returns.
     }
              //random not on increment: incrementing by 1 is the most common practice
     // for loops practice:
     let myFriends = ["Jenny", "Noor", "Alicia", "Samira", "Katie"];

     for (let i = 0; i < myFriends.length; i++) {

       console.log(myFriends[i].toUpperCase() + " likes to party!"); //Return names in Uppercase
     }

     // for loops practice:
     // Update array to make every index value uppercased
     let myFriends = ["Jenny", "Noor", "Alicia", "Samira", "Katie"];

     for (let i = 0; i < myFriends.length; i++) {     
     upperFriends = myFriends[i].toUpperCase();
     }
     console.log(myFriends);

     // for loops drills:
     // Write a for loop that logs the numbers up to 10
     for (let i = 1; i <= 10; i++) {
       console.log(i);
     }
     // Write a for loop that logs the numbers from 5 to 10
     for(let i = 5; i < 10; i++){
       console.log(i);
     }
     // Write a for loop that logs the numbers from 0 to 100, counting by 10s
     for (let i = 0; i < 100; i+=10){
       console.log(i);
     }

      // example:
     gifts.lisa; // "coloring book"
     gifts.beth; // "suit of armor"
     //Objects and dot notation example
     const students = [ //object called students
       { name: 'William Bates', timezone: 'Central' },
       { name: 'Jakob Solis', timezone: 'Pacific' },
       { name: 'Danni Cook', timezone: 'Mountains' },
       { name: 'Talen Cook', timezone: 'Mountains' },
       { name: 'Li Yang', timezone: 'Eastern' },
       { name: 'Faith Clark', timezone: 'Eastern' },
       { name: 'Sajid Rehal', timezone: 'Pacific' },
       { name: 'Alicia Lee', timezone: 'Eastern' },
     ];

     console.log(students[2].timezone) // print values in index 2 and retrieve value in key "timezone". Mountains is retrieved.
     
     // Objects can be inside of arrays. When things are inside of things in javascript, that's called nesting.
     // Nesting: Nested object, nested arrays. "Things inside of things". 
     // Nested Object: is an object that is the property of another object!
     // Example: In the example below, the key "programs" is nested under university. Further, "science" is nested under programs.
     let university = {
        name: "State University",
       programs: {
          "science": {
           credits: 100,
            enrollment: 2000,
            dean: "Juanita Doe"
          },
          "computer science": {
            credits: 120,
            enrollment: 2400,
            dean: "Sofia Patel"
          }
        }
      }
     // Here's how you access the data types in these complex objects
     university.programs."science".enrollment //output 2000
     // EXAMPLE:
     var person = {
      name: "Daphne",
      age: 25,
      profession: "developer"
    }

    //Add a property to person called address. It should be an object with three of it's own properties: street, city, and zipcode with values '221B Baker St.' 'New York City' and '10001' respectively.
      person.address = {
       street: "221B Baker St.",
       city: "New York City",
       zipcode: "10001"
     }
// PSEUDO CODING
     //Main idea: Pseudo coding allows you to focus on one part of the entire code at a time.
     // Create an object
     let cart = [
  {
    itemName: "Walnut Guitar Mount",
    price: 62.0,
  },
  {
    itemName: "Wooden Guitar Pick Box",
    price: 8.5,
  },
  {
    itemName: "Mahogany Guitar Stand",
    price: 149.99,
  },
];

let subtotal = 0;
let shipping = 12.99;
let total = 0;

// create a loop to run through the data within our object called "cart"
for (let i = 0; i < cart.length; i++) {
   let price = cart[i].price; // create a variable price to assign price relative to index number
   subtotal += price; // add price to holder named subtotal
}
total = subtotal + shipping; // Create a variable called Total to assign the subtotal accumulated by the loop plus previously set shipping price

// New Lesson on Functions!
     // This is how we will learn functions! First, we will see how functions can be used to let us reuse code that we've written. Next, we will see how they can break problems down into smaller pieces.
     // Example:
     function makeCookies (ingredients) { //makeCookies is the function declaration; ingredients is the input
       return finishedProduct // finishedProduct is the output
     }
     // Example 2:
     function bakeCake() { //bakeCake is the function declaration. Note the parenthesis and curly braces.
       console.log('Getting ingredients...');
       console.log('Mixing ingredients...');
       console.log('Putting in the oven...');
       console.log('Cake is complete!');
     }
     // functions wrap up code and give it a name so that you can use it in other places.
     // functions are the building blocks of programs -- you make big programs by composing functions and arranging them together.
     // functions can do the following: REUSE CODE; TRANSFORM INPUTS INTO OUTPUTS; SOLVE PIECES OF A PROBLEM.
     // running a function is also called invoking a function
     // functions don't just make a program simpler -- they also make code more maintainable and reusable. Much easier to type two functions with 4 console.logs than to type 8 console logs. lol
     // you can also update a function and update different parts of your program using the same function.
     //function turns input to output
     
     // Example 3:
     function greetFriend(name) { // Note: name is the parameter of greetFriend
       console.log("Hello, " + name);
     }
     greetFriend("Kiesha"); // Kiesha is the argument to greetFriend.
     // Our output will look like: "Hello, Kiesha"
     
     // Example 4: 
     function leftAndRight(left, right) { //you can set more than one parameter
       console.log(left + " is on the left");
       console.log(right + " is on the right");
     }
     leftAndRight("A dog", "A cat"); // Here we call the function with two arguments. Guess our output!
     //IMPORTANT NOTE!: Functions can only ever return 1 value. Any returnm after the first one doesn't run. If we don't specify the value, we get back undefined
     // Using return allows you to write reusable code
     //WRITING FUNCTIONS:
        // When you use funstions like parseInt() and toUpperCase(), these funtions return values. They don't log the calue to the console.
     
     // Example: 
      let studentAnswers = ['C', 'D', 'B']
      let teachersAnswers = ['C', 'A', 'B']
      // gradeQuiz(studentAnswers, teachersAnswers) //=> 2

      // Write your function 'gradeQuiz' here: YOOO I GOT THIS RIGHT I'M SO PROUD OF MYSELF!

      function gradeQuiz(studentAnswers, teachersAnswers) {
        let score = 0;
        for (i = 0; i < studentAnswers.length; i++){

          if (studentAnswers[i] === teachersAnswers[i]){
            score += 1;
          }
          else {
            score += 0;
          }
        }
        return score;
      }

// FUNCTIONS AND SCOPE
  // example:
     // Write your function 'countdown' here
        // write a function named countdown with the count as the parameter
        function countdown(count){
          //use for loop to retrieve a count down effect
          for (let i = count; i > 0; i--){ //since the input is the start of the loop, let i = count(input). Decrement of 1 until condtion is false
             console.log(i);
             }
          console.log("Blast off!"); //once the countdown is done, log text that says blast off!
          }

countdown(3);

     // Note: each time that you call a function, it creates a NEW SCOPE!
     // Note: 
     
     
     
     
     
      
       
