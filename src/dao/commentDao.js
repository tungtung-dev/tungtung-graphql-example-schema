import {Comment} from 'models';

export async function getCommentsByPost({postId}) {
    return await Comment.find({postId});
}

export async function getComment({_id}) {
    return await Comment.find({_id});
}

export default {
    getCommentsByPost,
    getComment
}