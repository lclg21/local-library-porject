function findAccountById(accounts, id) {
  // Using find() per requirements to pass
  const account = accounts.find((acct) => acct.id === id);

  return account;
}

function sortAccountsByLastName(accounts) {
  // Using a ternary operator and helper function per requirements to pass
  accounts.sort((acctA, acctB) => convertStringToLowerCase(acctA.name.last) > convertStringToLowerCase(acctB.name.last) ? 1 : -1 );

  return accounts;
}

function getAccountFullNames(accounts) {
  // Using map() per requirements to pass
  const fullNamesArray = accounts.map((acct) => `${acct.name.first} ${acct.name.last}`);

  return fullNamesArray;
}

// Helper method for sortAccountsByLastName function
function convertStringToLowerCase(string) {
  return string.toLowerCase();
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
