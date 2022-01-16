const list = document.querySelector('ul.collection');
const listItems = document.querySelectorAll('li.collection-item');

console.log(list);
console.log(listItems);

//nodelist
console.log(list.childNodes); // returns nodelist
console.log(list.childNodes[0].nodeName);
console.log(list.childNodes[3].nodeType);

//getting child elements
console.log(list.children); // returns html collection


//accessing children
console.log(list.firstChild);
console.log(list.firstElementChild);
console.log(list.lastChild);
console.log(list.lastElementChild);

//accessing parent
console.log(listItems[0].parentNode);
console.log(listItems[0].parentElement);

//accessing siblings
console.log(listItems[0].nextElementSibling);
console.log(listItems[2].nestSibling);
console.log(listItems[1].previousElementSibling);
console.log(listItems[2].previousSibling);