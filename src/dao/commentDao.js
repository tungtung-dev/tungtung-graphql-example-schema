import {Comment} from 'models';

export async function getCommentsByPost({postId}){
    let commentLists = await Comment.find({postId});
    return commentLists
}

export async function getComment({_id}){
    let comment = await Comment.find({_id});
    return comment;
}

export default {
    getCommentsByPost,
    getComment
}