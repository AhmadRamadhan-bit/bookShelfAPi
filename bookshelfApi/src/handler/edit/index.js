const bookS = require('../../data/index');

const editBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const updatedAt = new Date().toISOString();


    if (name === undefined) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        });
        response.code(400);
        return response; 
    } else if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }
    
    const index = bookS.findIndex((book) => book.id === bookId);

    if (index !== -1) {
        bookS[index] = {
            ...bookS[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt,
        };
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui'
        });
        response.code(200);
        return response;
    } else {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Id tidak ditemukan',
        });
        response.code(404);
        return response;
    }

}

module.exports = editBookByIdHandler;