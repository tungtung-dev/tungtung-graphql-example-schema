import {Comment} from 'models';

export async function getCommentsByPost({postId}){
    let commentLists = await Comment.find({postId}).sort({_id: -1});
    return commentLists
}

export async function getComment({_id}) {
    return await Comment.find({_id});
}

export async function createComment({content, postId, userId}) {
    return await (new Comment({
        content,
        userId,
        postId
    })).save()
}

export default {
    getCommentsByPost,
    getComment,
    createComment
}