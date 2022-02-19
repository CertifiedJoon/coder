// Book class;
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI class;
function UI () {};

UI.prototype.addBookToList = function (book){
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a class="remove-book">X</a><td>`;
    list.appendChild(row);
}

UI.prototype.clearInput = function() {
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function(msg, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

// Add event listener;
document.getElementById('book-form').addEventListener('submit', addBook);

function addBook(e) {
    const author = document.getElementById('author').value,
          title = document.getElementById('title').value,
          isbn = document.getElementById('isbn').value;
    const ui = new UI();
    if (title === '' | author === '' | isbn === '') {
        ui.showAlert('Please fill in all the fields.', 'error');
    } else {
        const book = new Book(title, author, isbn);
        ui.addBookToList(book);
        ui.clearInput();
        ui.showAlert('Book Added.', 'success');
    }
    e.preventDefault();
}

document.getElementById('book-list').addEventListener('click', removeBook);

function removeBook(e) {
    const bookList = document.getElementById('book-list');
    console.log(e.target.parentElement.parentElement);
    if (e.target.classList.contains('remove-book')) {
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}