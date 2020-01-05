var Book = require('./book.js');


class Author {
  constructor(newAuthor){
    this.first = newAuthor.first;
    this.last = newAuthor.last;
    this.books = [];
  }
  write(title, year){
    var newBook = new Book(this.first, this.last, title, year)
    this.books.push(newBook);
    return newBook;

  }
}
module.exports = Author;
