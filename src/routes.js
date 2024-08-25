const addBookHandler = require("./handler/addBook");
const getAllBooksHandler = require("./handler/getAllBook");
const getBookByIdHandler = require("./handler/getBookById");

const routes = [
    {
        method: "POST",
        path: "/books",
        handler: addBookHandler,
    },
    {
        method: "GET",
        path: "/books",
        handler: getAllBooksHandler,
    },
    {
        method: "GET",
        path: "/books/{bookId}",
        handler: getBookByIdHandler,
    }
];

module.exports = routes;