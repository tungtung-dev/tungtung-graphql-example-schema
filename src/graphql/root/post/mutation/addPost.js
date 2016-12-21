import * as graphql from 'graphql';
import {postDao} from 'dao';
import {PostType} from 'graphql/constants/types';

export default {
    type: PostType,
    args: {
        title: {
            type: graphql.GraphQLString
        },
        description: {
            type: graphql.GraphQLString
        },
        content: {
            type: graphql.GraphQLString
        },
        userId: {
            type: graphql.GraphQLString
        }
    },
    resolve: (root, params) => {
        return postDao.createPost(params)
    }
}