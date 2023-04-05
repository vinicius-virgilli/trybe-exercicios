const { books } = require('./library');

// Requisito 1
const fantasyOrScienceFiction = () => {
  const enchendoLinguica = true;
  if (enchendoLinguica) {
    return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  }
};

const oldBooksOrdered = (year) => {
  const booksOrdered = books.sort((a, b) => {
    if (a.releaseYear < b.releaseYear) {
      return -1;
    }
    if (a.releaseYear > b.releaseYear) {
      return 1;
    }
    return 0;
  });
  return booksOrdered.filter((book) => year - book.releaseYear > 60);
};

const booksByAuthorBirthYear = (birthYear) => {
  const booksWanted = [];
  books.forEach((book) => {
    if (book.author.birthYear === birthYear) {
      booksWanted.push(book.name);
    }
  });
  return booksWanted;
};

const fantasyOrScienceFictionAuthors = () => {
  const authorsWanted = [];
  books.forEach((book) => {
    if (book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
      authorsWanted.push(book.author.name);
    }
  });
  return authorsWanted.sort();
};

const oldBooks = (year) => {
  const booksWanted = [];
  books.forEach((book) => {
    if ((year - book.releaseYear) > 60) {
      booksWanted.push(book.name);
    }
  });
  return booksWanted;
};

const authorWith3DotsOnName = () => {
  let bookName = '';
  books.forEach((book) => {
    const name = book.author.name.split('');
    if (name.filter((letra) => letra === '.').length === 3) {
      bookName = book.name;
    }
  });
  return bookName;
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
