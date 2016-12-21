import {Post} from 'models';

export async function getPosts() {
    return await Post.find({});
}

export async function getPost({_id}) {
    return await Post.findOne({_id});
}

export async function createPost({title, description, content, userId}) {
    var post = new Post({
        title, description, content, userId
    });
    return await post.save();
}

export default {
    getPosts,
    getPost,
    createPost
}