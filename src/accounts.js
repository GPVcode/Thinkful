//Computer, please bring up account that match given ID parameter in our accounts array
const findAccountById = (accounts, id) => {
  return accounts.find((account) => account.id === id); //Use find function to run through given index and perform comparative function
}

//should return the list of accounts ordered by last name try sort method
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    const lastNameA = accountA.name.last;
    const lastNameB = accountB.name.last;
    return lastNameA.toLowerCase() < lastNameB.toLowerCase() ? -1 : 1;
  });
}

// get total number of borrows from one particular account
const getTotalNumberOfBorrows = (account, books) => {
  //first, initialize a variable to 0 (later incrementing)
  let initialValue = 0;
  books.forEach((book) => { //provide a function once for each array element
    let borrowedBooks = book.borrows.filter((borrower) => borrower.id === account.id) //filter the books with id that matches account id
    initialValue += borrowedBooks.length //add borrowed books return into initialValue
  })
  return initialValue
}

//return an array of book objects representing all books currently checked out by given account
function getBooksPossessedByAccount(account, books, authors) {
  let result = books.filter((book) => { //find the books with matching id and returned is false
  return book.borrows.some((borrow) => borrow.id === account.id && !borrow.returned);
  });
  //iterate over the result using map function and find author with result book id
  return result.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
     //get books information where book.author is === author id
    const newBook = { ...book, author}; //use spread operator to add  new field to an existing data
    return newBook;
  }); //return array of objects containing both author and book information
}

    //First find the books borrows where borrow is is account id and books not returned
  //second find all books checked out by account
  //Third return all the book ids in accounts that match all book account
  
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
