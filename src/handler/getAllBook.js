const books = require("../books");

const getAllBooksHandler = () => {
    const responseBooks = books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
    }));

    return {
        status: "success",
        data: {
            books: responseBooks,
        },
    };
};

module.exports = getAllBooksHandler;