const bookS = require('../../data/index');

const getBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    const book = bookS.find((n) => n.id === bookId);

    if (book !== undefined) {
        return {
            status: 'success',
            data: {
                book,
            },
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    });
    
    response.code(404);
    return response;
}

module.exports = getBookByIdHandler;