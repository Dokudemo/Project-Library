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


// Main array of books
let myLibrary = []

// Previous billboard (which is already on the website)
let prevLibrary = [
    {
        id: '3aa12e16-151f-4973-b3b1-7df91e307129',
        title: 'Goodbye Eri',
        author: 'Tatsuki Fujimoto',
        pages: 390,
        imgScr: './covers/Goodbye Eri.jpg',
        readStatus: true,
    },
    {
        id: '7c34b9d2-6a81-4cf8-91e5-2f0d7a8c53b4',
        title: 'I need answer!',
        author: 'Mado Nozaki',
        pages: 812,
        imgScr: "./covers/I need answer!.jpg",
        readStatus: true,
    },
    {
        id: 'e18f4260-9d73-4b35-a6cf-0b1e54d82967',
        title: 'Kaijuu N8!',
        author: 'Naoya Matsumot',
        pages: 456,
        imgScr: "./covers/Kaijuu8.jpg",
        readStatus: true,
    },
    {
        id: '42d8ca91-f7e3-46a0-8b62-c39f0d17e5ab',
        title: 'Mob Psycho 100',
        author: 'Hiroshi Seko',
        pages: 910,
        imgScr: "./covers/Mob100.jpg",
        readStatus: true,
    },
    {
        id: 'b6e90a47-2cfd-4e18-9a73-85db1f64c0e2',
        title: 'One Peace',
        author: 'Eiichiro Oda',
        pages: 998,
        imgScr: "./covers/onePeace.jpg",
        readStatus: true,
    },
    {
        id: '9f1c7d58-3a64-4b9e-b2f0-6d8a15ce4793',
        title: 'OverLoard',
        author: 'Kugane Maruyama',
        pages: 310,
        imgScr: "./covers/overloard.jpg",
        readStatus: true,
    },
    {
        id: 'c5a27e80-81fd-49c6-94b3-e70d2a8f1569',
        title: 'Paradise',
        author: 'Yuji Kaku',
        pages: 240,
        imgScr: "./covers/Paradise.jpg",
        readStatus: true,
    },
]

// Add each book to the main library
for ( let book of prevLibrary) {
    myLibrary.push(book)
}

// Change the Read/Unread status button + delete manga
main.addEventListener('click', (e) => {
    const deleteButton = e.target.closest('.delete');
    
    if(deleteButton) {
        const card = deleteButton.closest('.card');
        const bookId = card.dataset.id;

        card.remove()
        myLibrary = myLibrary.filter((book) => book.id !== bookId);

    }

    const readButton = e.target.closest('.read');

    if(readButton) {
        const card = readButton.closest('.card');
        const bookId = card.dataset.id;

        const book = myLibrary.find((book) => book.id === bookId);

        if (book) {
        book.readStatus = !book.readStatus;

        readButton.textContent = book.readStatus ? 'Read' : 'Unread';
        readButton.classList.toggle('unread', !book.readStatus);
        }
    }
});


// Open the form when the “Add Manga” button is clicked + reset the form when it is reopened
addBtn.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
    
})

// Open the form for the card with a plus sign (+) and reset the form when it is reopened
addCard.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
})

// Close when the user clicks outside the form or clicks “Cancel”
dialog.addEventListener('click', (e) => {

    const buttonCancel = document.querySelector(
        'button[value="cancel"]'
    );

    if (e.target === dialog || e.target == buttonCancel) {
        dialog.close();
    }
});

// Book constructor with validation
function Book(title, author, pages,readStatus, imgScr) {

    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.readStatus = readStatus;
    this.imgScr = imgScr;
    this.id = crypto.randomUUID();
}

// Function to add a book to an array
function AddBookToLibrary(book, library) {
    return library.push(book);
}

dialog.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const imgUrl = imgInput.value;
    const selectedReadInput = document.querySelector(
    'input[name="read"]:checked'
    );

    // Adding a book by a user
    const newBook = new Book(title, author, pages, selectedReadInput.value, imgUrl);

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
});