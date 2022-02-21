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
                ui.showRepos(data.repos);
            } else {
                ui.showAlert('User Not Found.', 'alert alert-dismissable alert-primary');
            }
        })
    } else {
        ui.clearProfile();
    } 
}