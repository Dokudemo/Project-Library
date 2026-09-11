const main = document.querySelector('main');
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



// изменение кнопки статуса Read/Unread + удаление манги
main.addEventListener('click', (e) => {
    const deleteButton = e.target.closest('.delete');
    
    if(deleteButton) {
        const card = deleteButton.closest('.card');
        const bookId = card.dataset.id;

        card.remove()
    }

    const readButton = e.target.closest('.read');

    if(readButton) {
        readButton.textContent = readButton.textContent === 'Read'? 'Unread': 'Read';

        readButton.classList.toggle('unread');
    }


});


// Открытие формы на кнопку Add Manga + reset формы при повторном открытии
addBtn.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
    
})

// Открытие формы на карточку с плюсом + reset формы при повторном открытии
addCard.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
})

// Закрытие на клик за областью формы или при нажатии на cancel
dialog.addEventListener('click', (e) => {

    const buttonCancel = document.querySelector(
        'button[value="cancel"]'
    );

    if (e.target === dialog || e.target == buttonCancel) {
        dialog.close();
    }
});


// Основной массив с книгами
let myLibrary = []

// Конструктор книг c проверкой
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
    return library.push(book);
}

dialog.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const img = imgInput.value;
    const imgUrl = imgInput.value;
    const selectedReadInput = document.querySelector(
    'input[name="read"]:checked'
    );

    // Добавление книги пользователем
    const newBook = new Book(title, author, pages, selectedReadInput.value, img);

    AddBookToLibrary(newBook, myLibrary);
    dialog.close("add");

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.dataset.id = newBook.id;

    const mangaTitle = document.createElement('div');
    mangaTitle.classList.add('title');
    mangaTitle.textContent = title;
    
    const mangaAuthor = document.createElement('div');
    mangaAuthor.classList.add('author');
    mangaAuthor.textContent = author;

    const pagesDiv = document.createElement('div');
    pagesDiv.classList.add('pages');
    pagesDiv.textContent = `${pages} pages`;

    const buttonReadStatus = document.createElement('button');
    buttonReadStatus.classList.add('read');
    buttonReadStatus.textContent = 'Read'

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete');
    buttonDelete.textContent = 'Delete';

    const imgCover = document.createElement('img');
    imgCover.src = imgUrl;

    

    cardDiv.append(imgCover, buttonDelete, buttonReadStatus, pagesDiv, mangaTitle, mangaAuthor);
    cardsContainer.insertBefore(cardDiv, newcard);

    console.log(document.querySelectorAll('.card'));
    console.log(myLibrary);
});