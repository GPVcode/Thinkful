//Here are the notes I took on my command line for this lesson.
$ node
Welcome to Node.js v16.15.1.
Type ".help" for more information.
> const title = "Guards! Guards!";
undefined
> title.split("!");
[ 'Guards', ' Guards', '' ]
> title.split("");
[
  'G', 'u', 'a', 'r',
  'd', 's', '!', ' ',
  'G', 'u', 'a', 'r',
  'd', 's', '!'
]
> title.split("guards");
[ 'Guards! Guards!' ]
> const titleArr =["The", "Light", "Fantastic"];
undefined
> titleArr.join("-");
'The-Light-Fantastic'
> //we decided where to split
undefined
> //we decide where to join
undefined
Uncaught SyntaxError: missing ) after argument list
> titleArr.join("_-_");
'The_-_Light_-_Fantastic'
> titleArr.join();
'The,Light,Fantastic'
> titleArr.join("       v        ")
'The       v        Light       v        Fantastic'
> //template literals allow you to embed expressions and avoid using multiple + operators just to join
 a string.
undefined
> //example:
undefined
> function bookSale(title, priceInCents){
... const price = (priceInCents / 100).toFixed(2);
... return
return

Uncaught SyntaxError: Invalid or unexpected token
> function bookSale(title, priceInCents) {
...   const price = (priceInCents / 100).toFixed(2);
...   return `${titleize(title)} is on sale for $${price}.`;
... }
undefined
> `${titleize(title)} is on sale for $${price}.` //is the syntax of template literal
Uncaught ReferenceError: titleize is not defined
> `The price of ${title} by $${author} is $$${price}.` //WRONG LOL
Uncaught ReferenceError: author is not defined
> //Solution: `The price of '${title}' by ${author} is $${price}.`;
undefined
>
  
// 8.5 ASSESSMWENT

/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function listAllItems(products) {

  if(products.length === 0){
    return `There are no items for sale.`  
  }
  
  let items = [];
  let itemsCount = 0;
  
  for(let i = 0; i < products.length; i++){ 
    itemsCount++;
    items.push(products[i].name);
  }
  if(items.length === 1){
    return "There is 1 item for sale: " + items[0] + ".";
  }
  if(items.length === 2){
    return "There are 2 items for sale: " + items.join(" and ") + ".";
  }
  if(items.length > 2){
    return `There are ${itemsCount} items for sale: ` + items.join(", ") + ".";
  }

} //function closing bracket
module.exports = {
  listAllItems,
};
