const addBtn = document.querySelector('#open-dialog');
const addCard = document.querySelector('.newcard');
const dialog = document.querySelector('#manga-dialog');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages')
const imgInput = document.querySelector('#image');
const cardsContainer = document.querySelector('.cards');
const newcard = document.querySelector('.newcard');
const form = document.querySelector('#manga-dialog form');

addBtn.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
    
})
addCard.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
})

dialog.addEventListener('click', (e) => {

    const buttonCancel = document.querySelector(
        'button[value="cancel"]'
    );

    if (e.target === dialog || e.target == buttonCancel) {
        dialog.close();
    }
});
dialog.addEventListener('close', () => {
    console.log('Dialog result:', dialog.returnValue)
})

// Основной массив с книгами
const myLibrary = []

// Конструктор книг
function Book(title, author, pages,readStatus, imgScr) {

    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = readStatus;
    this.imageScr = imgScr;
    this.id = crypto.randomUUID();
}

// Функция добавление книги в массив
function AddBookToLibrary(book, library) {
    library.push(book);
}

dialog.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.submitter.value === 'cancel') {
        dialog.close();
        return;
    }


    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const img = imgInput.value;
    const imgUrl = imgInput.value;
    const selectedReadInput = document.querySelector(
    'input[name="read"]:checked'
    );

    const newBook = new Book(title, author, pages, selectedReadInput.value, img);

    AddBookToLibrary(newBook, myLibrary);
    dialog.close("add");

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const pagesDiv = document.createElement('div');
    pagesDiv.classList.add('pages');
    pagesDiv.textContent = `${pages} pages`;

    const buttonReadStatus = document.createElement('button');
    buttonReadStatus.classList.add('change');
    buttonReadStatus.textContent = 'Read'

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete');
    buttonDelete.textContent = 'Delete';

    const imgCover = document.createElement('img');
    imgCover.src = imgUrl;

    cardDiv.append(imgCover, buttonDelete, buttonReadStatus, pagesDiv);
    cardsContainer.insertBefore(cardDiv, newcard);

    console.log(myLibrary);
});