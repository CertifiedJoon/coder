document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR object
    const xhr = new XMLHttpRequest();
    console.log('READYSTATE', xhr.readyState);
    // Open (the third argument represents asynchornosity)
    xhr.open('GET', 'data.txt', true);
    console.log('READYSTATE', xhr.readyState);
    // Used for spinners/loaders
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState);
    }
    
    // When request is ready
    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState);
        if (xhr.status === 200){
            console.log(xhr.responseText);
            // XHR statuses
            // 200 : success
            // 403 : forbidden
            // 404 : not found
        }
    };

    // On exception
    xhr.onerror = function() {
        console.log('Error')
    }
    xhr.send();

    // xhr readystate
    // 0 : request not initiailized
    // 1 : server connection established
    // 2 : request recieved
    // 3 : processing request
    // 4 : request finished and response is ready
}

