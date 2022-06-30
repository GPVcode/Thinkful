// $ node
// Welcome to Node.js v16.15.1.
// Type ".help" for more information.
> //Today, we are taking a closer look at control flow and identifying simpler ways of using if/else


> //Traditional
undefined
> function getPrice(product){
... let price = product.priceInCents;
... if (product.onSale) {
..... price = price * 0.9;
..... }
... return price;
... }
undefined
> const product = {
... priceInCents: 2100,
... name: "Red Beanie",
... size: "L",
... onSale: true,
... };
undefined
> getPrice(product);
1890


> //simpler way to write our getPrice(product) function
> function getPrice(product){
... let price = product.priceInCents;
... if(product.onSale) price = price * 0.9;
... return price;
... }
//NOTE: Use line consolidation techniques like this in your own code if the content inside the block is very short. Otherwise, it will be too difficult to read.

  
// The conditonal operator
// (conditional expression) ? (expression if true) : (expression if false)

> function getPrice(product){
... return product.onSale ? product.priceInCents * 0.9 : product.priceInCents; // if product.onSale is truthy : if product.onSale is falsy
... }
