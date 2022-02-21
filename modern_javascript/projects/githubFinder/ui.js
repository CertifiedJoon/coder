class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
    
    showAlert(msg, classList) {
        this.profile.innerHTML = `
            <div class="${classList}">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Oh snap!</strong> ${msg}
            </div>
        `
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge bg-success">Followers: ${user.followers}</span>
                        <span class="badge bg-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `
    }

    showRepos(repos) {
        const repolist = document.getElementById('repos');
        const output = document.createElement('ul');
        let list_items = '';
        output.className = 'list-group'
        repos.forEach(function(repo){
            list_items += `<a href=${repo.git_url}><li class="list-group-item d-flex">${repo.name}</li></a>`
        });
        output.innerHTML = list_items;
        repolist.appendChild(output);
    }
}