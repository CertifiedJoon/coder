//document selector 
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[1].innerText = 'Item 2';

let lis = document.querySelector('ul').getElementsByTagName('li');
//convert html object to array
lis = Array.from(lis);
lis.forEach(function(li) {
  li.style.background = '#f3f3f3';
});
console.log(lis);

// querySelector returns type Nodelist
lis = document.querySelectorAll('ul.collection li.collection-item');
lis.forEach(function(li) {
  li.style.background = '#c3c3c3';
});

for(let i = 0; i < lis.length; i++) {
  lis[i].style.background = '#ffffff';
};

lisOdd = document.querySelectorAll('ul.collection li.collection-item:nth-child(even)');
lisOdd.forEach(function(li) {
  li.style.background = '#f3f3f3';
});
console.log(lis);