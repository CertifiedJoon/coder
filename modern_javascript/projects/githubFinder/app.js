document.getElementById('searchUser').addEventListener('keyup', searchUser);
const github = new Github;
const ui = new UI;
function searchUser(e) {
    const userText = e.target.value;
    if (userText !== '') {
        github.getUser(userText)
        .then(data => {
            console.log(data);
            if (data.profile.message !== 'Not Found') {
                ui.showProfile(data.profile);
            } else {
                // Show Profile
            }
        })
    } else {
        // Clear profile
    } 
}