let myLibrary = [] //The array that holds all the books

class Book {        //Constructor that makes all the book objects
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

function addBookToLibrary(title, author, pageCount) { //Makes the book objects and adds them to myLibrary
    const newBook = new Book(title, author, pageCount);
    myLibrary.push(newBook);
}


addBookToLibrary("Hobbit", "JRR Tolkien", 100) 













function addToPage() {      //Where all the magic happens
    function remove(sel) {
      return Array.from(document.querySelectorAll(sel)).forEach(el => el.remove());
    }
  
    addBookToLibrary(
      document.querySelector("#bookTitle").value,
      document.querySelector("#bookAuthor").value,
      document.querySelector("#bookPages").value
    ); //fills in constructor using the 
    //values from html input fields
    //and adds it to myLibrary
    //Adds the html elements to the page
    var bookAdded = myLibrary.slice(-1)[0]; //Use this to get book properties
  
    let bookDiv = document.createElement("div");
    bookDiv.setAttribute("id", bookAdded.title.replace(/\s/g, ""));
    bookDiv.classList.add("Book");
    document.querySelector("#Library").append(bookDiv);

  
    let bookTitle = document.createElement("p");
    bookTitle.innerText = bookAdded.title;
    bookTitle.classList.add(bookAdded.title.replace(/\s/g, ''));
    bookDiv.appendChild(bookTitle);
  
    let bookAuthor = document.createElement("p");
    bookAuthor.innerText = bookAdded.author;
    bookAuthor.classList.add(bookAdded.title.replace(/\s/g, ''));
    bookDiv.appendChild(bookAuthor);
  
    let bookPages = document.createElement("p");
    bookPages.innerText = bookAdded.pages;
    bookPages.classList.add(bookAdded.title.replace(/\s/g, ''));
    bookDiv.appendChild(bookPages);
  
    let bookRead = document.createElement("input");
    bookRead.type = "checkbox";
    bookRead.classList.add(bookAdded.title.replace(/\s/g, ''));
    bookDiv.appendChild(bookRead);
  
    let deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", function() {
    remove("#" + bookAdded.title.replace(/\s/g, ''));
    });
    deleteButton.innerText = "DELETE";
    bookDiv.appendChild(deleteButton);

}  