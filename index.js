document.addEventListener("DOMContentLoaded", function () {
   
    fetch('http://localhost:3000/comments')
        .then(response=>response.json())
        .then(comments=> {
            fetch('http://localhost:3000/users')
            .then(response=>response.json())
            .then(users=> {
                    renderComments(comments,users)
            })
        })
})