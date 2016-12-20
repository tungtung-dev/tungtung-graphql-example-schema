import * as graphql from 'graphql';
import {Post} from 'models';
import postType from '../type';

async function addPost({title, description, content, userId}){
    var post = new Post({
        title, description, content, userId
    })
    post = await post.save();
    return post;
}

export default {
    type: postType,
    args: {
        title:{
            type: graphql.GraphQLString
        },
        description:{
            type: graphql.GraphQLString
        },
        content:{
            type: graphql.GraphQLString
        },
        userId:{
            type: graphql.GraphQLString
        }
    },
    resolve: async (root, params) => {
        const post = await addPost(params);
        return post;
    }
}