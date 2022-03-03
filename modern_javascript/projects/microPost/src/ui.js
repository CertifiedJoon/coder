class UI {
    constructor() {
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.submitBtn = document.querySelector('.post-submit');
        this.posts = document.querySelector('#posts');
    }

    clearInput() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    clearAlert() {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }

    showAlert(msg, classList) {
        const alert = document.createElement('div');
        alert.className = classList;
        alert.appendChild(document.createTextNode(msg));
        const postContainer = document.querySelector('.postContainer');
        const posts = document.querySelector('#posts');
        postContainer.insertBefore(alert, posts);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    showPosts(posts) {
        let output = '';
        posts.forEach((post) => {
            output += `
            <div class="card mb-3">
            <div class="card-body">
              <h4 class="card-title">${post.title}</h4>
              <p class="card-text">${post.body}</p>
              <a class="edit card-link" href="#" data-id="${post.id}">
                <i class="fa fa-pencil"></i>
              </a>
              <a class="delete card-link" href="#" data-id="${post.id}">
                <i class="fa fa-remove"></i>
              </a>
            </div>
          </div>`
        });
        this.posts.innerHTML = output;
    }
    showEditState(post) {
        this.titleInput.value = post.title;
        this.bodyInput.value = post.body;
        this.submitBtn.textContent = 'Update';
        this.submitBtn.className = 'post-update btn btn-secondary btn-block';
        this.idInput.value = post.id;
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.className = 'post-cancel btn btn-light btn-block'
        const formEnd = document.querySelector('.form-end');
        const card = document.querySelector('.card');
        card.insertBefore(cancelBtn, formEnd);
    }
    clearEditState() {
        this.clearInput();
        this.idInput.value = '';
        this.submitBtn.textContent = 'Post';
        this.submitBtn.className = 'post-submit btn btn-primary btn-block';
    }
}

export const ui = new UI;