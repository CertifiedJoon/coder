document.querySelector('a.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  let val;
  console.log(e);
  console.log(e.target);
  console.log(e.target.className);
  e.target.classList.remove('black');
}