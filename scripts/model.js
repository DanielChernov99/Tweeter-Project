const Tweeter = function (){
    let postIdCounter = 2
    let commentIdCounter = 6 
    let posts =[
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const getPosts = function(){
        return posts
    }

    const addPost = function(text){
        const newPost ={
            text:text,
            id:`p${++postIdCounter}`,
            comments:[]
        }
        posts.push(newPost)
    }

    const removePost = function(postID){
        const updatedPosts = posts.filter(post => {
            return post.id !== postID
        })
        posts = updatedPosts
    }

    const addComment = function(postID, text){
        const post = posts.find(p => p.id ===postID)
        const newComment = {
            id:`c${++commentIdCounter}`,
            text:text
        }
        post.comments.push(newComment)
    }

    const removeComment = function(postID, commentID){
        const post = posts.find(p => p.id === postID)
        if (!post) {
            throw new Error("No such post");    
        }
        post.comments = post.comments.filter(comment => {
            return comment.id !== commentID
        })
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
    
}


// testing
const tweeter = Tweeter()



tweeter.addPost("This is my own post!");
tweeter.removePost("p1");
// Test adding comments
tweeter.addComment("p3", "Damn straight it is!");
tweeter.addComment("p2", "Second the best!");
console.log(tweeter.getPosts());
console.log("################################################################")




export default Tweeter
