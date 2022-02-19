document.getElementById('btn').addEventListener('click', loadJokes);

function loadJokes(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.icndb.com/jokes/random', true);
    xhr.onload = function() {
        if (this.status === 200){
            const response = JSON.parse(this.responseText);
            let output;
            if (response.type === 'success') {
                output = `<p>${response.value.joke}</p>`;
            } else {
                output = '<p>Something went wrong.';
            }
            document.getElementById('jokes').innerHTML = output;
        } 
    };
    xhr.send();
    e.preventDefault();
}