let display;

window.onload = () => {
  // eslint-disable-next-line no-undef
  display = new DisplayBooks();
  display.render();
};

document.forms[0].onsubmit = (event) => {
  event.preventDefault();
  const thisForm = event.target;
  const title = thisForm[0].value;
  const author = thisForm[1].value;
  // eslint-disable-next-line no-undef
  const newBook = new Book(title, author);
  display.addBook(newBook);
  thisForm.reset();
};

function changePage(link) {
  let sections = document.querySelectorAll('section');
  sections.forEach( (section) => {
    if(section.classList.contains(link)) {
      section.classList.remove('hidden');
    }
    else {
      section.classList.add('hidden');
    }
  });
}

let pageLinks = document.querySelectorAll('[data-section]');

pageLinks.forEach((link)=> {
  link.onclick = (event) => {
    event.preventDefault();
    changePage(link.dataset.section);
  }
});
