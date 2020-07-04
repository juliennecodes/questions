let libraryAccounts = [];

class Account{
  constructor(name, libraryCardNumber){
    this.name = name;
    this.libraryCardNumber = libraryCardNumber;
    this.borrowedBooks = [];
  }
}

function createNewAccount(name, libraryCardNumber){
  return new Account(name, libraryCardNumber);
}

function registerNewAccount(account){
  return libraryAccounts.push(account);
}
//------------------------------------------------------------------------------
let books = [];

class Book{
  constructor(title){
    this.title = title;
    this.available = true;
  }

  borrow(){return this.available = false;}

  return(){return this.available = true;}

}

function createNewBooks(title){
  return new Book(title);
}
function addNewBooksToLibrary(book){
  books.push(book);
}
//------------------------------------------------------------------------------
//Assets
//Creating new accounts
let giJoe = createNewAccount("G.I Joe", 203001);
registerNewAccount(giJoe);

let lemonySnicket = createNewAccount("Lemony Snicket", 203002);
registerNewAccount(lemonySnicket);

//Creating new books
let artemisFowl = new Book("Artemis Fowl");
addNewBooksToLibrary(artemisFowl);

let harryPotter = new Book("Harry Potter and the Philosopher's Stone");
addNewBooksToLibrary(harryPotter);

let ersatzElevator = new Book("The Ersatz Elevator");
addNewBooksToLibrary(ersatzElevator);

let dirtyJob = new Book("A Dirty Job");
addNewBooksToLibrary(dirtyJob);

//------------------------------------------------------------------------------
console.log(libraryAccounts);
console.log(books);

//------------------------------------------------------------------------------
function isRegisteredAccount(account){
  try {
    if (libraryAccounts.includes(account)) return true;
    else throw new Error();
  } catch(e){
    return `${account.name} is not registered in this library. Please talk to the librarian to open a new library account.`;
  }
}
//testing
//happy scenario
isRegisteredAccount(giJoe);
console.log(isRegisteredAccount(giJoe));

//error scenario
let lizLemon = createNewAccount("Liz Lemon", 203003);
isRegisteredAccount(lizLemon);
console.log(isRegisteredAccount(lizLemon));

//------------------------------------------------------------------------------
function isOwnedByLibrary(book){
  try {
    if(books.includes(book)) return true;
    else throw new Error();

  } catch(e){
    return `Unfortunately, ${book.title} is not currently owned by the library.`;
  }
}

//testing
//happy scenario, book is owned by the library
isOwnedByLibrary(artemisFowl);
console.log(isOwnedByLibrary(artemisFowl));

//error scenario, book is not owned by the library
let designOfEveryDayThings = new Book("Design of Everyday Things");
isOwnedByLibrary(designOfEveryDayThings);
console.log(isOwnedByLibrary(designOfEveryDayThings));

//------------------------------------------------------------------------------
function isAvailableForLoan(book){
  try{
    if(book.available === true) return true;
    else throw new Error();
  }catch(e){
    return `Unfortunately, ${book.title} is currently checked out. Please try again later.`;
  }
}

//testing
//happy scenario, book can be checked out
isAvailableForLoan(artemisFowl);
console.log(isAvailableForLoan(artemisFowl));

//error scenario, book is not available for loan
let hitchhikers = new Book("The Hitchhiker's Guide to the Galaxy");
addNewBooksToLibrary(hitchhikers);
hitchhikers.borrow();
isAvailableForLoan(hitchhikers);
console.log(isAvailableForLoan(hitchhikers));

//------------------------------------------------------------------------------
function canBeBorrowedByAccount(account, book){
  try {
    if(!account.borrowedBooks.includes(book)) return true;
    else throw new Error();
  } catch(e){
    return `${book.title} is already loaned to your account.`;
  }
}

//happy scenario, book is not yet loaned to account
canBeBorrowedByAccount(giJoe, harryPotter);
console.log(canBeBorrowedByAccount(giJoe, harryPotter));

//error scenario, book is already loaned to account
lemonySnicket.borrowedBooks = lemonySnicket.borrowedBooks.push(ersatzElevator);
console.log(lemonySnicket.borrowedBooks);
canBeBorrowedByAccount(lemonySnicket, ersatzElevator);
console.log(canBeBorrowedByAccount(lemonySnicket, ersatzElevator));

//------------------------------------------------------------------------------
function borrowBook(account, book){
  //check if account exists
  isRegisteredAccount(account);

  //check if book exists
  isOwnedByLibrary(book);

  //check if the book is available
  isAvailableForLoan(book);

  //check if book is already borrowed by account
  canBeBorrowedByAccount(account, book);

  //happy scenario, book is borrowed
  return account.borrowedBooks.push(book);
}

//happy scenario
//existing account
//existing book
//available book
//book not yet borrowed by account
borrowBook(giJoe, dirtyJob);
console.log(giJoe.borrowedBooks);
