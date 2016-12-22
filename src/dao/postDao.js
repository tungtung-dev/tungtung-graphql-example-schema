import {Post} from "models";
import Pagination from "pagination-js";

export async function getTotalPosts(query = {}) {
    return await Post.count(query);
}

export async function getPosts(query = {}, {page, itemPerPage}) {
    let totalItem = await getTotalPosts(query);
    console.log(`page ${page} itemPerPage ${itemPerPage} totalItem ${totalItem}`);
    let pagination = (new Pagination({page, itemPerPage}, totalItem)).getPagination();
    const data = await Post.find(query)
        .sort({_id: -1})
        .skip(pagination.minIndex)
        .limit(pagination.itemPerPage)
        .populate({path: "userId"});
    return {
        data,
        pagination
    }
}

export async function getPostsByUser({userId}) {
    let postLists = await Post.find({userId: userId});
    return postLists;
}

export async function getPost({_id}) {
    let post = await Post.findOne({_id}).populate({path: "userId"});
    return post;
}

export async function createPost({title, description, content, userId}) {
    var post = new Post({
        title, description, content, userId
    });
    return await post.save();
}

export async function updatePost({_id, title, description, content}){
    return await Post.findOneAndUpdate({_id}, {$set: {
        title,
        description,
        content
    }});
}

export default {
    getTotalPosts,
    getPosts,
    getPostsByUser,
    getPost,
    createPost,
    updatePost
}