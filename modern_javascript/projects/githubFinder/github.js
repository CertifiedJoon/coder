class Github {
    static myToken = '';
    constructor() {
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        fetch('token.txt')
        .then(res => res.text())
        .then(token => Github.myToken = token);
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, 
        {
            'headers': {
              'Authorization': `token ${Github.myToken}`
            }
        });
        const profile = await profileResponse.json();

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}`, 
        {
            'headers': {
              'Authorization': `token ${Github.myToken}`
            }
        });
        const repos = await reposResponse.json();

        return {
            profile: profile,
            repos: repos
        }
    }
}