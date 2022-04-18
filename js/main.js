let books = [
  {
    title: 'Book 1',
    author: 'Author 1'
  },
  {
    title: 'Book 2',
    author: 'Author 2'
  },
  {
    title: 'Book 3',
    author: 'Author 3'
  },
];

let booksContainer = document.getElementById('books-cont');

function addBook(title, author) {
  books.push({title: title, author: author});
  console.log(books);
}

document.forms[0].onsubmit = function(event) {
  event.preventDefault();
  let thisForm = event.target;
  let author = thisForm[0].value;
  let title = thisForm[1].value;
  addBook(title, author);
}