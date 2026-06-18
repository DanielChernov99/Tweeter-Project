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

