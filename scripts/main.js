import Tweeter from "./model.js"
import Renderer from "./render.js"

const tweeter = Tweeter()
const renderer = Renderer()

const inputTwit = document.querySelector("#inputTweet")
const btnTwit = document.querySelector("#btnTwit")
const postContainer = document.querySelector(".posts-container")

const render = function () {
    renderer.renderPosts(tweeter.getPosts())
}
render()

btnTwit.addEventListener("click",() =>{
    const inputValue = inputTwit.value.trim()
    if(inputValue === "") return
    tweeter.addPost(inputValue)
    inputTwit.value = ""
    render()
})


postContainer.addEventListener("click", function(e){
    if(e.target.matches(".delete-post-button")){
        const postElement = e.target.closest(".post")
        const postID = postElement.dataset.id
        tweeter.removePost(postID)
        render()
    }
})

postContainer.addEventListener("click",function(e){
    if(e.target.matches(".add-comment-button")){
        const postElement = e.target.closest(".post")
        const postID = postElement.dataset.id

        const commentInput = postElement.querySelector(".comment-input")
        const inputValue = commentInput.value.trim()

        if(inputValue === "") return

        tweeter.addComment(postID,inputValue)
        render()
    }
})

postContainer.addEventListener("click",function(e){
    if(e.target.matches(".delete-comment-button")){
        const commentElemnt = e.target.closest(".comment-container")
        const commentID = commentElemnt.dataset.id

        const postElement = e.target.closest(".post")
        const postID = postElement.dataset.id

        tweeter.removeComment(postID,commentID)
        render()
    }
})

