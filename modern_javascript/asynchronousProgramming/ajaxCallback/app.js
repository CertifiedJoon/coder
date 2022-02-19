const http = new easyHttp();
const post = {
    "userId": 2,
    "id": 18,
    "title": "voluptate et itaque vero tempora molestiae",
    "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
  };

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', getResponse);

// Post a new post
http.post('https://jsonplaceholder.typicode.com/posts', post, getResponse);

// Update post with id=3
http.put('https://jsonplaceholder.typicode.com/posts/3', post, getResponse);

// Delete post with id=1
http.delete('https://jsonplaceholder.typicode.com/posts/1', getResponse);

function getResponse(err, response) {
    if(err === null){
        console.log(response);
    } else {
        console.log(err);
    }
}



