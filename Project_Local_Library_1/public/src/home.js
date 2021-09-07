function getTotalBooksCount(books) {
  
  
  let count = 0;
  for(let i=0; i<books.length; i++){
    count++
  }
  return count;
}

function getTotalAccountsCount(accounts) {
  

  
  let count = 0;
  for(let i=0; i<accounts.length; i++){
    count++
  }
  return count;
}

function getBooksBorrowedCount(books) {
  
  let count =0;
  for(let i=0; i<books.length; i++){
    if(books[i].borrows[0].returned === false){
      count++
    }
  }
  return count;
}

function getMostCommonGenres(books) {
  //create the empty array
  let genreList = []; 
//   Use the for each method to find the genre exits or not, next pass the condition whether genre exist or not, if exists then push into the empty array.
  books.forEach((book) => {
    let genreExists = genreList.find((genre) => genre.name === book.genre)

   if (!genreExists) {
      genreList.push({ name: book.genre, count: 1 });
    } else {
      genreExists.count += 1;
    }
  })
  //Next use the sort and slice method in order to trim the list to only the top 5.
  let result = genreList.sort((a,b) => b.count - a.count);
  result = genreList.slice(0,5);
  return result;
}





function getMostPopularBooks(books) {
  const result =[];
  const borrows = books.reduce((acc, book)=>  { 
    result.push({ name: book.title, count: book.borrows.length 
                }); }
  , []);
 return result.sort((a,b) => b.count - a.count).slice(0, 5);
  
  
}

function getMostPopularAuthors(books, authors) {
  let arr = [];
  for(let i=0; i<authors.length; i++){
    let author = {};
    author.name = `${authors[i].name.first} ${authors[i].name.last}`
    author.count = 0
    for(let j=0; j<books.length; j++){
      if(books[j].authorId===authors[i].id){
        author.count += books[j].borrows.length
      }
      
     }
    arr.push(author)
    }
   const final = arr.sort((auth1, auth2)=> auth1.count <auth2.count ? 1:-1)
  return final.slice(0,5) 
  }

  

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
