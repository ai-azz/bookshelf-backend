const books = require("../books");

const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;
    let filteredBooks = books;

    if(reading !== undefined) {
        // filter book is reading or not
        const isReading = reading === "1";  // convert string '1' or '0' to boolean
        filteredBooks = filteredBooks.filter((book) => book.reading === isReading);
    }

    if(finished !== undefined) {
        // filter book is finished reading or not yet
        const isfinished = finished === "1";
        filteredBooks = filteredBooks.filter((book) => book.finished === isfinished);
    }
    
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