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
        const currentLength = posts.length
        const newPost ={
            text:text,
            id:`p${postIdCounter++}`,
            comments:[]
        }
    }

    const removePost = function(postID){
        const updatedPosts = posts.filter(post => {
            return post.id !== postID
        })
        posts = updatedPosts
        postIdCounter--
    }

    const addComment = function(postID, text){

    }

    const removeComment = function(postID, commentID){

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
