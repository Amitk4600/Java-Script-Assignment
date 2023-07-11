function booksTitle(books,callback){
    const titles = books.map(function(book){
        return book.title;
    });

    titles.sort();
    callback(titles)
}

let books=[
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
  ];

  function logTitles(titles){
    console.log("Book titles in alphabetical order:");
    titles.forEach(function (title){
console.log(title);        
    });
  }

  booksTitle(books,logTitles)