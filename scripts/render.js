
const Renderer = function () {

    const createDeletePostButton = function(postId) {

    }

    const createCommentElement = function(comment) {
    }

    const createCommentsSection = function(comments) {
    }

    const createCommentInputRow = function() {
        const commentRow = document.createElement("div")
        const inputComment = document.createElement("input")
        const btnComment = document.createElement("button")
        inputComment.placeholder = "Got something to say?"
        inputComment.classList.add("comment-input")

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
