 const prompt   = require("prompt-sync")({sigint:true});

 let books = [];
 let bookNum = parseInt(prompt("how many books do you want to add : "));

 for (let i = 1; i < bookNum; i++){
    let book = {};
    book.title = prompt(`Enter the title of books ${i}`);
    book.author = prompt(`Enter the author of books ${i}`);
    book.year = parseInt (prompt(`Enter the year of books ${i}`));

    books.push(book);
 }

 // filter books and Author name capitalize 

 let filterBooks  = books.filter(book => book.year >= 2010).map(book => {
    return {
        title: book.title,
        author: book.author.charAt(0).toUpperCase() + book.author.slice(1),
        year: book.year
    };
 });

 console.log(filterBooks);