// eslint-disable-next-line no-unused-vars
class DisplayBooks {
  books = [];
  booksContainer = document.getElementById('books-cont');
  constructor() {
    if(localStorage.getItem('books')){
      this.books = JSON.parse(localStorage.getItem('books')).map((book)=> {
        return new Book(book.title, book.author, book.id);
      });
    }
  }

  addBook(book) {
    this.books.push(book);
    this.render();
    this.saveBooks();
  }

  removeBook(id) {
    this.books = this.books.filter((book)=> {
      return book.id !== id;
    });
    this.render();
    this.saveBooks();
  }

  render() {
    this.booksContainer.innerHTML = '';
    for (let i = 0; i < this.books.length; i += 1) {
      this.booksContainer.append(this.books[i].createNode());
    }
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}