const http = new EasyHTTP();


// GET
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

// POST
const user = {
    name: 'John Doe',
    username: 'Johnny',
    email: 'JohnnyDoey@gmail.com',
}
http.post('https://jsonplaceholder.typicode.com/users', user)
.then(data => console.log(data))
.catch(err => console.log(err));

// PUT
http.put('https://jsonplaceholder.typicode.com/users/2', user)
.then(data => console.log(data))
.catch(err => console.log(err));

// DELETE
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));