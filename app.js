ui = new UI();
ls = new LS();

const submitButton = document.querySelector("#submit-book");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputISBN = document.querySelector("#isbn");
const table = document.querySelector("table");

submitButton.addEventListener("click", addBook);
table.addEventListener('click', deleteBook);
document.addEventListener('DOMContentLoaded', getBooks);

function addBook(e){
    const book = new Book(inputTitle.value, inputAuthor.value, inputISBN.value);
    ui.addBook(book.title, book.author, book.isbn);
    ls.addBook(book);
    book.addedToUI();
    e.preventDefault();
}
function deleteBook(e){
    let book = e.target.parentElement.firstChild;
    ui.deleteBook(book);
    book = e.target.parentElement.parentElement.children[2].innerText;
    ls.deleteBook(book);
}

function getBooks(e) {
    let books = ls.getData('books');
    ui.getBooks(books)
}