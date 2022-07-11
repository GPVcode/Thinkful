function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => { //reduce our data to a single number
    return acc + book.borrows.filter(notReturned => notReturned.returned === false).length; //notReturned holds the values in its 'returned' key that are equal to false. Get the length of this outcome.
  }, 0);
}  


function getMostCommonGenres(books) {
  let obj = {};
  books.forEach((book)=>{
    if(obj[book.genre]){
      obj[book.genre]++;
    } else {
      obj[book.genre] = 1
    }
  });
  let genreCount = [];
  for (let [key, value] of Object.entries(obj)) {
    genreCount.push({
      'name' : key,
      'count' : value
    });
  }
  genreCount.sort((a,b) => b.count - a.count);
  return genreCount.slice(0,5);
}


function getMostPopularBooks(books) {
  let obj = {};
  books.forEach((book)=>{
    if(obj[book.borrows]){
      obj[book.borrows]++;
    } else {
      obj[book.borrows] = 1
    }
  });
  let borrowCount = [];
  for (let [key, value] of Object.entries(obj)){
    borrowCount.push({
      'name' : key,
      'count' : value
    });
  }
  borrowCount.sort((a,b) => b.count - a.count);
  return borrowCount.slice(0,5);
}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
