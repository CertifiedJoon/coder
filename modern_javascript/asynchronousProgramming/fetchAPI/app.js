document.getElementById('btn1').addEventListener('click', getText);
document.getElementById('btn2').addEventListener('click', getJSON);
document.getElementById('btn3').addEventListener('click', getExternal);

// Get Plain text
function getText() {
    fetch('text.txt')
    .then(res => res.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => console.log(err));
}

// Get JSON file
function getJSON() {
    fetch('post.JSON')
    .then(res => res.json())
    .then(data => {
        let output = ``;
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getExternal() {
    fetch('https://api.github.com/users')
    .then(handleError)
    .then(res => res.json())
    .then(data => {
        let output = ``;
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(data => console.log(err));
}

function handleError(res) {
    if (!res.ok) throw new Error(res.error);
    return res;
}