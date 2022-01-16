//Replacing
//Create a new element
const newHeading = document.createElement('h5');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Today\'s Tasks'));

//get element to be replaced
const oldHeading = document.getElementById('task-title');
//get the parent element
const parent = oldHeading.parentNode;
//call replaceChild on parent
parent.replaceChild(newHeading, oldHeading);



//Removing
lis = document.querySelectorAll('li.collection-item');
list = document.querySelector('ul.collection');

//using remove()
lis[0].remove(); // remove from the html but does not remove from lis itself.
//using removechild
list.removeChild(lis[1]);

//remove methods remove the element from html but not on the object iself
console.log(lis);