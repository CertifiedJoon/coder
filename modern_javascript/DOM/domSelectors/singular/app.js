//get element by id
console.log(document.getElementById('task-title'));

//grab attributes
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//change styling
document.getElementById('task-title').style.background = 'red';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '5px';

const taskTitle = document.getElementById('task-title');

//change content
taskTitle.textContent = 'Task Lists';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span><strong>My</strong> Tasks</span>';

//Document Selector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.collection-item'));

document.querySelector('.collection-item:nth-child(2)').innerText = 'List Item 2';
document.querySelector('.collection-item:nth-child(1)').textContent = 'List Item 1';
document.querySelector('.collection-item:nth-child(3)').style.background = 'orange';
document.querySelector('.collection-item:nth-child(4)').style.display = 'None';
document.querySelector('.collection-item:nth-child(5)').style.color = 'orange';