class EasyHTTP {
    get(url) {
        return new Promise(function(resolve, reject) {
            fetch(url)
            .then(EasyHTTP.handleError)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    post(url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: {'Content-type' : 'application.json'},
                body: JSON.stringify(data)
            })
            .then(EasyHTTP.handleError)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    put(url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'PUT',
                headers: {'Content-type' : 'application.json'},
                body: JSON.stringify(data)
            })
            .then(EasyHTTP.handleError)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    delete(url) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'DELETE',
                headers: {'Content-type' : 'application.json'}
            })
            .then(EasyHTTP.handleError)
            .then(res => res.json())
            .then(data => resolve('User Deleted'))
            .catch(err => reject(err));
        });
    }

    static handleError(res) {
        if(!res.ok) throw new Error(res.status)
        else return res;
    }
}