// eslint-disable-next-line no-unused-vars
class DisplayBooks {
  books = [];

  booksContainer = document.getElementById('books-cont');

  addBook(book) {
    this.books.push(book);
    this.render();
  }

  // static removeBook() {

  // }

  render() {
    this.booksContainer.innerHTML = '';
    for (let i = 0; i < this.books.length; i += 1) {
      this.booksContainer.append(this.books[i].createNode());
    }
  }
}