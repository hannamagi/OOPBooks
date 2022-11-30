class UI {
    addBook(title, author, isbn) {
        const table = document.querySelector("table");
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell();
        const cell2 = newRow.insertCell();
        const cell3 = newRow.insertCell();
        const cell4 = newRow.insertCell();

        const cross = document.createElement('a');
        cross.appendChild(document.createTextNode('X'));
        cross.className = 'blue-text text-darken-2';
        cross.setAttribute('href', '#');

        cell1.innerHTML = title;
        cell2.innerHTML = author;
        cell3.innerHTML = isbn;
        cell4.appendChild(cross);
    }
    deleteBook(book) {
        if (book.textContent === "X") {
            if (confirm("Delete this book?")) {
                book.parentElement.parentElement.remove();
            }
        }
    }
    getBooks(books) {
        for (let i = 0; i < books.length; i++) {
            const getRow = table.insertRow();

            const getCell1 = getRow.insertCell();
            const getCell2 = getRow.insertCell();
            const getCell3 = getRow.insertCell();
            const getCell4 = getRow.insertCell();

            const getCross = document.createElement('a');
            getCross.appendChild(document.createTextNode('X'));
            getCross.className = 'blue-text text-darken-2';
            getCross.setAttribute('href', '#');

            getCell1.innerHTML = books[i].title.toString();
            getCell2.innerHTML = books[i].author.toString();
            getCell3.innerHTML = books[i].isbn.toString();
            getCell4.appendChild(getCross);
        }
    }
}