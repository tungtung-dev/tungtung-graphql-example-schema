import {Post} from 'models';

export async function getPosts(){
    let postLists = await Post.find({});
    return postLists;
}

export async function getPostsByUser({userId}){
    let postLists = await Post.find({userId: userId});
    return postLists;
}

export async function getPost({_id}) {
    let post = await Post.findOne({_id});
    return post;
}

export async function createPost({title, description, content, userId}){
    var post = new Post({
        title, description, content, userId
    })
    post = await post.save();
    return post;
}

export default {
    getPosts,
    getPostsByUser,
    getPost,
    createPost
}