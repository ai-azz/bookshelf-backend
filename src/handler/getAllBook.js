const books = require("../books");

const getAllBooksHandler = (request, h) => {
    const { name } = request.query;
    let filteredBooks = books;

    if(name) {
        // filter book contains name, non-case sensitive
        filteredBooks = books.filter((book) =>
            book.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    const responseBooks = filteredBooks.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
    }));

    const response = h.response({
        status: "success",
        data: {
            books: responseBooks,
        }
    });
    return response;
};

module.exports = getAllBooksHandler;