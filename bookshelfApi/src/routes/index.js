const addBooksHandler = require('../handler/addBooks/index');
const getAllBooksHandler = require('../handler/getAllBooks/index');
const getBookByIdHandler = require('../handler/getBookById/index');
const editBookByIdHandler = require('../handler/edit/index');
const deleteBookByIdHandler = require('../handler/delete/index');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByIdHandler,
    },
    {
        method: '*',
        path: '/{any*}',
        handler: () => 'Halaman tidak ditemukan'
    }
];

module.exports = routes;