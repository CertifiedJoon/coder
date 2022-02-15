// define ui variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
    // Add task
    document.addEventListener('DOMContentLoaded', getTask);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', deleteTask);
    clearBtn.addEventListener('click', clearTask);
    filter.addEventListener('keyup', filterTask)
}

function getTask(e) {
    JSON.parse(localStorage.getItem('tasks')).forEach(function(task) {
        const li = document.createElement('li');
        li.classList = 'collection-item';
        li.value = task.value;
        li.appendChild(document.createTextNode(task));
        // create a button to remove list item
        const link = document.createElement('a');
        link.classList = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append button to list item
        li.appendChild(link);
        // append list item to the list
        taskList.appendChild(li);
    })
    e.preventDefault();
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Please Input a valid task');
    }
    //create a new list item
    const li = document.createElement('li');
    li.classList = 'collection-item';
    li.value = taskInput.value;
    li.appendChild(document.createTextNode(taskInput.value));
    // create a button to remove list item
    const link = document.createElement('a');
    link.classList = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append button to list item
    li.appendChild(link); 
    // store on local storage
    storeTaskLS(li);
    // append list item to the list
    taskList.appendChild(li);
    e.preventDefault();
}

function storeTaskLS(li) {
    let tasks;
    if ((tasks = JSON.parse(localStorage.getItem('tasks'))) === null) {
        tasks = [];
    } 
    tasks.push(li.firstChild.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        taskList.removeChild(e.target.parentElement.parentElement);
        removeTaskLS(e.target.parentElement.parentElement);
    }
    e.preventDefault();
}

function removeTaskLS(taskItem) {
    console.log(taskItem.textContent);
    let tasks;
    if ((tasks = JSON.parse(localStorage.getItem('tasks'))) === null) {
        tasks = []
    } 
    console.log(tasks)
    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTask(e) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
    e.preventDefault();
}

function filterTask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('li.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent.toLowerCase();
        if (item.indexOf(text) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}
