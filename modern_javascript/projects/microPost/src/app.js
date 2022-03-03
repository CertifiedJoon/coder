// const person = require('./mymodule1'); // common js

//ES2015
// import {person, sayHello} from './mymodule2';
// import * as mod from './mymodule2';
// import greeting from './mymodule2'
// // console.log(mod.person.name);
// // console.log(mod.sayHello());
// console.log(greeting);

import {http} from './http';
import {ui} from './ui';

document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-submit').addEventListener('click', postPost);
document.querySelector('#posts').addEventListener('click', deletePost);
document.querySelector('#posts').addEventListener('click', enableEditState);

function enableEditState(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('edit')) {
    const post = {
      id : e.target.parentElement.dataset.id,
      title: e.target.parentElement.previousElementSibling.previousElementSibling.textContent,
      body: e.target.parentElement.previousElementSibling.textContent
    }
    ui.showEditState(post);
  }
}

function deletePost (e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('delete')){
    if (confirm('Are You Sure To Delete?')){
      http.delete(`http://localhost:3000/posts/${e.target.parentElement.dataset.id}`)
      .then(data => {
        ui.showAlert('Post Deleted', 'alert alert-success');
        getPosts();
      })
      .catch(err => console.log(err));
    }
  }
}

function getPosts () {
  http.get('http://localhost:3000/posts')
  .then(res => ui.showPosts(res))
  .catch(err => console.log(err));
};

function postPost () {
  const id = document.querySelector('#id').value;
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  if ( id === '') {
    const post = {
      title,
      body
    };
    http.post('http://localhost:3000/posts', post)
    .then(data => {
      ui.showAlert('Post Added.', 'alert alert-success');
      ui.clearInput();
      getPosts();
    })
    .catch(err => console.log(err));
  } else {
      const post = {
        id,
        title,
        body
      };
      http.put(`http://localhost:3000/posts/${id}`, post)
      .then(data => {
        ui.showAlert('Post Updated.', 'alert alert-success');
        ui.clearEditState();
        getPosts();
      })
      .catch(err => console.log(err));
  }
} 