function findAccountById(accounts, id) {
  //loop through accounts data
  for (let i = 0; i < accounts.length; i++){
  //if ids match, return the matching object
  if (id === accounts[i].id){
    //add to object
    return(accounts[i]);
      }
    }
  //return 
  return {}
  }
  
  function sortAccountsByLastName(accounts) {
    
    let sortedAccounts = accounts.sort((account1, account2)=> account1.name.last > account2.name.last ? 1: -1)
    return sortedAccounts;
    
  }
  
  function getTotalNumberOfBorrows(account, books) {
  
  //return every book object's borrows array
   
    let bookBorrows = [];
   books.forEach((book) => bookBorrows.push(book.borrows));
   let count = 0;
    
   for(let i=0; i<bookBorrows.length; i++){
     for(let j=0; j<bookBorrows[i].length; j++){
       if(bookBorrows[i][j].id === account.id){
         count +=1;
         }
       }
     }
    return count;
  }
    
  function getBooksPossessedByAccount(account, books, authors) { 
    const bookBorrows  = [];
    //iterate though each each book 
    function bookPush(book, array) {
      array.push(book)
    }
    books.forEach((book) => {
    //if borrowId === accountID and the book has not been returned
      if(!book.borrows[0].returned && book.borrows[0].id === account.id) {
        bookPush(book, bookBorrows);
      }
    })
    bookBorrows .forEach((result) => {
      const authorMatch = authors.find((author) => result.authorId === author.id);
      result.author = authorMatch;
    })
    console.log(bookBorrows );
    //return list of books borrowed and add author info to book
    return bookBorrows ;
  }
  
  
    
  module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
  };
  