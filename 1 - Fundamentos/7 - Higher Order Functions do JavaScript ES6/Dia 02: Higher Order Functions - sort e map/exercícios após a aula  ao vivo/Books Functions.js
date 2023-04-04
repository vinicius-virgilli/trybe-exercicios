const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const formatedBookNames = () => {
  const booksFormated = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  return booksFormated;
};

//----------------------------------------------

const formatedAuthorNamesBirth = () => {
  const authorFormated = books.map((book) => `${book.author.name} - ${book.author.birthYear}`);
  return authorFormated;
};

//------------------------------------------

const nameAndAge = () => {
  const authorInformations = [];
  books.forEach((book) => {
    authorInformations.push({
      author: book.author.name,
      age: (book.releaseYear - book.author.birthYear),
    });
  });
  return authorInformations.sort((a, b) => {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  });
};

//-----------------------------

