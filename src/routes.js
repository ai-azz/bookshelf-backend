const addBookHandler = require("./handler/addBook");
const editBookByIdHandler = require("./handler/editBookById");
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
    },
    {
        method: "PUT",
        path: "/books/{bookId}",
        handler: editBookByIdHandler,
    }
];

module.exports = routes;