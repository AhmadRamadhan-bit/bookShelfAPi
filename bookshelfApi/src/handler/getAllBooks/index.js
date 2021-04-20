const bookS = require('../../data/index');

const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;
  
    if (!name && !reading && !finished) {
      
      const response = h
        .response({
          status: 'success',
          data: {
            books: bookS.map((book) => ({
              id: book.id,
              name: book.name,
              publisher: book.publisher,
            })),
          },
        })
        .code(200);
  
      return response;
    }
  
    if (name) {
      const filteredBooksName = bookS.filter((book) => {
        
        const nameRegex = new RegExp(name, 'gi');
        return nameRegex.test(book.name);
      });
  
      const response = h
        .response({
          status: 'success',
          data: {
            bookS: filteredBooksName.map((book) => ({
              id: book.id,
              name: book.name,
              publisher: book.publisher,
            })),
          },
        })
        .code(200);
  
      return response;
    }
  
    if (reading) {
      
      const filteredBooksReading = bookS.filter(
        (book) => Number(book.reading) === Number(reading),
      );
  
      const response = h
        .response({
          status: 'success',
          data: {
            bookS: filteredBooksReading.map((book) => ({
              id: book.id,
              name: book.name,
              publisher: book.publisher,
            })),
          },
        })
        .code(200);
  
      return response;
    }
  
    
    const filteredBooksFinished = bookS.filter(
      (book) => Number(book.finished) === Number(finished),
    );
  
    const response = h
      .response({
        status: 'success',
        data: {
          bookS: filteredBooksFinished.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
        },
      })
      .code(200);
  
    return response;
};

module.exports = getAllBooksHandler;