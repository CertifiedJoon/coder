const taskInput = document.getElementById('task');
const form = document.querySelector('.form');
const heading = document.querySelector('h5');
let select;

taskInput.value = '';
//keydown
//taskInput.addEventListener('keydown', onKey);

//keyup
//taskInput.addEventListener('keyup', onKey);

//keypress
//taskInput.addEventListener('keypress', onKey);

//focus
//taskInput.addEventListener('focus', onKey);

//blur
//taskInput.addEventListener('blur', onKey);

//copy, paste, cut....

//input = any activity on input space
taskInput.addEventListener('input', onKey);

//change
select.addEventListener('change', onChange);

function onKey(e) {
  heading.innerText = e.target.value;
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
function onChange(e) {
  console.log(e.type);
  heading.style.color = colors[heading.length % 6];
}