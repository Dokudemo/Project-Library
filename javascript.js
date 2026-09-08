function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`;
    }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');

console.log(book1.info())

const book2 = new Book('Зеленый слоник', 'Пахом', 200, 'read')

console.log(book2.info())