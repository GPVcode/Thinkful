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
     // Note: I'm sleepy. Let's sleep now.
     
 //BREAKING DOWNPROBLEMS WITH FUNCTIONS
     //Now we will use pseudocode to break a problem down into smaller pieces. I will see how to solve the pieces using helper functions.
     //To get familiar with a dataset, start by writing less complex functions for exploration, thus allowing you to become familiarized with the dat set.
     
     // Example of pseudocode:
      function countThePeople(people) {
        // Start a counter variable at 0
        let counter = 0;
        for(i = 0; i < people.length; i++){
        // Loop through the people
        // For each person, add 1 to the counter
          counter += 1;
        }
        // After the loop, return the counter
        return counter;
      }
     // v1
// Write a function that says hello from the bot, to be called when the chat starts
function botGreeting() {
  return "Hello, I'm the Getaway Bot! I want to help you find your dream destination. You can ask me about our current offers, payment, or contact info. Or type 'help'.";
}

// v2
// When the bot doesn't understand, we still want the bot to give a response to the user. Write a function `botResponse` that explains that the bot didn't understand. It should say "I'm not sure I understood your message: '[message]'. Type 'help' to see more options."
function botResponse(message) {
  return (
    "I'm not sure I understood your message: '" +
    message +
    "'. Type 'help' to see more options."
  );
}

// v2
function showHelpOptions(options) {
  let response = "Enter a keyword for help with a topic: ";
  response += options.join(", ") + ".";
  return response;
}

// v2
// contactInfoHelp: return a string with some info about a phone number to call / email address / location
// (curriculum dev fyi - https://softwareengineering.stackexchange.com/questions/376535/whats-the-phone-number-equivalent-of-example-org)
function contactInfoHelp() {
  return "We have 24 hour phone support. Our phone number is +01 312 555 8432. We look forward to hearing from you!";
}

// v2
// paymentHelp: describe the payment options
function paymentHelp(paymentType) {
  if (paymentType == "credit card") {
    return "You can pay with any major credit card. Enter your card details and billing address at checkout.";
  } else {
    return "We have three payment options: credit card, paypal, or apple pay. Choose your preferred method at checkout.";
  }
}

// v3
function listDestinations(destinations) {
  let response =
    "I can tell you about our current recommended destinations. Which one do you want to hear about? ";
  let locations = getLocations(destinations);
  response += locations.join("; ") + ". ";
  response += "Enter a location for more info."
  return response;
}

// v3
function getLocations(destinations) {
  let locations = [];
  for (let i = 0; i < destinations.length; i++) {
    let location = destinations[i].location;
    locations.push(location);
  }  
  return locations;
}

// v3
// productDescription: given an object of products, access a product by name, and return its description
function findDestination(input, destinations) {
  for (let i = 0; i < destinations.length; i++) {
    if (
      destinations[i].location.toLowerCase()
      .includes(input.toLowerCase())
    ) {
      return destinations[i];
    }
  }
  return null;
}

const helpOptions = [
  "contact",
  "payment",
  "credit card",
  "destinations", // only in v3
];

function handleInput(userMessage) {
  if (userMessage.includes("help")) {
    return showHelpOptions(helpOptions);
  } else if (userMessage.includes("contact")) {
    return contactInfoHelp();
  } else if (
    userMessage.includes("payment") ||
    userMessage.includes("credit card")
  ) {
    return paymentHelp(userMessage);
  } else if (userMessage.includes("destination")) {
    return listDestinations(destinations);
  } else if(userMessage.length >= 3) {
    let destination = findDestination(userMessage, destinations);
    if (destination) {
      return destination.description;
    }
  }
  return botResponse(userMessage);
}


global.findDestination = findDestination;
global.listDestinations = listDestinations;

