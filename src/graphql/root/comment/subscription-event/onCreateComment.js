export default function onCreateComment (options, args) {
    return {
        // Event publish
        onCreateComment: comment => {
            // Check is chanel postID then publish comment -> client
            return comment.postId === args.postId
        }
    }
}