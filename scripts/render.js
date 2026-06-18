
const Renderer = function () {

    const createDeletePostButton = function(postId) {

    }

    const createCommentElement = function(comment) {
    }

    const createCommentsDiv = function(comments) {
        const commentDiv = document.createElement("div")
        commentDiv.classList.add("comments-container")
        comments.forEach(comment => {
            const commentElement = createCommentElement(comment)
            commentDiv.appendChild(commentElement)
        });
        return commentDiv
    }

    const createCommentInputRow = function() {
        const commentRow = document.createElement("div")
        commentRow.classList.add("comment-row")

        const inputComment = document.createElement("input")
        inputComment.placeholder = "Got something to say?"
        inputComment.classList.add("comment-input")

        const btnComment = document.createElement("button")
        btnComment.textContent = "Comment"
        btnComment.classList.add("comment-button")

        commentRow.append(inputComment, btnComment)
        return commentRow
    }

    const createPostElement = function(post) {
    }

    const renderPosts = function(posts) {
        const postContainer = document.querySelector(".posts-container")
    }

    return {
        renderPosts
    }
}

export default Renderer
