class EasyHTTP {

    // async function only works with await keyword.
    async get(url) {
        const promise = await fetch(url);
        const data = await promise.json();
        return data;
    }

    async post(url, data) {
        const promise = await fetch(url, {
                method: 'POST',
                headers: {'Content-type' : 'application.json'},
                body: JSON.stringify(data)
        });
        const posted = await promise.json();
        return posted;
    }

    async post(url, data) {
        const promise = await fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application.json'},
            body: JSON.stringify(data)
        });
        const posted = await promise.json();
        return posted;
    }

    async delete(url) {
        const promise = fetch(url, {
                method: 'DELETE',
                headers: {'Content-type' : 'application.json'}
            });
        const res = await 'Resource Deleted.';
        return res;
    }

    static handleError(res) {
        if(!res.ok) throw new Error(res.status)
        else return res;
    }
}