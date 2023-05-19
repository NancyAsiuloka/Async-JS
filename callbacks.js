const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// output the post.title to the Dom
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

getPosts();

createPost({ title: "Post Three", body: 'This is post three'});