const Tweeter = function (){
    let _postIdCounter = 2
    let _commentIdCounter = 6 
    let _posts =[
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
        return _posts
    }

    const addPost = function(text){
        const newPost ={
            text:text,
            id:`p${++_postIdCounter}`,
            comments:[]
        }
        _posts.push(newPost)
    }

    const removePost = function(postID){
        const updatedPosts = _posts.filter(post => {
            return post.id !== postID
        })
        _posts = updatedPosts
    }

    const addComment = function(postID, text){
        const post = _posts.find(p => p.id ===postID)
        if (!post) {
            const error = new Error("no such post with this id") 
            error.code = "NONEXISTING_POST";  
            throw error 
        }
        const newComment = {
            id:`c${++_commentIdCounter}`,
            text:text
        }
        post.comments.push(newComment)
    }

    const removeComment = function(postID, commentID){
        const post = _posts.find(p => p.id === postID)
        if (!post) {
            const error = new Error("no such post with this id") 
            error.code = "NONEXISTING_POST";  
            throw error 
        }
        const comment = post.comments.find(u => u.id === commentID)
        if (!comment) {
            const error = new Error("no such comment with this id")
            error.code = "NONEXISTING_COMMENT"
            throw error
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

export default Tweeter
