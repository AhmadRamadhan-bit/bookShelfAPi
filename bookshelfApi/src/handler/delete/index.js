const bookS = require('../../data/index');

const deleteBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    const index = bookS.findIndex((book) => bookId);

    if (index !== -1) {
        bookS.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
}

module.exports = deleteBookByIdHandler;