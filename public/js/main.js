
const trash = document.querySelector('#trash')
trash.addEventListener('click', deletePost);

function deletePost () {
    fetch ('/deletePost', {
        method: DELETE,
        header: "Content-Type: application/json",
        body: JSON.stringify({
            id: "" 
        })
    })
}