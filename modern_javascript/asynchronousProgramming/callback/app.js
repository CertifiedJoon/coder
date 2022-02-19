let posts = [
    {title:"post one", body:'Hello'},
    {title:"post two", body:'Hello'}
];

// ======================================================== //
// This sequence of code does not run createPost. since getPosts is ran
// one second before createPost

// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'post three', body:'Hello'});
// getPosts();

// =========================================================== //
// This works asynchronously since get posts is called by createposts.
function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'post three', body:'Hello'}, getPosts);