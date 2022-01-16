li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title', 'New Title');
li.appendChild(document.createTextNode('New Item'));

link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);

li2 = document.createElement('li');
li2.className = 'collection-item';
li2.id = 'new-item';
li2.appendChild(document.createTextNode('New Item 2'));

link2 = document.createElement('a');
link2.className = 'delete-item secondary-content';
link2.innerHTML = '<i class="fa fa-remove"></i>';
li2.appendChild(link2);

document.querySelector('ul.collection').appendChild(li);
document.querySelector('ul.collection').appendChild(li2);