
const Renderer = function () {

    const createDeletePostButton = function(postId) {
        const deleteButton = document.createElement("button")

        deleteButton.textContent = "Delete Post"
        deleteButton.classList.add("delete-post-button")
        deleteButton.dataset.id = postId

        return deleteButton
    }

    const createCommentElement = function(comment) {
        const commentContainer = document.createElement("div")
        commentContainer.classList.add("comment-container")
        commentContainer.dataset.id = comment.id

        const deleteCommentButton = document.createElement("button")
        deleteCommentButton.textContent = "X"
        deleteCommentButton.classList.add("delete-comment-button")
        deleteCommentButton.dataset.id = comment.id

        const commentText = document.createElement("span")
        commentText.textContent = comment.text
        commentText.classList.add("comment-text")

        commentContainer.append(deleteCommentButton, commentText)

        return commentContainer
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
        commentRow.classList.add("comment-input-row")

        const inputComment = document.createElement("input")
        inputComment.placeholder = "Got something to say?"
        inputComment.classList.add("comment-input")
        inputComment.name = "comment"

        const btnComment = document.createElement("button")
        btnComment.textContent = "Comment"
        btnComment.classList.add("add-comment-button")

        commentRow.append(inputComment, btnComment)
        return commentRow
    }

    const createPostElement = function(post) {
        const postElement = document.createElement("div")
        postElement.classList.add("post")
        postElement.dataset.id = post.id

        const postText = document.createElement("div")
        postText.classList.add("post-text")
        postText.textContent = post.text

        const commentsDiv = createCommentsDiv(post.comments)
        const commentInputRow = createCommentInputRow()
        const deletePostButton = createDeletePostButton(post.id)

        postElement.append(
            postText,
            commentsDiv,
            commentInputRow,
            deletePostButton
        )

        return postElement
    }

    const renderPosts = function(posts) {
        const postContainer = document.querySelector(".posts-container")
        postContainer.innerHTML = ""

        posts.forEach(post => {
            const postElement = createPostElement(post)
            postContainer.appendChild(postElement)
        })
    }

    return {
        renderPosts
    }
}

export default Renderer