global.botGreeting = botGreeting;
global.handleInput = handleInput;
     // Example:
        // Write your function 'findPeopleByCity' called with an array of people and a city, it should return an array of people whose city matches
        function findPeopleByCity(people, cityToMatch) { // Use multiple parameters to help identify if the city people are in match our filter parameter(cityToMatch
          // declare and initalize filtered person array
          let results = []; // this will be our accumulator which will store the keys that are found to be conditionally true.
          // loop through the collection of people
          for(let i = 0; i < people.length; i++) { // start at index 0 and loop through entire array with increment of 1
            if(people[i].city === cityToMatch) { // if the city value in subject index position matches our filter parameter, push the subject index into our array accumulator.
              results.push(people[i]); // use push to add to the end of existing array that is our accumulator!
            }
          }
           return results; //make sure to return in the correct scope!
        }

     // Next we work on how to make our code more resilient to instances where there is no matching city.
     
     //Best Practice: Small Functions
      //we will practice using helper functions to split functions into pieces to make it easier to understand and reuse. You can call a function inside another function. Use this inner function -- the helper function -- to split up the work between functions.
      // Journal Entry - okay this is pretty hard. Currently leasrning about helper funtioncs and I am struggling. It doesnt help that I know I'll be having a busy weekend. I will try to take my time with this as I would like to understand this well. I will get frustrated but I will learn to push through this odd feeling. It doesn;'t feel good, but this body does not know me! I can push through the frustation feeling and learn this elusive concept! I GOT THIS! I CAN DO THIS! I WILL UNDERSTAND HELPER FUNCTIONS AND BETTER MY FEEL FOR JAVASCRIPT!!!!
      // Helper Functions Example:
      function findPerson(people, nameToMatch){ // set up helper function with parameter people and nameToMatch
        for(let i = 0; i < people.length; i++) // Run looop through data of people objects
          let person = people[i]; // assign values of people in specific index value i to variable person
          if (people.name === nameToMatch){
          return person; // not that return is inside the scope of conditional here.
          }
      }
      // Now we proceed to the second helper function
       function addLike(person, topic) { // this is the second helper function
         let likes = person["likes"] // assign value in person varabiable
         likes.push(topic) // add topic to likes index
       }
      // Now we use helper functions to write our main addLikeToPerson function
       function addLikeToPerson(people, nameToMatch, topic){ // this function pushes likes variable into objects when names match
         let person = findPerson(people, nameToMatch); // this function finds the match
         addLike(person, topic); // this function assigns value to the person found
        // essentially, this is a great way to organize your code - especially when you are working with larger code. Helper function is a way to make code easier to work with.
      //Another Example:
         // here we findt he number of people whose like values conatin a certain topic. We'll use a loop within a loop.
         function countLikesByTopic(people, topic){ //this is the function named countLikesByTopic with parameter people and topic
           let counter = 0; // set counter to 0
           for(i = 0; i < people.length; i++){ // loop through our information given conditions with 1 increment
             for(j = 0; j < people[i].likes.length; j++){ // this is the loop within our loop. use j instead of i so that j and i do not collide
               if(people[i].likes[j] === topic){ // if the value in the likes key within the person object equals the value in topic
                 counter += 1; // Add to counter if condition is true or counter ++
               }
             }
           }
              return counter; // return the number we've accumulated. Note that it is important our return statement is in the proper score so that it can identify our counter
         }
       
      
         // I need to understand learn help functions! Here is the solution for the assessment I just took
         // Example:
         // Tasks for this example:
            // 1) Count the number of people in our data
                function countThePeople(people) {
                  counter = 0; // Use accumulator to keep count
                  for(i = 0; i < people.length; i++){ // for loops to run through each index
                    counter++; //could also use counter+=1;
            // 2) For a given person, get their city
                 function getCity(person){
                   return person.city; // use dot operators to retrieve value from person object and city key.
                 }
            // 3) Find all of the people from a particular city
                  function findPeopleByCity(people, cityToMatch){
                    filteredPerson = []; // this is our accumulator
                    for(i = 0; i < people.length; i++){ // loop through all people
                      if(people[i].city === cityToMatch){ // if the city stored inside subject index equals to second parameter
                        filteredPerson.push(people[i])); // push the subject index into accumulator
                      }
                    }                 
                    return filteredPerson; // Return filtered person who fit conditional critera. Make sure return is located in correct scope!
                  }
                    
            // 4) Add a new like to a person (when you get more data)
                    function addLikeToPerson(people, nameToMatch, topic){ // function with 3 parameters
                      for(i = 0; i < people.length; i++){ // loop through
                        if(people[i].name === nameToMatch){ // if current person's name matches value in nameToMatch conditional
                          people[i].likes.push(topic); //push the value in topic into current person's likes key at the end.
                          return people[i]; // Why are we returning within the if function? 
                        }
                      }                   
                    }
            // 5) Count the number of people who like a specified topic
                    function countLikesByTopic(people, topic) { // let's find the number of people who liked a specific topic!
                      counter = 0; // use variable counter as our accumulator to keep count 
                      for(i = 0; i < people.length; i++){ // loop through all the people
                        for(j = 0; j < people[i].likes.length; j++){ // loop through collection of likes for that specific person
                        if(people[i].likes[j] === topic){ // if that person's likes equal the topic of parameter 2
                          counter++; // please increment our accumulator nameted counter
                          }
                        }
                      }
                      return counter; // give us back our answer
                    }
                    
             // Assessment example that took a while but ultimately got!
                function countByView(campgrounds, viewType){ // write a function taking in two paramenters
                    let oceanView = 0; // create an accumulator for one type of view
                    let forestView = 0; // create an accumulator for another type of view
                    for (let i = 0; i < campgrounds.length; i++){ //loop through the entir dataset
                      if(campgrounds[i].view === viewType){ // conditional to check if the value found in current index's 'view' key equals the second parameter input
                        oceanView++; // if view: "ocean" and equals viewType, add 1 to our first accumulator called oceanView
                        forestView++;//If view: "forest" and equals viewType, add 1 to our second accumulator calles forestView 
                      }
                    }
                  // Return our accumulated variables to find the answer
                  return oceanView; 
                  return forestView;
                }
                    
             // Campsites that are available to reserve
                    function availableCampsites(campgrounds, number){
                      let available = [];
                      for(let i = 0; i < campgrounds.length; i++){
                        if(campgrounds[i].isReserved === false){
                          available.push(number);
                        }
                      }
                      return available;
}
              
                    
              //another example:
                    function shouldWeOrderThisCandy(inventory, candyInput){ // create function name called "shouldWeOrderThisCandy" using inventory as parametr1 and candyInput as parameter 2
                      for i=0; i<inventory.length; i++{ // loop through inventory
                        if(inventory[i].candy === candyInput){ // find key values that match nameInput
                          if(inventory[i].inStock < inventory[i].weeklyAverage){ // if within an if to see inStock's relationship to weeklyaverage
                            return true;
                          }
                        }
                      }
                      return false; // after for loop has identify truthys, return all other outputs false
                    }
                  
               // another example: return the amount we should order
                    //create a function called candyOrderQuantity
                    function candyOrderQuantity(inventory, candyInput){
                      //set up accumulator named amountToBut to store our output in and later return
                      let amountToBuy = 0;
                      // for loop
                      for (let i=0; i<inventory.length; i++){
                        // conditional to find candy
                        if(inventory[i].candy === candyInput){
                          //conditional to find stock info
                          if(inventory[i].inStock < inventory[i].weeklyAverage){
                            // store weekly average times 2 into variable for cleaner code
                            order = inventory[i].weeklyAverage * 2; 
                            //add order to accumulator
                            amountToBuy += order;
                          }
                        }
                      }
                      //return our answer
                      return amountToBuy
                    }
                // another example: return an object to show how much of each candy to order
                    function allCandyOrders(inventory){ //create function with inventory array as parameter
                      let result = {}; //counter
                      for (let i=0; i<inventory.length; i++){ //loop through array
                        if (inventory[i].inStock < inventory[i].weeklyAverage) { // if inStock < weeklyAverage order weeklyAverage*2
                          result[inventory[i].candy] = inventory[i].weeklyAverage *2;
                      }
                        else{ //if inStock > weekly average or candy is not in array, return zero.
                        result[inventory[i].candy] = 0;
                        }
                      }
                      return result; //result will be object with candy in key and order in value
                    }
                    
// example: This is how to get the most expesive item in an array.
     function mostExpensiveItemName(items){
       let mostExpensive = "";
       let name;
       for(let i=0; i < items.length; i++){
         if(items[i].price > mostExpensive){
           mostExpensive = items[i].price;
           name = items[i].name;
         }
       }
       return name;
     }
        
 // example: Find the price of a single item lookup                
      function priceLookup(items, name){ // funciton with 2 parameters from an array of items and item name as a string
        let price;
        for(i=0; i<items.length; i++){ // loop through the array
          if(items[i].itemName===name){ // conditional to see if the input is in our array
            return items[i].price; // if item matches input, return the value it array item's key named "price
          }
        }
        return price; // if outside of the loop, return price as nothing was accumulated into our variable and will come back undefined.
      }
       
       
