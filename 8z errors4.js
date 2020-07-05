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
function isRegisteredAccount(account){
  try {
    if (libraryAccounts.includes(account)) return true;
    else throw new Error();
  } catch(e){
    throw new Error(`${account.name} is not registered in this library. Please talk to the librarian to open a new library account.`);
  }
}

//------------------------------------------------------------------------------
function isOwnedByLibrary(book){
  try {
    if(books.includes(book)) return true;
    else throw new Error();

  } catch(e){
    throw new Error(`Unfortunately, ${book.title} is not currently owned by the library.`);
  }
}

//------------------------------------------------------------------------------
function isAvailableForLoan(book){
  try{
    if(book.available === true) return true;
    else throw new Error();
  }catch(e){
    throw new Error(`Unfortunately, ${book.title} is currently checked out. Please try again later.`);
  }
}

//------------------------------------------------------------------------------
//this isn't working, duplicates are still being allowed
function canBeBorrowedByAccount(account, book){
  try {
    if(!account.borrowedBooks.includes(book)) return true;
    else throw new Error();
  } catch(e){
    throw new Error(`${book.title} is already loaned to your account.`);
  }
}
//------------------------------------------------------------------------------
function borrowBook(account, book){
  try{
    isRegisteredAccount(account);
    isOwnedByLibrary(book);
    isAvailableForLoan(book);
    canBeBorrowedByAccount(account, book);

    // account.borrowedBooks.push(book);
    // book.borrow();
    console.log("Book borrowed");
  } catch(e){
    return `${e}`;
  }
}

//happy scenario
borrowBook(giJoe, dirtyJob);

//error scenario - unregistered account
let lizLemon = createNewAccount("Liz Lemon", 203003);
borrowBook(lizLemon, dirtyJob);

//error scenario - book not owned by library
let designOfEveryDayThings = new Book("Design of Everyday Things");
borrowBook(giJoe, designOfEveryDayThings);

//error scenario - book not available
let hitchhikers = new Book("The Hitchhiker's Guide to the Galaxy");
addNewBooksToLibrary(hitchhikers);
hitchhikers.borrow();
borrowBook(giJoe, hitchhikers);

//error scenario - book already borrowed by account
giJoe.borrowedBooks = giJoe.borrowedBooks.push(dirtyJob);
borrowBook(giJoe, dirtyJob);
