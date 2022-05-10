let myLibrary = [];

const container = document.getElementById('books');


function Book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function displayBook() {
    //let form = document.getElementsByClassName('form');

    let newBook = document.createElement('div');
    newBook.classList.add('newBook');

    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = myLibrary[myLibrary.length - 1].title;

    let author = document.createElement('div');
    author.classList.add('author');
    author.textContent = myLibrary[myLibrary.length - 1].author;

    let top = document.createElement('div');
    top.appendChild(title);
    top.appendChild(author);

    let pages = document.createElement('div');
    pages.classList.add('pages');
    pages.textContent = "Page Count: " + myLibrary[myLibrary.length - 1].pages;

    let read = document.createElement('div');
    read.classList.add('read');
    read.textContent = "Read Status: " + myLibrary[myLibrary.length - 1].read;

    let bottom = document.createElement('div');
    bottom.appendChild(pages);
    bottom.appendChild(read);

    let data = document.createElement('data');
    data.classList.add('databook')
    data.appendChild(top);
    data.appendChild(bottom);
    newBook.appendChild(data);

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
  
    let editButton = document.createElement('button');
    editButton.onclick = edit;
    editButton.classList.add('edit');
    editButton.textContent = 'Edit';
    buttons.appendChild(editButton);
  
    let deleteButton = document.createElement('button');
    deleteButton.onclick = removeBookFromLibrary;
    deleteButton.classList.add('remove');
    deleteButton.textContent = 'Remove';
    buttons.appendChild(deleteButton);
  
    newBook.appendChild(buttons);

    container.appendChild(newBook);
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    myLibrary.push(new Book(title, author, pages, read));
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('read').value = "";
    closeForm();
    displayBook();
    updateStats();
}

function updateStats() {
    document.getElementById('booksavailable').textContent = myLibrary.length;
    //booksread = document.getElementsByClassName('read')
    let readbooksvalue = 0;
    let unreadbooksvalue = 0;
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].read == "Read") {
            readbooksvalue++;
        } else if (myLibrary[i].read == "Not Read") {
            unreadbooksvalue++;
        }
    }
    document.getElementById('readid').textContent = readbooksvalue;
    document.getElementById('unreadid').textContent = unreadbooksvalue;
}

function removeBookFromLibrary() {

}

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function edit() {
    // add current library reference
    openEditForm();
    document.getElementById('edittitle').value = myLibrary[0].title;
    document.getElementById('editauthor').value = myLibrary[0].author;
    document.getElementById('editpages').value = myLibrary[0].pages;
    document.getElementById('editread').value = myLibrary[0].read;
    console.log(document.getElementsByClassName('newBook'))
}

function addBookAfterEdit() {
    myLibrary[0].title = document.getElementById('edittitle').value;
    myLibrary[0].author = document.getElementById('editauthor').value;
    myLibrary[0].pages = document.getElementById('editpages').value;
    myLibrary[0].read = document.getElementById('editread').value;
    closeEditForm();
}

function openEditForm() {
    document.getElementById("editPopupForm").style.display = "block";
}

function closeEditForm() {
    document.getElementById("editPopupForm").style.display = "none";
}