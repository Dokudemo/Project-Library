const addBtn = document.querySelector('#open-dialog');
const addCard = document.querySelector('.newcard');
const dialog = document.querySelector('#manga-dialog');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages')

addBtn.addEventListener('click', () => {
    dialog.showModal();
})
addCard.addEventListener('click', () => {
    dialog.showModal();
})

dialog.addEventListener('close', () => {
    console.log('Dialog result:', dialog.returnValue)
})

// Основной массив с книгами
const myLibrary = []

// Конструктор книг
function Book(title, author, pages,readStatus) {

    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = readStatus;
    this.id = crypto.randomUUID();
}

// Функция добавление книги в массив
function AddBookToLibrary(book, library) {
    library.push(book);
}

dialog.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const selectedReadInput = document.querySelector(
    'input[name="read"]:checked'
    );

    const newBook = new Book(title, author, pages, selectedReadInput.value);

    AddBookToLibrary(newBook, myLibrary);
    dialog.close("add");

});