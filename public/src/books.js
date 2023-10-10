function findAuthorById(authors, id) {
  // Using find() per requirements to pass
  const authorById = authors.find((author) => author.id === id);

  return authorById;
}

function findBookById(books, id) {
  /* 
  Another possible solution: 
  const bookById = books.find((book) => book.id === id); 
  */

  // Using a for/in loop per requirements to pass
  const bookArray = [];
  for (let index in books) {
    const book = books[index];
    if (book.id === id) {
      bookArray.push(book);
    }
  }

  return bookArray[0];
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
