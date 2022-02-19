function easyHttp() {
    this.http = new XMLHttpRequest();
}

// GET request
easyHttp.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    this.http.onload = function() {
        if(this.status === 200){
            callback(null, this.responseText);        
        } else {
            callback('Error: ' + this.status);
        }
    }
    this.http.send();
}

// POST request
easyHttp.prototype.post = function(url, post, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = function() {
        callback(this.responseText);
    }

    this.http.send(JSON.stringify(post));
}

// PUT request
easyHttp.prototype.put = function(url, post, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = function() {
        callback(this.responseText);
    }

    this.http.send(JSON.stringify(post));
}

// Delete request
easyHttp.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    this.http.onload = function() {
        if(this.status === 200){
            callback(null, 'Post Deleted.');        
        } else {
            callback('Error: ' + this.status);
        }
    }
    this.http.send();
}