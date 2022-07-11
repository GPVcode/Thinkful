const findAuthorById = (authors, id) => {
  return authors.find((author) => author.id === id) 
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

//Build two arrays and put them into one array
function partitionBooksByBorrowedStatus(books) {
  //first, create array of borrowed books that have not been returned
  let borrowedBooks = books.filter((book) => book.borrows[0].returned === false )
  //Second, create an array of borrowed books that have been returned
  let returned = books.filter((book) => book.borrows[0].returned === true)
  return [borrowedBooks, returned]; //return our arrays inside an array
  }


//HELP
function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrows) => {
    let account = accounts.find((account) => account.id === borrows.id); //go into book.borrows and use map to create an array of accounts inside of book.borrows where account.id matches borrows.id
    return{ ...borrows, ...account};
  });
  return result.slice(0,10);
}
                     
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
