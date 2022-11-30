class LS {
    getData(name){
        let data;
        if (localStorage.getItem(name) === null){
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem(name));
        }
        return data;
    }

    setData(name, data){
        localStorage.setItem(name, JSON.stringify(data));
    }
    addBook(book) {
        let books = this.getData("books");
        books.push(book);
        this.setData("books", books);
        book.addedToLS();
    }

    deleteBook(book) {
        let books = this.getData("books");
        books.forEach(function (booksElement, booksIndex){
            if (booksElement.isbn === book) {
                books.splice(booksIndex, 1);
            }
        });
        this.setData("books", books);
    }
}