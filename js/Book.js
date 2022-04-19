// eslint-disable-next-line no-unused-vars
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = new Date().getMilliseconds();
  }

  createNode() {
    const node = document.createElement('li');
    node.innerHTML = `
        <span>${this.title}</span> by ${this.author} <button onclick="DisplayBooks.removeBook(${this.id})">Remove</button>
    `;

    return node;
  }
}