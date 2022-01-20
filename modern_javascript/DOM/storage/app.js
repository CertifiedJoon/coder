// // store on local storage
// localStorage.setItem('name', 'Joon');
// localStorage.setItem('name', 'Young');

// // store on session storage
// sessionStorage.setItem('age', '30');

// // clear localStorage
// localStorage.clear();
// // get item from storage
// const name = localStorage.getItem('name');
// const age = sessionStorage.getItem('age');

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.querySelector('#task').value;
  let tasks;
  if ((tasks = JSON.parse(localStorage.getItem('tasks'))) === null) {
    tasks = [];
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  e.preventDefault();
});  

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
  console.log(task);
});