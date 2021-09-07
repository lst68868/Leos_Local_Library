function findAuthorById(authors, id) {
  
  let foundAuthor = authors.find((author)=>author.id === id);
  return foundAuthor;
  
}

function findBookById(books, id) {
  
  let foundBook = books.find((book)=> book.id === id);
  return foundBook;
  
}

function partitionBooksByBorrowedStatus(books) {
 
 
  let returnedBooks = books.filter(book=> book.borrows[0].returned ===  true);
 
  
  let borrowedBooks = books.filter(book=> book.borrows[0].returned === false);
  
  let bookArray = [];
  bookArray.push(borrowedBooks);
  bookArray.push(returnedBooks);
 
  let map = bookArray.map(element => element);
  return map;
  
  
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.forEach(account=>{
    book.borrows.forEach(transaction=>{
      if(transaction.id === account.id){
        let accountObj = {...account};
        accountObj.returned =transaction.returned;
        borrowers.push(accountObj)
      }
    })
  })
  return borrowers.slice(0,10);
}
  
//  for(let i=0; i<book.borrows.length; i++){
//     idArray.push(book.borrows[i].id);
//  }
  
  
  
  
  


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
