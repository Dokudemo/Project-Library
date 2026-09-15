# Project-Library

The application allows users to manage a personal manga collection: add new manga, remove manga cards, and change the reading status of each manga.

## Live Demo

Live Preview: (https://dokudemo.github.io/Project-Library/)

## Screenshot
./ad/project-preview.png

## Features

- Display a collection of manga cards
- Add a new manga through a modal form
- Add manga title, author, number of pages, cover image URL, and reading status
- Generate a unique ID for every new manga with `crypto.randomUUID()`
- Remove a manga card from the page
- Remove the corresponding manga object from the `myLibrary` array
- Toggle manga reading status between `Read` and `Unread`
- Update the reading status in both the interface and the `myLibrary` array
- Reset the form when reopening the modal
- Close the modal by clicking outside it or pressing the Cancel button
- Responsive card layout built with CSS Grid

## Built With

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- HTML `<dialog>` element
- JavaScript constructors
- Event delegation
- Array methods: `push()`, `find()`, and `filter()`
- Git and GitHub

## What I Practiced

This project helped me practice:

- Creating objects with a constructor function
- Storing objects inside an array
- Creating unique IDs with `crypto.randomUUID()`
- Connecting DOM elements to JavaScript data with `data-id`
- Using event delegation with one click listener on `<main>`
- Finding a specific book object with `find()`
- Updating object properties such as `readStatus`
- Removing an item from an array with `filter()`
- Creating and inserting DOM elements dynamically
- Working with forms and preventing default form submission
- Using a modal dialog with `showModal()` and `close()`
