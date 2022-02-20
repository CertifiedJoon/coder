class Github {
    static myToken = '';
    constructor() {
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
        return {
            profile
        }
    }
}