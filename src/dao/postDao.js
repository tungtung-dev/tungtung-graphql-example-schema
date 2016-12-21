import {Post} from 'models';
import Pagination from 'pagination-js';

export async function getTotalPosts(query = {}){
    return await Post.count(query);
}

export async function getPosts(query = {}, {page, itemPerPage}){
    let totalItem = getTotalPosts(query);
    let pagination = (new Pagination({page, itemPerPage}, totalItem)).getPagination();
    const data = await Post.find(query).skip(pagination.minIndex).limit(pagination.itemPerPage);
    return {
        data,
        pagination
    }
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
    getTotalPosts,
    getPosts,
    getPostsByUser,
    getPost,
    createPost
}