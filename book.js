class Book {
  constructor(first, last, title, publicationYear) {
    this.author = `${first} ${last}`;
    this.title = title;
    this.publicationYear = publicationYear;
}
}
module.exports = Book;
