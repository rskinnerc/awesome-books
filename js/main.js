const books = [

];

const booksContainer = document.getElementById('books-cont');

const displayBooks = () => {
  booksContainer.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    const item = document.createElement('li');
    item.innerHTML = `<span class="title">${books[i].title}</span> by ${books[i].author} <br>`;
    const btn = document.createElement('button');
    const divider = document.createElement('hr');
    btn.setAttribute('data-index', i);
    btn.textContent = 'Remove';
    item.append(btn);
    item.append(divider);
    booksContainer.append(item);
  }
};

function addBook(title, author) {
  books.push({ title, author });
  displayBooks();
}

document.forms[0].onsubmit = (event) => {
  event.preventDefault();
  const thisForm = event.target;
  const title = thisForm[0].value;
  const author = thisForm[1].value;
  addBook(title, author);
};