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
              //random note on increment: incrementing by 1 is the most common practice
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
     for(let i = 5; i <= 10; i++){
       console.log(i);
     }
     // Write a for loop that logs the numbers from 0 to 100, counting by 10s
     for (let i = 0; i <= 100; i+=10){
       console.log(i);
     }
     
     // Loops example
     
     let totals = [10,20,30,40]; // Four index numbers with their rexpective index values 
    for(let i=0; i < totals.length; i++){ // for loops starting at index0 until condtion is false with an increment of 1. i < array.length goes through entire array list
    let weightedTotal = totals[i]*2; // assign "totals" index number * 2 into weightedTotal.
    if(weightedTotal < 75){ // if weightedTotal is less than the value 75... print weightedTotal
      console.log(weightedTotal) //WeightedTotal should be printed until index 3 because the value  in index 3 is 40; 40 times 2 is 80, which is greater than 75.
    }
  }

//**NEW SECTION**
     
// Objects: Main idea - Objects allow you to keep track what value belong to each key.  Then, you can easily retrieve a value using the name of the key in which the value is assigned to.
     // What is an object? - An object is a type of collection that holds values using key-value pairs
     // what is a key-value pair? example:
     let disctionary = { hola: "hello", suave: "soft", taco: "taco" }
     //note on objects and key-value pairs: this idea is similar to giving out gifts from a huge pile of gifts based on the name on the gift's tag.
     // Example of a JavaScript object:
     let gifts == { // use gifts as the variable for this object. Our subject object contains many values as such below
       tommy: "stuffed giraffe", //tommy is an example of keys AKA properties. "stuffed giraffe" is an example of values
       lisa: "coloring book",    // thus, we have key-value pairs within this object assigned into variable "gifts"
       roberto: "baseball cap",
       beth: "suit of armor",
     };
     gifts["tommy"]; //this outputs "stuffed giraffe"
     //Objects note: 
        // regarding dot notation: once values are defined, you can call on the key to retrieve the value inside:
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

// Accumulator Pattern
     // What is an accumulator pattern? An accumulator pattern is a method of building up for accumulating data. A chucnk of code used to accumulate data such as "open now" restaurants.
     // Exercise
     // An example of the accumulator pattern
      let colors = ["red", "white", "blue"];
      let statement = "My favorite colors are "; // This is the accumulator 

      for (let i = 0; i < colors.length; i++) { //for loops
        // What could you write here? ANSWER NOTE: I'll be using for loops to make the output use "& " on the condition that the value in the index number is blue.
           if (colors[i] === "blue"){ 
             statement += "& " + colors[i] + ".";
           }
           else {
           statement += colors[i] + ", "; // Unless the index value is blue, simply ad a comma and space to make output gramatically proper.
           }
      }

      // Challenge 1: Make the statement say the following:
      // 'My favorite colors are red, white, blue,'

      // Challenge 2: Make the statement say the following:
      // 'My favorite colors are red, white and blue.'

      console.log(statement);

     
     
   
     
   
   
   
